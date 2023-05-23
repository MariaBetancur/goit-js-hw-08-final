import Player from '@vimeo/player/dist/player.js';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('play', onPlay);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds; // Obtén el tiempo actual del video en segundos
  console.log('Tiempo actual:', currentTime);
});

const localStorageKey = 'videoplayer-current-time';

player
  .setCurrentTime(localStorage.getItem(localStorageKey))
  .then(function (time) {
    localStorage.setItem(localStorageKey, time);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // El tiempo era menor que 0 o mayor que la duración del video
        break;
      default:
        // Se produjo algún otro error
        break;
    }
  });

const updatePlaybackTime = () => {
  const currentTime = localStorage.getItem(localStorageKey);
  player.setCurrentTime(currentTime);
};

const throttledUpdatePlaybackTime = throttle(updatePlaybackTime, 1000);
player.on('timeupdate', throttledUpdatePlaybackTime);
