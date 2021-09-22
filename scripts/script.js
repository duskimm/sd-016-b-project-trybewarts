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
