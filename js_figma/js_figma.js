
    window.onscroll = function () {
        if (window.pageYOffset > 900) {
            let stile = document.querySelector("#btn");
            stile.style.color = "black";
            stile.style.transition = "0.3s linear";
            let knop = document.querySelector("#cancel");
            knop.style.color = "black";
            knop.style.transition = "0.3s linear";
        } else {
           let stile = document.querySelector("#btn");
           stile.style.color = "white";
           stile.style.transition = "0.3s linear";
           let knop = document.querySelector("#cancel");
           knop.style.color = "white";
           knop.style.transition = "0.3s linear";
        }
    };


/*header.classList.add("header_scroll");
 header.classList.remove("header_scroll")*/