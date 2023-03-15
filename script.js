//console.log("Welcome to spotify");

let songIndex = 0;
let audioElmenet = new Audio("song/Aankhon Aankhon Bhaag Johnny 320 Kbps.mp3");
let masterSongName = document.getElementById('masterSongName')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName("songItem"));
let song =
    [
        { songName: "Aankhon Aankhon Bhaag Johnny ", filePath: "song/Aankhon Aankhon Bhaag Johnny 320 Kbps.mp3 ", coverPath: "covers/1 (1).png" },

        { songName: "Abcd Yaariyan Pritam", filePath: "song/Abcd Yaariyan Pritam 320 Kbps.mp3 ", coverPath: "covers/1 (2).jpg" },

        { songName: "Angreji Beat International Villager", filePath: "song/Angreji Beat International Villager 320 Kbps.mp3", coverPath: "covers/1 (3).jpg" },

        { songName: "Beautiful International Villager", filePath: " song/Beautiful International Villager 320 Kbps.mp3", coverPath: "covers/1 (4).jpg" },

        { songName: "Birthday Bash Dilliwaali Zaalim Girlfriend", filePath: "song/Birthday Bash Dilliwaali Zaalim Girlfriend 320 Kbps.mp3 ", coverPath: "covers/1 (5).jpg" },

        { songName: "Boom Boom Yo Yo Honey Singh", filePath: "song/Boom Boom Yo Yo Honey Singh 320 Kbps.mp3 ", coverPath: "covers/never.jpg" },

        { songName: "Boom Boom Yo Yo Honey Singh", filePath: "song/Boom Boom Yo Yo Honey Singh 320 Kbps.mp3 ", coverPath: "covers/never.jpg" },

        { songName: "Boom Boom Yo Yo Honey Singh", filePath: "song/Boom Boom Yo Yo Honey Singh 320 Kbps.mp3 ", coverPath: "covers/never.jpg" },

        { songName: "Boom Boom Yo Yo Honey Singh", filePath: "song/Boom Boom Yo Yo Honey Singh 320 Kbps.mp3 ", coverPath: "covers/never.jpg" }

    ]

songItem.forEach((element, i) => {
    //console.log(element, i)
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songsName")[0].innerText = song[i].songName;
})

//audioElement.play();

//Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElmenet.paused || audioElmenet.currentTime <= 0) {
        audioElmenet.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElmenet.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        makeAllPlayers();
    }
})

//Listen to Events

audioElmenet.addEventListener('timeupdate', () => {
    //console.log("time update")
    //update seek bar

    progress = parseInt((audioElmenet.currentTime / audioElmenet.duration) * 100)
    //console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElmenet.currentTime = (myProgressBar.value * audioElmenet.duration) / 100;
})

const makeAllPlayers = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        // e.target.classList.add('fa-circle-pause')
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlayers();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElmenet.src =  song[songIndex].filePath
        masterSongName.innerHTML = song[songIndex].songName
        gif.style.opacity = 1;

        audioElmenet.currentTime=0;
        audioElmenet.play();
        //console.log(e.target);
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>9){
        songIndex =0;
    }
    else{
        songIndex+=1;
    }
    audioElmenet.src = song[songIndex].filePath
    masterSongName.innerHTML = song[songIndex].songName

    audioElmenet.currentTime = 0;
    audioElmenet.play();
    //console.log(e.target);
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById("prev").addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = song.length -1;
    }
    else {
        songIndex -= 1;
    }
    audioElmenet.src = song[songIndex].filePath;
    masterSongName.innerHTML = song[songIndex].songName
    audioElmenet.currentTime = 0;
    audioElmenet.play();
    //console.log(e.target);
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})