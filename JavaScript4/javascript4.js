/* 
Author: Luke Smith
Date: 10/15/2025
Source JavaScript30 by Wes Bos https://javascript30.com/
*/

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const upBtn = document.querySelector('.arrow.up');
const downBtn = document.querySelector('.arrow.down');

let playbackRate = 1.0;   
const step = 0.1;
const min = 0.4;
const max = 4;

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = Math.round(percent * 100) + '%';
  const rate = percent * (max - min) + min;

  playbackRate = Math.min(Math.max(rate, min), max);
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}
speed.addEventListener('mousemove', handleMove);

function syncBarToRate(rate) {
  const clamped = Math.min(Math.max(rate, min), max);
  const percent = (clamped - min) / (max - min);
  bar.style.height = Math.round(percent * 100) + '%';
  bar.textContent = clamped.toFixed(2) + '×';
  video.playbackRate = clamped;
  playbackRate = clamped;
}

upBtn.addEventListener('click', () => {
  syncBarToRate(playbackRate - step);
});
downBtn.addEventListener('click', () => {
  syncBarToRate(playbackRate + step);
});

syncBarToRate(1.0);
