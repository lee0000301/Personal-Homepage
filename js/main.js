import { renderHeader, initHeader } from './components/header.js';
import { renderHero, initHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderHobbies, initHobbies } from './components/hobbies.js';
import { renderBooks, initBooks } from './components/books.js';
import { renderDreams } from './components/dreams.js';
import { renderBlog, initBlog } from './components/blog.js';
import { renderTimeline } from './components/timeline.js';
import { renderReflection, initReflection } from './components/reflection.js';
import { renderContact, initContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { renderDialogs, initDialogs } from './components/dialogs.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Render all components
    app.innerHTML = `
        ${renderHeader()}
        <main>
            ${renderHero()}
            ${renderAbout()}
            ${renderHobbies()}
            ${renderBooks()}
            ${renderDreams()}
            ${renderBlog()}
            ${renderTimeline()}
            ${renderReflection()}
            ${renderContact()}
        </main>
        ${renderFooter()}
        ${renderDialogs()}
    `;

    // Initialize all components (attach event listeners, load data)
    initHeader();
    initHero();
    initHobbies();
    initBooks();
    initBlog();
    initReflection();
    initContact();
    initDialogs();

    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
