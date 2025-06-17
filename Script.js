const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const currentYear = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const projectsContainer = document.getElementById('projects-container');
const typingElement = document.querySelector('.typing-effect');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

currentYear.textContent = new Date().getFullYear();
const projectsContainer =
document.getElementById('projects-container');
const projectsData = [
    {
        title: "Jeu de mémoire interactif",
        description: "Un mini-jeu interactif en JavaScript qui utilise des événements DOM.",
        tags: ["html", "css", "js"],
        placeholder: "Mini-jeu JavaScript"
    },
    {
        title: "Appli météo en temps réel",
        description: "Application utilisant une API météo avec affichage dynamique.",
        tags: ["api", "javascript", "css"],
        placeholder: "Application météo"
    },
    {
        title: "Portfolio créatif",
        description: "Un modèle de portfolio responsive avec animations CSS.",
        tags: ["html", "css", "ui"],
        placeholder: "Portfolio créatif"
    }
];
function renderProjects() {
    projectsContainer.innerHTML = '';
    
    projectsData.forEach(project => {
        const tagsHTML = project.tags.map(tag => 
            <span class="tag">#${tag}</span>
        ).join('');
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-img">${project.placeholder}</div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">${tagsHTML}</div>
                <a href="Mes Projets" class="project-link">Voir le projet →</a>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

const texts = ["Développeur Web", "Designer UI/UX", "JavaScript Lover"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(Message envoyé avec succès!\n\nEmail: ${email}\nMessage: ${message});
    contactForm.reset();
});
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    typeEffect();
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
});
