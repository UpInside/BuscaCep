//BUSCA CEP COM JQUERY
$(function () {
    $('.j_getCep').change(function () {
        var cep = $(this).val().replace('-', '').replace('.', '');
        if (cep.length === 8) {
            $.get("https://viacep.com.br/ws/" + cep + "/json", function (data) {
                if (!data.erro) {
                    $('.j_bairro').val(data.bairro);
                    $('.j_complemento').val(data.complemento);
                    $('.j_localidade').val(data.localidade);
                    $('.j_logradouro').val(data.logradouro);
                    $('.j_uf').val(data.uf);
                }
            }, 'json');
        }
    });
});
