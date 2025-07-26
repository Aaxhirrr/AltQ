# 🚀 AltQ – Alternative Question Enhancer Chrome Extension

AltQ is a lightweight Chrome extension that enhances browsing efficiency by injecting custom scripts into webpages, automating tasks, and providing a quick-access popup interface built with React. It streamlines repetitive actions and improves user interaction on supported sites.

---

## ✨ Features

* 🚀 **React Popup UI**: Seamless, component-driven popup interface.
* 🧠 **Content Scripts**: Injects scripts into matching pages for dynamic behavior.
* 🔄 **Background Service Worker**: Handles long-running tasks and messaging.
* ⚙️ **Options Page**: Configurable settings (if applicable).
* 📦 **Modern Tooling**: Built with Webpack, Babel, and TypeScript.
* 🎨 **SCSS Styling**: Modular, maintainable stylesheets.

---

## 🛠️ Tech Stack

* **React** for UI components
* **TypeScript** for type safety
* **Webpack** for bundling
* **Babel** for transpilation
* **SCSS** for styling
* **Chrome Extension APIs (MV3)** for browser integration

---

## 📁 Folder Structure

```text
AltQ/
├── public/                   # Static assets (manifest.json, icons)
├── src/                      # Source code
│   ├── content/              # Content scripts (e.g., skipAd.js)
│   ├── background/           # Background service worker (e.g., background.js)
│   ├── popup/                # React popup components (popup.html, popup.js)
│   ├── options/              # Options page UI (if implemented)
│   ├── styles/               # SCSS/CSS files
│   ├── utils/                # Helper modules and utilities
│   └── index.tsx             # React entrypoint
├── dist/                     # Compiled extension files (auto-generated)
├── package.json              # NPM scripts & dependencies
├── webpack.config.js         # Webpack configuration
├── .babelrc                  # Babel config
├── .editorconfig             # Editor config
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## 🚧 Getting Started

Follow these steps to run and test the extension locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Aaxhirrr/AltQ.git
   cd AltQ
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the extension**

   ```bash
   npm run build
   ```

4. **Load into Chrome**

   * Open `chrome://extensions/` in your browser.
   * Enable **Developer mode**.
   * Click **Load unpacked** and select the `dist/` folder.

---

## 🧪 Development Mode

For live reloading during development:

```bash
npm run start
```

* Edits in `src/` will rebuild and reload the extension.
* Use `src/content` for page scripts and `src/popup` for popup UI.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request for enhancements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Resources

* [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
* [React Documentation](https://reactjs.org/)
* [Webpack Documentation](https://webpack.js.org/)
