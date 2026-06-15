# Work preview images

Drop project screenshots here to power the hover-preview on the Selected Work
cards. Until a file exists, the card shows a styled colour placeholder
automatically — no code changes needed.

Filename must match the card's `slug` (see `WORK` in `src/App.jsx`):

| # | Card                                      | File                              |
|---|-------------------------------------------|-----------------------------------|
| 01 | Government-scale Credential Infrastructure | `credential-infrastructure.png`  |
| 02 | Blockchain Infrastructure Operations       | `blockchain-infra-ops.png`       |
| 03 | OC Hub / Student Engagement Platform       | `oc-hub.png`                     |
| 04 | Perpetual Pools & DeFi Derivatives         | `perpetual-pools.png`            |
| 05 | Internal Product Tooling & Prototypes      | `internal-tooling.png`           |

**Recommended:** ~1280×800 (16:10), PNG or JPG, < 400 KB each. Files in
`public/` are served from the site root, so `public/work/oc-hub.png` is
available at `/work/oc-hub.png`.
