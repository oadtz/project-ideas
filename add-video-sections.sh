#!/bin/bash
# Add NotebookLM video overview sections to landing pages
# Video section goes before the CTA section

DIR="/home/ubuntu/.openclaw/workspace-sun/landing-pages"

# Mapping: file -> notebook_id -> status
declare -A NOTEBOOKS
NOTEBOOKS["01-agent-marketplace"]="36381c56-0a2e-40c7-8b28-09319d32e37e"
NOTEBOOKS["02-mcp-hub"]="de4987cd-1f3b-4d82-aa98-8c37fd5b92dc"
NOTEBOOKS["03-autonomous-biz"]="3e1cbc13-0201-4110-a7af-01d0b1989bab"
NOTEBOOKS["04-agentproof"]="75fed0b2-25e9-457c-89a9-23770acce46d"
NOTEBOOKS["05-x402-gateway"]="cb36a5c2-a2a6-488b-8b3e-6f941acd0e5f"
NOTEBOOKS["06-vibebuild"]="25d337ff-7b5c-41a6-914c-e37e15589d98"
NOTEBOOKS["07-agent-reputation"]="9d605f19-92a6-4a6b-9fa5-e96ec22351ea"
NOTEBOOKS["08-line-ai"]="d481dc62-fd62-4d72-a528-9c19e0906001"
NOTEBOOKS["09-synthdata"]="70b5968a-792e-41e4-83e1-732c102313bc"
NOTEBOOKS["10-agentos"]="274c9bed-7ac0-4371-aefa-bc60f42efd3a"

# Videos completed for these
COMPLETED=("01-agent-marketplace" "02-mcp-hub" "03-autonomous-biz")

for key in "${!NOTEBOOKS[@]}"; do
  FILE="$DIR/${key}.html"
  NB_ID="${NOTEBOOKS[$key]}"
  NB_LINK="https://notebooklm.google.com/notebook/${NB_ID}"
  
  # Check if already has video section
  if grep -q "video-overview" "$FILE"; then
    echo "SKIP: $key (already has video section)"
    continue
  fi
  
  # Check if this is a completed video
  IS_COMPLETED=false
  for c in "${COMPLETED[@]}"; do
    if [[ "$c" == "$key" ]]; then
      IS_COMPLETED=true
      break
    fi
  done
  
  if $IS_COMPLETED; then
    VIDEO_HTML=$(cat <<EOHTML

  <section class="section video-overview" id="video">
    <div class="section-title">🎬 <span class="en">Video Overview</span><span class="th">วิดีโอสรุป</span></div>
    <div class="section-sub"><span class="en">AI-generated explainer by NotebookLM</span><span class="th">สรุปโดย AI จาก NotebookLM</span></div>
    <div style="text-align:center; margin: 2rem 0;">
      <a href="${NB_LINK}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:1.2rem; padding: 1rem 2.5rem; gap: 0.5rem;">
        ▶️ <span class="en">Watch Video Overview</span><span class="th">ดูวิดีโอสรุป</span>
      </a>
      <p style="color: var(--muted); margin-top: 1rem; font-size: 0.9rem;">
        <span class="en">Opens in NotebookLM — full research + AI video explainer</span>
        <span class="th">เปิดใน NotebookLM — งานวิจัยเต็ม + AI อธิบายเป็นวิดีโอ</span>
      </p>
    </div>
  </section>
EOHTML
    )
  else
    VIDEO_HTML=$(cat <<EOHTML

  <section class="section video-overview" id="video">
    <div class="section-title">🎬 <span class="en">Video Overview</span><span class="th">วิดีโอสรุป</span></div>
    <div class="section-sub"><span class="en">AI-generated explainer by NotebookLM</span><span class="th">สรุปโดย AI จาก NotebookLM</span></div>
    <div style="text-align:center; margin: 2rem 0;">
      <a href="${NB_LINK}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:1.2rem; padding: 1rem 2.5rem; gap: 0.5rem; opacity: 0.6;">
        🎬 <span class="en">Video Coming Soon</span><span class="th">วิดีโอกำลังมา</span>
      </a>
      <p style="color: var(--muted); margin-top: 1rem; font-size: 0.9rem;">
        <span class="en">View full research in NotebookLM</span>
        <span class="th">ดูงานวิจัยเต็มใน NotebookLM</span>
      </p>
    </div>
  </section>
EOHTML
    )
  fi
  
  # Insert before the CTA section
  # Use perl for multi-line insert
  perl -i -0pe "s|(\n  <section class=\"cta-section\">)|${VIDEO_HTML}\n\1|" "$FILE"
  
  if $IS_COMPLETED; then
    echo "DONE: $key (video link added)"
  else
    echo "DONE: $key (coming soon placeholder)"
  fi
done
