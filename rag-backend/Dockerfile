FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Build the index at build time
RUN python build_index.py

# Expose port
EXPOSE 8000

# Start server
CMD ["python", "main.py"]
