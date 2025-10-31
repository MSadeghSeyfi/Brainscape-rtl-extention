// Function to detect if text contains RTL characters (Arabic, Persian, Hebrew, etc.)
function hasRTLText(text) {
  if (!text) return false;
  // RTL Unicode ranges: Hebrew, Arabic, Persian, Urdu, etc.
  const rtlRegex = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/;
  return rtlRegex.test(text);
}

// Function to apply RTL to an element
function applyRTL(element) {
  if (!element) return;

  const text = element.textContent || element.innerText;
  if (hasRTLText(text)) {
    element.style.direction = 'rtl';
    element.style.textAlign = 'right';
    element.classList.add('rtl-content');
  }
}

// Function to process all card faces
function processCards() {
  // Target the main content areas in question and answer faces
  const selectors = [
    '.preview-html',
    '.scf-face',
    '.scf-body',
    '.scf-body-m',
    '.card-face-view',
    '.smart-card-face',
    'p'
  ];

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      applyRTL(element);
    });
  });
}

// Initial processing
processCards();

// Watch for dynamic content changes (Brainscape loads cards dynamically)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      processCards();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also process on page interactions
document.addEventListener('click', () => {
  setTimeout(processCards, 100);
});

// Process when cards are flipped or changed
setInterval(processCards, 500);

console.log('Brainscape RTL Fixer loaded!');
