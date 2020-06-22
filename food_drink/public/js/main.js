window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("menu").classList.add("sticky");
    } else {
        document.getElementById("menu").classList.remove("sticky");
    }
}