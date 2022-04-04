const questions = [ 
    {status: true, letter: 'a', answer: 'ajedrez', question:'Con la A. Juego de mesa basado en la estrategia.'},
    {status: true, letter: 'a', answer: 'australia', question:'Con la A. Pais que fue una antigua colonia penal.'},
    {status: true, letter: 'a', answer: 'acuatico', question:'Con la A. Que vive en el agua.'},
    {status: true, letter: 'b', answer: 'barco', question:'Con la B. Medio de transporte maritimo.'},
    {status: true, letter: 'b', answer: 'barcelona', question:'Con la B. Capital de Cataluña.'},
    {status: true, letter: 'b', answer: 'botiquin', question:'Con la B. Armario donde se guarda material medico.'},
    {status: true, letter: 'c', answer: 'calcetin', question:'Con la C. Prenda de ropa, que se usa a pares.'},
    {status: true, letter: 'c', answer: 'colombia', question:'Con la C. Pais donde sucede Encanto.'},
    {status: true, letter: 'c', answer: 'carnivoro', question:'Con la C. Animal con una dieta basada solo en carne.'},
    {status: true, letter: 'd', answer: 'delfin', question:'Con la D. Animal marino de la familia de los mamiferos.'},
    {status: true, letter: 'd', answer: 'dinamarca', question:'Con la D. Pais al que pertenece Groenlandia.'},
    {status: true, letter: 'd', answer: 'dado', question:'Con la D. Objeto con varias caras numeradas.'},
    {status: true, letter: 'e', answer: 'escondite', question:'Con la E. Lugar o sitio donde ocultarse.'},
    {status: true, letter: 'e', answer: 'egipto', question:'Con la E. Pais donde desemboca el rio Nilo.'},
    {status: true, letter: 'e', answer: 'escoba', question:'Con la E. Herramienta para barrer.'},
    {status: true, letter: 'f', answer: 'farola', question:'Con la F. Mobiliario urbano que ilumina la calle.'},
    {status: true, letter: 'f', answer: 'francia', question:'Con la F. Pais del oeste de Europa.'},
    {status: true, letter: 'f', answer: 'foca', question:'Con la F. Mamifero acuatico.'},
    {status: true, letter: 'g', answer: 'gafas', question:'Con la G. Sirve para corregir la vista.'},
    {status: true, letter: 'g', answer: 'ghana', question:'Con la G. Pais situado en el golfo de Guinea.'},
    {status: true, letter: 'g', answer: 'gusano', question:'Con la G. Animal terrestre sin extremidades.'},
    {status: true, letter: 'h', answer: 'hebilla', question:'Con la H. Se puede encontrar en los cinturones.'},
    {status: true, letter: 'h', answer: 'hawai', question:'Con la H. Conjunto de islas en medio del oceano Pacifico.'},
    {status: true, letter: 'h', answer: 'hiena', question:'Con la H. Mamifero con una risa caracteristica.'},
    {status: true, letter: 'i', answer: 'imperio', question:'Con la I. Sistema de govierno autoritario.'},
    {status: true, letter: 'i', answer: 'irlanda', question:'Con la I. Pais que tiene san Patricio como patron.'},
    {status: true, letter: 'i', answer: 'iguana', question:'Con la I. Reptil tropical comunmente verde.'},
    {status: true, letter: 'j', answer: 'jota', question:'Con la J. Baile tipico de la zona de Aragon.'},
    {status: true, letter: 'j', answer: 'japon', question:'Con la J. Pais de islas al este de Corea.'},
    {status: true, letter: 'j', answer: 'jirafa', question:'Con la J. Mamifero con un cuello largo.'},
    {status: true, letter: 'k', answer: 'kiosco', question:'Con la K. Tienda de comics y revistas.'},
    {status: true, letter: 'k', answer: 'york', question:'Contiene la K. Ciudad de Inglaterra que se conoce por el jamon.'},
    {status: true, letter: 'k', answer: 'koala', question:'Con la K. Animal endemico de Australia.'},
    {status: true, letter: 'l', answer: 'lago', question:'Con la L. Gran extension de agua sin salida al mar.'},
    {status: true, letter: 'l', answer: 'libia', question:'Con la L. Pias del sur del Mediterraneo.'},
    {status: true, letter: 'l', answer: 'leon', question:'Con la L. Gran felino conocido por su melena.'},
    {status: true, letter: 'm', answer: 'martillo', question:'Con la M. Utensilio usualmente con cabeza metalica y mango de madera.'},
    {status: true, letter: 'm', answer: 'madrid', question:'Con la M. Capital de España.'},
    {status: true, letter: 'm', answer: 'manati', question:'Con la M. Mamifero acuatico tambien llamado vaca marina.'},
    {status: true, letter: 'n', answer: 'nieto', question:'Con la N. Hijo del hijo de su abuelo.'},
    {status: true, letter: 'n', answer: 'nepal', question:'Con la N. Pais situado en la cordillera del Himalaya.'},
    {status: true, letter: 'n', answer: 'narval', question:'Con la N. Animal marino con un cuerno.'},
    {status: true, letter: 'ñ', answer: 'piraña', question:'Contiene la Ñ. Pez que se encuentra en rios de sur america.'},
    {status: true, letter: 'ñ', answer: 'logroño', question:'Contiene la Ñ. La mayor ciudad de La Rioja.'},
    {status: true, letter: 'ñ', answer: 'ñu', question:'Con la Ñ. Mamifero africano que se desplaza en grandes grupos.'},
    {status: true, letter: 'o', answer: 'ostra', question:'Con la O. Crustaceo valorado por sus perlas.'},
    {status: true, letter: 'o', answer: 'oslo', question:'Con la O. Capital de Noruega.'},
    {status: true, letter: 'o', answer: 'ornitorrinco', question:'Con la O. Mamifero que pone huevos.'},
    {status: true, letter: 'p', answer: 'paraguas', question:'Con la P. Se usa para evitar mojarse en un chaparron.'},
    {status: true, letter: 'p', answer: 'peru', question:'Con la P. Pais con antiguas ciudades Incas.'},
    {status: true, letter: 'p', answer: 'pato', question:'Con la P. Ave acuatica.'},
    {status: true, letter: 'q', answer: 'queso', question:'Con la Q. Derivado de la leche.'},
    {status: true, letter: 'q', answer: 'quebec', question:'Con la Q. Ciudad francofona de Canada.'},
    {status: true, letter: 'q', answer: 'quokka', question:'Con la Q. Animal australiano que siempre rie.'},
    {status: true, letter: 'r', answer: 'raton', question:'Con la R. Pequeño roedor o periferico del ordenador.'},
    {status: true, letter: 'r', answer: 'rusia', question:'Con la R. El pais mas extenso del planeta.'},
    {status: true, letter: 'r', answer: 'rinoceronte', question:'Con la R. Mamifero africano con un cuerno.'},
    {status: true, letter: 's', answer: 'silla', question:'Con la S. Mobiliario que suele acompañar a la mesa.'},
    {status: true, letter: 's', answer: 'somalia', question:'Con la S. Pais situado en el cuerno de Africa.'},
    {status: true, letter: 's', answer: 'sapo', question:'Con la S. Se convierte en principe al besarlo.'},
    {status: true, letter: 't', answer: 'tapon', question:'Con la T. Objeto para cerrar una botella.'},
    {status: true, letter: 't', answer: 'tunez', question:'Con la T. Capital de Tunez.'},
    {status: true, letter: 't', answer: 'topo', question:'Con la T. Mamifero subterraneo ciego.'},
    {status: true, letter: 'u', answer: 'universidad', question:'Con la U. Centro de formacion de alto nivel.'},
    {status: true, letter: 'u', answer: 'ucrania', question:'Con la U. Pais limitrofe con Rusia, Polonia y Rumania.'},
    {status: true, letter: 'u', answer: 'unicornio', question:'Con la U. Animal fantastico con un cuerno.'},
    {status: true, letter: 'v', answer: 'vacuna', question:'Con la V. Procedimiento medico que previene enfermedades.'},
    {status: true, letter: 'v', answer: 'venezuela', question:'Con la V. Pais del norte de sur america.'},
    {status: true, letter: 'v', answer: 'vaca', question:'Con la V. Mamifero del que se suele extraer leche.'},
    {status: true, letter: 'w', answer: 'whisky', question:'Con la W. Bebida alcoholica tipicamente de Estados Unidos.'},
    {status: true, letter: 'w', answer: 'washington', question:'Con la W. Capital de Estados Unidos.'},
    {status: true, letter: 'w', answer: 'wombat', question:'Con la W. Marsupial entrañable por sus heces cubicas.'},
    {status: true, letter: 'x', answer: 'examen', question:'Contiene la X. Prueba de nivel o aptitudes.'},
    {status: true, letter: 'x', answer: 'mexico', question:'Contiene la X. Pais del sur de norte america.'},
    {status: true, letter: 'x', answer: 'fenix', question:'Contiene la X. Ave mitologica relacionada con el fuego.'},
    {status: true, letter: 'y', answer: 'yarda', question:'Con la Y. Medida de longitud del sistema ingles.'},
    {status: true, letter: 'y', answer: 'myanmar', question:'Contiene la Y. Pais antiguamente llamado Birmania.'},
    {status: true, letter: 'y', answer: 'yegua', question:'Con la Y. La hembra del caballo.'},
    {status: true, letter: 'z', answer: 'zafiro', question:'Con la Z. Piedra preciosa usualmente de color azul.'},
    {status: true, letter: 'z', answer: 'zagreb', question:'Con la Z. Capital de Croacia.'},
    {status: true, letter: 'z', answer: 'zorro', question:'Con la Z. Mamifero astuto, comunmente de pelaje rojo.'}
];
let ranking = [
    {name: 'Admin', correct: 28},
    {name: 'Silvia', correct: 25},
    {name: 'Lucas', correct: 20},
    {name: 'Marc', correct: 13}
]; 
const totalOfLetters = 27;
let player = {};
let playerList = [];
let questionCounter = 0;
let questionsTime = 150;
let idTimer;

