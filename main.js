function tocaSom(idElementoAudio){
const elemento = document.querySelector(seletoraudio);

if(elemento && elemento.localname === 'audio'){
    elemento.play();
}
else{
//alert('elemento não encontrado');
cpnsole.log('elemento não encontrado ou seletor invalido')

}

const listaDeTeclas = document.querySelectorAll('.tecla');
}
(let contador = 0; contador = listaDeTeclas.length;)

while(contador<listaDeTeclas.length){
   
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classlist[1];
    const idaudio = '#som_${instrumento}'; //template string
    
    tecla.onclick = function (){
        tocasom(idaudio);
    }
    tecla.onkeydown = function (evento) {

    console.log(evento.code == 'space')
    if(evento.code === 'space') {
        tecla.classlist.add('ativa');
    }
}

    tecla.onkeydown = function(){
    tecla.classlist.remove('ativa');
}

}