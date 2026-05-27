"""
Portfolio Data Indexing Script
Reads portfolio_data.json, chunks it semantically, generates embeddings, and stores in ChromaDB.
Run this script to build/rebuild the vector index for the RAG chatbot.
"""

import json
import time
import os
import chromadb
from chromadb.utils import embedding_functions


def load_portfolio_data(path: str) -> dict:
    """Load portfolio data from JSON file."""
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def build_all_chunks(data: dict) -> list[tuple[str, dict]]:
    """Convert portfolio JSON into semantic text chunks with metadata."""
    chunks = []

    # --- Personal Info → 1 chunk ---
    personal = data.get("personal", {})
    personal_lines = []
    if personal.get("name"):
        personal_lines.append(f"Name: {personal['name']}")
    if personal.get("tagline"):
        personal_lines.append(f"Tagline: {personal['tagline']}")
    if personal.get("credentials"):
        personal_lines.append(f"Credentials: {personal['credentials']}")
    if personal.get("about"):
        personal_lines.append(f"About: {personal['about']}")
    if personal.get("location"):
        personal_lines.append(f"Location: {personal['location']}")
    if personal.get("contact_note"):
        personal_lines.append(f"Contact Note: {personal['contact_note']}")
    if personal_lines:
        chunks.append((
            "\n".join(personal_lines),
            {"section": "personal", "subsection": "info", "name": personal.get("name", "Lakshya Chalana")}
        ))

    # --- Contact Info → 1 chunk ---
    contact_lines = []
    if personal.get("email"):
        contact_lines.append(f"Email: {personal['email']}")
    if personal.get("phone"):
        contact_lines.append(f"Phone: {personal['phone']}")
    if personal.get("location"):
        contact_lines.append(f"Location: {personal['location']}")
    if personal.get("github"):
        contact_lines.append(f"GitHub: {personal['github']}")
    if personal.get("linkedin"):
        contact_lines.append(f"LinkedIn: {personal['linkedin']}")
    if personal.get("twitter"):
        contact_lines.append(f"Twitter/X: {personal['twitter']}")
    if personal.get("resume"):
        contact_lines.append(f"Resume: {personal['resume']}")
    if contact_lines:
        chunks.append((
            "Contact Information:\n" + "\n".join(contact_lines),
            {"section": "contact", "subsection": "info", "name": "Contact Info"}
        ))

    # --- Education → 1 chunk per entry ---
    for entry in data.get("education", []):
        lines = []
        if entry.get("degree"):
            lines.append(f"Degree: {entry['degree']}")
        if entry.get("institution"):
            lines.append(f"Institution: {entry['institution']}")
        if entry.get("year"):
            lines.append(f"Year: {entry['year']}")
        if lines:
            chunks.append((
                "Education:\n" + "\n".join(lines),
                {"section": "education", "subsection": entry.get("degree", "unknown"), "name": entry.get("institution", "unknown")}
            ))

    # --- Projects → 1 chunk per project (major + minor) ---
    projects = data.get("projects", {})
    for category in ["major", "minor"]:
        for proj in projects.get(category, []):
            lines = []
            if proj.get("name"):
                lines.append(f"Project: {proj['name']} ({category.title()} Project)")
            if proj.get("description"):
                lines.append(f"Description: {proj['description']}")
            if proj.get("tech"):
                lines.append(f"Technologies: {', '.join(proj['tech'])}")
            if proj.get("features"):
                lines.append(f"Key Features: {', '.join(proj['features'])}")
            if proj.get("github"):
                lines.append(f"GitHub: {proj['github']}")
            if lines:
                chunks.append((
                    "\n".join(lines),
                    {"section": "projects", "subsection": category, "name": proj.get("name", "unknown")}
                ))

    # --- Skills → 1 chunk per category ---
    skills = data.get("skills", {})
    for category_key, skill_list in skills.items():
        if isinstance(skill_list, list) and skill_list:
            category_label = category_key.replace("_", " ").title()
            text = f"Skill Category: {category_label}\nSkills: {', '.join(skill_list)}"
            chunks.append((
                text,
                {"section": "skills", "subsection": category_key, "name": category_label}
            ))

    # --- Certifications → 1 chunk per cert ---
    for cert in data.get("certifications", []):
        lines = []
        if cert.get("name"):
            lines.append(f"Certification: {cert['name']}")
        if cert.get("provider"):
            lines.append(f"Provider: {cert['provider']}")
        if cert.get("description"):
            lines.append(f"Description: {cert['description']}")
        if cert.get("link"):
            lines.append(f"Certificate Link: {cert['link']}")
        if lines:
            chunks.append((
                "\n".join(lines),
                {"section": "certifications", "subsection": cert.get("provider", "unknown"), "name": cert.get("name", "unknown")}
            ))

    # --- Experience → 1 chunk per entry ---
    for exp in data.get("experience", []):
        lines = []
        if exp.get("role"):
            lines.append(f"Role: {exp['role']}")
        if exp.get("company"):
            lines.append(f"Company: {exp['company']}")
        if exp.get("domain"):
            lines.append(f"Domain: {exp['domain']}")
        if exp.get("duration"):
            lines.append(f"Duration: {exp['duration']}")
        if exp.get("location"):
            lines.append(f"Location: {exp['location']}")
        if exp.get("certificate_id"):
            lines.append(f"Certificate ID: {exp['certificate_id']}")
        if exp.get("description"):
            lines.append(f"Description: {exp['description']}")
        if exp.get("highlights"):
            lines.append("Highlights:")
            for h in exp["highlights"]:
                lines.append(f"  - {h}")
        if lines:
            chunks.append((
                "Experience/Internship:\n" + "\n".join(lines),
                {"section": "experience", "subsection": exp.get("domain", "general"), "name": exp.get("company", "unknown")}
            ))

    # --- LinuxWorld Tasks → 1 chunk per category ---
    lw_tasks = data.get("linuxworld_tasks", {})
    for category_key, tasks in lw_tasks.items():
        if isinstance(tasks, list) and tasks:
            category_label = category_key.replace("_", " ").title()
            lines = [f"LinuxWorld Task Category: {category_label}"]
            for task in tasks:
                if isinstance(task, str):
                    lines.append(f"  - {task}")
                elif isinstance(task, dict):
                    lines.append(f"  - {task.get('title', str(task))}")
            chunks.append((
                "\n".join(lines),
                {"section": "linuxworld_tasks", "subsection": category_key, "name": category_label}
            ))

    # --- LinkedIn Featured → 1 chunk per entry ---
    for item in data.get("linkedin_featured", []):
        lines = []
        if item.get("title"):
            lines.append(f"LinkedIn Featured: {item['title']}")
        if item.get("description"):
            lines.append(f"Description: {item['description']}")
        if lines:
            chunks.append((
                "\n".join(lines),
                {"section": "linkedin_featured", "subsection": "featured", "name": item.get("title", "unknown")}
            ))

    # --- Key Highlights → 1 chunk ---
    key_highlights = data.get("key_highlights", {})
    if key_highlights:
        hl_lines = ["Key Highlights:"]
        for hl_key, hl_data in key_highlights.items():
            if isinstance(hl_data, dict):
                if hl_data.get("title"):
                    hl_lines.append(f"  {hl_data['title']}")
                for detail in hl_data.get("details", []):
                    hl_lines.append(f"    - {detail}")
                if hl_data.get("journey"):
                    hl_lines.append("  Journey:")
                    for point in hl_data["journey"]:
                        hl_lines.append(f"    - {point}")
        chunks.append((
            "\n".join(hl_lines),
            {"section": "key_highlights", "subsection": "iit_hyderabad_sure", "name": "Key Highlights"}
        ))

    # --- Navigation → 1 chunk ---
    nav_sections = data.get("navigation_sections", [])
    if nav_sections:
        chunks.append((
            f"Portfolio Navigation Sections: {', '.join(nav_sections)}",
            {"section": "navigation", "subsection": "sections", "name": "Navigation"}
        ))

    return chunks


