import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time";


const onPlay = function(e) {
    const currentTime = e.seconds;
    console.log(currentTime);
    localStorage.setItem(CURRENT_TIME_KEY, currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(CURRENT_TIME_KEY);

player.setCurrentTime(savedTime);
