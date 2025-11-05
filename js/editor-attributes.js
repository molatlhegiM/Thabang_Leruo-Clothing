// Function to add editable attributes to elements
function addEditableAttributes() {
    // Text elements that should be editable
    const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'a:not([href^="http"])',
        'label', 'div.text-center', '.product-name',
        '.section-title', '.carousel-caption h1',
        '.carousel-caption p', '.offer-text h3'
    ];
    
    // Add data-editable-text to text elements that contain only text
    textSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                el.setAttribute('data-editable-text', '');
            }
        });
    });
    
    // Add data-editable-image to images
    const imageSelectors = [
        'img[src^="img/"]',
        'img.img-fluid',
        '.product-img img',
        '.carousel-item img',
        '.cat-item img'
    ];
    
    imageSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(img => {
            // Don't add to icons or tiny images
            if (!img.classList.contains('fa') && !img.classList.contains('fab')) {
                img.setAttribute('data-editable-image', '');
            }
        });
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', addEditableAttributes);