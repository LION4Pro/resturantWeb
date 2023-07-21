const customscroll = document.querySelector(".customscroll")
const imageSlider = document.querySelector(".image")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const headerH1 = document.querySelector("h1")
const menupng = document.querySelector(".menupng")
const items = document.querySelector(".items")
const feedback = document.querySelector("#feedback")
const send = document.querySelector("#send")
const error = document.querySelector(".error")
const menu = document.querySelectorAll(".menu")
const SocialMediaBox = document.querySelector(".socal-media-box")



let lastscroll = 1100

menu.forEach(function(menus){

    window.addEventListener("scroll", function(){

        let scrolltop = window.pageYOffset || document.documentElement.scrolltop;

        if(scrolltop > lastscroll){

            menus.classList.add("menuScroll")
        }

        else {

            menus.classList.remove("menuScroll")
        }
    })

})




menupng.addEventListener("click", function(){

    if(items.style.display == "none"){

        items.style.display = "block"
        menupng.src = "image/closemenu.png"
    }

    else {

        items.style.display = "none"
        menupng.src = "image/menu.png"
    }
})

window.addEventListener("scroll", function(){

    let windowHeight = window.scrollY
    let documentHeight = document.body.clientHeight
    let Heightes = window.innerHeight
    let precent = windowHeight / (documentHeight - Heightes)
    let precentRound = Math.round(precent *100)
    customscroll.style.width = `${precentRound}%`
})

window.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop > 10){

        headerH1.style.fontSize = "2em"
        headerH1.style.transition = "0.4s"
    }

    else {

        headerH1.style.fontSize = "3em"
    }
})

let ImageArry = ['image/1.webp','image/8.webp','image/2.webp']
let ImageIndex = 0

function nextimage(){

    ImageIndex = (ImageIndex + 1) % ImageArry.length
    imageSlider.setAttribute("src", ImageArry[ImageIndex])
}

function previmage() {

    ImageIndex = (ImageIndex - 1 + ImageArry.length) % ImageArry.length
    imageSlider.setAttribute("src", ImageArry[ImageIndex])
}

setInterval(nextimage , 2000)

next.addEventListener("click", nextimage)
prev.addEventListener("click", previmage)
