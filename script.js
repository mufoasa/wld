// ===== Language System =====
const defaultLanguage = 'en';
let currentLanguage = localStorage.getItem('selectedLanguage') || defaultLanguage;

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updatePageLanguage();
}

function updatePageLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${currentLanguage}"]`).classList.add('active');

    // Re-render menu if on menu page
    if (document.getElementById('menuGrid')) {
        renderMenu();
    }

    // Re-render featured if on home page
    if (document.getElementById('featuredGrid')) {
        renderFeatured();
    }
}

// Language button event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        setLanguage(e.target.getAttribute('data-lang'));
    });
});

// Set initial active language
document.querySelector(`[data-lang="${currentLanguage}"]`).classList.add('active');

// ===== Menu Filtering =====
const filterButtons = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        renderMenu();
    });
});

// ===== Render Menu =====
function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';

    let filteredItems = menuItems;
    if (currentFilter !== 'all') {
        filteredItems = menuItems.filter(item => item.category === currentFilter);
    }

    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name[currentLanguage]}" loading="lazy">
            <div class="menu-item-info">
                <div class="menu-item-name">${item.name[currentLanguage]}</div>
                <div class="menu-item-desc">${item.description[currentLanguage]}</div>
                <div class="menu-item-price">${item.price} ден</div>
            </div>
        `;
        div.addEventListener('click', () => openModal(item));
        menuGrid.appendChild(div);
    });
}

// ===== Render Featured =====
function renderFeatured() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;

    featuredGrid.innerHTML = '';

    const featured = menuItems.filter(item => item.featured).slice(0, 3);

    featured.forEach(item => {
        const div = document.createElement('div');
        div.className = 'featured-card';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name[currentLanguage]}" loading="lazy">
            <div class="featured-info">
                <h3>${item.name[currentLanguage]}</h3>
                <p>${item.description[currentLanguage]}</p>
                <div class="featured-price">${item.price} ден</div>
            </div>
        `;
        div.addEventListener('click', () => openModal(item));
        featuredGrid.appendChild(div);
    });
}

// ===== Modal Functions =====
const modal = document.getElementById('detailModal');
const modalClose = document.querySelector('.modal-close');
const modalBody = document.getElementById('modalBody');

function openModal(item) {
    modalBody.innerHTML = `
        <img src="${item.image}" alt="${item.name[currentLanguage]}" class="modal-image">
        <h2 class="modal-title">${item.name[currentLanguage]}</h2>
        <div class="modal-price">${item.price} ден</div>
        <p class="modal-description">${item.description[currentLanguage]}</p>
    `;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});



// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    if (document.getElementById('menuGrid')) {
        renderMenu();
    }
    if (document.getElementById('featuredGrid')) {
        renderFeatured();
    }
});
