# 教師個人簡介網站 - 巴洛克風格

一個使用 HTML、CSS、JavaScript 打造的華麗巴洛克風格單頁式教師簡介網站。

## 專案特色

- ✅ **純 Vanilla JavaScript**：無需框架，使用原生 JavaScript 動態生成內容
- 🎨 **巴洛克風格設計**：採用金色、深紅色配色，華麗裝飾邊框與襯線字體
- 📱 **完整 RWD 支援**：支援桌面、平板、手機等各種裝置
- ⚡ **高效能**：優化的程式碼，快速載入
- 🎯 **單頁式設計**：流暢的使用者體驗
- 🏛️ **巴洛克藝術元素**：裝飾性花紋、對稱設計、戲劇性光影效果

## 專案結構

```
test-vibe-coding/
├── index.html          # 主 HTML 文件
├── style.css           # 樣式文件（包含 RWD）
├── script.js           # JavaScript 邏輯（動態生成內容）
└── README.md           # 專案說明文件
```

## 功能介紹

### 1. 導航列
- 固定於頁面頂部，深色背景配金色邊框
- 平滑滾動至各區塊
- 金色文字與懸停發光效果

### 2. 英雄區塊（Hero Section）
- 深紅與酒紅色漸層背景
- 華麗的裝飾性字體（Cinzel Decorative）
- 金色標題與鑽石裝飾
- 奢華的 CTA 按鈕設計

### 3. 教師經歷區塊
- 使用 JavaScript 動態生成經歷卡片
- 米色背景配金色裝飾邊框
- 裝飾性角落符號
- 懸停時金色邊框發光效果

### 4. 課程介紹區塊
- 卡片式佈局（Grid Layout）
- 深色背景區塊
- 使用佔位符圖片（巴洛克配色漸層 + emoji）
- 雙線金色邊框裝飾
- 顯示課程時長與難度等級
- 響應式網格自動調整

## 如何使用

### 方法一：直接開啟
直接在瀏覽器中開啟 `index.html` 文件即可。

### 方法二：使用本地伺服器（推薦）
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (http-server)
npx http-server

# 使用 PHP
php -S localhost:8000
```

然後在瀏覽器訪問 `http://localhost:8000`

## 自訂內容

### 修改教師經歷
編輯 `script.js` 中的 `experiences` 陣列：

```javascript
const experiences = [
    {
        title: '職位名稱',
        period: '時間區間',
        description: '詳細描述'
    },
    // 新增更多經歷...
];
```

### 修改課程資訊
編輯 `script.js` 中的 `courses` 陣列：

```javascript
const courses = [
    {
        title: '課程名稱',
        description: '課程描述',
        duration: '課程時長',
        level: '難度等級',
        icon: '圖示 emoji'
    },
    // 新增更多課程...
];
```

### 修改配色
編輯 `style.css` 中的 CSS 變數（當前為巴洛克風格配色）：

```css
:root {
    --primary-color: #C9A961;      /* 金色 */
    --secondary-color: #8B0000;    /* 深紅色 */
    --accent-color: #DAA520;       /* 亮金色 */
    --burgundy: #6B1F3C;           /* 酒紅色 */
    --gold: #FFD700;               /* 純金色 */
    /* 自訂其他顏色... */
}
```

## 響應式斷點

- **桌面**：> 768px
- **平板**：481px - 768px
- **手機**：≤ 480px

## 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 設計風格

### 巴洛克藝術特色
- **配色方案**：金色 (#C9A961, #FFD700)、深紅色 (#8B0000)、酒紅色 (#6B1F3C)、深棕色
- **字體選擇**：
  - 標題：Cinzel Decorative（華麗裝飾字體）
  - 副標題：Cinzel（優雅襯線字體）
  - 內文：Crimson Text（易讀襯線字體）
  - 中文：Noto Serif TC（思源宋體）
- **裝飾元素**：
  - 雙線邊框與金色裝飾線
  - 鑽石符號（◆）與裝飾符號（◈, ❖）
  - 漸層光影效果
  - 對稱性設計
- **紋理與效果**：
  - 深色背景漸層
  - 金色發光效果
  - 陰影強化立體感

## 技術棧

- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations, Custom Properties)
- Vanilla JavaScript (ES6+)
- Intersection Observer API
- Google Fonts (Cinzel, Cinzel Decorative, Crimson Text, Noto Serif TC)

## 開發者

專案由 Claude Code 自動生成，基於現代化網頁開發最佳實踐。

## 授權

MIT License
