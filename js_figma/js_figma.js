(function () {
    const header = document.querySelector("header");
    window.onscroll = function () {
        if (window.pageYOffset > 55) {
            header.classList.add("header_scroll");
        } else {
            header.classList.remove("header_scroll");
        }
    };
}());