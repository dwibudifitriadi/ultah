document.getElementById('reveal-btn').addEventListener('click', function() {
    document.getElementById('card1').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('lanjut1').addEventListener('click', function() {
    document.getElementById('card2').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('lanjut2').addEventListener('click', function() {
    document.getElementById('card3').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('lanjut3').addEventListener('click', function() {
    document.getElementById('card4').scrollIntoView({
        behavior: 'smooth'
    });
});
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const musicTitle = document.getElementById('musicTitle');
const loadingText = document.getElementById('loadingText');
const musicPlayer = document.getElementById('musicPlayer');
let isPlaying = false;
let loadingPercentage = 0;
let loadingInterval;
let isLoaded = false;
function togglePlayPause() {
    if (isPlaying) {
        pauseMusic();
        musicTitle.classList.add('hidden');
    } else {
        if (!isLoaded) {
            loadingText.classList.remove('hidden');
            musicTitle.classList.add('hidden');
            loadingPercentage = 0;
            loadingInterval = setInterval(updateLoadingProgress, 500);
        } else {
            musicTitle.classList.remove('hidden');
            musicTitle.textContent = 'qbcle - virtual hug';
            playMusic();
        }
    }
    isPlaying = !isPlaying;
    playIcon.classList.toggle('hidden');
    pauseIcon.classList.toggle('hidden');
}
function updateLoadingProgress() {
    loadingText.textContent = `Tunggu yah 😊 ${loadingPercentage}%`;
    loadingPercentage += 20;
    if (loadingPercentage > 100) {
        clearInterval(loadingInterval);
        loadingText.classList.add('hidden');
        musicTitle.classList.remove('hidden');
        musicTitle.textContent = 'glass animals - take a slice';
        isLoaded = true;
        playMusic(); 
    }
}
function playMusic() {
    musicPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}
function pauseMusic() {
    musicPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
playPauseBtn.addEventListener('click', togglePlayPause);
const messageInput = document.getElementById('messageInput');
const emojiSad = document.getElementById('emojiSad');
const emojiSmile = document.getElementById('emojiSmile');
const sendBtn = document.getElementById('sendBtn');
let selectedReaction = '';
emojiSad.addEventListener('click', () => {
    selectedReaction = '😢';
});
emojiSmile.addEventListener('click', () => {
    selectedReaction = '😊';
});
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    const formattedMessage = `${message}\nReaction: ${selectedReaction}`;
    const whatsappUrl = `https://wa.me/6283804423369?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
});
