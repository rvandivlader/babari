// Function to scroll to content section when the button is clicked
function scrollToContent() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

// Adding fade-in animation after page load
window.addEventListener('load', () => {
    const content = document.querySelector('.content');
    content.classList.add('fade-in');
});
