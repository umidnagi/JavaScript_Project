const sliders = document.querySelectorAll(".product-slider");

sliders.forEach(slider => {
    let track = slider.querySelector(".product-track");
    let btnLeft = slider.querySelector(".left");
    let btnRight = slider.querySelector(".right");

    btnRight.onclick = () => track.scrollLeft += 300;
    btnLeft.onclick = () => track.scrollLeft -= 300;
});

