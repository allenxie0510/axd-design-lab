# 🚀 部署指南

## 方式一：部署到 Vercel（推荐）

### 1. 创建 GitHub 仓库

在 GitHub 上创建新仓库，然后推送代码：

```bash
git remote add origin https://github.com/YOUR_USERNAME/axd-design-lab.git
git branch -M main
git push -u origin main
```

### 2. 部署到 Vercel

**方法 A：Vercel CLI**
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd axd-design-lab
vercel --prod
```

**方法 B：GitHub 集成（推荐）**
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库 `axd-design-lab`
4. 配置：
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
5. 点击 "Deploy"

### 3. 绑定自定义域名

1. 在 Vercel 控制台，进入项目设置
2. 点击 "Domains"
3. 添加你的域名
4. 按照提示配置 DNS 记录

---

## 方式二：部署到 Netlify

### 1. 构建项目

```bash
cd axd-design-lab
npm install
npm run build
```

### 2. 部署

**方法 A：Netlify CLI**
```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod --dir=out
```

**方法 B：拖拽部署**
1. 访问 [netlify.com](https://netlify.com)
2. 将 `out` 文件夹拖拽到部署区域

---

## 方式三：部署到自有服务器

### 1. 构建项目

```bash
cd axd-design-lab
npm install
npm run build
```

### 2. 上传文件

将 `out` 文件夹中的所有文件上传到你的服务器：

```bash
# 使用 rsync
rsync -avz out/ user@your-server.com:/var/www/html/

# 或使用 scp
scp -r out/* user@your-server.com:/var/www/html/
```

### 3. 配置 Web 服务器

**Nginx 配置示例：**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 本地开发

```bash
cd axd-design-lab

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览构建结果
npx serve out
```

---

## 项目结构

```
axd-design-lab/
├── app/                    # Next.js 页面
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 布局
│   ├── globals.css        # 全局样式
│   ├── works/
│   │   ├── page.tsx       # 作品列表
│   │   └── [id]/
│   │       └── page.tsx   # 作品详情
│   └── admin/
│       └── page.tsx       # 后台管理
├── components/            # 组件
├── data/
│   └── works.json         # 作品数据
├── out/                   # 构建输出（静态文件）
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 技术栈

- **Next.js 14** - React 框架
- **React + TypeScript** - 前端开发
- **Tailwind CSS** - 样式
- **静态导出** - 无需服务器，可部署到任何静态托管

---

## 注意事项

1. 本项目使用 Next.js 静态导出（`output: 'export'`）
2. 所有页面在构建时预渲染为静态 HTML
3. 后台管理页面使用客户端 JavaScript（`'use client'`）
4. 数据存储在 `data/works.json` 中，实际使用时需要后端 API
