// =======================================================
// ARRAYS DE DATOS TEMÁTICOS (Poemas y Aventuras)
// =======================================================

// 1. POEMAS: Rimas personales, elegancia y referencias a sus gustos
const poemas = [
    "Mi amor por ti es de alta sociedad, / La joya más brillante de mi felicidad. / Eres la Reina Charlotte de mi noble vida, / Una elegancia pura, jamás aburrida.",
    "Por ti, mi mundo se vuelve un poema inmortal, / Eres mi **Hércules**, mi fuerza sin igual. / Si yo soy el fuego de un amor valiente, / Tú eres el agua que fluye elegante.",
    "Si hay drama en la vida, tú eres la mejor parte, / No hay 'Culpa Nuestra' en quererte con este arte. / Eres el secreto en el pasillo de **Maxton Hall**, / Mi dulce pecado, mi amor universal.",
    "Eres mi **Stitch**, mi criatura espacial, / Que me enseñó a amar de forma especial. / En tu caos y tu risa encuentro mi paz, / La 'Ohana que necesito, y nada más.",
    "Cambiaste mi mundo, lo volviste precioso, / Como una **Mujer Bonita**, un regalo glorioso. / Tu belleza es un clásico que nunca va a fallar, / El cuento sin final que siempre quiero mirar.",
    "Tu mente es oscura, tu espíritu es tan fino, / Como **Merlina** en el mejor destino. / En tus ojos de tinta, leo una gran pasión, / Eres el misterio de mi **Alex Mirez**, mi eterna fascinación.",
    "En la aventura de la vida, de lo real a lo virtual, / Eres mi **Asuna**, mi amada sin igual. / Mi corazón es un juego de **SAO** que tú ganas, / Eres la victoria que siempre me acompaña.",
    "Eres mi sol, mi arena, mi ola que no rompe, / El calor que mi alma con ansias corrompe. / Eres **el verano eterno** donde quiero vivir, / El lugar donde todo vuelve a fluir.",
    "Eres la dueña del reino que en mi pecho se sienta, / Mi castillo de sueños, la historia que alienta. / Por ti lucho mis guerras, por ti quiero ganar, / Mi Reina de cuentos, a quien quiero adorar.",
    "Entre sombras y luces, te encuentro a mi vera, / La belleza que esconde la gran calavera. / Eres como Kaneki, mi dulce inquietud, / La parte más humana de mi gran virtud.",
    "No hay pecado en mirarte, mi amada y mi reina, / Eres la fuerza que mi alma sostiene y diseña. / Si soy un dragón, tú eres el hada que quiero, / El tesoro de mi vida, mi amor verdadero.",
    "Contigo, cada día tiene un final feliz, / Eres mi elegancia desde la raíz. / Por eso te digo con todo mi ser, / Que nada en el mundo me hace más querer."
];

// 2. AVENTURAS: Sugerencias personales y temáticas
const ideasAventura = [
    "👑 **Fin de Semana de Realeza:** Amor, te propongo ir a ese hotel histórico que parece un castillo de **Bridgerton** o buscar un Airbnb elegante. ¡Nos vestimos de gala y fingimos ser la Reina Charlotte y su Lord!",
    "🔥💧 **Aventura de Elementos:** Vamos a un *spa* o balneario (por el agua de Wade) y luego busquemos un lugar con chimenea o un bar con cocteles de fuego (por Ember). ¡Como en **Elementos**!",
    "🖤 **Noche de Misterio y Tinta:** Hagamos un maratón de **Merlina** con *snacks* temáticos góticos. Después, leemos juntos en voz alta los fragmentos más intrigantes de **Alex Mirez**.",
    "📚 **Escape a la Universidad:** Te llevo a visitar una universidad antigua o una biblioteca elegante de la ciudad. Terminamos con una cena donde te cuento secretos al estilo prohibido de **Maxton Hall**.",
    "🛍️ **Día de Caprichos y Lujo:** Te invito a ir de *shopping* a una boutique o tienda *vintage* de lujo. Al final, nos vamos a tomar un postre elegante y brindar por nuestra historia de **Mujer Bonita**.",
    "👽 **Taller de 'Ohana':** Vamos a un taller de cerámica o pintura. Crearemos algo caótico, hermoso y único, como el amor de Lilo y **Stitch**.",
    "⚔️ **Desafío de Gremio (SAO):** Noche de pizza y videojuegos de rol (RPG) o un *escape room* en casa. Seremos Kirito y Asuna superando todos los niveles, ¡juntos hasta el final de la partida!",
    "🍻 **Banquete Épico:** Intentemos cocinar juntos una cena que parezca un banquete medieval, digno de la Taberna 'Boar Hat' de **Meliodas**. ¡Música y brindis por nuestros pecados!",
    "🏖️ **Road Trip a la Costa:** Organicemos un viaje corto a la playa o un lago, llevando una canasta de picnic súper elegante. ¡Para revivir nuestro propio verano eterno!",
    "☕ **Cita de Contraste:** Vamos a un café que parezca un castillo antiguo o un lugar muy sofisticado. Hablemos de los temas oscuros y profundos, como el contraste de la elegancia y **Tokyo Ghoul**.",
    "👑 **Tour de Reina:** Te propongo buscar los edificios o casas más elegantes y con historia en la ciudad. Terminamos la noche con la cena más formal que podamos hacer en casa, con música clásica.",
    "📖 **La Noche de tu Autora:** Voy a buscar el último libro de **Alex Mirez** (o del género que te guste) y te lo daré con una dedicatoria personal. Luego, me dedicas toda la tarde a leer y yo solo te consiento.",
    "🎬 **Noche de Gala y Crítica:** Vamos al cine a ver una película de fantasía/drama. Pero antes, nos vestimos de gala y debatimos la película después, como críticos de cine muy sofisticados.",
    "🚂 **Viaje con Encanto:** Hagamos un viaje corto en tren o un paseo en barco turístico. Fingiremos que estamos en un viaje largo por Europa, viendo los castillos desde la ventana."
];


