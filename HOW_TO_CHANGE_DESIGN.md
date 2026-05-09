# 如何更换设计系统

## 方法 1：修改 DESIGN.md（推荐）

`DESIGN.md` 是设计系统的源文件，修改它会自动更新整个网站。

### 步骤：

1. **打开 DESIGN.md**
   ```bash
   # 文件位置
   /root/.openclaw/workspace/axd-design-lab/DESIGN.md
   ```

2. **修改颜色令牌**
   ```yaml
   colors:
     background: "#新背景色"
     surface: "#新表面色"
     primary: "#新主色"
     secondary: "#新次要色"
     accent: "#新强调色"
   ```

3. **修改字体**
   ```yaml
   typography:
     display:
       fontFamily: "新字体"
       fontSize: 60px
       fontWeight: 400
   ```

4. **修改圆角和间距**
   ```yaml
   rounded:
     sm: 4px
     md: 8px
     lg: 16px
     full: 999px
   
   spacing:
     sm: 8px
     md: 16px
     lg: 24px
   ```

5. **重新生成网站**
   - 告诉我你想要的新设计系统
   - 我会根据 DESIGN.md 更新 index.html

---

## 方法 2：直接修改 index.html

如果你熟悉 CSS，可以直接编辑 HTML 文件中的样式。

### 关键位置：

1. **Tailwind 配置**（第 15-35 行）
   ```javascript
   tailwind.config = {
     theme: {
       extend: {
         colors: {
           background: '#100F09',  // 修改这里
           primary: '#F5F4EF',      // 修改这里
           // ...
         }
       }
     }
   }
   ```

2. **CSS 变量**（第 40-80 行）
   ```css
   body {
     background-color: #100F09;  // 修改这里
     color: #F5F4EF;              // 修改这里
   }
   ```

3. **组件样式**（第 80-200 行）
   - `.btn-primary` - 按钮样式
   - `.service-card` - 卡片样式
   - `.work-card` - 作品卡片样式

---

## 方法 3：使用 design.md CLI 工具

```bash
# 进入设计系统目录
cd ~/.openclaw/workspace/skills/design-md

# 验证 DESIGN.md
npx @google/design.md lint DESIGN.md

# 导出为 Tailwind 配置
npx @google/design.md export --format tailwind DESIGN.md > tailwind.config.js

# 导出为 CSS
npx @google/design.md export --format css-tailwind DESIGN.md > theme.css
```

---

## 常见设计系统示例

### 1. Material Design（Google）
```yaml
colors:
  background: "#FFFFFF"
  surface: "#F5F5F5"
  primary: "#6200EE"
  secondary: "#03DAC6"
  error: "#B00020"
typography:
  fontFamily: "Roboto, sans-serif"
```

### 2. Apple Design
```yaml
colors:
  background: "#F5F5F7"
  surface: "#FFFFFF"
  primary: "#007AFF"
  secondary: "#5856D6"
typography:
  fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display"
```

### 3. 深色科技风
```yaml
colors:
  background: "#0A0A0F"
  surface: "#12121A"
  primary: "#FFFFFF"
  accent: "#00D4FF"
typography:
  fontFamily: "Inter, sans-serif"
```

### 4. 温暖自然风
```yaml
colors:
  background: "#FAF7F2"
  surface: "#FFFFFF"
  primary: "#2C1810"
  accent: "#D4A574"
typography:
  fontFamily: "Georgia, serif"
```

---

## 快速更换步骤

1. **告诉我你想要的设计风格**
   - 参考网站（如：apple.com, stripe.com, linear.app）
   - 或描述风格（如：极简白、深色科技、温暖自然）

2. **我帮你更新**
   - 修改 DESIGN.md
   - 更新 index.html
   - 验证效果

3. **预览新设计**
   - 访问 https://axd-design-lab.loca.lt
   - 查看效果

---

## 注意事项

- **颜色对比度**：确保文字和背景有足够对比度
- **字体加载**：使用 Google Fonts 或系统字体
- **响应式**：测试移动端显示效果
- **性能**：避免过多大图片和复杂动画

---

## 需要帮助？

直接告诉我：
1. "换成 Apple 风格"
2. "参考 Stripe 的设计"
3. "我想要极简白色风格"
4. 或发送参考网站链接
