const buttons = document.querySelectorAll('.recommend-btn');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        alert('Thank you for your recommendation! We will contact you soon.');
    });
});