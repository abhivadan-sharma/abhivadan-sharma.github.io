# CLAUDE.md - Portfolio Website Development Guide

## Project Overview
This is a Jekyll-based personal portfolio website for Abhivadan Sharma, deployed on GitHub Pages. The site showcases professional background, experience, and achievements with a modern, responsive design.

## Technology Stack
- **Jekyll**: Static site generator (v4.3.0)
- **Ruby**: Backend language with Bundler for dependency management
- **HTML5/CSS3/JavaScript**: Frontend technologies
- **GitHub Pages**: Hosting platform
- **Custom CSS**: No external CSS frameworks, custom responsive design

## Project Structure
```
├── _config.yml          # Jekyll configuration with SEO, plugins, collections
├── _layouts/            # Page templates
│   └── default.html     # Main layout with theme toggle, scroll-to-top
├── _includes/           # Reusable components
│   ├── header.html      # Site header
│   ├── navigation.html  # Navigation menu
│   ├── education.html   # Education section
│   ├── experience.html  # Work experience
│   ├── competencies.html # Skills display
│   └── business-impact.html # Projects/achievements
├── _data/               # Content data (YAML files)
│   ├── profile.yml      # Personal info, bio, links
│   ├── education.yml    # Educational background
│   ├── experience.yml   # Work experience
│   ├── competencies.yml # Technical skills
│   └── business_impact.yml # Projects and achievements
├── assets/
│   ├── css/main.css     # Main stylesheet (13.8KB)
│   └── js/main.js       # JavaScript functionality (10KB)
├── _sass/               # Sass partials (currently empty)
├── src/                 # Images and media files
├── index.md             # Main page content
└── index.html           # Alternative main page (currently empty)
```

## Key Features
- **Dark/Light Mode Toggle**: Theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **SEO Optimized**: Jekyll SEO plugin, proper meta tags, sitemap
- **Performance Optimized**: Compressed CSS, modern JavaScript
- **Accessibility**: ARIA labels, keyboard navigation support

## Development Commands
```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
# Access at: http://localhost:4000

# Build for production
bundle exec jekyll build
```

## Content Management
All content is managed through YAML files in `_data/`:

### profile.yml
- Personal title and bio
- Social links (LinkedIn)

### education.yml
- Educational qualifications
- Institutions and degrees

### experience.yml
- Work history
- Job titles and companies

### competencies.yml
- Technical skills
- Expertise areas

### business_impact.yml
- Projects and achievements
- Business impact metrics

## Jekyll Configuration
Key settings in `_config.yml`:
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-seo-tag
- **Markdown**: kramdown
- **Highlighter**: rouge
- **Collections**: projects (output: false)
- **SEO**: Author info, social links configured

## Styling Architecture
- **CSS Custom Properties**: Used for theming and consistency
- **No External Frameworks**: Pure CSS implementation
- **Theme Support**: Light/dark mode with CSS custom properties
- **Responsive**: Mobile-first design patterns

## JavaScript Features
- Theme toggle functionality
- Scroll-to-top button
- Smooth scrolling
- localStorage for theme persistence

## Git Status
- **Current Branch**: main
- **Modified Files**: _data/education.yml
- **Untracked Files**: index.html

## Deployment
- **Platform**: GitHub Pages
- **Auto-deployment**: Pushes to main branch trigger builds
- **Domain**: https://abhivadan-sharma.github.io

## Development Notes
- No package.json (Ruby/Jekyll project, not Node.js)
- Uses Gemfile for dependency management
- Jekyll cache in .jekyll-cache/ (excluded from Git)
- Built site outputs to _site/ (excluded from Git)

## Common Tasks
1. **Update Content**: Modify YAML files in `_data/`
2. **Style Changes**: Edit `assets/css/main.css`
3. **Layout Changes**: Modify files in `_includes/` or `_layouts/`
4. **New Features**: Add to `assets/js/main.js`
5. **SEO Updates**: Modify `_config.yml` social/author settings

## Testing
- Test locally with `bundle exec jekyll serve`
- Verify responsive design across devices
- Check theme toggle functionality
- Validate accessibility features

## Performance Considerations
- CSS is compressed (sass style: compressed)
- JavaScript uses modern ES6+ features
- Images should be optimized before adding to src/
- Consider lazy loading for future image additions