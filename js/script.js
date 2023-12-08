/**
 * Folds (closes) an accordion element.
 * 
 * This function removes the 'active' class from the specified accordion element,
 * sets its height to its scrollHeight, and then resets the height to its default
 * value after a brief timeout. This creates a visual effect of the accordion
 * collapsing.
 *
 * @param {Element} accordionEl - The accordion element to be folded.
 */
const Fold = (accordionEl) => {
    const height = accordionEl.scrollHeight;

    accordionEl.classList.remove('active');
    accordionEl.style.height = height + 'px';

    setTimeout(() => {
        accordionEl.style.height = '';
    }, 1);
};

/**
 * Unfolds (opens) an accordion element.
 * 
 * This function adds the 'active' class to the specified accordion element and
 * initially sets its height to its scrollHeight. After a brief timeout, the
 * height is changed to 'auto', allowing for a smooth transition effect. This
 * creates a visual effect of the accordion expanding.
 *
 * @param {Element} accordionEl - The accordion element to be unfolded.
 */
const Unfold = (accordionEl) => {
    accordionEl.classList.add('active');
    const height = accordionEl.scrollHeight;

    setTimeout(() => {
        accordionEl.style.height = height + 'px';
    }, 1);
    
    setTimeout(() => {
        accordionEl.style.height = 'auto';
    }, 300);
};

/**
 * Initializes each accordion element with click event listeners.
 * 
 * This script selects all elements with the class 'accordion' and attaches
 * a click event listener to each. When an accordion is clicked, it checks if
 * the clicked element is currently active. If it is active, it triggers the
 * Fold function to close it. If it's not active, it closes all other accordions
 * by triggering the Fold function on each, and then opens the clicked accordion
 * by triggering the Unfold function.
 */
const accordionElList = document.querySelectorAll('.accordion');

accordionElList.forEach((accordionEl) => {
    accordionEl.addEventListener('click', () => {

        const isActive = accordionEl.classList.contains('active');

        if (isActive) {
            Fold(accordionEl);
        }

        else {
            accordionElList.forEach((accEl) => {
                Fold(accEl);
            });

            Unfold(accordionEl);
        }
    });
});
