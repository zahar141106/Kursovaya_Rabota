// Получение всех видеофайлов из папки "video"
const videos = document.querySelectorAll('video source[src^="video/"]');

// Создание нового видеоплеера
const player = new VideoPlayer({
  container: document.querySelector('video'), // Контейнер для видеоплеера
  sources: videos, // Массив источников видео
});

// Начало воспроизведения
player.play();
class VideoPlayer {
    constructor({ container, sources }) {
      this.container = container;
      this.sources = sources;
  
      this.video = this.container.querySelector('video');
      this.playButton = this.container.querySelector('.play-button');
      this.pauseButton = this.container.querySelector('.pause-button');
      this.currentTimeDisplay = this.container.querySelector('.current-time');
      this.durationDisplay = this.container.querySelector('.duration');
      this.progressBar = this.container.querySelector('.progress-bar');
  
      this.isPlaying = false;
      this.currentTime = 0;
      this.duration = 0;
  
      this.setupListeners();
    }
  
    setupListeners() {
      this.video.addEventListener('loadedmetadata', () => {
        this.duration = this.video.duration;
        this.durationDisplay.textContent = this.formatTime(this.duration);
      });
  
      this.video.addEventListener('timeupdate', () => {
        this.currentTime = this.video.currentTime;
        this.currentTimeDisplay.textContent = this.formatTime(this.currentTime);
        this.updateProgressBar();
      });
  
      this.playButton.addEventListener('click', () => {
        this.play();
      });
  
      this.pauseButton.addEventListener('click', () => {
        this.pause();
      });
  
      this.progressBar.addEventListener('click', (e) => {
        const progress = (e.offsetX / this.progressBar.offsetWidth);
        this.video.currentTime = progress * this.duration;
      });
    }
  
    play() {
      this.video.play();
      this.isPlaying = true;
      this.playButton.classList.add('hidden');
      this.pauseButton.classList.remove('hidden');
    }
  
    pause() {
      this.video.pause();
      this.isPlaying = false;
      this.playButton.classList.remove('hidden');
      this.pauseButton.classList.add('hidden');
    }
  
    updateProgressBar() {
      const progress = this.currentTime / this.duration;
      this.progressBar.value = progress;
    }
  
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return ${minutes}:${seconds.toString().padStart(2, '0')};
    }
  }
  