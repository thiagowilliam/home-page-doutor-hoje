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
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
