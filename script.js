const btnPlayPause = document.getElementById("play-pause")
const btnPlayPauseIcon = document.getElementById("play-pause-icon")
const btnPreviousTrack = document.getElementById("previous")
const btnNextTrack = document.getElementById("next")
const chapter = document.getElementById("chapter")
const audio = document.getElementById("audio-chapter")

let isPlaying = false
let currentTrackNumber = 1

function playTrack() {
    audio.src = `./books/dom-casmurro/${currentTrackNumber}.mp3`
    btnPlayPauseIcon.classList.remove("bi-play-circle")
    btnPlayPauseIcon.classList.add("bi-pause-circle")
    audio.play()
    isPlaying = true
}

function pauseTrack() {
    btnPlayPauseIcon.classList.remove("bi-pause-circle")
    btnPlayPauseIcon.classList.add("bi-play-circle")
    audio.pause()
    isPlaying = false
}

function playPauseTrack() {
    if (isPlaying) {
        pauseTrack()
    } else {
        playTrack()
    }
}

function previousTrack() {
    if (currentTrackNumber === 1) {
        currentTrackNumber = 10
    } else {
        currentTrackNumber--
    }
    chapter.textContent = `Capítulo ${currentTrackNumber}`
    playTrack()
}

function nextTrack() {
    if (currentTrackNumber === 10) {
        currentTrackNumber = 1
    } else {
        currentTrackNumber++
    }

    chapter.textContent = `Capítulo ${currentTrackNumber}`
    playTrack()
}

btnPlayPause.addEventListener("click", playPauseTrack)
btnNextTrack.addEventListener("click", nextTrack)
btnPreviousTrack.addEventListener("click", previousTrack)