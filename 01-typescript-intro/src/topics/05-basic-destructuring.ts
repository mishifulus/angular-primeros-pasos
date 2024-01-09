interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//const song = "New Song";
//const { song:anotherSong, songDuration:duration, details: {author, year}} = audioPlayer; //RENOMBRAR PROPIEDADES
//const { author, year } = details;

// console.log("Song: " + audioPlayer.song);
// console.log("Duration: " + audioPlayer.songDuration);
// console.log("Author: " + audioPlayer.details.author);

// console.log("Song: " + song);
// console.log("Song: " + anotherSong);
// console.log("Duration: " + duration);
// console.log("Author: " + author);
// console.log("Year: " + year);

const [ p1, , trunks = 'Not found']: string[] = ["Goku", "Vegeta", "Trunks"];

console.log("Personaje 3:", trunks);



export {};