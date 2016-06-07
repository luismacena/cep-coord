$(document).ready(function(){

	$('.submit-cep').click(function(e){
		var cepVal = $('.input-cep').val();
		//CHAMA A API DO POSTMON
		$.get('http://api.postmon.com.br/cep/' + cepVal, function(data){
			/* MOSTRA NO CONSOLE OS VALORES DO SITE
			console.log(data);
			*/
			//PEGA OS VALORES
			var endereco = data.logradouro + ", "+data.numero+" - "+data.bairro+", "+data.cidade+" - "+data.estado;
			Mapa.carregarNoMapa(endereco);
		});
		//ANULA O EVENTO DO SUBMIT
		e.preventDefault();
	});
});