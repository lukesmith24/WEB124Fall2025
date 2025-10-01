/*  Author: Luke Smith
  Date: 10/1/2025
  Source JavaScript30 by Wes Bos https://javascript30.com/
*/

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // max shadow distance in px

// get color input elements
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - (walk / 2));
  const yWalk = Math.round((y / height) * walk - (walk / 2));

  // use alpha hex value for RGBA transparency
  const aHex = 'b3';
  const col1 = `${c1.value}${aHex}`;
  const col2 = `${c2.value}${aHex}`;
  const col3 = `${c3.value}${aHex}`;
  const col4 = `${c4.value}${aHex}`;

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 ${col1},
    ${-xWalk}px ${yWalk}px 0 ${col2},
    ${yWalk}px ${-xWalk}px 0 ${col3},
    ${-yWalk}px ${xWalk}px 0 ${col4}
  `;
}

hero.addEventListener('mousemove', shadow);
