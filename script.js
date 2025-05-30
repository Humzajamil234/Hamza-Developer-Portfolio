$(document).ready(function () {
    // Sticky navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    // Toggle menu
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
    });

    // Scroll animation
    const revealElements = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(section => {
        observer.observe(section);
    });
});
