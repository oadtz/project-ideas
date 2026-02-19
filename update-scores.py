#!/usr/bin/env python3
"""Batch update all landing pages to replace Spark Joy scores with /50 framework."""
import json, re, os, glob

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('scores.json') as f:
    scores = json.load(f)

# Map number to file
file_map = {
    1: '01-agent-marketplace.html',
    2: '02-mcp-hub.html',
    3: '03-autonomous-biz.html',
    4: '04-agentproof.html',
    5: '05-x402-gateway.html',
    6: '06-vibebuild.html',
    7: '07-agent-reputation.html',
    8: '08-line-ai.html',
    9: '09-synthdata.html',
    10: '10-agentos.html',
    11: '11-shopcopilot.html',
    12: '12-creatorclone.html',
    13: '13-greenchain.html',
    14: '14-narrateai.html',
    15: '15-querybrain.html',
    16: '16-loyaltyos.html',
    17: '17-dealflow.html',
    18: '18-kolai.html',
    19: '19-rwa-studio.html',
    20: '20-devsage.html',
}

for s in scores:
    num = s['number']
    fname = file_map.get(num)
    if not fname or not os.path.exists(fname):
        print(f"SKIP #{num}: {fname} not found")
        continue
    
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    total = s['total']
    mp = s['market_potential']
    ps = s['problem_severity']
    cg = s['competition_gap']
    bf = s['build_feasibility']
    oa = s['our_advantage']
    
    breakdown_html = f"Score: {total}/50 (Market:{mp} Problem:{ps} Competition:{cg} Build:{bf} Advantage:{oa})"
    
    # Replace various Spark Joy patterns
    # Pattern 1: "Spark Joy Score: X/10" or "Spark Joy: X/10"
    content = re.sub(r'Spark Joy Score:\s*\d+/10', f'Score: {total}/50', content)
    content = re.sub(r'Spark Joy:\s*\d+/10', f'Score: {total}/50', content)
    
    # Pattern 2: "🔥 Spark Joy Score: X/10"
    content = re.sub(r'🔥\s*Spark Joy Score:\s*\d+/10', f'📊 Score: {total}/50', content)
    content = re.sub(r'🔥\s*คะแนน Spark Joy:\s*\d+/10', f'📊 คะแนน: {total}/50', content)
    
    # Pattern 3: research badge "Spark Joy: X/10 🔥"
    content = re.sub(r'Spark Joy:\s*\d+/10\s*🔥', f'Score: {total}/50', content)
    
    # Pattern 4: In research modal highlight section - replace score display
    content = re.sub(
        r'<h3>🔥 Spark Joy Score:\s*\d+/10</h3>',
        f'<h3>📊 Score: {total}/50</h3>\n'
        f'<p style="margin:0.5rem 0;font-size:0.9rem;opacity:0.8;">'
        f'Market: {mp}/10 • Problem: {ps}/10 • Competition: {cg}/10 • Build: {bf}/10 • Advantage: {oa}/10</p>',
        content
    )
    content = re.sub(
        r'<h3>🔥\s*คะแนน Spark Joy:\s*\d+/10</h3>',
        f'<h3>📊 คะแนน: {total}/50</h3>\n'
        f'<p style="margin:0.5rem 0;font-size:0.9rem;opacity:0.8;">'
        f'ตลาด: {mp}/10 • ปัญหา: {ps}/10 • คู่แข่ง: {cg}/10 • สร้างได้: {bf}/10 • จุดแข็ง: {oa}/10</p>',
        content
    )
    
    # Pattern 5: standalone "Spark Joy Score" text (heading)
    content = re.sub(r'>Spark Joy Score<', '>Score</span>', content)
    content = re.sub(r'>คะแนน Spark Joy<', '>คะแนน</span>', content)
    
    # Pattern 6: "Spark Joy" badge text
    content = re.sub(r'Idea #\d+ • Spark Joy: \d+/10 🔥', f'Idea #{num:02d} • Score: {total}/50', content)
    
    # Pattern 7: Section title containing "Spark Joy"
    content = content.replace('<span class="en">Spark Joy Score</span>', f'<span class="en">Score: {total}/50</span>')
    content = content.replace('<span class="th">คะแนน Spark Joy</span>', f'<span class="th">คะแนน: {total}/50</span>')
    
    # Pattern 8: "ทำไมมัน spark joy" → keep as is (this is content, not score)
    
    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ #{num:02d} {s['name']}: {total}/50")
    else:
        print(f"⚠️  #{num:02d} {s['name']}: no changes needed")

print("\nDone!")
