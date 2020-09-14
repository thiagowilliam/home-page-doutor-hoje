const buttonConsulta = document.querySelector('.choiceConsulta');
const buttonExame = document.querySelector('.choiceExame');

const textTypeAppointment = document.querySelector('.typeAppointment');

const inputConsulta = document.querySelector('.inputConsulta');
const inputExame = document.querySelector('.inputExame');

buttonConsulta.addEventListener('click', function (ev) {
  ev.preventDefault();
  textTypeAppointment.innerHTML = 'Consulta';
  inputExame.style.display = 'none';
  inputConsulta.style.display = 'block';
  if (buttonExame.classList.contains('hasBlue')) {
    buttonExame.classList.remove('hasBlue');
    buttonConsulta.classList.add('hasBlue');
  }
});

buttonExame.addEventListener('click', function (ev) {
  ev.preventDefault();
  textTypeAppointment.innerHTML = 'Exame';
  inputExame.style.display = 'block';
  inputConsulta.style.display = 'none';
  if (buttonConsulta.classList.contains('hasBlue')) {
    buttonConsulta.classList.remove('hasBlue');
    buttonExame.classList.add('hasBlue');
  }
});

//Acordian perguntas frequentes
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', () => {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

//Menu Responsivo

let show = true;

const mainMenu = document.querySelector('.mainMenu');
const menuToggle = document.querySelector('.menuToggle');

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial';
  mainMenu.classList.toggle('on', show);
  show = !show;
});

//Corusel

window.addEventListener('load', function () {
  new Glider(document.querySelector('.carouselSignatures'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.dots',
    scrollLock: 'true',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});

window.addEventListener('load', function () {
  new Glider(document.querySelector('.typeConsults'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.dotsConsults',
    scrollLock: 'true',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
