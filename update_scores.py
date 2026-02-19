#!/usr/bin/env python3
"""Update all landing pages to replace Spark Joy scores with /50 framework scores."""

import json
import re
import os

# Load scores
with open('scores.json', 'r') as f:
    scores = json.load(f)

# Create slug to file mapping
slug_to_file = {
    'agent-marketplace': '01-agent-marketplace.html',
    'mcp-hub': '02-mcp-hub.html',
    'autonomous-business': '03-autonomous-biz.html',
    'agentproof': '04-agentproof.html',
    'x402-gateway': '05-x402.html',
    'vibebuild-thailand': '06-vibebuild.html',
    'agent-reputation': '07-reputation.html',
    'line-ai-assistant': '08-lineai.html',
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

# CSS for score breakdown (to add inline if needed)
SCORE_CSS = '''
.score-breakdown {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(99,102,241,0.1);
  border-radius: 12px;
  border: 1px solid rgba(99,102,241,0.2);
}
.score-breakdown .score-total {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--accent);
}
.score-breakdown .score-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  font-size: 0.85rem;
  color: var(--muted);
}
.score-breakdown .score-details span {
  white-space: nowrap;
}
'''

# Update each landing page
for item in scores:
    slug = item['slug']
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
    # Pattern: <section class="research-section research-highlight">...Spark Joy Score: X/10...</section>
    old_highlight_pattern = r'<section class="research-section research-highlight">\s*<h3>🔥 Spark Joy Score: \d+/10</h3>\s*</section>'
    score_breakdown = create_score_breakdown(item)
    content = re.sub(old_highlight_pattern, score_breakdown, content, flags=re.DOTALL)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Updated {filename}: Score {item['total']}/50")

print("\n✅ All landing pages updated!")

# Now update index.html
print("\nUpdating index.html...")

with open('index.html', 'r') as f:
    index_content = f.read()

# Map slugs to card score patterns in index.html
# We need to find each card and update its score
# The pattern is: <span class="score">🔥 X/10</span>

# First, let's create a mapping of old scores to new scores
old_scores = {
    'agent-marketplace': 9,  # Old Spark Joy scores
    'mcp-hub': 8,
    'autonomous-business': 9,
    'agentproof': 8,
    'x402-gateway': 9,
    'vibebuild-thailand': 8,
    'agent-reputation': 7,
    'line-ai-assistant': 8,
    'synthdata': 7,
    'agent-os': 7,
    'shopcopilot': 8,
    'creator-clone': 8,
    'greenchain': 8,
    'narrateai': 7,
    'querybrain': 7,
    'loyalty-os': 8,
    'dealflow': 7,
    'kol-ai': 7,
    'rwa-studio': 9,
    'devsage': 8,
}

for item in scores:
    slug = item['slug']
    filename = slug_to_file.get(slug)
    if not filename:
        continue
    
    # Find the card link for this page
    card_pattern = rf'(<a href="{re.escape(filename)}"[^>]*>.*?)(<span class="score">🔥 )(\d+)(/10</span>)'
    
    def replace_score(match):
        return match.group(1) + match.group(2) + str(item['total']) + '/50</span>'
    
    index_content = re.sub(card_pattern, replace_score, index_content, flags=re.DOTALL)
    print(f"  Updated {slug}: {item['total']}/50")

with open('index.html', 'w') as f:
    f.write(index_content)

print("\n✅ index.html updated!")
