#!/usr/bin/env python3
"""Fix missing files - update 05, 07, 08 with correct filenames."""

import json
import re
import os

# Load scores
with open('scores.json', 'r') as f:
    scores = json.load(f)

# Corrected slug to file mapping
slug_to_file = {
    'agent-marketplace': '01-agent-marketplace.html',
    'mcp-hub': '02-mcp-hub.html',
    'autonomous-business': '03-autonomous-biz.html',
    'agentproof': '04-agentproof.html',
    'x402-gateway': '05-x402-gateway.html',  # Fixed
    'vibebuild-thailand': '06-vibebuild.html',
    'agent-reputation': '07-agent-reputation.html',  # Fixed
    'line-ai-assistant': '08-line-ai.html',  # Fixed (was 08-lineai.html)
    'synthdata': '09-synthdata.html',
    'agent-os': '10-agentos.html',
    'shopcopilot': '11-shopcopilot.html',
    'creator-clone': '12-creatorclone.html',
    'greenchain': '13-greenchain.html',
    'narrateai': '14-narrateai.html',
    'querybrain': '15-querybrain.html',
    'loyalty-os': '16-loyaltyos.html',
    'dealflow': '17-dealflow.html',
    'kol-ai': '18-kolai.html',
    'rwa-studio': '19-rwa-studio.html',
    'devsage': '20-devsage.html',
}

# Create score breakdown HTML template
def create_score_breakdown(item):
    return f'''<div class="score-breakdown">
  <div class="score-total"><strong>Score: {item['total']}/50</strong></div>
  <div class="score-details">
    <span>Market: {item['market_potential']}/10</span>
    <span>Problem: {item['problem_severity']}/10</span>
    <span>Competition: {item['competition_gap']}/10</span>
    <span>Build: {item['build_feasibility']}/10</span>
    <span>Advantage: {item['our_advantage']}/10</span>
  </div>
</div>'''

# Only update the missing files
missing_slugs = ['x402-gateway', 'agent-reputation', 'line-ai-assistant']

for item in scores:
    slug = item['slug']
    if slug not in missing_slugs:
        continue
        
    filename = slug_to_file.get(slug)
    if not filename:
        print(f"No file mapping for {slug}")
        continue
    
    filepath = filename
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace the research badge
    # Pattern: Idea #XX • Spark Joy: X/10 🔥
    old_badge_pattern = rf'Idea #{item["number"]:02d} • Spark Joy: \d+/10 🔥'
    new_badge = f'Idea #{item["number"]:02d} • Score: {item["total"]}/50'
    content = re.sub(old_badge_pattern, new_badge, content)
    
    # Also handle non-zero-padded numbers
    old_badge_pattern2 = rf'Idea #{item["number"]} • Spark Joy: \d+/10 🔥'
    content = re.sub(old_badge_pattern2, new_badge, content)
    
    # Replace the research-highlight section
    old_highlight_pattern = r'<section class="research-section research-highlight">\s*<h3>🔥 Spark Joy Score: \d+/10</h3>\s*</section>'
    score_breakdown = create_score_breakdown(item)
    content = re.sub(old_highlight_pattern, score_breakdown, content, flags=re.DOTALL)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Updated {filename}: Score {item['total']}/50")

print("\n✅ Missing files updated!")
