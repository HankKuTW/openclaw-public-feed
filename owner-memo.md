# Owner Memo — 需要 Hank 動手的事項

> 常設清單。OpenClaw/Claude 持續推進不等待；每項寫清楚動作、成本、解鎖效果。
> 完成後把該項移到底部的 Done 區。最後更新：2026-07-05 13:10 CST（15:19 手冊）

## 🔴 高槓桿（任一項完成即開始有流量）

1. **開 Bluesky 帳號＋App Password**（5 分鐘，免費）
   - bsky.app 註冊 → Settings → App Passwords → 新增
   - 把 `BLUESKY_HANDLE=你的.bsky.social` 和 `BLUESKY_APP_PASSWORD=xxxx` 加進 `~/.openclaw/.env`
   - 效果：我從此可自主發文（發文管線已就緒並測試過）
2. **手動發 Show HN**（5 分鐘）
   - 照 [owner-external-posting-pack-20260704.md](owner-external-posting-pack-20260704.md) 的 Priority 1
   - URL：`https://hankkutw.github.io/openclaw-public-feed/listing-friction-grader.html`
   - 發完把貼文網址貼給我或發到 Telegram，我開始追蹤
3. **X API 儲值**（比想像便宜：pay-per-use 無月費）
   - @mr_crtee 的 API 回 402 CreditsDepleted；儲值後我可自動發文（已測到最後一步）
   - 2026 費率：$0.015/純文字貼文、$0.20/含連結貼文（來源：docs.x.com pricing）
   - 估算：儲 $5 ≈ 25 篇含連結貼文，足夠一個月的發文量

## 🟡 中槓桿（收入路徑升級）

4. **Gumroad 開 $79「Digital Product Listing Audit」商品**
   - 現在 audit 是 email 請求制（可運作但多一步摩擦）
   - 開好後給我商品網址，我重生成 offer 頁改成一鍵結帳
5. **連接 Claude-in-Chrome 擴充**
   - 效果：我可代操作需登入的網站（Uneed 提交、Indie Hackers 發文等）

4b. **貼上改寫後的 Gumroad 文案**（~10 分鐘）
   - 依 [gumroad-listing-self-audit-20260705.md](gumroad-listing-self-audit-20260705.md) 的 paste-ready 區塊
   - 用自家 grader 標準審計的結果：三個 listing 的 proof 和 CTA 都偏弱，改完轉換率體質更好

## 🟢 低槓桿（品質提升）

6. **GoatCounter 註冊**（免費）— 網站才有真實瀏覽數（GitHub Pages 無分析）
7. **自訂網域**（~$10/年）— 品牌與 SEO
8. **15:19 之後**：把 Gumroad 後台數字告訴我（Telegram 回覆即可），格式不拘，需要：
   - 免費樣品頁 views / downloads（24h 內）
   - 三個付費 kit 的 views / 銷售（24h 內）
   - 我會用 `free-sample-traffic -- metrics` 記錄；量不到的欄位（GitHub Pages 的貼文曝光）誠實記 0 並在帳本註明「不可測量，未安裝分析」

9. **Gateway 崩潰循環處置決定**（重要）
   - 07-05 一天內 gateway 崩潰重啟 **15 次**（每輪長到 1.3G＋撞滿 768M swap 上限→全機卡頓→被殺→重啟）
   - 我已停止它並加上斷路器（10 分鐘內崩 3 次自動停）；本地 systemd timers 持續代行公司迴圈
   - 你的決定：(a) 就這樣用本地迴圈跑（現況穩定）(b) 換更大記憶體的機器跑 gateway (c) 找 OpenClaw 的 hook worker 並發設定調降
   - 手動重啟：`systemctl --user start openclaw-gateway`

## ✅ Done
- 2026-07-05 13:47 social-post skill 的壞路徑全部修復（twitter.sh + farcaster.sh 都指向了別人的家目錄）；Bluesky 走純 Node API 路徑不受影響，憑證就緒即可用

- 2026-07-05 全權發文授權已記錄；X 通道已測試（卡在儲值）
- 2026-07-05 金流斷點修復（audit email 請求路徑上線）
- 2026-07-05 首頁 hub 接通付費 kit 結帳連結
