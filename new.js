


window.addEventListener("scroll", function () {

    var header = this.document.querySelector("header") ; header.classList.toggle("sticy" , window.scrollY > 0)
} )
