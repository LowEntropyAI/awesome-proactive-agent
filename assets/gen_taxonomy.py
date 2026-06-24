"""
Generate proactive-agent taxonomy diagram with Pillow.
All text is measured before drawing; boxes are sized to fit.
"""
from PIL import Image, ImageDraw, ImageFont
import os, textwrap

# ── Canvas ───────────────────────────────────────────────────────────────────
W, H = 1600, 860
BG   = (15, 23, 42)          # slate-950
img  = Image.new("RGB", (W, H), BG)
d    = ImageDraw.Draw(img)

# ── Colours ───────────────────────────────────────────────────────────────────
C = {
    "root"   : (14, 165, 233),   # sky-500
    "when"   : (20, 184, 166),   # teal-500
    "what"   : (245, 158, 11),   # amber-500
    "how"    : (99, 102, 241),   # indigo-500
    "who"    : (244, 63, 94),    # rose-500
    "eval"   : (100, 116, 139),  # slate-500
    "line"   : (148, 163, 184),  # slate-400
    "white"  : (248, 250, 252),
    "dim"    : (203, 213, 225),
}

# tint: lighten a colour for leaf bg
def tint(c, amount=0.18):
    return tuple(min(255, int(v + (255-v)*amount)) for v in c)

# ── Font helpers ──────────────────────────────────────────────────────────────
def load(size, bold=False):
    candidates_bold = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in (candidates_bold if bold else candidates):
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

F_ROOT   = load(26, bold=True)
F_BRANCH = load(20, bold=True)
F_LEAF   = load(15)
F_CAP    = load(13)
F_EVAL   = load(18, bold=True)
F_EVALSUB= load(13)

def text_size(text, font):
    bb = font.getbbox(text)
    return bb[2]-bb[0], bb[3]-bb[1]

# ── Drawing primitives ────────────────────────────────────────────────────────
def rounded_rect(draw, x1, y1, x2, y2, r, fill, border=None, bw=2):
    draw.rounded_rectangle([x1, y1, x2, y2], radius=r, fill=fill,
                            outline=border, width=bw)

