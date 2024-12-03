let galleryContainer = document.querySelector(".gallery");
let galleryItems = document.querySelectorAll(".gallery-item");
let indicator = document.querySelector(".indicator");

let defaultItemFlex = "0 1 80px";
let hoverItemFlex = "0 1 800px";
let defaultOpacity = 1;
let hoverOpacity = 0.2;

let updateGalleryItems = () => {
    galleryItems.forEach((item) => {
        // Set flex and opacity based on the hover state
        item.style.flex = item.isHovered ? hoverItemFlex : defaultItemFlex;
        item.style.opacity = item.isHovered ? defaultOpacity : hoverOpacity;
    });
};

// Initialize hover state for items
galleryItems.forEach((item) => {
    item.isHovered = false; // Set initial hover state
});

// Add hover event listeners
galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        galleryItems.forEach((otherItem) => {
            otherItem.isHovered = otherItem === item; // Set hover state
        });
        updateGalleryItems(); // Update gallery on hover
    });

    item.addEventListener("mouseleave", () => {
        item.isHovered = false; // Reset hover state when leaving
        updateGalleryItems(); // Update gallery on leave
    });
});

// Update indicator position on mouse move
galleryContainer.addEventListener("mousemove", (e) => {
    let rect = galleryContainer.getBoundingClientRect();
    indicator.style.left = `${e.clientX - rect.left}px`; // Corrected method call
});

function goBack() {
    // Logic for going back; could be a history.back() or any custom logic
    window.history.back();
}



