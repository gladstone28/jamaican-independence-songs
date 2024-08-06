document.addEventListener('DOMContentLoaded', function() {
    const playlist = [
        { title: "Jamaica I'll Never Leave You Again", singer: "Ras Karby", videoId: "GR3MMjdyKZk" },
        { title: "Song 2", singer: "Singer 2", videoId: "VIDEO_ID_2" },
        { title: "MEK WE JAM", singer: "THE ASTRONAUGHTS", videoId: "PRZr2eYylSM" },
        { title: "Song 4", singer: "Singer 4", videoId: "VIDEO_ID_4" },
        { title: "Song 5", singer: "Singer 5", videoId: "VIDEO_ID_5" },
        { title: "Song 6", singer: "Singer 6", videoId: "VIDEO_ID_6" },
        { title: "Song 7", singer: "Singer 7", videoId: "VIDEO_ID_7" },
        { title: "Song 8", singer: "Singer 8", videoId: "VIDEO_ID_8" },
        { title: "Song 9", singer: "Singer 9", videoId: "VIDEO_ID_9" },
        { title: "Song 10", singer: "Singer 10", videoId: "VIDEO_ID_10" },
        { title: "Song 11", singer: "Singer 11", videoId: "VIDEO_ID_11" },
        { title: "Song 12", singer: "Singer 12", videoId: "VIDEO_ID_12" },
        { title: "Song 13", singer: "Singer 13", videoId: "VIDEO_ID_13" },
        { title: "Song 14", singer: "Singer 14", videoId: "VIDEO_ID_14" },
        { title: "Song 15", singer: "Singer 15", videoId: "VIDEO_ID_15" },
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