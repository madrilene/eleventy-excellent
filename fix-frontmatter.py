import os
import re
import argparse # Import the argparse module

def clean_frontmatter(file_path):
    """
    Cleans the frontmatter of a markdown file to only include 'title', 'description', and 'date'.
    Removes 'tags' and any other fields not explicitly allowed.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return

    modified_lines = []
    in_frontmatter = False
    frontmatter_content = []
    content_after_frontmatter = []
    frontmatter_end_found = False

    for i, line in enumerate(lines):
        # Detect the start of frontmatter (first '---')
        if line.strip() == '---' and not in_frontmatter and not frontmatter_end_found:
            in_frontmatter = True
            modified_lines.append(line) # Keep the opening '---'
            continue
        # Detect the end of frontmatter (second '---')
        elif line.strip() == '---' and in_frontmatter and not frontmatter_end_found:
            in_frontmatter = False
            frontmatter_end_found = True
            
            # Process the collected frontmatter content
            cleaned_fm_lines = []
            # Define the fields that are allowed in the frontmatter
            allowed_fields = {'title:', 'description:', 'date:'}
            
            current_field_allowed = False # Flag to track if the current field (and its indented lines) is allowed
            for fm_line in frontmatter_content:
                # Check if the line starts a new field (e.g., 'key: value')
                # Use re.match to find patterns at the beginning of the string
                field_match = re.match(r'^\s*([a-zA-Z0-9_]+):\s*(.*)$', fm_line)
                if field_match:
                    # Normalize the field name to lowercase and append a colon for consistent comparison
                    field_name = field_match.group(1).lower() + ":" 
                    if field_name in allowed_fields:
                        cleaned_fm_lines.append(fm_line)
                        current_field_allowed = True # Mark this field as allowed
                    else:
                        current_field_allowed = False # This field is not allowed, so skip it and its subsequent indented lines
                # If it's an indented line and the *previous* field was allowed
                elif current_field_allowed and (fm_line.startswith(' ') or fm_line.startswith('\t')):
                    cleaned_fm_lines.append(fm_line)
                else:
                    # This line is either not an allowed field, or an indented line of a disallowed field
                    current_field_allowed = False # Reset the flag if the indentation breaks or field is not allowed

            modified_lines.extend(cleaned_fm_lines)
            modified_lines.append(line) # Keep the closing '---'
            continue

        # Append lines that are part of the frontmatter content (between the '---' delimiters)
        if in_frontmatter:
            frontmatter_content.append(line)
        # Append lines that are after the frontmatter
        else:
            content_after_frontmatter.append(line)

    # Combine the modified frontmatter part with the content after frontmatter
    final_content = modified_lines + content_after_frontmatter

    # Write the modified content back to the file
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(final_content)
        print(f"Processed: {file_path}")
    except Exception as e:
        print(f"Error writing to {file_path}: {e}")

def process_directory(directory_path):
    """
    Walks through the specified directory and processes all markdown files.
    """
    # Check if the provided path is a valid directory
    if not os.path.isdir(directory_path):
        print(f"Error: Directory '{directory_path}' not found or is not a directory.")
        return

    print(f"Starting to process markdown files in: {directory_path}")
    found_files = False # Flag to track if any markdown files were processed
    for root, _, files in os.walk(directory_path):
        for file in files:
            # Check if the file has a markdown extension
            if file.endswith(('.md', '.markdown')):
                found_files = True
                file_path = os.path.join(root, file)
                clean_frontmatter(file_path)
    
    if not found_files:
        print(f"No markdown files (.md or .markdown) found in '{directory_path}'.")
    else:
        print(f"\nAll eligible markdown files in '{directory_path}' have been processed.")

if __name__ == "__main__":
    # Create an ArgumentParser object
    parser = argparse.ArgumentParser(
        description="Clean frontmatter of markdown files to include only title, description, and date."
    )
    
    # Add the 'directory' argument. It's a positional argument, so it's required.
    parser.add_argument(
        "directory", 
        help="The path to the directory containing markdown files. Use '.' for the current directory."
    )
    
    # Parse the command-line arguments provided by the user
    args = parser.parse_args()
    
    # Call the main processing function with the directory path from the arguments
    process_directory(args.directory)
