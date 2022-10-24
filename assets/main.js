

/* Função efeito máquina de escrever */
function typeWrite(element){
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(() => element.innerHTML += letra, 90 * i);
  });
}

const title = document.querySelector('h1');
typeWrite(title);

/* caso queira colocar outro elemento com esse efeito */
typeWrite(document.querySelector('p'));