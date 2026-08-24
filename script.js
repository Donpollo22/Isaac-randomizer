/* ============================================
   THE BINDING OF ISAAC - RANDOM CHARACTER SELECTOR
   All playable characters from Repentance (Normal + Tainted)
   
   To add/edit characters:
   1. Add a new object to the characters array
   2. Set name, type ("normal" or "tainted"), and image path
   3. Place the image in images/characters/ folder
   
   Example:
   {
       name: "Character Name",
       type: "normal",  // or "tainted"
       image: "images/characters/character_name.png"
   }
   ============================================ */

const characters = [
    // ==================== NORMAL CHARACTERS ====================
    {
        name: "Isaac",
        type: "normal",
        image: "images/characters/isaac.png"
    },
    {
        name: "Magdalene",
        type: "normal",
        image: "images/characters/magdalene.png"
    },
    {
        name: "Cain",
        type: "normal",
        image: "images/characters/cain.png"
    },
    {
        name: "Judas",
        type: "normal",
        image: "images/characters/judas.png"
    },
    {
        name: "???",
        type: "normal",
        image: "images/characters/blue_baby.png"
    },
    {
        name: "Eve",
        type: "normal",
        image: "images/characters/eve.png"
    },
    {
        name: "Samson",
        type: "normal",
        image: "images/characters/samson.png"
    },
    {
        name: "Azazel",
        type: "normal",
        image: "images/characters/azazel.png"
    },
    {
        name: "Lazarus",
        type: "normal",
        image: "images/characters/lazarus.png"
    },
    {
        name: "Eden",
        type: "normal",
        image: "images/characters/eden.png"
    },
    {
        name: "The Lost",
        type: "normal",
        image: "images/characters/the_lost.png"
    },
    {
        name: "Lilith",
        type: "normal",
        image: "images/characters/lilith.png"
    },
    {
        name: "Keeper",
        type: "normal",
        image: "images/characters/keeper.png"
    },
    {
        name: "Apollyon",
        type: "normal",
        image: "images/characters/apollyon.png"
    },
    {
        name: "The Forgotten",
        type: "normal",
        image: "images/characters/the_forgotten.png"
    },
    {
        name: "Bethany",
        type: "normal",
        image: "images/characters/bethany.png"
    },
    {
        name: "Jacob & Esau",
        type: "normal",
        image: "images/characters/jacob_esau.png"
    },
    
    // ==================== TAINTED CHARACTERS ====================
    {
        name: "Tainted Isaac",
        type: "tainted",
        image: "images/characters/tainted_isaac.png"
    },
    {
        name: "Tainted Magdalene",
        type: "tainted",
        image: "images/characters/tainted_magdalene.png"
    },
    {
        name: "Tainted Cain",
        type: "tainted",
        image: "images/characters/tainted_cain.png"
    },
    {
        name: "Tainted Judas",
        type: "tainted",
        image: "images/characters/tainted_judas.png"
    },
    {
        name: "Tainted ???",
        type: "tainted",
        image: "images/characters/tainted_blue_baby.png"
    },
    {
        name: "Tainted Eve",
        type: "tainted",
        image: "images/characters/tainted_eve.png"
    },
    {
        name: "Tainted Samson",
        type: "tainted",
        image: "images/characters/tainted_samson.png"
    },
    {
        name: "Tainted Azazel",
        type: "tainted",
        image: "images/characters/tainted_azazel.png"
    },
    {
        name: "Tainted Lazarus",
        type: "tainted",
        image: "images/characters/tainted_lazarus.png"
    },
    {
        name: "Tainted Eden",
        type: "tainted",
        image: "images/characters/tainted_eden.png"
    },
    {
        name: "Tainted Lost",
        type: "tainted",
        image: "images/characters/tainted_lost.png"
    },
    {
        name: "Tainted Lilith",
        type: "tainted",
        image: "images/characters/tainted_lilith.png"
    },
    {
        name: "Tainted Keeper",
        type: "tainted",
        image: "images/characters/tainted_keeper.png"
    },
    {
        name: "Tainted Apollyon",
        type: "tainted",
        image: "images/characters/tainted_apollyon.png"
    },
    {
        name: "Tainted Forgotten",
        type: "tainted",
        image: "images/characters/tainted_forgotten.png"
    },
    {
        name: "Tainted Bethany",
        type: "tainted",
        image: "images/characters/tainted_bethany.png"
    },
    {
        name: "Tainted Jacob",
        type: "tainted",
        image: "images/characters/tainted_jacob.png"
    }
];

