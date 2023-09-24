let songIndex= 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay =document.getElementById("masterplay");
let  backward=document.getElementById("previous");
let farward=document.getElementById("next");
let myProgressBar=document.getElementById("progressbar");
let gifimage =document.getElementById("gif-img");
let gifspan =document.getElementById("gif-span");
songplaybtn=Array.from(document.getElementsByClassName("songplay"));
let songitems=Array.from(document.getElementsByClassName("song-item"));
let songs=[{songName: "BadDecisions" ,filePath: "song/1.mp3",coverPath :"bgsongimg/1.jpg"},
{songName: "Blue & Greey" ,filePath: "song/2.mp3",coverPath :"bgsongimg/2.jpg"},
{songName: "For Youth" ,filePath: "song/3.mp3",coverPath :"bgsongimg/3.jpg"},
{songName: "With You" ,filePath: "song/4.mp3",coverPath :"bgsongimg/4.jpg"},
{songName: "Christmas Tree" ,filePath: "song/5.mp3",coverPath :"bgsongimg/5.jpg"},
{songName: "Life Goes On" ,filePath: "song/6.mp3",coverPath :"bgsongimg/6.jpg"},
{songName: "Make It Right" ,filePath: "song/7.mp3",coverPath :"bgsongimg/7.jpg"},
{songName: "Shut Down" ,filePath: "song/8.mp3",coverPath :"bgsongimg/8.jpg"},
{songName: "Typa Girl" ,filePath: "song/9.mp3",coverPath :"bgsongimg/9.jpg"}
];
songitems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("song-name")[0].innerText=songs[i].songName;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||  audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause");
        gifspan.innerText=songs[0].songName;
       gifimage.style.opacity=1;
       gifspan.style.opacity=1;

  if(songIndex == 8){
        makeAllPlace();
        let temp = document.getElementById("9");
        temp.classList.add('fa-circle-pause');
        temp.classList.remove('fa-circle-play');
         gifspan.innerText=songs[8].songName;
  }
  if(songIndex == 7){
    makeAllPlace();
    let temp = document.getElementById("8");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[7].songName;
  }
  if(songIndex == 6){
    makeAllPlace();
    let temp = document.getElementById("7");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[6].songName;
  }
  if(songIndex == 5){
    makeAllPlace();
    let temp = document.getElementById("6");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[5].songName;
  }
  if(songIndex == 4){
    makeAllPlace();
    let temp = document.getElementById("5");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[4].songName;
  }
  if(songIndex == 3){
    makeAllPlace();
    let temp = document.getElementById("4");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[3].songName;
  }
  if(songIndex == 2){
    makeAllPlace();
    let temp = document.getElementById("3");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[2].songName;
  }
  if(songIndex == 1){
    makeAllPlace();
    let temp = document.getElementById("2");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[1].songName;
  }
  if(songIndex == 0){
    makeAllPlace();
    let temp = document.getElementById("1");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[0].songName;
  }
  audioElement.addEventListener('ended',function(){
  songIndex++;
  audioElement.src=`song/${songIndex+1}.mp3`;
  if(songIndex == 8){
        makeAllPlace();
        let temp = document.getElementById("9");
        temp.classList.add('fa-circle-pause');
        temp.classList.remove('fa-circle-play');
         gifspan.innerText=songs[8].songName;
  }
  if(songIndex == 7){
    makeAllPlace();
    let temp = document.getElementById("8");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[7].songName;
  }
  if(songIndex == 6){
    makeAllPlace();
    let temp = document.getElementById("7");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[6].songName;
  }
  if(songIndex == 5){
    makeAllPlace();
    let temp = document.getElementById("6");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[5].songName;
  }
  if(songIndex == 4){
    makeAllPlace();
    let temp = document.getElementById("5");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[4].songName;
  }
  if(songIndex == 3){
    makeAllPlace();
    let temp = document.getElementById("4");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[3].songName;
  }
  if(songIndex == 2){
    makeAllPlace();
    let temp = document.getElementById("3");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[2].songName;
  }
  if(songIndex == 1){
    makeAllPlace();
    let temp = document.getElementById("2");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[1].songName;
  }
  if(songIndex == 0){
    makeAllPlace();
    let temp = document.getElementById("1");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[0].songName;
  }
  console.log(songIndex);
  audioElement.play();
  if(songIndex == 8){
    songIndex = -1;
  }
})
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play')
        gifimage.style.opacity=0; 
        if(songIndex == 8){
          makeAllPlace();
          let temp = document.getElementById("9");
          temp.classList.remove('fa-circle-pause');
          temp.classList.add('fa-circle-play');
    }
    if(songIndex == 7){
      makeAllPlace();
      let temp = document.getElementById("8");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    if(songIndex == 6){
      makeAllPlace();
      let temp = document.getElementById("7");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    if(songIndex == 5){
      makeAllPlace();
      let temp = document.getElementById("6");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    if(songIndex == 4){
      makeAllPlace();
      let temp = document.getElementById("5");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    if(songIndex == 3){
      makeAllPlace();
      let temp = document.getElementById("4");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    if(songIndex == 2){
      makeAllPlace();
      let temp = document.getElementById("3");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    if(songIndex == 1){
      makeAllPlace();
      let temp = document.getElementById("2");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    if(songIndex == 0){
      makeAllPlace();
      let temp = document.getElementById("1");
      temp.classList.remove('fa-circle-pause');
      temp.classList.add('fa-circle-play');
    }
    }
   
})
  audioElement.addEventListener("timeupdate" ,()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
  })

  myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  })
  function makeAllPlace(){
    songplaybtn.forEach((element)=>{
      element.classList.add('fa-circle-play');
      element.classList.remove('fa-circle-pause')
     
          
    })
  }
  songplaybtn.forEach((element)=>{
  element.addEventListener('click',(e)=>{
    if(audioElement.paused ||  audioElement.currentTime <= 0){
      audioElement.addEventListener('ended',function(){
   console.log(e.target)
      makeAllPlace();
       
  audioElement.src=`song/${songIndex+1}.mp3`;
  if(songIndex == 8){
        makeAllPlace();
        let temp = document.getElementById("9");
        temp.classList.add('fa-circle-pause');
        temp.classList.remove('fa-circle-play');
         gifspan.innerText=songs[8].songName;
         audioElement.play();
         songIndex=-1;
  }
  if(songIndex == 7){
    makeAllPlace();
    let temp = document.getElementById("8");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[7].songName;
  }
  if(songIndex == 6){
    makeAllPlace();
    let temp = document.getElementById("7");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[6].songName;
  }
  if(songIndex == 5){
    makeAllPlace();
    let temp = document.getElementById("6");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[5].songName;
  }
  if(songIndex == 4){
    makeAllPlace();
    let temp = document.getElementById("5");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[4].songName;
  }
  if(songIndex == 3){
    makeAllPlace();
    let temp = document.getElementById("4");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[3].songName;
  }
  if(songIndex == 2){
    makeAllPlace();
    let temp = document.getElementById("3");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[2].songName;
  }
  if(songIndex == 1){
    makeAllPlace();
    let temp = document.getElementById("2");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[1].songName;
  }
  if(songIndex == 0){
    makeAllPlace();
    let temp = document.getElementById("1");
    temp.classList.add('fa-circle-pause');
    temp.classList.remove('fa-circle-play');
     gifspan.innerText=songs[0].songName;
  }
  console.log(songIndex);
  audioElement.play();
  songIndex++;
      masterPlay.classList.add('fa-circle-pause');
      masterPlay.classList.remove('fa-circle-play');
     
      })
       console.log(e.target)
      makeAllPlace();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add("fa-circle-pause");
      audioElement.src=`song/${songIndex}.mp3`;
      audioElement.currentTime=0;
      gifimage.style.opacity=1;
      gifspan.style.opacity=1;
      temp=songIndex-1;
      gifspan.innerText=songs[`${temp}`].songName;
      audioElement.play();
      masterPlay.classList.add('fa-circle-pause');
      masterPlay.classList.remove('fa-circle-play')
  
     
    }else{
      audioElement.pause();
      e.target.classList.add('fa-circle-play');
           e.target.classList.remove("fa-circle-pause");
           masterPlay.classList.remove('fa-circle-pause');
           masterPlay.classList.add('fa-circle-play')
    }
  })
  })
  backward.addEventListener('click',()=>{
   
    gifimage.style.opacity=1;
    gifspan.style.opacity=1;
    if (songIndex <=0){
      songIndex =songs.length-1;
      console.log(songIndex)
    }
    else{
         songIndex -=1;
         console.log(songIndex)
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    console.log(songIndex)
    audioElement.play();
    makeAllPlace();
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause");
    if(songIndex == 8){
      makeAllPlace();
      let temp = document.getElementById(`${9}`);
      gifspan.innerText=songs[`${8}`].songName;
      temp.classList.add('fa-circle-pause');
      temp.classList.remove('fa-circle-add');
}
if(songIndex == 7){
  makeAllPlace();
  let temp = document.getElementById(`${8}`);
  gifspan.innerText=songs[`${7}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
if(songIndex == 6){
  makeAllPlace();
  let temp = document.getElementById(`${7}`);
  gifspan.innerText=songs[`${6}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
if(songIndex == 5){
  makeAllPlace();
  let temp = document.getElementById(`${6}`);
  gifspan.innerText=songs[`${5}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
if(songIndex == 4){
  makeAllPlace();
  let temp = document.getElementById(`${5}`);
  gifspan.innerText=songs[`${4}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
if(songIndex == 3){
  makeAllPlace();
  let temp = document.getElementById(`${4}`);
  gifspan.innerText=songs[`${3}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
if(songIndex == 2){
  makeAllPlace();
  let temp = document.getElementById(`${3}`);
  gifspan.innerText=songs[`${2}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
if(songIndex == 1){
  makeAllPlace();
  let temp = document.getElementById(`${2}`);
  gifspan.innerText=songs[`${1}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
if(songIndex == 0){
  makeAllPlace();
  let temp = document.getElementById(`${1}`);
  gifspan.innerText=songs[`${0}`].songName;
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
}
  })
  farward.addEventListener('click',()=>{
    gifimage.style.opacity=1;
    gifspan.style.opacity=1;
    if(songIndex == 9){
       songIndex = 1;
       console.log(songIndex)
    }
    else{
      songIndex +=1;
      console.log(songIndex)
    }
    audioElement.src=`song/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    makeAllPlace();
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause");
    if(songIndex == 8){
      makeAllPlace();
      let temp = document.getElementById("8");
      temp.classList.add('fa-circle-pause');
      temp.classList.remove('fa-circle-add');
      gifspan.innerText=songs[`${7}`].songName;
}
if(songIndex == 7){
  makeAllPlace();
  let temp = document.getElementById("7");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${6}`].songName;
}
if(songIndex == 6){
  makeAllPlace();
  let temp = document.getElementById("6");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${5}`].songName;
}
if(songIndex == 5){
  makeAllPlace();
  let temp = document.getElementById("5");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${4}`].songName;
}
if(songIndex == 4){
  makeAllPlace();
  let temp = document.getElementById("4");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${3}`].songName;
}
if(songIndex == 3){
  makeAllPlace();
  let temp = document.getElementById("3");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${2}`].songName;
}
if(songIndex == 2){
  makeAllPlace();
  let temp = document.getElementById("2");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${1}`].songName;
}
if(songIndex == 1){
  makeAllPlace();
  let temp = document.getElementById("1");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${0}`].songName;
}
if(songIndex == 9){
  makeAllPlace();
  let temp = document.getElementById("9");
  temp.classList.add('fa-circle-pause');
  temp.classList.remove('fa-circle-add');
  gifspan.innerText=songs[`${8}`].songName;
}
  });
