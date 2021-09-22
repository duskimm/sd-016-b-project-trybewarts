function addMultiplesEvents(element, eventsName, listener) {
  const events = eventsName.split(' ');

  events.forEach((event) => {
    element.addEventListener(event, listener, false);
  });
}

function addMultiplesListeners(arr, eventName, listener) {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
}

function addMultiplesEventsAndListeners(arr, eventsName, listener) {
  const events = eventsName.split(' ');

  arr.forEach((element) => {
    events.forEach((event) => {
      element.addEventListener(event, listener, false);
    });
  });
}

window.onload = () => {
  /**
   * Adiciona animação para o placeholder do input desaparecer sempre que for focado;
   */
  const inputELements = document.getElementsByTagName('input');
  Object.values(inputELements).forEach((element) => { //Itera os elementos como objeto e não como array;
    const pholder = element.placeholder; // Armazena o elemento antigo;
    element.addEventListener('focus', () => { // Remove o placeholder do elemento quando focado;
      element.placeholder = '';
    });
    element.addEventListener('blur', () => { // Devolve o placeholder do elemento quando desfocado;
      element.placeholder = pholder;
    });
  });
};

// requirement 3.7.1 e 3.7.1
