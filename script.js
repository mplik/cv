document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section h2').forEach(header => {
        header.addEventListener('click', function() {
            const section = this.closest('section');
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});