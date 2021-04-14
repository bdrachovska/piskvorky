'use-strict';
let hraje = 'circle';

const naTahu = (event) => {
  event.target.classList.add('board__field--' + hraje);
  if (hraje === 'circle') {
    hraje = 'cross';
  } else {
    hraje = 'circle';
  }
  event.target.disabled = true;
};

const tlacitkoHra = document.querySelectorAll('button');
for (let i = 0; i < tlacitkoHra.length; i += 1) {
  tlacitkoHra[i].addEventListener('click', naTahu);
}
