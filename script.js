document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
    });
});


document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        modal.classList.remove('show'); 
    });
});


window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show'); 
    }
});



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


