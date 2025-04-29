/**
 * Java Backend Developer Portfolio - 2025
 * JavaScript functionality for interactive elements and animations
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar scroll behavior
    const mainNav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mainNav.classList.add('navbar-shrink');
        } else {
            mainNav.classList.remove('navbar-shrink');
        }
    });

    // Active link switching
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
            if (navItem.getAttribute('href').slice(1) === current) {
                navItem.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Apply theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.add('light-mode');
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        // Toggle icon
        themeIcon.classList.toggle('fa-moon');
        themeIcon.classList.toggle('fa-sun');
        
        // Save preference
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    // Project card animations on hover
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (name === '' || email === '' || message === '') {
                showFormAlert('Please fill in all required fields.', 'danger');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormAlert('Please enter a valid email address.', 'danger');
                return;
            }
            
            // Simulate form submission success
            // In a real application, you would send this data to a server
            showFormAlert('Your message has been sent successfully!', 'success');
            contactForm.reset();
            
            // Show success message
            function showFormAlert(message, type) {
                // Remove existing alerts
                const existingAlerts = contactForm.querySelectorAll('.alert');
                existingAlerts.forEach(alert => alert.remove());
                
                // Create alert element
                const alertElement = document.createElement('div');
                alertElement.className = `alert alert-${type} mt-3`;
                alertElement.role = 'alert';
                alertElement.textContent = message;
                
                // Add alert before the form's end
                contactForm.appendChild(alertElement);
                
                // Auto-hide after 5 seconds if it's a success message
                if (type === 'success') {
                    setTimeout(() => {
                        alertElement.classList.add('fade');
                        setTimeout(() => alertElement.remove(), 500);
                    }, 5000);
                }
            }
        });
    }

    // Back to top button functionality
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add micro-animations to skills items
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
        
        item.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    });

    // Animate certification cards on scroll
    const certCards = document.querySelectorAll('.certification-card');
    
    window.addEventListener('scroll', function() {
        certCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });

    // Add typing effect to hero headline
    const heroHeadline = document.querySelector('.hero h1');
    
    if (heroHeadline) {
        const text = heroHeadline.textContent;
        heroHeadline.innerHTML = '';
        
        // Skip typing animation if user prefers reduced motion
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            let i = 0;
            const typeWriter = function() {
                if (i < text.length) {
                    heroHeadline.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 500);
        } else {
            // If user prefers reduced motion, just show text
            heroHeadline.textContent = text;
        }
    }

    // Preload images for better performance
    function preloadImages() {
        const imagesToPreload = [
            'images/profile.jpg',
            'images/project1.jpg',
            'images/project2.jpg',
            'images/project3.jpg',
            'images/hero-illustration.svg'
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Call preloadImages when page is loaded
    window.addEventListener('load', preloadImages);

    // Create directory structure for image placeholders
    function ensureImageDirectory() {
        // This would typically be handled server-side
        // For front-end only, we'll log a message
        console.log('Ensure your project has these image paths:');
        console.log('- images/profile.jpg (your profile picture)');
        console.log('- images/project1.jpg, project2.jpg, project3.jpg (project screenshots)');
        console.log('- images/hero-illustration.svg (hero section illustration)');
    }
    
    // Print a message about images in console
    ensureImageDirectory();

    // Testimonials Slider
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    
    // Show first testimonial
    if (testimonialItems.length > 0) {
        testimonialItems[0].classList.add('active');
        
        // Function to show testimonial
        function showTestimonial(index) {
            testimonialItems.forEach(item => item.classList.remove('active'));
            testimonialItems[index].classList.add('active');
        }
        
        // Next button functionality
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonialItems.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        // Previous button functionality
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentTestimonial--;
                if (currentTestimonial < 0) {
                    currentTestimonial = testimonialItems.length - 1;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        // Auto slide (optional)
        setInterval(function() {
            if (document.querySelector('.testimonial-slider:hover')) return;
            currentTestimonial++;
            if (currentTestimonial >= testimonialItems.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Technology Item animations
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
            const icon = this.querySelector('.tech-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
            const icon = this.querySelector('.tech-icon i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Achievement counter animation
    const achievementNumbers = document.querySelectorAll('.achievement-content h4');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function animateCounters() {
        achievementNumbers.forEach(number => {
            if (isInViewport(number) && !number.classList.contains('counted')) {
                number.classList.add('counted');
                
                const target = parseInt(number.textContent);
                if (!isNaN(target)) {
                    let count = 0;
                    const duration = 2000; // ms
                    const increment = target / (duration / 16);
                    
                    const counter = setInterval(() => {
                        count += increment;
                        number.textContent = Math.ceil(count);
                        
                        if (count >= target) {
                            number.textContent = target;
                            clearInterval(counter);
                        }
                    }, 16);
                }
            }
        });
    }
    
    // Run counter animation on scroll
    window.addEventListener('scroll', animateCounters);
    
    // Run once on page load
    setTimeout(animateCounters, 500);
    
    // Blog card hover effects
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
            const blogTitle = this.querySelector('h4');
            if (blogTitle) {
                blogTitle.style.color = '#e53935';
                blogTitle.style.transition = 'color 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
            const blogTitle = this.querySelector('h4');
            if (blogTitle) {
                blogTitle.style.color = '';
            }
        });
    });

    // Initialize Three.js animation
    initThreeJsAnimation();
    
    // Three.js background animation
    function initThreeJsAnimation() {
        const container = document.getElementById('canvas-container');
        if (!container) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xfafafa, 1);
        container.appendChild(renderer.domElement);
        
        // Create particles
        const particles = new THREE.Group();
        scene.add(particles);
        
        const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        
        // Create many particles in a grid
        for (let i = 0; i < 100; i++) {
            const material = new THREE.MeshBasicMaterial({
                color: 0xFFA500,
                transparent: true,
                opacity: Math.random() * 0.5 + 0.1
            });
            
            const particle = new THREE.Mesh(particleGeometry, material);
            
            // Random position
            particle.position.x = (Math.random() - 0.5) * 30;
            particle.position.y = (Math.random() - 0.5) * 30;
            particle.position.z = (Math.random() - 0.5) * 30;
            
            // Add custom properties for animation
            particle.userData = {
                speed: Math.random() * 0.01 + 0.002,
                direction: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                )
            };
            
            particles.add(particle);
        }
        
        // Add some connecting lines
        const lineGeometry = new THREE.BufferGeometry();
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x26a69a,
            transparent: true,
            opacity: 0.2
        });
        
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);
        
        camera.position.z = 10;
        
        // Resize handler
        window.addEventListener('resize', function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            // Update particle positions
            particles.children.forEach(particle => {
                particle.position.x += particle.userData.direction.x;
                particle.position.y += particle.userData.direction.y;
                particle.position.z += particle.userData.direction.z;
                
                // Bounce at edges
                if (Math.abs(particle.position.x) > 15) particle.userData.direction.x *= -1;
                if (Math.abs(particle.position.y) > 15) particle.userData.direction.y *= -1;
                if (Math.abs(particle.position.z) > 15) particle.userData.direction.z *= -1;
            });
            
            // Draw connecting lines between nearby particles
            const positions = [];
            const particlePositions = particles.children.map(p => p.position);
            
            for (let i = 0; i < particlePositions.length; i++) {
                for (let j = i + 1; j < particlePositions.length; j++) {
                    // Calculate distance between particles
                    const dist = particlePositions[i].distanceTo(particlePositions[j]);
                    
                    // If they're close enough, draw a line
                    if (dist < 5) {
                        positions.push(particlePositions[i].x, particlePositions[i].y, particlePositions[i].z);
                        positions.push(particlePositions[j].x, particlePositions[j].y, particlePositions[j].z);
                    }
                }
            }
            
            // Update line positions
            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            lineGeometry.attributes.position.needsUpdate = true;
            
            // Rotate the entire particle system slightly
            particles.rotation.x += 0.0003;
            particles.rotation.y += 0.0005;
            
            renderer.render(scene, camera);
        }
        
        animate();
    }
}); 