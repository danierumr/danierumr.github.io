document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-en], [data-pt]');
    const languageButtons = {
        en: document.getElementById('enBtn'),
        pt: document.getElementById('ptBtn')
    };

    const setLanguage = (lang) => {
        try {
            elements.forEach(el => {
                const content = el.getAttribute(`data-${lang}`);
                if (el.tagName === 'TEXTAREA') {
                    el.placeholder = el.getAttribute(`data-${lang}-placeholder`) || '';
                } else {
                    el.textContent = content || '';
                }
            });
            localStorage.setItem('preferred-language', lang);
            
            // Update active state of language buttons
            Object.keys(languageButtons).forEach(key => {
                languageButtons[key].classList.toggle('active', key === lang);
            });
        } catch (error) {
            console.error('Error setting language:', error);
        }
    };

    // Event Listeners
    Object.entries(languageButtons).forEach(([lang, button]) => {
        button?.addEventListener('click', () => setLanguage(lang));
    });

    // Set initial language based on localStorage or default to English
    const savedLanguage = localStorage.getItem('preferred-language');
    setLanguage(savedLanguage || 'en');
});