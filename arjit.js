// Music System JavaScript code 

const music = new Audio("audio/arjit/2.mp3");


// making object for the music system 

const songs = [
    {
        id: '1',
        songName: `Mere Dholna <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/1.jpg",
    },

    {
        id: '2',
        songName: `Unconditional Messup <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/2.jpg",
    },

    {
        id: '3',
        songName: `Fittor <br> <div class="subtitle">Shamshera</div>`,
        poster: "img/arjit/3.jpg",
    },

    {
        id: '4',
        songName: `Kesariya <br> <div class="subtitle">Bharamastra</div>`,
        poster: "img/arjit/4.jpg",
    },

    {
        id: '5',
        songName: `Tere Yaar Hoon Main <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/5.jpg",
    },

    {
        id: '6',
        songName: `Ab tere bin<br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/6.jpg",
    },

    {
        id: '7',
        songName: `Lambiya <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/7.jpg",
    },

    {
        id: '8',
        songName: `Tu ban mere heer mai <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/8.jpg",
    },

    {
        id: '9',
        songName: `Rait Zara si<br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/9.jpg",
    },

    {
        id: '10',
        songName: `Tum hi ho <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/10.jpg",
    },

    {
        id: '11',
        songName: `Pal Pal dil ke pass <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/11.jpg",
    },

    {
        id: '12',
        songName: `Pachtaoge <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/12.jpg",
    },

    {
        id: '13',
        songName: `Sanam re <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/13.jpg",
    },

    {
        id: '14',
        songName: `Hamari Adhuri kahani <br> <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/14.jpg",
    },

    {
        id: '15',
        songName: `Nashe se chadh gayi <br> <div class="subtitle">Befikre</div>`,
        poster: "img/arjit/15.jpg",
    },
]

// Making array for the poster and name 

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


// javaScript for the masterplay play and pause 

let masterPlay = document.getElementById('masterPlay');
let wave_play = document.getElementById('wave_play');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave_play.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave_play.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');

    }
});

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((els) => {
        els.style.background = 'rgb(105, 105, 105, .0)';
    })
}

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(abc);
        music.src = `audio/arjit/${index}.mp3`;
        poster_master_play.src = `img/arjit/${index}.jpg`;
        music.play();
        wave_play.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/arjit/${index}.mp3`;


        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
    })
});

// JavaScript code for sliding the popular song list 

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

// JavaScript code for the popular_artist sliding bar 

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 230;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 230;
});

// JavaScript code for the time Update 

let CurrentStart = document.getElementById('CurrentStart');
let CurrentEnd = document.getElementById('CurrentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    // console.log(music_dur); to check for the javaScript is working or not

    // converting this into the minute 

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    CurrentEnd.innerText = `${min1}:${sec1}`;

    // code for the start time song 
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    CurrentStart.innerText = `${min2}:${sec2}`;

    // update for the seekbar 

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    // console.log(seekbar);
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

    seek.addEventListener('change', () => {
        music.currentTime = seek.value * music_dur / 100;
    })


});


// javaScript Code for the volume 

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    };

    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    };

    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    };

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', (el) => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
        // index = songs.length;
    }
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/arjit/${index}.mp3`;


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

});

next.addEventListener('click', (el) => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1
    }
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/arjit/${index}.mp3`;


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat-1');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat"
            break;

        case "repeat":
            shuffle.classList.remove('bi-repeat-1');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random"
            break;

        case "random":
            shuffle.classList.remove('bi-repeat-1');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next"
            break;
    }
});

const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/arjit/${index}.mp3`;


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
};

const repeat_music = () => {
    index;
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/arjit/${index}.mp3`;


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
};

const ran_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/arjit/${index}.mp3`;


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
};

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;

        case "next":
            next_music();
            break;

        case "random":
            ran_music();
            break;
    }
});