// =======================================================
// LÓGICA GENERAL Y EFECTOS DE SONIDO (SIN CAMBIOS)
// =======================================================

const buttonClickSound = document.getElementById('button-click-sound');

// Función que se llama con cada clic de botón
function playClickSound() {
    buttonClickSound.currentTime = 0; // Reinicia el sonido si ya está sonando
    buttonClickSound.play().catch(e => console.error("Error al reproducir sonido:", e)); 
}

// Añadir el sonido a todos los botones interactivos
document.querySelectorAll('button').forEach(button => {
    if (button.id !== 'music-toggle-btn') {
        button.addEventListener('click', playClickSound);
    }
});


// =======================================================
// FUNCIÓN 1: GENERADOR DE POEMAS (Botón 1)
// =======================================================
document.getElementById('generar-poema-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * poemas.length);
    const poema = poemas[randomIndex];
    // Se mantiene el título personal para el botón 1
    document.getElementById('poema-output').innerHTML = `**Para mi Reina la mas hermosa** 👑 <br><br> "${poema}"`;
});


// =======================================================
// FUNCIÓN 2: GENERADOR DE AVENTURAS (Botón 2)
// =======================================================
document.getElementById('generar-aventura-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * ideasAventura.length);
    const aventura = ideasAventura[randomIndex];
    document.getElementById('aventura-output').innerHTML = aventura;
});


// =======================================================
// FUNCIÓN 3: JUEGO DE ATRAPAR CORAZONES CAYENDO CON GAME OVER (SIN CAMBIOS)
// =======================================================
const gameArea = document.getElementById('juego-area');
const catcher = document.getElementById('catcher');
const scoreDisplay = document.getElementById('puntuacion');
const gameMusic = document.getElementById('game-music');
const musicToggleBtn = document.getElementById('music-toggle-btn');
const startGameBtn = document.getElementById('start-game-btn');
const gameMessage = document.getElementById('game-message');

let score = 0;
let lives = 3;
let isPlaying = false;
let gameSpeed = 2; // Velocidad de caída inicial
let heartSpawnInterval;
let gameLoop;


// --- Control de Música ---
let isMusicPlaying = false;
musicToggleBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        gameMusic.pause();
        isMusicPlaying = false;
        musicToggleBtn.textContent = '🎶 Música OFF';
    } else {
        gameMusic.play().catch(e => console.error("Música Bloqueada por Navegador:", e)); 
        isMusicPlaying = true;
        musicToggleBtn.textContent = '🎶 Música ON';
    }
});


// --- Control del Catcher (Stitch) ---
let catcherX = gameArea.clientWidth / 2 - 40; // Posición X inicial
const catcherWidth = 80;

// Mover con teclas (flechas)
document.addEventListener('keydown', (e) => {
    if (!isPlaying) return;
    const moveAmount = 25;
    if (e.key === 'ArrowLeft' && catcherX > 0) {
        catcherX -= moveAmount;
    } else if (e.key === 'ArrowRight' && catcherX < gameArea.clientWidth - catcherWidth) {
        catcherX += moveAmount;
    }
    catcher.style.left = `${catcherX}px`;
});
// Mover con el dedo/ratón (para móviles/ratón)
gameArea.addEventListener('mousemove', (e) => {
    if (!isPlaying) return;
    let newX = e.clientX - gameArea.getBoundingClientRect().left - catcherWidth / 2;
    newX = Math.max(0, Math.min(newX, gameArea.clientWidth - catcherWidth));
    catcherX = newX;
    catcher.style.left = `${catcherX}px`;
});


// --- Lógica del Juego ---
function updateScoreDisplay() {
    scoreDisplay.innerHTML = `Corazones Atrapados: <span style="color:var(--color-primario);">${score}</span> | Vidas: <span style="color:${lives > 1 ? 'var(--color-acento)' : 'red'};">${lives}</span>`;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    const x = Math.floor(Math.random() * (gameArea.clientWidth - 30));
    heart.style.left = `${x}px`;
    heart.dataset.y = 0; 
    gameArea.appendChild(heart);
}