const addEventListeners = () => {
    const buttonEnter = document.querySelector("#button-enter");
    buttonEnter.addEventListener("click", enterName);
}
const letterSelector = () => {
    switch(playerList[questionCounter].letter){
        case 'a':
            return document.querySelector("#letter-a");
        case 'b':
            return document.querySelector("#letter-b");
        case 'c':
            return document.querySelector("#letter-c");
        case 'd':
            return document.querySelector("#letter-d");
        case 'e':
            return document.querySelector("#letter-e");
        case 'f':
            return document.querySelector("#letter-f");
        case 'g':
            return document.querySelector("#letter-g");
        case 'h':
            return document.querySelector("#letter-h");
        case 'i':
            return document.querySelector("#letter-i");
        case 'j':
            return document.querySelector("#letter-j");
        case 'k':
            return document.querySelector("#letter-k");
        case 'l':
            return document.querySelector("#letter-l");
        case 'm':
            return document.querySelector("#letter-m");
        case 'n':
            return document.querySelector("#letter-n");
        case 'ñ':
            return document.querySelector("#letter-ñ");
        case 'o':
            return document.querySelector("#letter-o");
        case 'p':
            return document.querySelector("#letter-p");
        case 'q':
            return document.querySelector("#letter-q");
        case 'r':
            return document.querySelector("#letter-r");
        case 's':
            return document.querySelector("#letter-s");
        case 't':
            return document.querySelector("#letter-t");
        case 'u':
            return document.querySelector("#letter-u");
        case 'v':
            return document.querySelector("#letter-v");
        case 'w':
            return document.querySelector("#letter-w");
        case 'x':
            return document.querySelector("#letter-x");
        case 'y':
            return document.querySelector("#letter-y");
        case 'z':
            return document.querySelector("#letter-z");
    }
}
const textImput = () => {
    const textBox = document.querySelector("#text-input");
    return textBox.value;
}
const clearImput = () => {
    const textBox = document.querySelector("#text-input");
    textBox.value = '';
}
const displayTextQuestion = (question) =>{    
    const toDisplay = document.querySelector("#text-question");
    toDisplay.textContent = question;
}
const enterName = () => {   
    const playerName = textImput();
    if(playerName === null) {
        displayTextQuestion('Lo siento, cual?');
        clearImput();
    }else if(playerName.trim !== '' && isNaN(playerName)){
        player.name = playerName;
        clearImput();
        playerList = questionListSelector();
        displayTextQuestion('Preparado para jugar!!!');
        changeEventButton();
        setTimeout(() => idTimer = setInterval(timer,1000), 1000);
        setTimeout(questionsCircle, 1000);
    }else{
        displayTextQuestion('Lo siento, cual?');
        clearImput();
    }
}
const changeEventButton = () => {
    const buttonEnter = document.querySelector("#button-enter");
    buttonEnter.removeEventListener("click", enterName);
    buttonEnter.addEventListener("click", enterWord);
}
const timer = () => {
    if(questionsTime > 0){
        document.querySelector("#text-timer").textContent = questionsTime;
        questionsTime--;
    }else{
        const buttonEnter = document.querySelector("#button-enter");
        buttonEnter.removeEventListener("click", enterWord);
        clearInterval(idTimer);
        displayTextQuestion('Lo siento, el tiempo se ha terminado.');
        setTimeout(enterResultsAtRanking, 1000);
    }
    
}
const questionListSelector = () => {
    let list = [];
    let lettersCounter = 0;
    for(let i = 0; i < totalOfLetters; i++){
        list.push(questions[Math.floor(Math.random() * 3) + lettersCounter]);
        lettersCounter = lettersCounter + 3;
    }
    return list;
}
const incompleteCircle = () => {
    for(let i = 0; i < totalOfLetters; i++) {
        if(playerList[i].status){
            return true;
        }
    }
    return false;
}
const questionsCircle = () => {    
    if(incompleteCircle()){
        while(playerList[questionCounter].status === false){
            if(questionCounter > totalOfLetters){
                questionCounter = 0;
            }else{
                questionCounter++;
            }
        }
        if(playerList[questionCounter].status){
            letterSelector().classList.add("actual");
            displayTextQuestion(playerList[questionCounter].question);
        }
    }else{
        const buttonEnter = document.querySelector("#button-enter");
        buttonEnter.removeEventListener("click", enterWord);
        clearInterval(idTimer);
        enterResultsAtRanking();
    }   
}
const enterWord = () => {
    //debugger;
    let nextLetter = true;
    letterSelector().classList.remove("actual");
    switch (reciveAnswers()){
        case playerList[questionCounter].answer:
            displayTextQuestion('Correcto!!!');
            letterSelector().classList.add("right");
            player.correct++;
            playerList[questionCounter].status = false;
            break;
        case 'pasapalabra':
            displayTextQuestion(`Pasapalabra, en la letra ${playerList[questionCounter].letter}`);
            questionCounter++;
            break;
        case 'end':
            nextLetter = false;
            clearInterval(idTimer);
            const buttonEnter = document.querySelector("#button-enter");
            buttonEnter.removeEventListener("click", enterWord);
            showRanking();
            break;
        default:
            displayTextQuestion(`Error, la respuesta es: ${playerList[questionCounter].answer}`);
            letterSelector().classList.add("wrong");
            playerList[questionCounter].status = false;
    }
    if(nextLetter){           
        setTimeout(questionsCircle, 1000);
    }
}
const reciveAnswers = () => {
    let answer = textImput();
    clearImput();
    if(answer === null ){
        return 'error';
    }else if(answer.trim !== '' && isNaN(answer)){
        return answer.toLowerCase();
    }else{
        return 'error';
    }
}
const enterResultsAtRanking = () => {
    
    for(let i = 0; i < ranking.length; i++){
        if(player.correct > ranking[i].correct){
            ranking.splice(i , 0, player);  
            break;
        }
    }
    showRanking();
}
const showRanking = () => {
    const textBox = document.querySelector("#text-timer");
    textBox.value = '';
    const rankingList = document.querySelector("#list-ranking");
    for(let i = 0; i < ranking.length; i++){
        const newPlayer = document.createElement("li");
        newPlayer.textContent = `${ranking[i].name}: ${ranking[i].correct} puntos`;
        rankingList.appendChild(newPlayer);
    }
    displayTextQuestion(`Adios ${player.name}, vuelve pronto`);
}

const pasapalabra = () => {
    addEventListeners();
    displayTextQuestion('Cual es tu nombre?');
}

pasapalabra ();
