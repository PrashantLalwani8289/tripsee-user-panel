
const StartToTopButton = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const scrollToTopButton = document.querySelector('.scroll_to_top') as HTMLElement | null;
    
        if (scrollToTopButton) {
            // Show the button when user scrolls down
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 500) {
                    scrollToTopButton.classList.add('show');
                } else {
                    scrollToTopButton.classList.remove('show');
                }
            });
    
            // Smooth scroll back to top
            scrollToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            });
        }
    });
    return (
        <div className="scroll_to_top to_top-2">
            <i className="fa-regular fa-angle-up" />
        </div>

    )
}

export default StartToTopButton