
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    
    button.addEventListener('click', function() {
        const colors = ['#f4f4f4', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ccffff', '#ffccff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        animateButton(button);
    });

    function animateButton(button) {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 300);
    }
});
console.log('hello');