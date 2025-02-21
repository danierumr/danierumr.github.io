document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-en], [data-pt]');
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button[type="submit"]');
    
    function setLanguage(lang) {
        elements.forEach(el => {
            if(el.tagName === 'TEXTAREA') {
                el.placeholder = el.getAttribute(`data-${lang}-placeholder`);
            } else if(el.tagName === 'BUTTON') {
                el.textContent = el.getAttribute(`data-${lang}`);
            } else {
                el.textContent = el.getAttribute(`data-${lang}`);
            }
        });
    }

    document.getElementById('enBtn').addEventListener('click', () => setLanguage('en'));
    document.getElementById('ptBtn').addEventListener('click', () => setLanguage('pt'));

    // Set default language to English
    setLanguage('en');
});