// Filter options
const filterOptions = ["ALL", "NORMAL", "TAINTED"];

// State variables
let currentFilterIndex = 0;
let lastSelectedCharacter = null;
let isAnimating = false;

// DOM Elements
const randomBtn = document.getElementById('random-btn');
const filterPrev = document.getElementById('filter-prev');
const filterNext = document.getElementById('filter-next');
const filterValue = document.getElementById('filter-value');
const characterDisplay = document.getElementById('character-display');
const characterName = document.getElementById('character-name');
const characterImage = document.getElementById('character-image');
const emptyState = document.getElementById('empty-state');

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get filtered characters based on current filter selection
 */
function getFilteredCharacters() {
    const currentFilter = filterOptions[currentFilterIndex];
    
    if (currentFilter === "ALL") {
        return characters;
    } else if (currentFilter === "NORMAL") {
        return characters.filter(char => char.type === "normal");
    } else if (currentFilter === "TAINTED") {
        return characters.filter(char => char.type === "tainted");
    }
    
    return characters;
}

/**
 * Select a random character from filtered list
 * Ensures no consecutive duplicates
 */
function selectRandomCharacter() {
    const filtered = getFilteredCharacters();
    
    if (filtered.length === 0) {
        return null;
    }
    
    if (filtered.length === 1) {
        return filtered[0];
    }
    
    let selected;
    let attempts = 0;
    const maxAttempts = 10;
    
    // Try to avoid selecting the same character twice in a row
    do {
        const randomIndex = Math.floor(Math.random() * filtered.length);
        selected = filtered[randomIndex];
        attempts++;
    } while (selected === lastSelectedCharacter && attempts < maxAttempts);
    
    return selected;
}

/**
 * Display the selected character with animation
 */
function displayCharacter(character) {
    if (!character) return;
    
    // Hide empty state
    emptyState.style.display = 'none';
    
    // Reset animation by removing and re-adding the element
    characterDisplay.classList.remove('hidden');
    characterDisplay.style.animation = 'none';
    characterDisplay.offsetHeight; // Trigger reflow
    characterDisplay.style.animation = 'fadeInScale 0.3s ease-out';
    
    // Set character data
    characterName.textContent = character.name;
    
    // Handle image loading with fallback
    characterImage.src = character.image;
    characterImage.alt = character.name;
    
    // Add error handler for missing images
    characterImage.onerror = function() {
        // Show placeholder if image doesn't exist
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%232a2a2a" width="200" height="200"/%3E%3Ctext fill="%235a5a5a" font-family="monospace" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENO IMAGE%3C/text%3E%3C/svg%3E';
    };
    
    // Update last selected
    lastSelectedCharacter = character;
    isAnimating = false;
}

/**
 * Update filter display
 */
function updateFilterDisplay() {
    filterValue.textContent = filterOptions[currentFilterIndex];
}

/**
 * Cycle filter to next option
 */
function nextFilter() {
    currentFilterIndex = (currentFilterIndex + 1) % filterOptions.length;
    updateFilterDisplay();
}

/**
 * Cycle filter to previous option
 */
function prevFilter() {
    currentFilterIndex = (currentFilterIndex - 1 + filterOptions.length) % filterOptions.length;
    updateFilterDisplay();
}

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Handle Random Character button click
 */
function handleRandomClick() {
    if (isAnimating) return;
    
    isAnimating = true;
    
    const selected = selectRandomCharacter();
    
    if (selected) {
        displayCharacter(selected);
        
        // Placeholder for future sound effect
        // playSelectSound();
    }
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    // Set initial filter display
    updateFilterDisplay();
    
    // Event listeners
    randomBtn.addEventListener('click', handleRandomClick);
    filterNext.addEventListener('click', nextFilter);
    filterPrev.addEventListener('click', prevFilter);
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextFilter();
        } else if (e.key === 'ArrowLeft') {
            prevFilter();
        } else if (e.key === ' ' || e.key === 'Enter') {
            if (document.activeElement !== randomBtn) {
                handleRandomClick();
            }
        }
    });
}

// Start the application
init();
