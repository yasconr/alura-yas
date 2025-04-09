document.addEventListener('DOMContentloaded' , funfection(){
     const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
     const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

     botaoDeAcessibilidade.addEventListener('click', function (){
      botaoDeAcessibilidade.classlist.toggle('rotacao-botao');
      opcoesDeacessibilidade.classlist.toggle('apresenta-lista')

     })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', funfection(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '${TamanhoAtualFonte}rem'

    })

 diminuiFonteBotao.addEventListener('click', funfection(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = '${TamanhoAtualFonte}rem'

})


})