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
  // Otimizar mais tarde; Pega o atributo placeholder e remove enquanto em foco e adiciona quando desfocado;
  let elements = document.getElementsByTagName('input');
  for (let element of elements) {
    let placeholder = element.placeholder;
    element.addEventListener('focus', (event) => {
      element.placeholder = '';
    });
    element.addEventListener('blur', (event) => {
      element.placeholder = placeholder;
    });
  }
};

// requirement 3.7.1 e 3.7.1
