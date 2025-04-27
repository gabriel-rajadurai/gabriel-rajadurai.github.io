document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            
            // Get the target element
            const targetSection = document.querySelector(targetId);
            
            // Get the navbar height
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            // Calculate the position to scroll to (accounting for navbar height)
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            
            // Smooth scroll animation
            const duration = 800; // Duration in milliseconds
            let startTime = null;
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const scrollY = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, scrollY);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            
            // Easing function for smoother animation
            function easeInOutCubic(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
            
            requestAnimationFrame(animation);
        });
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Handle mobile menu links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close the mobile menu
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            
            // Get the target element
            const targetSection = document.querySelector(targetId);
            
            // Get the navbar height
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            // Calculate the position to scroll to (accounting for navbar height)
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            
            // Smooth scroll animation (using the same animation as your navbar links)
            const duration = 800;
            let startTime = null;
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const scrollY = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, scrollY);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            
            function easeInOutCubic(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
            
            requestAnimationFrame(animation);
        });
    });
});