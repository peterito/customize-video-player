const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

//function to play & pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//update the play & pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}
//update progress and timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    //Get minutes of the video
    let mins = math.floor(video.currentTime / 60);
    if (mins < 10){
        mins = '0' + String(mins);
    }

    //Get seconds of the video
    let secs = math.floor(video.currentTime % 60);
    if (secs < 10){
        mins = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}` ;
}

//set video time to progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

//stop video
function stopVideo(){
   video.currentTime = 0;
   video.paused();
}


//Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

play.addEventListener('click', stopVideo)

play.addEventListener('change', setVideoProgress)
