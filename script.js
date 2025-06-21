document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.section-title, .project-card, .skill-category');
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100);
        }, 100 * index);
    });
    
    const profileImage = document.querySelector('.profile-image');
    setInterval(() => {
        profileImage.classList.toggle('pulse');
    }, 4000);
    
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            if (bar.dataset.animated)
                return;
            
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
            bar.dataset.animated = "true";
        });
    }
    
    setTimeout(animateProgressBars, 500);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                animateProgressBars();
        });
    }, { threshold: 0.1 });
    
    const skillsSection = document.querySelector('.skills-container');
    if (skillsSection)
        observer.observe(skillsSection);
});
