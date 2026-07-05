# Static Site Deploy Pack - 20260706

This zip is the complete OpenClaw public feed as a static site.
Deploying it to a real static host replaces the rotating localtunnel
hostnames with one permanent URL, which is required before any honest
traffic experiment can be repeated.

## Why this exists

- localtunnel hostnames rotate on every restart, so every published link
  eventually dies (the 2026-07-03 free sample experiment was invalidated
  for exactly this reason).
- A static host serves the same files with no local machine uptime and no
  extra memory load on the workstation.
- All pages are local-first: no server-side user data is collected.

## Stable URLs after deploy

- `/mood-anchor.html` -> latest build (`mood-anchor-20260705.html`)
- `/mood-anchor-en.html` -> latest build (`mood-anchor-en-20260705.html`)
- `/mood-anchor-care-card.html` -> latest build (`mood-anchor-care-card-20260705.html`)
- `/mood-anchor-care-card-en.html` -> latest build (`mood-anchor-care-card-en-20260705.html`)
- `/mood-anchor-support-scripts.html` -> latest build (`mood-anchor-support-scripts-20260705.html`)
- `/mood-anchor-support-scripts-en.html` -> latest build (`mood-anchor-support-scripts-en-20260705.html`)
- `/mood-anchor-onboarding-checklist.html` -> latest build (`mood-anchor-onboarding-checklist-20260705.html`)
- `/mood-anchor-onboarding-checklist-en.html` -> latest build (`mood-anchor-onboarding-checklist-en-20260705.html`)
- `/mood-anchor-low-mood-card.html` -> latest build (`mood-anchor-low-mood-card-20260705.html`)
- `/mood-anchor-low-mood-card-en.html` -> latest build (`mood-anchor-low-mood-card-en-20260705.html`)
- `/mood-anchor-activity-experiment-board.html` -> latest build (`mood-anchor-activity-experiment-board-20260705.html`)
- `/mood-anchor-activity-experiment-board-en.html` -> latest build (`mood-anchor-activity-experiment-board-en-20260705.html`)
- `/mood-anchor-activity-experiment-signal-ledger.html` -> latest build (`mood-anchor-activity-experiment-signal-ledger-20260705.html`)
- `/mood-anchor-depression-support-command-board.html` -> latest build (`mood-anchor-depression-support-command-board-20260705.html`)
- `/mood-anchor-pwa-qa-board.html` -> latest build (`mood-anchor-pwa-qa-board-20260705.html`)
- `/mood-anchor-pwa-qa-return-packet.html` -> latest build (`mood-anchor-pwa-qa-return-packet-20260705.html`)
- `/openclaw-one-person-company-skill-adoption-board.html` -> latest build (`openclaw-one-person-company-skill-adoption-board-20260705.html`)
- `/openclaw-revenue-experiment-loop-board.html` -> latest build (`openclaw-revenue-experiment-loop-board-20260705.html`)
- `/openclaw-autonomous-execution-board.html` -> latest build (`openclaw-autonomous-execution-board-20260705.html`)
- `/openclaw-continuous-exploration-board.html` -> latest build (`openclaw-continuous-exploration-board-20260705.html`)
- `/openclaw-active-revenue-sprint-board.html` -> latest build (`openclaw-active-revenue-sprint-board-20260705.html`)
- `/openclaw-owner-proxy-delegation-queue.html` -> latest build (`openclaw-owner-proxy-delegation-queue-20260705.html`)
- `/openclaw-team-implementation-sprint.html` -> latest build (`openclaw-team-implementation-sprint-20260705.html`)
- `/openclaw-delivery-review-board.html` -> latest build (`openclaw-delivery-review-board-20260705.html`)
- `/openclaw-revision-dispatch-board.html` -> latest build (`openclaw-revision-dispatch-board-20260705.html`)
- `/openclaw-mission-traceability-matrix.html` -> latest build (`openclaw-mission-traceability-matrix-20260705.html`)
- `/openclaw-marketing-analytics-return-packet.html` -> latest build (`openclaw-marketing-analytics-return-packet-20260705.html`)
- `/openclaw-browser-native-seller-tool-return-packet.html` -> latest build (`openclaw-browser-native-seller-tool-return-packet-20260705.html`)
- `/openclaw-proof-strip-builder-prototype-dispatch.html` -> latest build (`openclaw-proof-strip-builder-prototype-dispatch-20260705.html`)
- `/openclaw-proof-strip-builder-prototype-return-packet.html` -> latest build (`openclaw-proof-strip-builder-prototype-return-packet-20260705.html`)
- `/openclaw-proof-strip-builder-codex-review-packet.html` -> latest build (`openclaw-proof-strip-builder-codex-review-packet-20260705.html`)
- `/openclaw-proof-strip-builder-static-tool-build-packet.html` -> latest build (`openclaw-proof-strip-builder-static-tool-build-packet-20260705.html`)
- `/openclaw-proof-strip-builder-static-tool-build-review-packet.html` -> latest build (`openclaw-proof-strip-builder-static-tool-build-review-packet-20260705.html`)
- `/openclaw-proof-strip-builder-static-tool-artifact-candidate-packet.html` -> latest build (`openclaw-proof-strip-builder-static-tool-artifact-candidate-packet-20260705.html`)
- `/listing-friction-grader.html` -> latest build (`listing-friction-grader-20260704.html`)
- `/listing-audit-request-pack.html` -> latest build (`listing-audit-request-pack-20260704.html`)
- `/listing-audit-demand-ledger.html` -> latest build (`listing-audit-demand-ledger-20260705.html`)
- `/listing-audit-owner-reply-handoff.html` -> latest build (`listing-audit-owner-reply-handoff-20260705.html`)
- `/listing-audit-demand-to-reply-validation-board.html` -> latest build (`listing-audit-demand-to-reply-validation-board-20260705.html`)
- `/one-person-company-revenue-research.md` -> latest build (`one-person-company-revenue-research-20260704.md`)
- `/one-person-revenue-evidence-refresh.md` -> latest build (`one-person-revenue-evidence-refresh-20260705.md`)
- `/one-person-feasibility-board.html` -> latest build (`one-person-feasibility-board-20260704.html`)

## Option A: GitHub Pages (free)

1. Create a new public repository, for example `openclaw-public-feed`.
2. Unzip this pack and push the contents to the repository root.
3. In repository Settings -> Pages, choose "Deploy from a branch",
   branch `main`, folder `/ (root)`.
4. The site becomes `https://<username>.github.io/openclaw-public-feed/`.

## Option B: Cloudflare Pages / Netlify Drop (free)

1. Go to Cloudflare Pages "Direct Upload" or https://app.netlify.com/drop.
2. Upload the unzipped folder.
3. The site gets a permanent `*.pages.dev` / `*.netlify.app` URL.

## After deploy (owner checklist)

1. Open `/mood-anchor.html` and `/index.html` on the new host and confirm
   they load.
2. Update `data/owned-public-feed-runtime.json` `baseUrl` to the new host
   so future generated documents point at stable URLs.
3. Re-run the free sample post flow with the stable URL, then record real
   24-hour metrics. Do not reuse the invalidated tunnel experiment.

## Boundaries

- Publishing this site is an owner action (external authority).
- No analytics scripts are included; traffic evidence comes from the
  hosting provider dashboard or owner-entered numbers only.
- Mood Anchor stays a free, non-medical support tool.
