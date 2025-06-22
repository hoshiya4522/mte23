import json
import gdown
import os

# Load JSON data from file
with open("data.json", "r") as f:
    people = json.load(f)

# Download each image
for person in people:
    name = person["Name"].replace(" ", "_")
    roll = person["Roll"]
    picture_url = person["Picture"]

    # Extract file ID from URL
    if "id=" in picture_url:
        file_id = picture_url.split("id=")[-1]
        direct_url = f"https://drive.google.com/uc?id={file_id}"
    else:
        print(f"Invalid URL for {name}. Skipping.")
        continue

    output_filename = f"{roll}.jpg"

    # Check if the file already exists
    if os.path.exists(output_filename):
        print(f"{output_filename} already exists. Skipping download.")
        continue

    print(f"Downloading {output_filename}...")
    try:
        gdown.download(direct_url, output_filename, quiet=False)
    except Exception as e:
        print(f"Error for {name} ({roll}): {e}")

print("Download complete.")

