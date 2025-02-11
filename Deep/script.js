document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const forms = document.querySelectorAll('.contact-form form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you shortly.');
            form.reset();
        });
    });
});