# Java Backend Developer Portfolio - 2025

A modern, responsive portfolio template designed specifically for Java Backend Developers, featuring clean UI/UX with animations and a dark/light mode toggle.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean interface with micro-animations and smooth transitions
- **Dark/Light Mode**: Toggle between dark and light themes with user preference saving
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Animated cards, skill badges, and contact form
- **Accessibility**: Built with accessibility in mind
- **Bootstrap 5**: Leverages the latest Bootstrap framework for responsive design
- **AOS Animation**: Smooth scroll animations
- **Custom JavaScript**: Enhanced interactivity and UX features
- **Optimized Assets**: Fast loading and performance

## File Structure

```
portfolio/
├── index.html            # Main HTML file
├── css/
│   └── style.css         # Custom styles
├── js/
│   └── main.js           # JavaScript functionality
├── images/
│   ├── profile.jpg       # Your profile picture
│   ├── project1.jpg      # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   └── hero-illustration.svg # Hero section illustration
└── README.md             # This file
```

## Getting Started

1. Clone or download this repository
2. Replace the placeholder images in the `images/` directory with your own:
   - `profile.jpg`: Your professional headshot
   - `project1.jpg`, `project2.jpg`, `project3.jpg`: Screenshots of your projects
   - `hero-illustration.svg`: A relevant illustration for your hero section
3. Edit the `index.html` file to personalize:
   - Your name and contact information
   - Project descriptions and links
   - Skills and certifications
   - Education and experience details
4. Customize the color scheme by modifying the CSS variables in `css/style.css`

## Customization

### Changing Colors

To customize the color scheme, modify the CSS variables in the `:root` section of `css/style.css`:

```css
:root {
    --primary: #1e88e5;      /* Main accent color */
    --primary-dark: #1565c0;  /* Darker accent for hover states */
    --secondary: #212121;     /* Secondary color */
    /* ... other variables ... */
}
```

### Adding Projects

To add more projects, duplicate the project card HTML structure in the Projects section of `index.html`:

```html
<div class="col-lg-4 col-md-6 mb-4">
    <div class="card project-card h-100">
        <img src="images/your-project-image.jpg" class="card-img-top" alt="Project Description">
        <div class="card-body">
            <h5 class="card-title">Project Name</h5>
            <p class="card-text">Description of your project...</p>
            <div class="tech-stack">
                <span class="badge rounded-pill bg-primary">Technology 1</span>
                <span class="badge rounded-pill bg-primary">Technology 2</span>
            </div>
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-sm btn-outline-primary me-2"><i class="fab fa-github me-1"></i> Code</a>
            <a href="#" class="btn btn-sm btn-primary"><i class="fas fa-external-link-alt me-1"></i> Demo</a>
        </div>
    </div>
</div>
```

### Adding Skills

To add more skills, simply add more `<div class="skill-item">Skill Name</div>` elements within the appropriate skill category in the Skills section.

## Browser Support

The portfolio is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

This template is optimized for performance:

- Minified CSS and JavaScript (in production)
- Optimized image loading
- Smooth animations with minimal impact on performance
- Lazy loading of images

## Deployment

You can deploy this portfolio to any web hosting service:

1. GitHub Pages (free and easy)
2. Netlify (free with custom domain support)
3. Vercel (free with custom domain support)
4. Any standard web hosting service

## License

This template is free to use for personal portfolios.

## Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [AOS Library](https://michalsnik.github.io/aos/) 