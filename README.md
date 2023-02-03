# 🚀 Getting Started

This is a project to get you started quickly with Nuxt 3 site development. It contains Tailwind CSS framework, Naive UI component library, Pinia store library, and several other useful libraries and modules that a frontend developer needs. Before you start, read the [Nuxt 3 documentation](https://v3.nuxtjs.org).

## Installing

Before you start working on a project, make sure you have the recommended toolset installed.
- **Node.js*** (Latest LTS version) 👉 **[Download](https://nodejs.org/en/)**
- **Visual Studio Code** 👉 **[Download](https://code.visualstudio.com/)**
- **Volar Extension** 👉 **[Install](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)**
- **Tailwind CSS IntelliSense** 👉 **[Install](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**
- **ESLint** 👉 **[Install](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**

*If Node.js is already installed, specify its version with the command `node --version`. If you are working on other projects that need an older version of Node.js, install [NVM](https://github.com/nvm-sh/nvm) or [NVM for Windows](https://github.com/coreybutler/nvm-windows) to use several versions of Node.

In the VSCode settings file *(press `Ctrl+,` and then, in the upper right corner, click on "Open Settings (JSON)")* it is advisable to specify the following:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
  "eslint.lintTask.enable": true,
  "eslint.alwaysShowStatus": true,
  "files.eol": "\n",
}
```

If automatic save fixes interfere with other projects, comment out the first line ("editor.formatOnSave") in the settings file.
When everything is ready, clone the project and install the dependencies:

```bash
# npm
npm install
```

## Development server

Start the development server at http://localhost:3000

```bash
npm run dev
```

## Production

Project assembly in production:

```bash
npm run build
```

More information can be found in [documentation](https://v3.nuxtjs.org/guide/deploy/presets).

# 🛠 Tools and technology
In addition to Nuxt 3, we use a collection of utilities for Vue, a CSS framework to speed up styling, and a UI library to avoid creating UI elements by hand. It's a good idea to read the documentation of these tools before you start, too.

- [VueUse](https://vueuse.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Naive UI](https://www.naiveui.com/en-US/os-theme)
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/)
- [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)
- [XIcons](https://www.xicons.org/#/)