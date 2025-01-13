// Initialize particles immediately when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });

    // Initialize all event listeners and animations after DOM is ready
    initializeEventListeners();
    
    // Scroll to top
    window.scrollTo(0, 0);
});

// Random Quote Selection
const quotes = [
    {
        text: '"The best way to predict the future is to invent it."',
        author: '- Alan Kay'
    },
    {
        text: '"Code is like humor. When you have to explain it, it\'s bad."',
        author: '- Cory House'
    },
    {
        text: '"First, solve the problem. Then, write the code."',
        author: '- John Johnson'
    },
    {
        text: '"Talk is cheap. Show me the code."',
        author: '- Linus Torvalds'
    }
];

// Enhanced Typing Animation
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Function to initialize all event listeners
function initializeEventListeners() {
    // Quote Card Click Effect
    const quoteCard = document.getElementById('quoteCard');
    const errorOverlay = document.querySelector('.error-overlay');
    
    if (quoteCard && errorOverlay) {
        quoteCard.addEventListener('click', () => {
            // Flash animation
            quoteCard.style.transform = 'scale(1.1)';
            quoteCard.style.boxShadow = '0 0 50px var(--accent-color)';
            
            // Show error overlay
            errorOverlay.classList.add('active');
            
            // Reset card after animation
            setTimeout(() => {
                quoteCard.style.transform = 'scale(1)';
                quoteCard.style.boxShadow = 'none';
            }, 200);
            
            // Hide error overlay after delay
            setTimeout(() => {
                errorOverlay.classList.remove('active');
            }, 1000);
        });
    }
    
    // Initialize scroll animations
    const sections = document.querySelectorAll('.section');
    initializeScrollAnimations(sections);
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize hover effects
    initializeHoverEffects();
    
    // Initialize skill cards
    initializeSkillCards();
    
    // Initialize random quote
    initializeRandomQuote();
}

// Initialize scroll animations
function initializeScrollAnimations(sections) {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize hover effects
function initializeHoverEffects() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--accent-color');
        });
        
        link.addEventListener('mouseout', () => {
            link.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--text-color');
        });
    });
}

// Initialize skill cards
function initializeSkillCards() {
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (x - centerX) / centerX;
            const angleY = (y - centerY) / centerY;
            
            card.style.transform = `perspective(1000px) rotateY(${angleX * 10}deg) rotateX(${-angleY * 10}deg) scale(1.02)`;
            
            const bg = card.querySelector('.card-bg');
            bg.style.background = `linear-gradient(${angleX * 45 + 45}deg, var(--primary-color), var(--secondary-color))`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
            const bg = card.querySelector('.card-bg');
            bg.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
        });
    });
}

// Initialize random quote
function initializeRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    const titleText = document.querySelector('.typing-text-title');
    
    if (quoteText && quoteAuthor && titleText) {
        // Clear any existing text
        quoteText.textContent = '';
        quoteAuthor.textContent = '';
        titleText.textContent = '';
        
        // Start typing animation for quote
        typeWriter(quoteText, randomQuote.text, 50);
        
        // Show author after quote is typed
        setTimeout(() => {
            typeWriter(quoteAuthor, randomQuote.author, 30);
        }, randomQuote.text.length * 50 + 500);
        
        // Start typing title after quote and author are done
        setTimeout(() => {
            typeWriter(titleText, "Computer Science Engineering Student | Aspiring Software Developer", 30);
        }, randomQuote.text.length * 50 + 1500);
    }
}

// Ensure scroll restoration is manual
history.scrollRestoration = "manual";

// Terminal Animation
const terminalCommands = [
    'neofetch',
    'sudo pacman -Syu',
    'vim ~/.config/i3/config',
    'htop',
    'systemctl status nginx',
    'tail -f /var/log/system.log',
    'gcc -Wall main.cpp -o program',
    'python3 neural_network.py',
    'ssh -i key.pem ec2-user@server',
    'docker ps -a',
    'git checkout -b feature/portfolio',
    'npm install @angular/cli -g',
    'curl https://api.github.com/users',
    'sudo service postgresql start',
    'make clean && make all',
    'nmap -sV localhost',
    './hackthebox.sh',
    'yarn dev',
    'aws s3 sync . s3://bucket',
    'kubectl get pods --all-namespaces'
];

function addTerminalLine() {
    const terminal = document.querySelector('.terminal');
    const command = terminalCommands[Math.floor(Math.random() * terminalCommands.length)];
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    // Add timestamp
    const timestamp = new Date().toLocaleTimeString();
    
    // Add command with prompt
    line.innerHTML = `<span style="color: #666;">[${timestamp}]</span> <span style="color: #00ff00;">root@portfolio</span>:<span style="color: #4488ff">~</span>$ <span style="color: #ffffff;">${command}</span>`;
    
    terminal.appendChild(line);
    
    // Keep only last 15 lines
    while (terminal.children.length > 15) {
        terminal.removeChild(terminal.firstChild);
    }
    
    // Add response for some commands
    if (Math.random() > 0.7) {
        setTimeout(() => {
            const response = document.createElement('div');
            response.className = 'terminal-line';
            response.style.color = '#00ff00';
            const responses = [
                '[SUCCESS] Operation completed',
                '[INFO] Service started successfully',
                '[SYSTEM] All checks passed',
                '[OK] Dependencies installed',
                '[DONE] Build completed successfully'
            ];
            response.textContent = responses[Math.floor(Math.random() * responses.length)];
            terminal.appendChild(response);
        }, 500);
    }
}

// Start terminal animation with faster interval
setInterval(addTerminalLine, 1500);

// Projects Coming Soon Message
document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
    e.preventDefault();
    const message = document.getElementById('comingSoon');
    message.classList.add('show');
    
    // Hide message after 3 seconds
    setTimeout(() => {
        message.classList.remove('show');
    }, 3000);
});
