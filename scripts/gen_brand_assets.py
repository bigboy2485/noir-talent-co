#!/usr/bin/env python3
"""Generate Noir Talent Co brand assets for the site: favicon, apple icon,
and social-share (OG/Twitter) image. Black/gold, Didot — matches the IG pack."""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app")

BG = (10, 10, 10)        # site background #0A0A0A
GOLD = (197, 162, 86)    # brand gold
CREAM = (232, 228, 220)
DIDOT = "/System/Library/Fonts/Supplemental/Didot.ttc"

def F(size):
    try: return ImageFont.truetype(DIDOT, size)
    except: return ImageFont.load_default()

def tw(d, s, f):
    b = d.textbbox((0, 0), s, font=f); return b[2]-b[0], b[3]-b[1]

def tracked(d, s, f, cx, y, fill, track):
    ws = [tw(d, c, f)[0] for c in s]
    total = sum(ws) + track*(len(s)-1)
    x = cx - total/2
    for c, w in zip(s, ws):
        d.text((x, y), c, font=f, fill=fill); x += w + track

# ---- favicon: gold N on black, 512x512 ----
def icon(size, path):
    img = Image.new("RGB", (size, size), BG)
    d = ImageDraw.Draw(img)
    f = F(int(size*0.74))
    w, h = tw(d, "N", f)
    b = d.textbbox((0, 0), "N", font=f)
    d.text(((size-w)/2 - b[0], (size-h)/2 - b[1]), "N", font=f, fill=GOLD)
    img.save(path)

icon(512, os.path.join(APP, "icon.png"))
icon(180, os.path.join(APP, "apple-icon.png"))

# ---- OG / Twitter share image: 1200x630 ----
def og(path):
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    cx = W//2
    m = 40
    d.rectangle([m, m, W-m, H-m], outline=(120, 100, 56), width=2)
    # auto-fit the headline within the frame margins
    maxw = W - 220
    track = 8
    size = 120
    while size > 40:
        f_big = F(size)
        ws = sum(tw(d, c, f_big)[0] for c in "NOIR TALENT CO") + track*(len("NOIR TALENT CO")-1)
        if ws <= maxw: break
        size -= 4
    tracked(d, "NOIR TALENT CO", f_big, cx, 235, GOLD, track)
    d.line([(cx-150, 372), (cx+150, 372)], fill=GOLD, width=2)
    f_sub = F(44)
    tracked(d, "Private creator management.", f_sub, cx, 400, CREAM, 4)
    img.save(path)

og(os.path.join(APP, "opengraph-image.png"))
og(os.path.join(APP, "twitter-image.png"))

print("Wrote app/icon.png, app/apple-icon.png, app/opengraph-image.png, app/twitter-image.png")
