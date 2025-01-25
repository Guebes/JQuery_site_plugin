$(document).ready(function(){

    $('#Imagens_carrosel').slick({

        autoplay:true,
    })

    $('.menu_hamburguer').click(function(){

        $('nav').slideToggle() //Com a função "slideToggle()" é verificado o slideDown e Up
    
        $(this).toggleClass('active') //Utilizei o "Toggle class" para alternar a classe pre-definida do menu amburguer para uma derivida que possui a transição para um layout de formato "X"
    })

    $('#camp_tel').mask('(00) 00000-0000', {

        placeholder: '(00) 00000-0000'
    })

    $(document).ready(function() {

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
                }
            },
            messages: {
                nome: 'Forneça o nome',
                email: {
                    required: 'Forneça o email',
                    email: 'Forneça o email em um formato correto'
                },
                telefone: 'Forneça o número de telefone'
            },
            submitHandler: function(form) {
                alert('ENVIADO!')

                $('#id_nome').val('')
                $('#camp_tel').val('')
                $('#id_email').val('')
                $('#mensagem').val('')
            },
            invalidHandler: function(event, valid) {
                let QtdCampos_incorretos = valid.numberOfInvalids()
                console.log('Quantidade de campos incorretos: ' + QtdCampos_incorretos);
            }
        })
    })

     /*Para animar a pagina é preciso usar o seletor com a tag <html/>*/
     /*A propriedade scrollTop é usada para rolagem na vertical*/    
     /*Em [scrollTop: secao_contato.offset()] offset() é uma função que retorna a posição de um elemento*/
     /*Em [scrollTop: secao_contato.offset().top] .top foi usado para determinar a distancia que a seção de contato se encontra*/
     /*Por fim, coloquei a duração da animação em milisegundos*/
    $('.lista-EmDestaque button').click(function(){

        const nome_veiculo =  $(this).parent().find('h3').text()
        $('#mensagem').val(nome_veiculo)

        const secao_contato = $('#Contato')
        $('html').animate({

            scrollTop: secao_contato.offset().top
        }, 1000)

    })

 
})