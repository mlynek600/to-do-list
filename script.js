const zadanieInput = document.getElementById("zadanie-input");
const zadanieButton = document.getElementById("zadanie-button");
const zadanieUsunButton = document.getElementById("usun-button");
const sekcja = document.getElementById("div1");

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let nowyElement;

const toggleClass = e => {
  e.target.classList.toggle("zrobione");
  console.log(e.target);
};

function dodajZadanie() {
  if (zadanieInput.value != "") {
    nowyElement = document.createElement("h2");
    nowyElement.innerHTML = "&#128313 " + zadanieInput.value;
    sekcja.appendChild(nowyElement);
    zadanieInput.value = "";
    nowyElement.classList.add("zadanie");
    nowyElement.addEventListener("click", toggleClass);
  } else {
    alert("Napisz jakieś zadanie");
  }

  // krzyżyk na końcu zadania
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nowyElement.appendChild(span);

  // usuwanie zadania po kliknięciu w krzyżyk
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function usunZadanie() {
  sekcja.firstChild != null
    ? sekcja.firstChild.remove()
    : alert("Brak zadań do usunięcia");
}

zadanieButton.addEventListener("click", dodajZadanie, false);
zadanieUsunButton.addEventListener("click", usunZadanie, false);
