#!/bin/bash

# Define the target folder relative to the script's location
target_folder="$(dirname "$0")/public/articles"
rss_json_file="$(dirname "$0")/public/blog_rss.json"

# Create the folder if it doesn't exist
mkdir -p "$target_folder"

# Get the current date in YYYYMMDD format
current_date=$(date +%Y%m%d)

# Generate a shorter unique ID (8 characters from UUID)
unique_id=$(uuidgen | head -c 8)

# Combine date and unique ID to form the filename
filename="${current_date}${unique_id}"

# Create the markdown file in the target folder
touch "$target_folder/$filename.md"


echo "Created files: $target_folder/$filename.md"

# Add the new article to the RSS feed

# Ensure the JSON file exists and initialize if not
if [ ! -f "$rss_json_file" ]; then
  echo '{"articles": []}' > "$rss_json_file"
fi

# Collect article details
title="Your Article Title"
image="path/to/your/image.jpg"
author="Author Name"
publish_date=$(date "+%B %d, %Y")
is_published=false
# a list of tags separated by commas
tags="tag1, tag2, tag3"

# Create a new article JSON object
new_article=$(jq -n \
  --arg id "$filename" \
  --arg title "$title" \
  --arg image "$image" \
  --arg author "$author" \
  --arg publish_date "$publish_date" \
  --arg tags "$tags" \
  --argjson is_published "$is_published" \
  '{id: $id, title: $title, image: $image, author: $author, publish_date: $publish_date, is_published: $is_published, tags: ($tags | split(", ") ) }')

# Add the new article to the articles array in the JSON file
jq --argjson new_article "$new_article" '.articles += [$new_article]' "$rss_json_file" > tmp.$$.json && mv tmp.$$.json "$rss_json_file"

# Print the name of the updated JSON file
echo "Updated file: $rss_json_file"
