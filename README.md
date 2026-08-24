# The Binding of Isaac - Random Character Selector

A random character selector tool for **The Binding of Isaac: Repentance**. Choose a filter (All, Normal, or Tainted) and get a random character to play with!

## Features

- **All Characters**: Includes all 34 playable characters from Repentance (17 normal + 17 tainted)
- **Character Filter**: Choose between ALL, NORMAL, or TAINTED characters
- **No Consecutive Duplicates**: The same character won't appear twice in a row
- **Responsive Design**: Works on desktop, laptop, and mobile devices
- **Isaac-inspired UI**: Pixel-art aesthetic inspired by the game's character selection screen
- **Easy to Customize**: Simple JavaScript array to add/edit characters

## Project Structure

```
/
├── index.html              # Main HTML file
├── style.css               # Styles (Isaac-inspired pixel art design)
├── script.js               # Character data and randomization logic
├── images/
│   └── characters/         # Character sprite images (add your own)
└── README.md               # This file
```

## Setup

### 1. Clone or Download

Clone this repository or download the files to your computer.

### 2. Add Character Images

Place character sprite images in the `images/characters/` folder. Each character needs a PNG file:

**Normal Characters:**
- `isaac.png`
- `magdalene.png`
- `cain.png`
- `judas.png`
- `blue_baby.png` (???)
- `eve.png`
- `samson.png`
- `azazel.png`
- `lazarus.png`
- `eden.png`
- `the_lost.png`
- `lilith.png`
- `keeper.png`
- `apollyon.png`
- `the_forgotten.png`
- `bethany.png`
- `jacob_esau.png`

**Tainted Characters:**
- `tainted_isaac.png`
- `tainted_magdalene.png`
- `tainted_cain.png`
- `tainted_judas.png`
- `tainted_blue_baby.png`
- `tainted_eve.png`
- `tainted_samson.png`
- `tainted_azazel.png`
- `tainted_lazarus.png`
- `tainted_eden.png`
- `tainted_lost.png`
- `tainted_lilith.png`
- `tainted_keeper.png`
- `tainted_apollyon.png`
- `tainted_forgotten.png`
- `tainted_bethany.png`
- `tainted_jacob.png`

> **Note:** If images are missing, a placeholder will be displayed instead.

### 3. Run Locally

Simply open `index.html` in your web browser.

### 4. Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Select your branch (usually `main`) and save
4. Your site will be live at `https://yourusername.github.io/repository-name/`

## How to Use

1. **Select Filter**: Use the ◀ ▶ arrows to choose:
   - **ALL**: Any character can appear
   - **NORMAL**: Only normal characters
   - **TAINTED**: Only tainted characters

2. **Click RANDOM CHARACTER**: Get a random character based on your filter

3. **Play Your Run**: Use the selected character for your next Isaac run!

## Customization

### Adding/Editing Characters

Open `script.js` and modify the `characters` array:

```javascript
{
    name: "Character Name",
    type: "normal",  // or "tainted"
    image: "images/characters/character_name.png"
}
```

### Changing Colors/Styles

Edit `style.css` to modify:
- Background colors
- Panel appearance
- Button styles
- Font sizes
- Animations

### Adding Sound Effects

In `script.js`, look for the comment `// playSelectSound();` in the `handleRandomClick()` function. Add your sound playback code there.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- No frameworks or external dependencies

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This is a fan-made tool for The Binding of Isaac. The Binding of Isaac is a trademark of Edmund McMillen and Nicalis, Inc.

---

**Enjoy your runs!** 🎮
