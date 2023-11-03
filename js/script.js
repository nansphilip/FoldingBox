const sections = document.querySelectorAll("section");
const arrows = document.querySelectorAll("img");

// For each section, add an event listener to the click event
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", () => {
        
        // If the section contains '.active', remove it and set the height to default (32px)
        if (sections[i].classList.contains("active")) {
            sections[i].classList.remove("active");
            sections[i].style.height = `32px`;
            arrows[i].style.transform = 'rotate(0deg)';

        }
        
        // Else, remove '.active' and set the height to default (32px) on every sections,
        // then add '.active' and set the measured height to the clicked section
        else {
            for (let e = 0; e < sections.length; e++) {
                sections[e].classList.remove("active");
                sections[e].style.height = `32px`;
                arrows[e].style.transform = 'rotate(0deg)';
            }

            let totalHeight = 0;
            Array.from(sections[i].children).forEach((child) => {
                totalHeight += child.scrollHeight;
            })
            console.log(Array.from(sections[i].children));
            console.log(totalHeight);

            sections[i].style.height = `${totalHeight}px`;
            arrows[i].style.transform = 'rotate(90deg)';
            sections[i].classList.add("active");
        }
    });
}