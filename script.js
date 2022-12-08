function menuShow() {
    let menuMobile = document.querySelector('.mobile__menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/icons/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/icons/close.svg";
    }
}


// scrollView

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `.skills img, .projetos img, .contato, .formacao img
    `,
    { interval: 100 }
  )