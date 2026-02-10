# HTML Template Generator

Professional HTML templates for emails, invoices, reports, and more with live preview and development tools.

## 🎨 Templates Included

- **Email Template** - Responsive email for newsletters and marketing
- **Invoice Template** - Professional invoicing with itemized billing
- **Report Template** - Business report with charts and data tables

## ✨ Features

- 🔄 Live preview with auto-reload
- 📧 Email-ready with CSS inlining
- 🖨️ Print-optimized templates
- 📱 Responsive design
- ⚡ Simple workflow

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

This will open your default browser with the email template. Any changes you make to the HTML files will automatically reload the page.

### 3. Build for Production

```bash
npm run build
```

This will inline all CSS styles and create a production-ready email template in the `dist/` folder.

## 📁 Project Structure

```
html-template/
├── templates/
│   ├── email-template.html     # Email template
│   ├── invoice-template.html   # Invoice template
│   └── report-template.html    # Report template
├── dist/
│   └── email-template.html     # Production email (inlined CSS)
├── index.html                  # Gallery view
├── package.json
└── README.md
```

## Email Development Tips

### 1. Use Tables for Layout
Email clients have inconsistent CSS support. Use `<table>` elements for reliable layouts.

### 2. Inline CSS
Most email clients strip out `<style>` tags. Use the build command to inline your CSS before sending.

### 3. Test Across Clients
Test your emails in different email clients (Gmail, Outlook, Apple Mail, etc.) as they render HTML differently.

### 4. Keep It Simple
- Avoid JavaScript (it won't work)
- Use web-safe fonts
- Keep images optimized
- Use absolute URLs for images and links

### 5. Mobile-First
Many people read emails on mobile devices. Always test responsive designs.

## Useful Resources

- [Can I Email](https://www.caniemail.com/) - CSS and HTML support in email clients
- [Really Good Emails](https://reallygoodemails.com/) - Email design inspiration
- [Litmus](https://www.litmus.com/) - Email testing service

## Customization

Edit `src/email-template.html` to create your own email designs. The template includes:

- Responsive design
- Header section
- Content area with text and buttons
- Footer with links

Change colors, text, layout, and styling to match your brand!

## 📋 Commands Reference

- `npm start` - Start development server with live reload
- `npm run build` - Build production-ready email with inlined CSS

## 🎯 Use Cases

### Email Template
Perfect for:
- Marketing newsletters
- Welcome emails
- Product announcements
- Transactional emails

### Invoice Template
Great for:
- Service invoices
- Product billing
- Freelance work
- Professional quotes

### Report Template
Ideal for:
- Quarterly business reports
- Performance reviews
- Market analysis
- Executive summaries

## 💡 Tips

1. **Email Development**: Use the build command before sending emails to ensure CSS is inlined
2. **Printing**: Press Ctrl/Cmd+P in any template to print or save as PDF
3. **Customization**: All templates use inline styles and tables for maximum compatibility
4. **Testing**: Test emails in different clients (Gmail, Outlook, etc.)

Happy template building! 🎨
# html-template-preview
