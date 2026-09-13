# 蔡嘉仁 Jia-Ren Tsai｜個人學術網站

這是一個可直接發布至 GitHub Pages 的雙語響應式學術網站，包含個人資料、研究方向、論文、課程、教材與聯絡資訊。

## 已設定的正式資料

- 姓名：蔡嘉仁／Jia-Ren Tsai
- 職稱：Associate Professor
- 單位：Department of Statistics and Information Science, Fu Jen Catholic University
- 信箱：jrt141628@gmail.com
- 原個人網站：https://sites.google.com/view/jrtsai/

## 日後新增論文

開啟 `script.js`，分別找到中文與英文區塊中的：

```js
publications: [],
```

將它改成：

```js
publications: [
  {
    year: "2026",
    title: "論文題目",
    meta: "作者、期刊名稱、卷期、頁碼或 DOI",
  },
],
```

每篇論文以一組 `{ ... }` 表示；多篇論文之間以逗號分隔。網站會自動產生「複製引用」按鈕。

## 日後新增課程教材

1. 將 PDF、PPTX 或其他教材放入 `materials` 資料夾。
2. 在 `script.js` 找到對應課程，在 `topics` 後加入：

```js
materials: [
  {
    label: "第一章投影片",
    url: "materials/chapter-1.pdf",
  },
],
```

教材連結會自動顯示在對應的課程卡片中。中文與英文內容可分別設定不同的連結名稱。

## 發布至 GitHub Pages

1. 建立新的 GitHub repository。
2. 將本資料夾內的所有檔案上傳至 `main` branch。
3. 進入 **Settings → Pages**。
4. 在 **Build and deployment** 的 **Source** 選擇 **Deploy from a branch**。
5. 選擇 `main` 與 `/ (root)`，然後儲存。

GitHub 完成部署後，Pages 設定頁面會顯示公開網址。

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可。網站沒有外部程式依賴，也不需要執行建置指令。
