console.log("welcome to spotify");

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Let me love You", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Life Secrets", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Friends at club", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Break up", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Family vs evil", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Ghost in the town", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
]

songitems.forEach((element, i)=>{
   

})


// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');       
        masterPlay.classList.add('fa-circle-pause');       
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');    
        masterPlay.classList.add('fa-circle-play');      
        gif.style.opacity=0; 
    }
})
audioElement.addEventListener('timeupdate',()=>{
    
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;   
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        let songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1; 
        masterPlay.classList.remove('fa-circle-play');    
        masterPlay.classList.add('fa-circle-pause'); 

    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
     audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1; 
     masterPlay.classList.remove('fa-circle-play');    
    masterPlay.classList.add('fa-circle-pause'); 
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
     audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1; 
     masterPlay.classList.remove('fa-circle-play');    
    masterPlay.classList.add('fa-circle-pause'); 
})

