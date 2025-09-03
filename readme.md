# Abhivadan Sharma - Portfolio Website

A modern, responsive portfolio website built with Jekyll, featuring dark/light mode theming, smooth animations, and a professional design inspired by contemporary web standards.

## Features

- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design** - Card-based layout with gradients and smooth animations
- ⚡ **Fast Performance** - Optimized CSS and JavaScript with lazy loading
- 🧭 **Smooth Navigation** - Sticky navigation with scroll highlighting
- 🎯 **SEO Optimized** - Built-in Jekyll SEO plugin support
- ♿ **Accessible** - ARIA labels and keyboard navigation support

## Tech Stack

- **Jekyll** - Static site generator
- **HTML5** - Modern semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript** - ES6+ with modern browser APIs
- **GitHub Pages** - Hosting (Jekyll native support)

## Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
├── _includes/           # Reusable components
├── _data/              # Content data files
├── assets/
│   ├── css/main.css    # Main stylesheet
│   └── js/main.js      # JavaScript functionality
├── src/                # Images and media
└── index.md            # Main page
```

## Local Development

1. Install Jekyll and dependencies:
   ```bash
   gem install jekyll bundler
   bundle install
   ```

2. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

3. Open `http://localhost:4000` in your browser

## Deployment

This site is configured for GitHub Pages deployment. Simply push to the main branch and GitHub will automatically build and deploy the site.

## Content Management

All content is managed through YAML files in the `_data/` directory:

- `profile.yml` - Personal information and bio
- `education.yml` - Educational background
- `experience.yml` - Work experience
- `competencies.yml` - Skills and expertise
- `business_impact.yml` - Professional projects and achievements
- `personal_projects.yml` - Personal development projects and side projects

## Customization

### Colors and Theming
Modify CSS custom properties in `assets/css/main.css` under the `:root` selector.

### Content
Update the YAML files in `_data/` directory to change content.

### Layout
Modify the includes in `_includes/` to change the structure and presentation.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

Personal portfolio - All rights reserved.