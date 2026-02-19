#!/usr/bin/env python3
"""Replace ALL old Spark Joy score references with /50 framework breakdown."""
import json, re, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('scores.json') as f:
    scores = {s['number']: s for s in json.load(f)}

file_map = {
    1:'01-agent-marketplace.html',2:'02-mcp-hub.html',3:'03-autonomous-biz.html',
    4:'04-agentproof.html',5:'05-x402-gateway.html',6:'06-vibebuild.html',
    7:'07-agent-reputation.html',8:'08-line-ai.html',9:'09-synthdata.html',
    10:'10-agentos.html',11:'11-shopcopilot.html',12:'12-creatorclone.html',
    13:'13-greenchain.html',14:'14-narrateai.html',15:'15-querybrain.html',
    16:'16-loyaltyos.html',17:'17-dealflow.html',18:'18-kolai.html',
    19:'19-rwa-studio.html',20:'20-devsage.html',
}

for num, fname in file_map.items():
    if not os.path.exists(fname):
        continue
    s = scores[num]
    t = s['total']
    mp = s['market_potential']
    ps = s['problem_severity']
    cg = s['competition_gap']
    bf = s['build_feasibility']
    oa = s['our_advantage']
    
    breakdown_en = f"Market: {mp}/10 · Problem: {ps}/10 · Competition: {cg}/10 · Build: {bf}/10 · Advantage: {oa}/10"
    breakdown_th = f"ตลาด: {mp}/10 · ปัญหา: {ps}/10 · คู่แข่ง: {cg}/10 · สร้างได้: {bf}/10 · จุดแข็ง: {oa}/10"
    
    with open(fname, 'r', encoding='utf-8') as f:
        c = f.read()
    orig = c
    
    # 1. Replace old score-num divs showing X/10 (the Spark Joy visual score)
    #    Pattern: <div class="score-num">X/10</div> → replace with total/50
    c = re.sub(
        r'<div class="score-num">\d+/10</div>',
        f'<div class="score-num">{t}/50</div>',
        c
    )
    c = re.sub(
        r'<div class="score-num purple">\d+/10</div>',
        f'<div class="score-num purple">{t}/50</div>',
        c
    )
    
    # 2. Replace joy-score divs
    c = re.sub(
        r'<div class="joy-score">\d+/10\s*🔥?</div>',
        f'<div class="joy-score">{t}/50</div>',
        c
    )
    
    # 3. Replace joy-metric divs
    c = re.sub(
        r'<div class="joy-metric">\d+/10</div>',
        f'<div class="joy-metric">{t}/50</div>',
        c
    )
    
    # 4. Replace score-ring divs
    c = re.sub(
        r'<div class="score-ring">\d+/10</div>',
        f'<div class="score-ring">{t}/50</div>',
        c
    )
    
    # 5. Fix "SPARK JOY SCORE: X/10" text
    c = re.sub(
        r'🔥\s*SPARK JOY SCORE:\s*\d+/10',
        f'📊 SCORE: {t}/50',
        c
    )
    
    # 6. Replace "ทำไมมัน spark joy" → "ทำไมไอเดียนี้น่าสนใจ"
    c = c.replace('ทำไมมัน spark joy', 'ทำไมไอเดียนี้น่าสนใจ')
    c = c.replace('ทำไมมัน Spark Joy', 'ทำไมไอเดียนี้น่าสนใจ')
    
    # 7. Replace research-score-num showing old Spark Joy
    c = re.sub(
        r'<div class="research-score-num">\d+/10</div>',
        f'<div class="research-score-num">{t}/50</div>',
        c
    )
    
    # 8. In the research modal, add breakdown after Score: XX/50 headers if not already present
    # For pages that have <h3>🔥 Score: XX/50</h3> without breakdown
    for emoji in ['🔥', '📊', '🎉', '💚', '✨', '🎧', '📋', '🪙']:
        old_h3 = f'<h3>{emoji} Score: {t}/50</h3>'
        new_h3 = (f'<h3>{emoji} Score: {t}/50</h3>\n'
                  f'        <p style="margin:0.5rem 0;font-size:0.9rem;opacity:0.8;">{breakdown_en}</p>')
        if old_h3 in c and breakdown_en not in c:
            c = c.replace(old_h3, new_h3, 1)  # only first occurrence
    
    # 9. For pages that have "✅ Score: XX/50" pattern (like #08)
    old_check = f'<h3>✅ Score: {t}/50</h3>'
    new_check = (f'<h3>📊 Score: {t}/50</h3>\n'
                 f'        <p style="margin:0.5rem 0;font-size:0.9rem;opacity:0.8;">{breakdown_en}</p>')
    if old_check in c and breakdown_en not in c:
        c = c.replace(old_check, new_check, 1)
    
    # 10. For research highlight sections that still show old format
    c = re.sub(
        r'<h3>📊 Score: \d+/50</h3>\n<p style="margin:0\.5rem 0;font-size:0\.9rem;opacity:0\.8;">\nMarket: \d+/10 • Problem: \d+/10 • Competition: \d+/10 • Build: \d+/10 • Advantage: \d+/10</p>',
        f'<h3>📊 Score: {t}/50</h3>\n<p style="margin:0.5rem 0;font-size:0.9rem;opacity:0.8;">{breakdown_en}</p>',
        c
    )
    
    if c != orig:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(c)
        remaining = c.lower().count('spark joy')
        old_scores = len(re.findall(r'[^/]\d/10[^p]', c))  # rough check for X/10 not in breakdown
        print(f"✅ #{num:02d} {s['name']:25s} → {t}/50  (spark joy remaining: {remaining})")
    else:
        print(f"⚪ #{num:02d} {s['name']:25s} — no changes")

print("\nDone!")
