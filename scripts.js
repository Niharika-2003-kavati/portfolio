// Interactive Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent! I will contact you soon.');
});
