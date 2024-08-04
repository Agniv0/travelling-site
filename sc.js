document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn=>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src')
        document.querySelector('.about .video-container .video').src=src;
    }
});


document.querySelectorAll('.read-more-btn').forEach(button => {
    button.onclick = (e) => {
        e.preventDefault();
        const content = button.previousElementSibling;
        if (content.style.display === "none" || !content.style.display) {
            content.style.display = "block";
            button.textContent = "Read less";
        } else {
            content.style.display = "none";
            button.textContent = "Read more";
        }
    }
});
