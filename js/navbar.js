    // Add solid background to Navbar on scroll
    var myNav = document.getElementById('navbar2');
    window.onscroll = function () {
        if (document.body.scrollTop >= screen.height - 700 || document.documentElement.scrollTop >= screen.height - 700) {
            myNav.classList.add("nav-coloured");
            myNav.classList.remove("nav-transparent");
        }
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-coloured");
        }
    };