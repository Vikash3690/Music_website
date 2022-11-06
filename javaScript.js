// Music System JavaScript code 

const music = new Audio("audio/1.mp3");


// making object for the music system 

const songs = [
    {
        id: '1',
        songName: `On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg",
    },

    {
        id: '2',
        songName: `Alan-Walker-Fade <br> <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg",
    },

    {
        id: '3',
        songName: `Cartoon - on & on <br> <div class="subtitle">Daniel levi</div>`,
        poster: "img/3.jpg",
    },

    {
        id: '4',
        songName: `Warriyo - mortals <br> <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },

    {
        id: '5',
        songName: `Ertugrul Gazi <br> <div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },

    {
        id: '6',
        songName: `Electronic Music <br> <div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },

    {
        id: '7',
        songName: `Agar Tum Sath Ho <br> <div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },

    {
        id: '8',
        songName: `Sunna Hai <br> <div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },

    {
        id: '9',
        songName: `Dilber <br> <div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },

    {
        id: '10',
        songName: `Duniya <br> <div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },

    {
        id: '11',
        songName: `Lagdi Lahore Di <br> <div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },

    {
        id: '12',
        songName: `putt jatta Da <br> <div class="subtitle">putt jatt Da</div>`,
        poster: "img/12.jpg",
    },

    {
        id: '13',
        songName: `Baarishein <br> <div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },

    {
        id: '14',
        songName: `vaaste <br> <div class="subtitle">Dhvani bhanushali</div>`,
        poster: "img/14.jpg",
    },

    {
        id: '15',
        songName: `Lut Gaya <br> <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },

    {
        id: '16',
        songName: `Tu Meri Jindgi Hai Tu <br> <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg",
    },

    {
        id: '17',
        songName: `Batao yaad Hai Tumko Wo Dil Ko Churaya Tha <br> <div class="subtitle">Rahat Fateh</div>`,
        poster: "img/17.jpg",
    },

    {
        id: '18',
        songName: `Mera Dhol Judaiyan <br> <div class="subtitle">Ali Sethi seha Gill</div>`,
        poster: "img/18.jpg",
    },

    {
        id: '19',
        songName: `Eh Munde Pagal Ne Saare <br> <div class="subtitle">Ap Dhillon, Shinda Kahlon</div>`,
        poster: "img/19.jpg",
    },

    {
        id: '20',
        songName: `Dunny 82k<br> <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda kahlon</div>`,
        poster: "img/20.jpg",
    },
]




// Making array for the poster and name 

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// search start data 

let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;
    // console.log(songName)
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                               ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});

// search end data 

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
           items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input_value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = ""; 
        }
    }
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
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        wave_play.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;


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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;


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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;


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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;


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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;


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

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    wave_play.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;


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
            random_music();
            break;
    }
});