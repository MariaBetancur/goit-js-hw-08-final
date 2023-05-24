import Player from '@vimeo/player/dist/player.js';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = 'videoplayer-current-time';

const currentTime = localStorage.getItem(localStorageKey);

if (currentTime && !isNaN(parseInt(currentTime))) {
  player.setCurrentTime(parseInt(currentTime)).catch(error => {
    console.log(error);
  });
}
const updatePlaybackTime = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  // const currentTime = localStorage.getItem(localStorageKey);
  // player.setCurrentTime(currentTime);
};

const throttledUpdatePlaybackTime = throttle(updatePlaybackTime, 1000);
player.on('timeupdate', throttledUpdatePlaybackTime);
