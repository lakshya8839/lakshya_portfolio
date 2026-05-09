from PIL import Image

input_path = r"C:\Users\lakshya\.gemini\antigravity\brain\d3e11777-04a3-401a-b5b8-a5990c2b5673\media__1778333025141.jpg"
output_path = r"c:\Users\lakshya\Documents\Portfolio\lakshya_portfolio\src\assets\profile.webp"

img = Image.open(input_path)
img.save(output_path, "webp", quality=90, method=6)
print("Conversion successful")