function updateGame() {
    if (!isPlaying) return;

    const hearts = gameArea.querySelectorAll('.falling-heart');
    hearts.forEach(heart => {
        let currentY = parseFloat(heart.dataset.y) + gameSpeed;
        heart.dataset.y = currentY;
        heart.style.top = `${currentY}px`;

        const heartX = heart.offsetLeft;
        const heartY = heart.offsetTop;

        // **Comprobar si se ha atrapado (Colisión)**
        if (heartY + 30 >= gameArea.clientHeight - catcherWidth && 
            heartX + 30 >= catcherX && 
            heartX <= catcherX + catcherWidth) {
            
            score++;
            gameSpeed += 0.05; 
            heart.remove();

        // **Comprobar si se ha perdido (Game Over parcial)**
        } else if (heartY >= gameArea.clientHeight) {
            lives--;
            heart.remove();
            updateScoreDisplay();

            if (lives <= 0) {
                gameOver();
            }
        }
    });

    gameLoop = requestAnimationFrame(updateGame);
}

function startGame() {
    score = 0;
    lives = 3;
    gameSpeed = 2;
    isPlaying = true;
    gameMessage.classList.add('hidden'); 
    gameArea.querySelectorAll('.falling-heart').forEach(h => h.remove()); 
    updateScoreDisplay();

    clearInterval(heartSpawnInterval);
    heartSpawnInterval = setInterval(createHeart, 1000); 

    if (gameLoop) cancelAnimationFrame(gameLoop);
    updateGame();
}

function gameOver() {
    isPlaying = false;
    clearInterval(heartSpawnInterval);
    cancelAnimationFrame(gameLoop);
    gameMessage.classList.remove('hidden'); 
    gameMessage.innerHTML = `Atrapaste ${score} corazones.<br> Intentalo de nuevo.<br>💖 `;
    
    gameMusic.pause();
    gameMusic.currentTime = 0;
    isMusicPlaying = false;
    musicToggleBtn.textContent = '🎶 Música OFF';
}

startGameBtn.addEventListener('click', startGame);


// =======================================================
// FUNCIÓN 4: CARRUSEL DE MÚSICA DE YOUTUBE (SIN CAMBIOS)
// =======================================================

// 1. **AQUÍ DEBES PEGAR LOS LINKS COMPLETOS DE YOUTUBE**
const youtubeLinks = [
    // Pega tus links aquí, pueden ser largos (watch?v=) o cortos (youtu.be)
    "https://youtu.be/U2lo3A_Tex0?si=NqWSsveuS6O3ango", // Hércules - No hablaré de mi amor
    "https://youtu.be/UuGrc3vvdMw?si=8v7z9KVdCXbNpuPX", // luismi
    "https://youtu.be/_aAOTfOU4lA?si=_6Ns2oZAitaXnC18", // Aladdin - Un Mundo Ideal
    "https://youtu.be/W92_LmfQhS0?si=2dhfB55xb7WjlUJA", // lupillo
    "https://youtu.be/p_1Osm5xE5Y?si=RxmbZWFOJzji-Qfr", //te amo y mas
    "https://youtu.be/fZSZMp32XaA?si=VeGPBJX4lVck2tkA"  //chayanne
];

let currentSongIndex = 0;
const player = document.getElementById('youtube-player');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// --- FUNCIÓN DE AYUDA CORREGIDA ---
function extractVideoId(url) {
    try {
        const urlObj = new URL(url);
        
        // Caso 1: URL de visualización larga (www.youtube.com/watch?v=ID)
        if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
            const urlParams = new URLSearchParams(urlObj.search);
            return urlParams.get('v');
        } 
        // Caso 2: URL corta/compartir (youtu.be/ID)
        else if (urlObj.hostname === 'youtu.be') {
            // El ID es el 'pathname' (ej. '/U2lo3A_Tex0'). Eliminamos el '/' inicial.
            return urlObj.pathname.substring(1); 
        }
        
        return null; // Si el dominio no es de YouTube
    } catch (e) {
        console.error("Link de YouTube inválido en el array 'youtubeLinks'.", url);
        return null; 
    }
}

function updatePlayer() {
    const videoLink = youtubeLinks[currentSongIndex];
    // EXTRAEMOS el ID con la función mejorada
    const videoId = extractVideoId(videoLink); 
    
    if (videoId) {
        // Usamos el formato correcto de incrustación: /embed/
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`;
    } else {
        player.src = ""; // Limpiar el reproductor si el link es inválido
        // Es buena idea dejar un mensaje aquí si falla.
        player.src = "";
    }
}

nextBtn.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % youtubeLinks.length;
    updatePlayer();
});

prevBtn.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + youtubeLinks.length) % youtubeLinks.length;
    updatePlayer();
});

// Cargar la primera canción al inicio
updatePlayer();
