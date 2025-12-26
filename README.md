# IRCA Training Website

A modern, professional website for IRCA (International Register of Certificated Auditors) training programs covering ISO standards, NEBOSH, PECB, and CSR/RSE 26000 certifications.

## Features

- **Comprehensive Training Programs**: Covers all major ISO standards and certification programs
  - ISO 9001 (Quality Management)
  - ISO 14001 (Environmental Management)
  - ISO 45001 (Occupational Health & Safety)
  - ISO 50001 (Energy Management)
  - ISO 22000 (Food Safety Management)
  - ISO 21001 (Educational Organizations)
  - CSR/RSE 26000 (Social Responsibility)
  - NEBOSH (Health & Safety Excellence)
  - PECB (Professional Excellence)

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, form validation, and dynamic navigation
- **User-Friendly**: Easy navigation and clear information hierarchy

## Getting Started

### Prerequisites

No special prerequisites needed! This is a static website that runs entirely in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use.

### Local Development

For a better development experience, you can use a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server
```

#### Using VS Code:
Install the "Live Server" extension and right-click on `index.html` to select "Open with Live Server".

## File Structure

```
Bimcot/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
├── logo.png        # Company logo (add your logo file here)
└── README.md       # This file
```

## Customization

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... other variables */
}
```

### Logo
To add your company logo:
1. Place your logo image file in the root directory and name it `logo.png`
2. Supported formats: PNG, JPG, SVG (recommended: PNG with transparent background)
3. Recommended size: Height of 45-60px, width proportional to your logo
4. If the logo file is not found, the site will automatically show "BIMCOT" as text

### Content
- Edit `index.html` to update text content, add sections, or modify structure
- Update contact information in the contact section
- Modify course descriptions and features
- Update the logo file path in `index.html` (line 19) if using a different filename or location

### Styling
- All styles are in `styles.css`
- The design uses CSS Grid and Flexbox for layout
- Responsive breakpoints are set at 768px and 480px

## Features in Detail

### Navigation
- Fixed navigation bar that changes on scroll
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Active link highlighting based on scroll position

### Hero Section
- Eye-catching gradient background
- Call-to-action buttons
- Scroll indicator animation

### Course Cards
- Hover effects with elevation
- Feature lists with checkmarks
- Direct links to contact form

### Contact Form
- Form validation
- Course selection dropdown
- Responsive design

### Animations
- Fade-in animations on scroll
- Smooth transitions
- Hover effects on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential improvements you could add:
- Backend integration for form submissions
- Course registration system
- User authentication
- Course calendar/scheduling
- Payment integration
- Blog/news section
- Testimonials section
- FAQ section
- Multi-language support

## License

This project is open source and available for use.

## Contact

For questions or support, please use the contact form on the website.

---

**Note**: This is a static website template. To make the contact form functional, you'll need to integrate it with a backend service or email service provider.

