# Zhihu Auto Theme (Tampermonkey)

让知乎跟随系统深浅色模式自动切换。

脚本通过同步 URL 参数 `theme=dark` 或 `theme=light` 实现主题切换：
- 系统深色 -> `?theme=dark`
- 系统浅色 -> `?theme=light`

## 自动安装

[![Install with Tampermonkey](https://img.shields.io/badge/Tampermonkey-Install%20Script-00485B?logo=tampermonkey&logoColor=white)](https://raw.githubusercontent.com/Cypressca/zhihu-auto-theme/main/zhihu-auto-theme.user.js)

点击按钮后，Tampermonkey 会弹出安装页面。

## 自动更新

本脚本已包含以下元数据，支持 Tampermonkey 自动检查更新：
- `@updateURL`
- `@downloadURL`

当你在 GitHub 更新 `zhihu-auto-theme.user.js` 并提升 `@version` 后，Tampermonkey 会按设置自动发现新版本。

## 适用范围

- `https://zhihu.com/*`
- `https://*.zhihu.com/*`

## 开发

本项目核心文件：
- `zhihu-auto-theme.user.js`
