function consultaCep(){
    var cep = document.getElementById("cepin").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("cep").innerHTML = response.cep;
            $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide();
})