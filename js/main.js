//swift

let highload1 = document.getElementById("highload1");

highload1.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "/css/style.css") {
        theme.href = "/css/liteMode.css";
    } else {
        theme.href = "/css/style.css";
    }
}

//href

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}