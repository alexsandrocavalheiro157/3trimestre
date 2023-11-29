function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador<listaDeTeclas.length){
   
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classlist[1];
console.log(idaudio);

const idaudio = `#som_${instrumento}`;


    tecla.onclick = function(){
        tocasom(idaudio);
    };
    contador = contador + 1;


    console.log(contador);

}