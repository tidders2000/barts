$(document).ready(function() {

    2
    3
    $(".btn-danger").click(function() {
        $('#wmmodal').modal('show')
    });




    var observer = new IntersectionObserver(function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true)
            setTimeout(function() {
                odometer.innerHTML = 456;
                odometer2.innerHTML = 500;
                odometer3.innerHTML = 989;
            }, 1000);

        AOS.init({
            duration: 1200,
        });
    }, { threshold: [0] });

    observer.observe(document.querySelector(".odometer"));




});