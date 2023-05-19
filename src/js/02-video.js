const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
player.on('timeupdate', function (data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
  const currentTime = data.seconds; // Obtén el tiempo actual del video en segundos

  console.log('Tiempo actual:', currentTime);
});
localStorage.setItem('currentTime', 'videoplayer-current-time');
player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
const updatePlaybackTime = () => {
  // Lógica para actualizar el tiempo de reproducción
};

const throttledUpdatePlaybackTime = throttle(updatePlaybackTime, 1000);
