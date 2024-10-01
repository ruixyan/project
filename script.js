const galleryContainer = document.querySelector(".gallery");
const galleryItems = document.querySelectorAll(".gallery-item");
const indicator = document.querySelector(".indicator");

const defaultItemFlex = "0 1 20px";
const hoverItemFlex = "0 1 600px";

const updateGalleryItems = () => {
    galleryItems.forEach((item) => {
        // Set flex based on the hover state
        item.style.flex = item.isHovered ? hoverItemFlex : defaultItemFlex;
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
    const rect = galleryContainer.getBoundingClientRect();
    indicator.style.left = `${e.clientX - rect.left}px`; // Corrected method call
});

function goBack() {
    // Logic for going back; could be a history.back() or any custom logic
    window.history.back();
}