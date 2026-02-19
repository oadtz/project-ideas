#!/bin/bash
# Batch embed videos into landing pages

VIDEOS_DIR="/home/ubuntu/.openclaw/workspace-sun/landing-pages/videos"
PAGES_DIR="/home/ubuntu/.openclaw/workspace-sun/landing-pages"

# Video number to filename mapping
declare -A videos=(
  ["12"]="video-12-creatorclone.mp4"
  ["13"]="video-13-greenchain.mp4"
  ["14"]="video-14-narrateai.mp4"
  ["15"]="video-15-querybrain.mp4"
  ["16"]="video-16-loyaltyos.mp4"
  ["17"]="video-17-dealflow.mp4"
  ["18"]="video-18-kolai.mp4"
  ["19"]="video-19-rwastudio.mp4"
  ["20"]="video-20-devsage.mp4"
)

# Page number to filename mapping
declare -A pages=(
  ["12"]="12-creatorclone.html"
  ["13"]="13-greenchain.html"
  ["14"]="14-narrateai.html"
  ["15"]="15-querybrain.html"
  ["16"]="16-loyaltyos.html"
  ["17"]="17-dealflow.html"
  ["18"]="18-kolai.html"
  ["19"]="19-rwa-studio.html"
  ["20"]="20-devsage.html"
)

for num in 12 13 14 16 17 18 19 20; do
  video="${videos[$num]}"
  page="${pages[$num]}"
  
  if [ ! -f "$VIDEOS_DIR/$video" ]; then
    echo "Video $video not found, skipping"
    continue
  fi
  
  if [ ! -f "$PAGES_DIR/$page" ]; then
    echo "Page $page not found, skipping"
    continue
  fi
  
  # Check if already embedded
  if grep -q "src=\"videos/$video\"" "$PAGES_DIR/$page"; then
    echo "Page $page already has video embedded"
    continue
  fi
  
  echo "Embedding $video into $page..."
  
  # Create the video embed HTML
  video_html="<div style=\"text-align:center; margin: 2rem auto; max-width: 800px;\">
        <video controls preload=\"metadata\" style=\"width:100%; border-radius: 12px; border: 1px solid var(--border);\" poster=\"\">
          <source src=\"videos/$video\" type=\"video/mp4\">
          Your browser does not support the video tag.
        </video>
      </div>"
  
  # Use Python to do the replacement (more reliable than sed for multiline)
  python3 << EOF
import re

with open("$PAGES_DIR/$page", "r", encoding="utf-8") as f:
    content = f.read()

# Find and replace the video-placeholder section
pattern = r'<div class="video-section">\s*<div class="video-placeholder">.*?</div>\s*</div>'
replacement = '''<div class="video-section">
      <div style="text-align:center; margin: 2rem auto; max-width: 800px;">
        <video controls preload="metadata" style="width:100%; border-radius: 12px; border: 1px solid var(--border);" poster="">
          <source src="videos/$video" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>'''

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open("$PAGES_DIR/$page", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Done")
EOF
  
  echo "Embedded $video into $page"
done

echo "All done!"
