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



  const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}