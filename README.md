# AltQ
 
🚀 AltQ – Alternative Question Enhancer Chrome Extension

AltQ is a lightweight Chrome extension designed to enhance browsing efficiency by injecting custom scripts into webpages, automating tasks, and providing a quick-access popup interface built with React. This is ideal for automating repetitive actions or interacting with sites more effectively.

✨ Features

🚀 Chrome extension with React-based popup

🧠 Content scripts for in-page interaction

🛠️ Background scripts for long-running tasks

⚙️ Options page (if needed)

📦 Built using Webpack, Babel, and TypeScript

🎨 SCSS styling for modern UI

🛠️ Tech Stack

React – Popup and component-based UI

TypeScript – Type-safe development

Webpack – Bundling and module management

SCSS – Styling

Chrome Extension APIs – Messaging, runtime, storage

📁 Folder Structure

AltQ/
├── public/                      # Static files (favicon, manifest.json)
├── src/
│   ├── content/                 # Content scripts injected into target sites
│   ├── background/              # Background service workers
│   ├── popup/                   # Popup HTML + React component
│   ├── options/                 # Options page UI (if any)
│   ├── styles/                  # CSS/SCSS files
│   ├── utils/                   # Helper scripts and utilities
│   └── index.tsx                # React entry point
├── package.json                 # Project dependencies and metadata
├── webpack.config.js            # Webpack bundling config
├── .babelrc                     # Babel transpilation rules
├── .editorconfig                # Editor formatting rules
├── .gitignore                   # Files to ignore in Git
└── README.md                    # You're reading it :)

🚧 Getting Started

Clone this repo

git clone https://github.com/Aaxhirrr/AltQ.git

Install dependencies

npm install

Build the extension

npm run build

Load it into Chrome

Go to chrome://extensions/

Enable Developer Mode

Click Load unpacked

Select the dist/ or build/ folder

🧪 Development

Start in development mode with hot reload:

npm run start

Use src/content for content scripts, and src/popup for the popup UI.

🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

🧼 License

MIT © Aashir JavedBased on original scaffolding by Subodh Kamble

🔍 References

Chrome Extension Docs

React Docs

Webpack Docs

