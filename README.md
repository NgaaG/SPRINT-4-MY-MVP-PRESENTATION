# Leaduwarden 2.0 - MVP Presentation

Interactive web-based presentation showcasing the Leaduwarden 2.0 project: playlist-driven mood journeys with real-time emotion visualization across prototypes (Lovable + Java Processing).

## 📁 Project Structure

```
leaduwarden-slides/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Navigation and interaction logic
└── README.md           # This file
```

## 🚀 How to Use

### Option 1: Open Locally
1. Double-click `index.html` to open in your default browser
2. Or right-click → "Open with" → Choose your browser

### Option 2: Use Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Deploy Online
Upload to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## ⌨️ Navigation Controls

### Keyboard Shortcuts
- `→` or `↓` or `Space` - Next slide
- `←` or `↑` - Previous slide
- `Home` - First slide
- `End` - Last slide

### Mouse/Touch
- Click "Next" / "Previous" buttons
- Swipe left/right on mobile devices

## 📱 Responsive Design

The presentation is fully responsive and optimized for:
- **Desktop** (>1024px) - Side-by-side layout for architecture slide
- **Tablet** (768px-1024px) - Adjusted spacing and font sizes
- **Mobile** (<768px) - Stacked layout, touch-friendly controls
- **iPhone 16** - Specifically optimized

## 🎨 Customization

### Update Content
Edit `index.html` to change:
- Slide titles and text
- Your name on title slide
- Project links and URLs
- Demo description

### Modify Styles
Edit `styles.css` to customize:
- Colors (see `:root` variables)
- Fonts and typography
- Spacing and layout
- Responsive breakpoints

### Add/Remove Slides
1. Copy a slide `<div class="slide slide-X">...</div>` in `index.html`
2. Update `totalSlides` in `script.js`
3. Add styling in `styles.css` if needed

## 🎯 Features

✅ 7 comprehensive slides covering:
1. Title slide with project overview
2. Code attribution breakdown (60% self / 40% AI-assisted)
3. Video demo walkthrough
4. Project links and access information
5. System architecture showing Lovable ↔ Processing integration
6. Prototype ecosystem comparison
7. Learning outcomes and honest reflections

✅ Fully responsive design
✅ Keyboard and touch navigation
✅ Smooth transitions
✅ Print-friendly
✅ No external dependencies

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **No build process** - Works out of the box
- **Cross-browser compatible** - Tested on Chrome, Firefox, Safari, Edge
- **Lightweight** - Fast loading times
- **Accessible** - Keyboard navigation support

## 📝 Content Highlights

### Lovable Prototype (Web App)
- Emoji-based emotion prompts mapped to Plutchik's Wheel
- Location categories: Peaceful, Social, Scenic
- Spotify playlist integration
- Mood tracking journal (before/during/after)
- JSON/CSV data export

### Java Processing Visualization
- 3 evolving prototypes (P1, P2, P3)
- Real-time emotion mapping
- Animated emotion wheel/bubble graph
- Community emotional landscape
- Live reflection dashboard

### Data Pipeline
User entries → JSON export → Processing visualization → Mood climate map

## 🎓 Learning Outcomes

- **Research**: User empathy to emotional data analysis
- **Create**: Two interconnected MVPs linking design and code
- **Organize**: Notion/GitHub/Lovable documentation
- **Communicate**: Emotion-based narrative through UI and code
- **Learn**: Merged creativity and technical skill

## 📄 License

Created for academic presentation purposes.
Feel free to modify and use for your own projects.

## 👤 Author

[Ngaa Gozo]
Interactive Design Studio
CMD - Create & Multimedia Design

---

**Last Updated:** October 28, 2025
**Version:** 2.0
