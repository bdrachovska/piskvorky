'use-strict';

/** ukol 5 */

const boardSize = 10;
const fields = document.querySelectorAll('.policko__hra');

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const getField = (row, column) => fields[row * boardSize + column];

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

/**ukol 4*/
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

  const winning = isWinningMove(event.target);

  if (winning === true && getSymbol(event.target) === 'circle') {
    let msg = `Zvítězil kroužek. Hrát znovu?`;
    setTimeout(() => {
      alert(msg);
      location.reload();
    }, 200);
  } else if (winning === true && getSymbol(event.target) === 'cross') {
    let msg = `Zvítězil křížek. Hrát znovu?`;
    setTimeout(() => {
      alert(msg);
      location.reload();
    }, 200);
  }
};

const tlacitkoHra = document.querySelectorAll('button');
for (let i = 0; i < tlacitkoHra.length; i += 1) {
  tlacitkoHra[i].addEventListener('click', naTahu);
}
/**ukol 4 - konec*/

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
