function clicar(number) {
    let keyCap = document.querySelector("div.d0").innerHTML; //index.html . seleção do id 'div.d0' . escreva como HTML.
    document.querySelector("div.d0").innerHTML = keyCap + number; //index.html . seleção do id 'div.d0' . escreva keyCap + number (clicado), irá escrever o número um ao lado do outro
  }

  function del() {
    document.querySelector("div.d0").innerHTML = ""; //index.html . seleção do id 'div.d0' . escreva vazio.
  }

  function eraser() {
    let back = document.querySelector("div.d0").innerHTML; //index.html . seleção do id 'div.d0' . escreva como HTML.
    document.querySelector("div.d0").innerHTML = back.substring(0, back.length - 1); //index.html . seleção do id 'div.d0' . puxa o valor da string 'back' começando em 0 e terminando em número de caracteres - 1.
  }

  function calcular() {
    let resultado = document.querySelector("div.d0").innerHTML; //index.html . seleção do id 'div.d0' . escreva como HTML.
    if (resultado) {
      document.querySelector("div.d0").innerHTML = eval(resultado);
    } else {
      alert("Nada pode ser calculado, insira uma equação!");
    }
  }