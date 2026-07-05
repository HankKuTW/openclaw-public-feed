# Revenue Handoff Index - 2026-07-04

Purpose: give OpenClaw Revenue Ops a single local index for owner-reviewed manual publishing handoffs. These files move the portfolio closer to legal revenue without granting OpenClaw external account authority.

Queue summary:

- Ready-to-list handoffs: 5
- Published paid products already recorded: 3
- Blocked local packages: 0
- Gross ready-queue list price: $95
- Source queue: `docs/inquiry-ops/revenue-queue-20260704.md`
- Copy-ready upload pack index: `docs/inquiry-ops/listing-upload-pack-index-20260704.md`
- Manual publish batch: `docs/inquiry-ops/manual-publish-batch-20260704.md`
- Manual publish batch CSV: `docs/inquiry-ops/manual-publish-batch-20260704.csv`
- Revenue shopfront: `docs/inquiry-ops/revenue-shopfront-20260704.html`
- Revenue offer finder: `docs/inquiry-ops/revenue-offer-finder-20260704.html`
- Revenue buyer decision guide: `docs/inquiry-ops/revenue-buyer-decision-guide-20260704.html`
- Live revenue traffic board: `docs/inquiry-ops/live-revenue-traffic-board-20260704.md`
- Revenue Ops sprint board: `docs/inquiry-ops/revenue-ops-sprint-20260704.md`
- Owner publish cockpit index: `docs/inquiry-ops/owner-publish-cockpit-index-20260704.html`
- First owner publish cockpit: `docs/inquiry-ops/owner-publish-cockpit-ai-digital-product-terms-license-kit-20260704.html`
- Revenue activation cockpit: `docs/inquiry-ops/revenue-activation-cockpit-20260704.html`
- Bundle offer handoff: `docs/inquiry-ops/bundle-offer-ai-digital-product-launch-ops-20260704.md`
- Post-publish traffic pack index: `docs/inquiry-ops/post-publish-traffic-pack-index-20260704.md`
- Post-publish metrics ledger: `docs/inquiry-ops/post-publish-metrics-ledger-20260704.md`
- One-person multi-agent order: `docs/inquiry-ops/openclaw-one-person-multi-agent-order-20260704.md`
- Publisher console HTML: `dist/public-feed/publisher-console.html`

## Priority Order

1. `AI Digital Product Terms & License Kit`
   - Handoff: `docs/inquiry-ops/revenue-handoff-ai-digital-product-terms-license-kit-20260704.md`
   - Upload pack: `docs/inquiry-ops/listing-upload-pack-ai-digital-product-terms-license-kit-20260704.md`
   - Reason: clearest buyer pre-launch need, lower outcome-claim risk, and strongest fit with existing published listing/support products.

2. `AI Digital Product Pricing Strategy Kit`
   - Handoff: `docs/inquiry-ops/revenue-handoff-ai-digital-product-pricing-strategy-kit-20260704.md`
   - Upload pack: `docs/inquiry-ops/listing-upload-pack-ai-digital-product-pricing-strategy-kit-20260704.md`
   - Reason: useful after terms are clear, but public copy must avoid financial-advice or conversion-certainty framing.

3. `AI Digital Product Marketing Playbook Kit`
   - Handoff: `docs/inquiry-ops/revenue-handoff-ai-digital-product-marketing-playbook-kit-20260704.md`
   - Upload pack: `docs/inquiry-ops/listing-upload-pack-ai-digital-product-marketing-playbook-kit-20260704.md`
   - Reason: useful once a listing exists, but public copy must keep non-spam and no-traffic-certainty boundaries visible.

4. `AI Product Launch Email Kit`
   - Handoff: `docs/inquiry-ops/revenue-handoff-ai-product-launch-email-kit-20260704.md`
   - Upload pack: `docs/inquiry-ops/listing-upload-pack-ai-product-launch-email-kit-20260704.md`
   - Reason: useful for launch operators, but must stay manual and avoid open-rate, sales, or conversion outcome claims.

5. `AI Digital Product Metrics & Iteration Kit`
   - Handoff: `docs/inquiry-ops/revenue-handoff-ai-digital-product-metrics-iteration-kit-20260704.md`
   - Upload pack: `docs/inquiry-ops/listing-upload-pack-ai-digital-product-metrics-iteration-kit-20260704.md`
   - Reason: strongest after real traffic or sales signals exist; keep analytics, growth, and platform-compliance boundaries visible.

