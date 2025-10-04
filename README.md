# Simple Blog Website

A clean, responsive blog website built with pure HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Modal popups for blog posts
  - Smooth scrolling navigation
  - Animated statistics counters
  - Contact form with validation
- **Blog Management**: 
  - Dynamic post loading
  - Category system
  - View tracking
  - Read time estimation
- **Content Organization**:
  - `videos/` directory for video content
  - `text-files/` directory for text-based content

## File Structure

```
simplewebsite/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── videos/             # Directory for video files
│   └── README.md       # Video usage guide
├── text-files/         # Directory for text content
│   ├── sample-post.txt
│   └── blog-ideas.txt
└── README.md           # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. The blog will load with sample posts
3. Click on any post to read the full content
4. Use the navigation to explore different sections

## Customization

### Adding New Posts
Edit the `loadSamplePosts()` function in `script.js` to add new blog posts:

```javascript
{
    id: 9,
    title: "Your Post Title",
    excerpt: "Brief description...",
    content: "Full post content...",
    category: "Category",
    date: "2024-01-20",
    readTime: "5 min read",
    views: 0,
    image: "📝"
}
```

### Styling
Modify `styles.css` to change colors, fonts, layout, and other visual elements.

### Functionality
Update `script.js` to add new features like:
- Search functionality
- Comment system
- Social sharing
- RSS feed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
