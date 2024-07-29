document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Simple interactive animation
    const skillsSection = document.getElementById('skills');
    skillsSection.addEventListener('mouseover', () => {
        skillsSection.style.backgroundColor = '#444';
    });

    skillsSection.addEventListener('mouseout', () => {
        skillsSection.style.backgroundColor = '#1a1a1a';
    });

    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            alpha: Math.random()
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
    }

    function animateStars() {
        stars.forEach(star => {
            star.x += (Math.random() - 0.5) * 2;
            star.y += (Math.random() - 0.5) * 2;

            if (star.x < 0 || star.x > canvas.width) star.x = Math.random() * canvas.width;
            if (star.y < 0 || star.y > canvas.height) star.y = Math.random() * canvas.height;
        });
        drawStars();
        requestAnimationFrame(animateStars);
    }

    animateStars();
});
