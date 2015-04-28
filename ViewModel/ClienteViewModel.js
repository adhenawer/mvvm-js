/**
 * ViewModel - Cliente
 **/
var ClienteViewModel = kendo.observable({
	/**
	 * Propriedade - curso
	 **/
	//cliente : new ClienteModel(),
	/**
	 * Método - actionSalvar
	 */
	actionSalvar: function() {
		var nome = this.get("cliente.nome");
		var endereco = this.get("cliente.endereco");
		var bairro = this.get("cliente.bairro");
		var cep = this.get("cliente.cep");
		var cidade = this.get("cliente.cidade");
		var uf = this.get("cliente.uf");
		var telefone = this.get("cliente.telefone");
		var email = this.get("cliente.email");
		
		$(document).ready(function($){
			$.ajax({
				url : "http://www.riasoftware.com.br/aplicacoes/php/crud/cliente/service/ClienteService.php?operacao=insert",
				method: "POST",
				dataType : "xml",
				data: { 
					nome: nome,
					endereco: endereco,
					bairro: bairro,
					cep: cep,
					cidade: cidade,
					estado: uf,
					telefone: telefone,
					email: email,
				},
				success : function(xml){
					// procura o 'item' e dispara uma função para cada um
					$(xml).find('Cliente').each(function(){
						//pega o titulo e ponha na variável
						var insert = $(this).find('insert').text();
						if (insert == "true") {
							alert('Cliente inserido');
						} else {
							alert('Problema tente novamente.');
						}
					});
				}
			});
		});
	},
	
	actionConsultar: function(e) {
	
		var id = $(e.target).data('parameter');
		console.log(id);
			cliente : new ClienteModel();
			console.log(cliente);
		$.ajax({
			url : "http://www.riasoftware.com.br/aplicacoes/php/crud/cliente/service/ClienteService.php?operacao=select",
			success : function(xml){
				$(xml).find('Cliente').each(function(){
					if ($(this).find('id').text() == id) {
						cliente.id = $(this).find('id').text();
						cliente.nome = $(this).find('nome').text();
						cliente.endereco = $(this).find('endereco').text();
						cliente.bairro = $(this).find('bairro').text();
						cliente.cep = $(this).find('cep').text();
						cliente.cidade = $(this).find('cidade').text();
						cliente.uf = $(this).find('estado').text();
						cliente.telefone = $(this).find('telefone').text();
						cliente.email = $(this).find('email').text();
					}
				});
			}
		});
	},
	
	actionDeletar: function(id) {
		$.ajax({
			url : "http://www.riasoftware.com.br/aplicacoes/php/crud/cliente/service/ClienteService.php?operacao=delete",
			data : "id=" + cliente.id,
			beforeSend : function(){
				console.log('Enviando');
			},
			success : function(xml){
				console.log(xml);
			}
		});
	}
});