def main():
    start_time = time.time()

    # Resolve paths relative to this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(script_dir, "portfolio_data.json")
    chroma_path = os.path.join(script_dir, "chroma_db")

    print(f"[INFO] Loading portfolio data from: {data_path}")
    data = load_portfolio_data(data_path)

    # Build chunks
    chunks = build_all_chunks(data)
    print(f"[INFO] Generated {len(chunks)} chunks from portfolio data.")

    # Preview chunks
    print("\n--- Chunk Preview ---")
    for i, (text, meta) in enumerate(chunks[:3]):
        print(f"  Chunk {i}: [{meta['section']}/{meta['subsection']}] {text[:80]}...")
    print(f"  ... and {len(chunks) - 3} more chunks")

    # Initialize ChromaDB with persistent storage
    print(f"\n[INFO] Initializing ChromaDB at: {chroma_path}")
    client = chromadb.PersistentClient(path=chroma_path)

    # Idempotent: delete and recreate the collection
    try:
        client.delete_collection(name="portfolio_data")
        print("[INFO] Deleted existing 'portfolio_data' collection.")
    except Exception:
        print("[INFO] No existing 'portfolio_data' collection to delete.")

    sentence_transformers_ef = embedding_functions.ONNXMiniLM_L6_V2(preferred_providers=["CPUExecutionProvider"])

    collection = client.create_collection(
        name="portfolio_data",
        embedding_function=sentence_transformers_ef,
    )
    print("[INFO] Created new 'portfolio_data' collection.")

    # Prepare data for ChromaDB insertion
    documents = []
    metadatas = []
    ids = []

    for idx, (text, meta) in enumerate(chunks):
        documents.append(text)
        metadatas.append(meta)
        ids.append(f"chunk_{idx:04d}")

    # Add documents to collection
    print(f"[INFO] Adding {len(documents)} documents to collection...")
    collection.add(
        documents=documents,
        metadatas=metadatas,
        ids=ids,
    )

    elapsed = time.time() - start_time

    print("\n" + "=" * 50)
    print("[SUCCESS] Indexing Complete!")
    print("=" * 50)
    print(f"  Total chunks indexed: {len(chunks)}")
    print(f"  Collection name:      portfolio_data")
    print(f"  ChromaDB path:        {chroma_path}")
    print(f"  Time taken:           {elapsed:.2f}s")
    print("=" * 50)


if __name__ == "__main__":
    main()