## Owner Proxy Direction

OpenClaw can prepare drafts, QA ZIPs, verify links, and update local handoff files. OpenClaw must stop before logging in, creating public pages, changing price/account/payment/tax settings, publishing, posting, emailing, DMing, or making real-world commitments.

Use `docs/inquiry-ops/openclaw-one-person-multi-agent-order-20260704.md` to coordinate the one-person company departments. Revenue Ops uses `docs/inquiry-ops/revenue-shopfront-20260704.html` as the buyer-facing live-products entrance, `docs/inquiry-ops/revenue-offer-finder-20260704.html` as the buyer-facing intent router, `docs/inquiry-ops/revenue-buyer-decision-guide-20260704.html` as the buyer-facing comparison guide, `docs/inquiry-ops/live-revenue-traffic-board-20260704.md` as the Marketing Desk manual traffic board for the three already-live products, `docs/inquiry-ops/revenue-ops-sprint-20260704.md` as the active publish sprint board, `docs/inquiry-ops/owner-publish-cockpit-index-20260704.html` as the all-products owner cockpit index, and `docs/inquiry-ops/revenue-activation-cockpit-20260704.html` as the URL backfill and post-publish activation surface. The first product cockpit remains the starting handoff for `AI Digital Product Terms & License Kit`. Codex acts as owner proxy for internal direction only; external authority actions remain owner-only.

## Live Product Traffic Board

- Targets: 3 already published paid products.
- Board: `docs/inquiry-ops/live-revenue-traffic-board-20260704.md`
- Command: `npm run live-revenue-traffic-board -- --date 20260704 --output docs/inquiry-ops/live-revenue-traffic-board-20260704.md --public-base-url https://red-mole-94.loca.lt`
- Use for owner-reviewed manual distribution drafts that point to live Gumroad listings, the offer finder, the buyer decision guide, or the shopfront. Do not auto-send, auto-post, schedule, cold DM, scrape contacts, or post where self-promotion is prohibited.

## Higher-AOV Bundle Draft

- Bundle: `AI Digital Product Launch Ops Bundle`
- Suggested price: `$59`
- Component total if purchased separately: `$95`
- Handoff: `docs/inquiry-ops/bundle-offer-ai-digital-product-launch-ops-20260704.md`
- Command: `npm run bundle-offer -- --date 20260704 --price 59 --output docs/inquiry-ops/bundle-offer-ai-digital-product-launch-ops-20260704.md`
- Use only as a manual owner-reviewed bundle or upsell draft. Do not activate platform bundle mechanics automatically.

## Post-Publish Traffic Packs

- Targets: all 5 ready-to-list products.
- Handoff index: `docs/inquiry-ops/post-publish-traffic-pack-index-20260704.md`
- Command: `npm run post-publish-traffic-pack -- --date 20260704 --all --output-dir docs/inquiry-ops --index-output docs/inquiry-ops/post-publish-traffic-pack-index-20260704.md --public-base-url https://red-mole-94.loca.lt`
- Use the external offer finder as the general buyer entry point and the buyer decision guide for comparison traffic. Use the live revenue traffic board for the 3 already-published products. Use a matching product pack only after the owner publishes and records that public listing URL. Do not auto-send, auto-post, cold DM, scrape contacts, or post where self-promotion is prohibited.

## Post-Publish Metrics Ledger

- Ledger: `docs/inquiry-ops/post-publish-metrics-ledger-20260704.md`
- Command: `npm run post-publish-metrics-ledger -- --date 20260704 --output docs/inquiry-ops/post-publish-metrics-ledger-20260704.md --records data/post-publish-metrics-ledger.json`
- Use after the owner records a public listing URL and the 24-hour traffic review is ready. Record views, clicks, downloads, purchases, revenue, and refunds_or_support_questions. Do not auto-change pricing or account settings from metrics.

After the owner manually publishes any product, record the public URL in `data/gumroad-portfolio-status.json`, then rerun:

```bash
npm run portfolio-inventory -- --json
npm run revenue-queue -- --json
npm run post-publish-metrics-ledger -- --date 20260704 --output docs/inquiry-ops/post-publish-metrics-ledger-20260704.md --records data/post-publish-metrics-ledger.json
npm run company-dashboard -- --html --lang zh-tw --with-readiness
```
