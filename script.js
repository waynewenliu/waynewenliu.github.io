document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lang-toggle');
    const htmlEl = document.documentElement;

    // Function to set language
    function setLanguage(lang) {
        const enElements = document.querySelectorAll('.lang-en');
        const zhElements = document.querySelectorAll('.lang-zh');

        if (lang === 'zh') {
            enElements.forEach(el => el.classList.add('hidden'));
            zhElements.forEach(el => el.classList.remove('hidden'));
            htmlEl.lang = "zh-CN";
            // Update button text if needed, but we use span toggles inside button so logic handles it above
        } else {
            zhElements.forEach(el => el.classList.add('hidden'));
            enElements.forEach(el => el.classList.remove('hidden'));
            htmlEl.lang = "en";
        }

        localStorage.setItem('site-lang', lang);

        // Update title dynamically if needed (Optional, usually handled by checking visibility)
        updateTitle();
    }

    function updateTitle() {
        // Simple heuristic: check if English name is visible
        const isEnVisible = !document.querySelector('.name .lang-en')?.classList.contains('hidden');
        // Note: On pages without .name (like subpages if different layout), this might need adjustment.
        // For now, we assume title tags are static or we won't strictly enforce dynamic title change per page unless requested.
    }

    // Load saved preference
    const savedLang = localStorage.getItem('site-lang') || 'en';
    setLanguage(savedLang);

    // Toggle Event
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem('site-lang') || 'en';
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(newLang);
        });
    }
});
