/* carrossel de imagens */
$(document).ready(function() {
    $('#carrosel-imagens').slick({
        autoplay: true
    })

    /* animação abrindo o cabeçalho */
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    // MASCARA DO TELEFONE //
    $('#telefone').mask('(00) 00000-0000')

    // VALIDAÇÃO DO FORMULARIO//
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoInteresse: {
                required: false,
            }
        }, 
        messages: { //MUDANDO A MENSAGEM DO PLUGIN//
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Exitem ${camposIncorretos} campos incorretos`)
            }
        }
    })
            // ANIMAÇÃO PRA QUANDO CLICAR NO BOTÃO TENHO INTERESSE ELE FAZER UMA ANIMAÇÃO DESCENDO A PAGINA ATE O FORMULARIO//
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        // Com essas variaveis e jquery abaixo, criamos uma função que quando clicar no botao tenho interesse no carro da bmw,
            //o campo de veiculo-interesse preencha automaticamente//
        const nomeVeiculo = $(this).parent().find('h3').text();
            $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})