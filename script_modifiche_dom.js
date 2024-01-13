// Per prima cosa getto gli elementi del dom

const testoCorniceBlocco1 = document.getElementById("testo_cornice_esperimento1")
const blocco1 = document.getElementById("blocco1")



// Il testo della cornice blocco1 è dinamico e il suo testo è uguale alle classi della cornice. 
// Di seguito definisco una funzione che modifica il suo valore di testo e lo eseguo per la prima
// esecuzione dello script

const updateTextBlocco1 = function () {
    let testoCornice
    if (blocco1.classList) { // Se non c'è nessuna classe ritorna una stringa fatta a mano
        testoCornice = blocco1.className
    } else {
        testoCornice = "nessuna classe"
    }
    testoCorniceBlocco1.textContent = testoCornice
}

updateTextBlocco1()

// Applico alla casella dell'input che modifica le classi di blocco1 