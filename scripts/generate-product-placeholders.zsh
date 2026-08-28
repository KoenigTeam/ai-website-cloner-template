#!/bin/zsh
# Generate 15 placeholder product images via Nano Banana Pro.
set -e
cd "$(dirname "$0")/.."
mkdir -p public/images/products

items=(
"01|plain black cotton t-shirt, neatly folded"
"02|plain white t-shirt on a wooden hanger"
"03|plain grey long-sleeve t-shirt laid flat"
"04|navy pocket t-shirt laid flat"
"05|cream v-neck t-shirt, neatly folded"
"06|charcoal crewneck t-shirt on a hanger"
"07|oversized sand-colored t-shirt laid flat"
"08|plain white t-shirt hanging against a wall"
"09|charcoal pullover hoodie laid flat"
"10|black zip-up hoodie on a hanger"
"11|heavyweight olive hoodie laid flat"
"12|dark navy hoodie hanging against a wall"
"13|plain black baseball cap, front view"
"14|grey knit beanie folded on a surface"
"15|natural canvas tote bag hanging on a hook"
)

for item in "${items[@]}"; do
  num="${item%%|*}"
  desc="${item#*|}"
  out="public/images/products/product-${num}.jpg"
  if [ -s "$out" ]; then echo "skip ${out} (exists)"; continue; fi
  echo "generating ${out} ..."
  url=$(higgsfield generate create nano_banana_pro \
    --prompt "E-commerce placeholder product photograph: a ${desc}, centered on a seamless light neutral studio background, soft even lighting, no text, no logos, no people, minimal clean catalog style" \
    --aspect_ratio 2:3 --resolution 1k --wait --json \
    | python3 -c "
import json,sys
d=json.load(sys.stdin)
if isinstance(d,list): d=d[0] if d else {}
def find_url(o):
    if isinstance(o,str) and o.startswith('http'): return o
    if isinstance(o,dict):
        for k in ('result_url','url','asset_url','output_url'):
            if isinstance(o.get(k),str): return o[k]
        for v in o.values():
            r=find_url(v)
            if r: return r
    if isinstance(o,list):
        for v in o:
            r=find_url(v)
            if r: return r
    return ''
print(find_url(d))")
  if [ -z "$url" ]; then echo "FAILED to get URL for ${out}"; exit 1; fi
  curl -fsSL "$url" -o "$out"
  echo "saved ${out}"
done
echo "ALL DONE"
