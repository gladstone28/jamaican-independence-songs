document.addEventListener('DOMContentLoaded', function() {
    const playlist = [
        { title: "Jamaica I'll Never Leave You Again", singer: "Ras Karby", videoId: "GR3MMjdyKZk" },
        { title: "New Jamaica (lyrics)", singer: "Stanley Beckford and The Starlights ", videoId: "GRnVqFt5SKo" },
        { title: "MEK WE JAM", singer: "THE ASTRONAUGHTS", videoId: "PRZr2eYylSM" },
        { title: "Love Fever", singer: "ROY RAYON", videoId: "U8F4UMH1uU0" },
        { title: "WHATABAMBAMWEAR", singer: "The Maytals - Bam Bam", videoId: "gy26FHXFf7o&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f" },
        { title: "Ba Ba Boom Time - YouTube.mp4", singer: "The Jamaicans", videoId: "NRP53Mtn5gI&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=2" },
        { title: "Ba Ba Boom Time - YouTube.mp4", singer: "The Jamaicans", videoId: "NRP53Mtn5gI&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=2" },
        { title: "Never Gonna Give You Up", singer: "Rick Astley", videoId: "dQw4w9WgXcQ" },
        { title: "Bohemian Rhapsody", singer: "Queen", videoId: "fJ9rUzIMcZQ" },
        { title: "Shape of You", singer: "Ed Sheeran", videoId: "JGwWNGJdvx8" },
        { title: "Sweet and Dandy", singer: "Toots and The Maytals", videoId: "RvXAn8Tuz4k&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=4" },
        { title: "Intensified '68 (aka Music Like Dirt)", singer: "Desmond Dekker & The Aces", videoId: "ClNAc2Ju41E&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=3" },
        { title: "Sweet and Dandy", singer: "Toots and The Maytals", videoId: "RvXAn8Tuz4k&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=4" },
        { title: "Boom Shaka Laka (1970)", singer: "Hopeton Lewis", videoId: "CuOPPL65zUQ&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=5" },
        { title: "Pomp & Pride", singer: "Toots & The Maytals", videoId: "FB-DgI7wM1Y&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=6" },
        { title: "Get in the line festival time", singer: "Morvin Brooks", videoId: "68L0cFJdPOs&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=7" },
        { title: "play de music", singer: "tinga stewart", videoId: "CXfSndm_Kww&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=8" },
        { title: "Hooray Festival.flv", singer: "Roman Stewart", videoId: "FGZ5zqVnbmg&list=PLWYLPbEHLoQK0G_LUjWn1luyEEd2wqh2f&index=9" },
        // Add more songs as needed
    ];

    const playlistContainer = document.getElementById('playlist');

    playlist.forEach(song => {
        const card = document.createElement('div');
        card.className = 'card';

        const thumbnail = document.createElement('img');
        thumbnail.src = `https://img.youtube.com/vi/${song.videoId}/hqdefault.jpg`;
        thumbnail.alt = `${song.title} by ${song.singer}`;

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.textContent = song.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = `by ${song.singer}`;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardText);

        card.appendChild(thumbnail);
        card.appendChild(cardContent);

        card.addEventListener('click', () => {
            window.open(`https://www.youtube.com/watch?v=${song.videoId}`, '_blank');
        });

        playlistContainer.appendChild(card);
    });
});
