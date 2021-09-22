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

function placeholder(element, pholder) {
  // Otimizar mais tarde; Pega o atributo placeholder e remove enquanto em foco e adiciona quando desfocado;
  element.addEventListener('focus', () => {
    element.placeholder = '';
  });
  element.addEventListener('blur', () => {
    element.placeholder = pholder;
  });
}

window.onload = () => {
  const inputELements = document.getElementsByTagName('input');
  Object.values(inputELements).forEach((element) => {
    const pholder = element.placeholder;
    placeholder(element, pholder);
  });
};

// requirement 3.7.1 e 3.7.1
