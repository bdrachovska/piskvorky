'use-strict';
let hraje = 'circle';
const hrajeElm = document.querySelector('#krizky_kolecka');

const naTahu = (event) => {
  event.target.classList.add('board__field--' + hraje);
  if (hraje === 'circle') {
    hraje = 'cross';
    hrajeElm.src = 'obrazky/cross.svg';
    hrajeElm.alt = 'Na tahu křížek.';
  } else {
    hraje = 'circle';
    hrajeElm.src = 'obrazky/circle.svg';
    hrajeElm.alt = 'Na tahu kolečko.';
  }
  event.target.disabled = true;
};

const tlacitkoHra = document.querySelectorAll('button');
for (let i = 0; i < tlacitkoHra.length; i += 1) {
  tlacitkoHra[i].addEventListener('click', naTahu);
}
