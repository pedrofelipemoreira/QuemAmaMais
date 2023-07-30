

  document.getElementById('calcular').onclick = function(){
    

    let valor = document.getElementById('valor').value;
  
    if(valor <= -100){

        console.log("Já entendi tudo, não precisa mais falar comigo (・へ・) 👍")

        Swal.fire({
            icon: 'error',
            title: 'Já entendi tudo, não precisa mais falar comigo (・へ・) 👍',
            confirmButtonText: 'suaaave'
          })

    }
    else if(valor < 0){

        console.log("NEGATIVOOO?? Bora apague e escreva novamente, para eu não apagar você da sua vida vaa.")

        Swal.fire({
            imageUrl: 'images/apague.gif',
            title: 'NEGATIVOOO??',
            text:' Bora apague e escreva novamente, para eu não apagar você da sua vida',
            confirmButtonText: 'Bora Vaa'
          })

    }
    else if(valor == 0){
        console.log("Seu namorado se encontra em depressão após saber que seu amor por ele é zero ☹ ")

        Swal.fire({
            imageUrl: 'images/coreanaTriste.jpg',
            title: 'ZERO...',
            text:' Seu namorado se encontra em depressão após saber que seu amor por ele é zero ☹',
            confirmButtonText: 'blz'
          })

    }
    else if(valor <= 7) {
        console.log("O valor inserido é muito baixo, seu namorado vai chorar se ficar sabendo disso. Favor inserir um valor decente.");

        Swal.fire({
            imageUrl: 'images/coreanaTriste.jpg',
            title: '📉',
            text:' O valor inserido é muito baixo, seu namorado vai chorar se ficar sabendo disso. Favor inserir um valor decente.',
            confirmButtonText: '👎'
          })

    }
    else if(valor <= 15) {

        console.log("Seu namorado definitivamente te ama mais.")

        Swal.fire({
            imageUrl: 'images/coreanaAguinha.webp' ,
            title: '💁‍♂️',
            text:' Seu namorado definitivamente te ama mais.',
            confirmButtonText: 'melhore'
          })
    }
    else if(valor <= 30) {

        console.log("Eeeee você ama um poquinho ele, mas ele te ama mais.");

        Swal.fire({
            imageUrl: 'images/pequeno.gif' ,
            title: 'Ainda Não',
            text:' Eeeee você ama um poquinho ele, mas ele te ama mais.',
            confirmButtonText: 'Pouco né'
          })

    }

    else if(valor <= 100) {
        console.log("Até que você ama bastantinho, mas seu namorado com certeza ainda ama mais. ");

        Swal.fire({
            imageUrl: 'images/CoreanaSovete.gif' ,
            title: 'Rum interessante',
            text:' Até que você ama bastantinho, mas seu namorado com certeza ainda ama mais.',
            confirmButtonText: 'Tá melhorado'
          })

    }
    else if(valor <= 300) {

        console.log("Vemos que você ama seu namorado, mas ainda sim ele te ama bem maais.");

        Swal.fire({
            imageUrl: 'images/coreanaSorrindo.jpg' ,
            title: 'Oiaa quanto amor',
            text:' Vemos que você ama seu namorado, mas ainda sim ele te ama bem maais.',
            confirmButtonText: 'melhorouu'
          })
    }
    
    else {
        console.log("Boa tentativa, mas o amor do seu namorado por você, cujo valor beira o infinito, ainda é maior.");

        Swal.fire({
            title: 'Boa Tentativa',
            text: "Mas o amor do seu namorado por você, cujo valor beira o infinito, ainda é maior.", 
            imageUrl: 'images/coreanaFeliz.gif',
            confirmButtonText: 'Um beijo da anitta',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }


    /* Swal.fire({
        title: 'Custom width, padding, color, background.',
        imageUrl: '/images/apague.gif',
        width: 600,
        padding: '3em',
        color: '#716add',
        confirmButtonText: 'laa',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      }) */
  };


/* var input = document.getElementById("valor");

input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

     document.getElementById("calcular").click();
  }
}); */