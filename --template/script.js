// Weise den einzelnen Komponenten Namen zu
const btnCounter = document.getElementById('btnCounter');
const counterText = document.getElementById('counter');

// Initialisiere eine Zählvariable, die anzeigen soll, wie oft der Button geklickt wurde
let count = 0;

// Funktion zum updaten der Zählvariable count und zum neuen Anzeigen des Textes mit dem aktuellen Wert der Zählvariablen count
function countAndUpdate () {
  count++;
  counterText.textContent = `Zähler: ${count}`;
}

// Füge einen eventlistener für den Zählbutton hinzu, der hochzählt, sobald dieser geklickt wird.
btnCounter.addEventListener('click', () => {
  // console.log um ggf. zu debuggen
  console.log('clicked');
  // Funktion zum addieren und updaten des Textes wird ausgeführt
  countAndUpdate();
})
