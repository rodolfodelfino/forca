document.addEventListener("DOMContentLoaded", function () {
    const wordList = ["Néfi",
    "NÉFI",
    "LAMA",
    "MORONI",
    "ALMA",
    "HELAMA",
    "MORMON",
    "NEFI",
    "MORMON",
    "ETER",
    "ABINADI",
    "JAROM",
    "OMNI",
    "SARIA",
    "TEANCUM",
    "MORONI",
    "AMULOM",
    "AMALEQUI",
    "PACOR",
    "LAMONI",
    "LEI",
    "ZENIFE",
    "CORIANTUMR",
    "SAM",
    "SIBLOM",
    "MULEQUE",
    "LEMUEL",
    "MORIANTON",
    "MORMON",
    "LAMONI",
    "SAMUEL"];
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const wordToGuess = wordList[randomIndex];

    let guessedWord = Array(wordToGuess.length).fill("_");
    let guessesLeft = 6;

    const wordElement = document.querySelector(".word p");
    const letterInput = document.getElementById("letter");
    const guessButton = document.getElementById("guessButton");

    const hangmanImages = [
        "img/forca0.png",
        "img/forca1.png",
        "img/forca2.png",
        "img/forca3.png",
        "img/forca4.png",
        "img/forca5.png",
        "img/forca6.png",
    ];

    const hangmanImage = document.querySelector(".hangman img");

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
            wordElement.textContent = `Palavra: ${guessedWord.join(" ")}`;
        } else {
            guessesLeft--;
            hangmanImage.src = hangmanImages[6 - guessesLeft];
            alert(`Letra errada! Você tem ${guessesLeft} tentativas restantes.`);
        }

        if (guessedWord.join("") === wordToGuess) {
            alert("Parabéns! Você venceu!");
        } else if (guessesLeft === 0) {
            alert("Você perdeu. A palavra era: " + wordToGuess);
        }

        letterInput.value = "";
    });
});

// "LEAO",
// "TIGRE",
// "ELEFANTE",
// "GIRAFA",
// "RINOCERONTE",
// "HIPOPOTAMO",
// "CAVALO",
// "CACHORRO",
// "GATO",
// "PAPAGAIO",
// "PEIXE",
// "PINGUIM",
// "ORCA",
// "TUBARAO",
// "AGUIA",
// "URSO",
// "LOBO",
// "COBRA",
// "GORILA",
// "MACACO",
// "AVESTRUZ",
// "COALA",
// "PANDA",
// "CAMELO",
// "GUEPARDO",
// "PUMA",
// "HIENA",
// "FALCAO",
// "SAPO",
// "CROCODILO",
// "ESQUILO",
// "VACA",
// "PORCO",
// "BALEIA",
// "GOLFINHO",
// "TEXUGO",
// "CASTOR",
// "ANTILOPE",
// "RATO",
// "FOCA",
// "OVELHA",
// "GAVIAO",
// "ZEBRA",
// "CISNE",
// "LINCE",
// "POLVO",
// "LEOPARDO",
// "TARTARUGA",
// "CARANGUEJO",
// "POLVO",
// "POLVO",
// "LONTRA",
// "TEXUGO",
// "MORCEGO",
// "LAGARTO",
// "ARANHA",
// "ACARO",
// "CAMARAO",
// "AGUIA",
// "TUCANO",
// "MORSA",
// "LEBRE",
// "PANTERA",
// "TAMANDUA",
// "PREGUICA",
// "DONINHA",
// "CERVO",
// "FURAO",
// "GAFAHNHOTO",
// "LAGOSTA",
// "ESCORPIAO",
// "TARANTULA",
// "BESOURO",
// "JOANINHA",
// "MOSQUITO",
// "PULGA",
// "CENTOPEIA",
// "POMBO",
// "PARDAL",
// "CANARIO",
// "CORUJA",
// "AVESTRUZ",
// "PERU",
// "SAGUI",
// "TOUPEIRA",
// "ARARA",
// "HIPOPOTAMO",
// "RAPOSA",
// "ESQUILO",
// "DONINHA",
// "CANGURU",
// "MANGUSTO",
// "ARAPUCA",
// "NAMBU",
// "PICA_PAU",
// "OVELHA",
// "JACARE",
// "PARDAL",
// "ARANHA",
// "URSO"
// "BESOURO",
// "GAZELA"