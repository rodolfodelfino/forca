document.addEventListener("DOMContentLoaded", function () {
    const wordElement = document.querySelector(".word p");
    const letterInput = document.getElementById("letter");
    const guessButton = document.getElementById("guessButton");
    const hangmanImage = document.querySelector(".hangman img");
    const themeSelect = document.getElementById("theme");

    const temas = [
        ["Personagens do Livro de Mormon", ["NÉFI", "NEFI", "LAMA", "MORONI", "ALMA", "ETER", "HELAMA", "MORMON", "NEFI", "MORMON", "ETER", "ABINADI", "JAROM", "OMNI", "SARIA", "TEANCUM", "MORONI", "AMULOM", "AMALEQUE", "PACOR", "LAMONI", "LEI", "ZENIFE", "CORIANTUMR", "SAM", "ENOS", "JACO", "SIBLOM", "CORIANTON", "LEMUEL", "MORIANTON", "MORMON", "LAMONI", "SAMUEL",
            "LABAO", "ZORA", "SARIA", "ISMAEL", "JOSE", "AMARON", "QUEMIS", "ABINADOM", "AMALEQUI", "ZEDEQUIAS", "BENJAMIM", "LIMI", "ZENIFE", "NOE", "AMULON", "GIDEAO", "ZEEZROM", "AMON", "CORIOR", "ZERAEMNA", "AMALIQUIAS", "PAORA", "TEANCUM", "ANTIPUS", "AMORON"
        ]],

        ["Animais", ["LEAO", "TIGRE", "ELEFANTE", "GIRAFA", "RINOCERONTE", "HIPOPOTAMO", "CAVALO", "CACHORRO",
            "GATO", "PAPAGAIO", "PEIXE", "PINGUIM", "ORCA", "TUBARAO", "AGUIA", "URSO", "LOBO", "COBRA",
            "GORILA", "MACACO", "AVESTRUZ", "COALA", "PANDA", "CAMELO", "GUEPARDO", "PUMA", "HIENA",
            "FALCAO", "SAPO", "CROCODILO", "ESQUILO", "VACA", "PORCO", "BALEIA", "GOLFINHO", "TEXUGO",
            "CASTOR", "ANTILOPE", "RATO", "FOCA", "OVELHA", "GAVIAO", "ZEBRA", "CISNE", "LINCE", "POLVO",
            "LEOPARDO", "TARTARUGA", "CARANGUEJO", "POLVO", "POLVO", "LONTRA", "TEXUGO", "MORCEGO", "LAGARTO",
            "ARANHA", "ACARO", "CAMARAO", "AGUIA", "TUCANO", "MORSA", "LEBRE", "PANTERA", "TAMANDUA", "PREGUICA",
            "DONINHA", "CERVO", "FURAO", "GAFAHNHOTO", "LAGOSTA", "ESCORPIAO", "TARANTULA", "BESOURO", "JOANINHA",
            "MOSQUITO", "PULGA", "CENTOPEIA", "POMBO", "PARDAL", "CANARIO", "CORUJA", "AVESTRUZ", "PERU", "SAGUI",
            "TOUPEIRA", "ARARA", "HIPOPOTAMO", "RAPOSA", "ESQUILO", "DONINHA", "CANGURU", "MANGUSTO", "ARAPUCA",
            "NAMBU", "PICA_PAU", "OVELHA", "JACARE", "PARDAL", "ARANHA", "URSO", "BESOURO", "GAZELA"
        ]],

        ["Personagens da Bíblia", [
            "ADAO", "EVA", "CAIM", "ABEL", "SET", "ENOS", "CENA", "MAALALEL", "JAREDE", "ENOQUE",
            "METUSALEM", "LAMEQUE", "NOE", "SEM", "CAM", "JAFE", "ABRAAO", "SARA", "LOTE", "ISMAEL",
            "ISAQUE", "REBECA", "ESAU", "JACO", "LEA", "RAQUEL", "BILA", "ZILPA", "JOSE", "FARAO",
            "MOISES", "ARAO", "MIRIA", "CANA", "RAABE", "JOSUE", "CALEBE", "GIDEAO", "DEBORA", "SANSAO",
            "RUTE", "BOAZ", "NOEMI", "ELI", "SAMUEL", "SAUL", "DAVI", "GOLIAS", "BATESEBA", "SALOMAO",
            "REBOAO", "JEOSAFA", "ACAB", "ELIAS", "ELISEU", "NAMA", "EZEQUIAS", "ISAIAS", "JEREMIAS",
            "EZEQUIEL", "DANIEL", "SADRACH", "MESAQUE", "ABEDENEGO", "ESTER", "MORDECAI", "JO", "ELIFAZ",
            "BILDADE", "ZOFAR", "ELIU", "JONAS", "ESDRAS", "NEEMIAS", "JESUS", "MARIA", "JOSE", "PEDRO",
            "TIAGO", "JOAO", "ANDRE", "FILIPE", "BARTOLOMEU", "TOME", "MATEUS", "TIAGO", "JUDAS", "SIMAO",
            "LUCAS", "TIMOTEO", "MARCOS", "SILAS", "AQUILA", "PRISCILA", "APOLOS", "LIDIA", "FILIPE",
            "EUNUCO", "SAULO", "PAULO", "CORNELIO", "AGABO", "HERODES", "TIAGO", "ROMULO", "JOAO", "BARNABE",
            "EUTIQUES", "ELYMAS", "JESUS", "TIAGO", "JUDAS"
        ]],

        ["Paises", [
            "AFGANISTAO", "ALBANIA", "ALEMANHA", "ANDORRA", "ANGOLA", "ANTIGUA E BARBUDA", "ARABIA", "ARGELIA",
            "ARGENTINA", "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAO", "BAHAMAS", "BANGLADESH", "BARBADOS", "BAREINE",
            "BELARUS", "BELGICA", "BELIZE", "BENIN", "BOLIVIA", "BOSNIA", "BOTSUANA", "BRASIL", "BRUNEI",
            "BULGARIA", "BURUNDI", "BUTAO", "CABO VERDE", "CAMPUCIA", "CASAQUISTAO", "CATAR", "CHADE", "CHILE", "CHINA",
            "CHIPRE", "COLOMBIA", "COMORES", "COREIA DO NORTE", "COREIA DO SUL", "COSTA DO MARFIM", "COSTA RICA", "CROACIA",
            "CUBA", "DINAMARCA", "DOMINICA", "EGIPTO", "SALVADOR", "EQUADOR", "ERITREIA",
            "ESLOVAQUIA", "ESLOVENIA", "ESPANHA", "ESTADOS UNIDOS", "ESTONIA", "ESWATINI", "ETIOPIA", "FIDJI", "FILIPINAS",
            "FINLANDIA", "FRANCA", "GABAO", "GAMBIA", "GANHA", "GEORGIA", "GRANADA", "GRECIA", "GUATEMALA", "GUIANA", "GUINE",
            "GUINE", "PARAGUAI", "HAITI", "HOLANDA", "HONDURAS", "HUNGRIA", "IEMEN", "INDIA", "INDONESIA",
            "IRA", "IRAQUE", "IRLANDA", "IRLANDA DO NORTE", "ISLANDIA", "ISRAEL", "ITALIA", "JAMAICA", "JAPAO", "JORDANIA",
            "LAOS", "LESOTO", "LETONIA", "LIBANO", "LIBERIA", "LIBIA", "LIECHTENSTEIN", "LITUANIA", "LUXEMBURGO",
            "MACEDONIA", "MADAGASCAR", "MALASIA", "MALAUI", "MALDIVAS", "MALI", "MALTA", "MARROCOS", "MAURICIO",
            "MAURITANIA", "MEXICO", "MICRONESIA", "MOCAMBIQUE", "MOLDAVIA", "MONACO", "MONGOLIA", "MONTENEGRO", "NAMIBIA",
            "NAURU", "NEPAL", "NICARAGUA", "NIGER", "NIGERIA", "NORUEGA", "NOVA ZELANDIA", "OMA"
        ]]
        // Outros temas aqui...
    ];

    let wordList = temas[themeSelect.value][1];
    let randomIndex = Math.floor(Math.random() * wordList.length);
    let wordToGuess = wordList[randomIndex];

    let guessedWord = Array(wordToGuess.length).fill("_");
    let guessesLeft = 6;

    const hangmanImages = [
        "img/forca0.png",
        "img/forca1.png",
        "img/forca2.png",
        "img/forca3.png",
        "img/forca4.png",
        "img/forca5.png",
        "img/forca6.png",
    ];

    function updateWordElement() {
        wordElement.textContent = `Palavra: ${guessedWord.join(" ")}`;
    }

    function resetGame() {
        randomIndex = Math.floor(Math.random() * wordList.length);
        wordToGuess = wordList[randomIndex];
        guessedWord = Array(wordToGuess.length).fill("_");
        guessesLeft = 6;
        updateWordElement();
        hangmanImage.src = hangmanImages[0];
    }

    themeSelect.addEventListener("change", function () {
        wordList = temas[themeSelect.value][1];
        resetGame();
    });

    wordElement.textContent = `Palavra: ${guessedWord.join(" ")}`;
    hangmanImage.src = hangmanImages[0];

    guessButton.addEventListener("click", function () {
        const letter = letterInput.value.toUpperCase();
        if (letter.length !== 1 || !letter.match(/[A-Z]/)) {
            alert("Por favor, insira uma letra válida.");
            return;
        }

        if (wordToGuess.includes(letter)) {
            for (let i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] === letter) {
                    guessedWord[i] = letter;
                }
            }
            updateWordElement();
        } else {
            guessesLeft--;
            hangmanImage.src = hangmanImages[6 - guessesLeft];
            alert(`Letra errada! Você tem ${guessesLeft} tentativas restantes.`);
        }

        if (guessedWord.join("") === wordToGuess) {
            alert(`Parabéns! Você venceu! A palavra era: ${wordToGuess}`);
            resetGame();
        } else if (guessesLeft === 0) {
            alert(`Você perdeu. A palavra era: ${wordToGuess}`);
            resetGame();
        }

        letterInput.value = "";
    });
});