def centred_text(draw, cx, cy, text, font, color):
    tw, th = text_size(text, font)
    draw.text((cx - tw//2, cy - th//2), text, font=font, fill=color)

# ── Layout constants ───────────────────────────────────────────────────────────
PAD_X, PAD_Y = 18, 10   # horizontal/vertical padding inside boxes
GAP_X = 20              # gap between columns
GAP_Y = 14              # vertical gap between nodes

# ── Columns data ──────────────────────────────────────────────────────────────
columns = [
    {
        "key":   "when",
        "title": "WHEN to Act",
        "leaves":["Intervention Timing","Over-triggering","Idle-time Compute","Human Factors"],
    },
    {
        "key":   "what",
        "title": "WHAT to Infer",
        "leaves":["Latent Intent","Clarification","Long-horizon","Memory"],
    },
    {
        "key":   "how",
        "title": "HOW to Respond",
        "leaves":["GUI / Mobile","Coding Agents","Dialogue","Multimodal"],
    },
    {
        "key":   "who",
        "title": "WHO for Whom",
        "leaves":["Personalization","Safety & Consent","Optimization","Skill Learning"],
    },
]

# ── Measure column widths ─────────────────────────────────────────────────────
col_widths = []
for col in columns:
    tw_branch, _ = text_size(col["title"], F_BRANCH)
    tw_leaf_max  = max(text_size(lf, F_LEAF)[0] for lf in col["leaves"])
    col_widths.append(max(tw_branch, tw_leaf_max) + PAD_X*2 + 4)

total_col_w = sum(col_widths) + GAP_X * (len(columns)-1)
left_start  = (W - total_col_w) // 2

# ── Row heights ───────────────────────────────────────────────────────────────
ROOT_H   = 52
BRANCH_H = 42
LEAF_H   = 36
EVAL_H   = 52

Y_ROOT   = 36
Y_BRANCH = Y_ROOT + ROOT_H + 40
Y_LEAF0  = Y_BRANCH + BRANCH_H + 32
Y_EVAL   = Y_LEAF0 + (LEAF_H + GAP_Y)*4 + 20

# ── Root ─────────────────────────────────────────────────────────────────────
ROOT_W = 320
rx1 = W//2 - ROOT_W//2
rx2 = W//2 + ROOT_W//2
ry1 = Y_ROOT
ry2 = Y_ROOT + ROOT_H

# glow shadow
for gw in range(8, 0, -1):
    alpha_c = tuple(int(v*0.12) for v in C["root"])
    d.rounded_rectangle([rx1-gw, ry1-gw, rx2+gw, ry2+gw], radius=12+gw,
                         fill=None, outline=(*C["root"], int(255*0.08*gw)), width=1)
rounded_rect(d, rx1, ry1, rx2, ry2, 12, fill=C["root"])
centred_text(d, W//2, (ry1+ry2)//2, "Proactive Agents", F_ROOT, C["white"])

# ── Connector root → branch bar ───────────────────────────────────────────────
BAR_Y = (ry2 + Y_BRANCH) // 2
d.line([(W//2, ry2), (W//2, BAR_Y)], fill=C["line"], width=1)

# Pre-compute column centres
col_centres = []
cx = left_start
for i, col in enumerate(columns):
    cc = cx + col_widths[i]//2
    col_centres.append(cc)
    cx += col_widths[i] + GAP_X

# horizontal bar
d.line([(col_centres[0], BAR_Y), (col_centres[-1], BAR_Y)], fill=C["line"], width=1)

# ── Branches + leaves ─────────────────────────────────────────────────────────
for i, col in enumerate(columns):
    cc   = col_centres[i]
    cw   = col_widths[i]
    color = C[col["key"]]
    leaf_bg = tint(color, 0.12)

    # vertical line bar → branch
    d.line([(cc, BAR_Y), (cc, Y_BRANCH)], fill=C["line"], width=1)

    # branch box
    bx1 = cc - cw//2
    bx2 = cc + cw//2
    by1 = Y_BRANCH
    by2 = Y_BRANCH + BRANCH_H
    rounded_rect(d, bx1, by1, bx2, by2, 8, fill=color)
    centred_text(d, cc, (by1+by2)//2, col["title"], F_BRANCH, C["white"])

    # vertical line branch → first leaf
    d.line([(cc, by2), (cc, Y_LEAF0)], fill=C["line"], width=1)

    # leaves
    for j, leaf in enumerate(col["leaves"]):
        ly1 = Y_LEAF0 + j*(LEAF_H + GAP_Y)
        ly2 = ly1 + LEAF_H
        # connector dot
        if j > 0:
            d.line([(cc, ly1 - GAP_Y), (cc, ly1)], fill=C["line"], width=1)
        lx1 = cc - cw//2
        lx2 = cc + cw//2
        rounded_rect(d, lx1, ly1, lx2, ly2, 6, fill=leaf_bg, border=color, bw=1)
        centred_text(d, cc, (ly1+ly2)//2, leaf, F_LEAF, C["white"])

# ── Eval bar ─────────────────────────────────────────────────────────────────
# connector lines from bottom of last leaf to eval
last_leaf_bottom = Y_LEAF0 + 3*(LEAF_H + GAP_Y) + LEAF_H
mid_y = (last_leaf_bottom + Y_EVAL) // 2
d.line([(col_centres[0], last_leaf_bottom), (col_centres[0], mid_y)], fill=C["line"], width=1)
d.line([(col_centres[-1], last_leaf_bottom), (col_centres[-1], mid_y)], fill=C["line"], width=1)
d.line([(col_centres[0], mid_y), (col_centres[-1], mid_y)], fill=C["line"], width=1)
EVAL_CX = W//2
d.line([(EVAL_CX, mid_y), (EVAL_CX, Y_EVAL)], fill=C["line"], width=1)

EW = total_col_w + 20
ex1 = W//2 - EW//2
ex2 = W//2 + EW//2
ey1 = Y_EVAL
ey2 = Y_EVAL + EVAL_H
rounded_rect(d, ex1, ey1, ex2, ey2, 10, fill=C["eval"])
centred_text(d, W//2, ey1 + 17, "Evaluation & Benchmarks", F_EVAL, C["white"])
centred_text(d, W//2, ey2 - 16, "22 benchmarks  ·  6 environments  ·  Desktop / Mobile / Dialogue / Multimodal / IDE / Embodied", F_EVALSUB, C["dim"])

# ── Caption ───────────────────────────────────────────────────────────────────
caption = "awesome-proactive-agent  ·  github.com/LowEntropyAI/awesome-proactive-agent"
cw_, _ = text_size(caption, F_CAP)
d.text((W//2 - cw_//2, H-28), caption, font=F_CAP, fill=(100, 116, 139))

# ── Save ─────────────────────────────────────────────────────────────────────
out = "/tmp/taxonomy.png"
img.save(out, "PNG", optimize=True)
print(f"Saved {W}x{H} → {out}")
