const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('.'));

// API endpoint to get list of templates
app.get('/api/templates', (req, res) => {
    const templatesDir = path.join(__dirname, 'templates');
    
    try {
        const files = fs.readdirSync(templatesDir);
        const templates = [];

        files.forEach(file => {
            if (file.endsWith('.html')) {
                const filePath = path.join(templatesDir, file);
                const content = fs.readFileSync(filePath, 'utf8');
                
                // Extract title from HTML
                const titleMatch = content.match(/<title>(.*?)<\/title>/i);
                const title = titleMatch ? titleMatch[1] : file.replace('.html', '').replace(/-/g, ' ');
                
                // Extract description from meta description tag
                let description = '';
                const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
                if (metaDescMatch) {
                    description = metaDescMatch[1];
                }
                
                // Extract keywords/tags from meta keywords tag
                let tags = ['HTML'];
                const metaKeywordsMatch = content.match(/<meta\s+name=["']keywords["']\s+content=["'](.*?)["']/i);
                if (metaKeywordsMatch) {
                    tags = metaKeywordsMatch[1].split(',').map(tag => tag.trim());
                }
                
                // Extract icon/emoji from meta tag (custom: data-icon)
                let icon = '📄';
                const metaIconMatch = content.match(/<meta\s+name=["']icon["']\s+content=["'](.*?)["']/i);
                if (metaIconMatch) {
                    icon = metaIconMatch[1];
                }
                
                templates.push({
                    filename: file,
                    path: `templates/${file}`,
                    title: title,
                    icon: icon,
                    description: description,
                    tags: tags
                });
            }
        });

        res.json(templates);
    } catch (error) {
        console.error('Error reading templates:', error);
        res.status(500).json({ error: 'Failed to load templates' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 HTML Template Generator`);
    console.log(`📁 Server running at: http://localhost:${PORT}`);
    console.log(`🎨 Open your browser to see the gallery!\n`);
});
