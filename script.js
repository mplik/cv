document.querySelectorAll('section h2').forEach(header => {
    header.addEventListener('click', () => {
        const section = this.parentElement;
        section.scrollIntoView({ behavior: 'smooth' });
    });
});