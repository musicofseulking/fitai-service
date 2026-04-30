import os
from rembg import remove

def process_images():
    files = [f"male{i}.png" for i in range(1, 9)] + \
            [f"female1_{i}.png" for i in range(1, 9)] + \
            [f"female2_{i}.png" for i in range(1, 9)]
    
    for f in files:
        path = f"public/{f}"
        if not os.path.exists(path):
            print(f"Skipping {f}, file not found")
            continue
        try:
            print(f"Processing {f}...")
            with open(path, "rb") as input_file:
                input_data = input_file.read()
                
            output_data = remove(input_data)
            
            with open(path, "wb") as output_file:
                output_file.write(output_data)
            print(f"Success: {f}")
        except Exception as e:
            print(f"Error processing {f}: {e}")

if __name__ == "__main__":
    process_images()
