/**
 * ViewModel - Cliente
 **/
var ClienteViewModel = kendo.observable({

	id: "",
	nome: "",
	endereco: "",
	bairro: "",
	cep: "",
	cidade: "",
	uf: "",
	telefone: "",
	email: "",

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
					$(xml).find('Cliente').each(function(){
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
		//var cliente = new ClienteModel();
		var self = this;
		$.ajax({
			url : "http://www.riasoftware.com.br/aplicacoes/php/crud/cliente/service/ClienteService.php?operacao=select",
			success : function(xml){
				$(xml).find('Cliente').each(function(){
					if ($(this).find('id').text() == id) {
						self.id = $(this).find('id').text();
						self.nome = $(this).find('nome').text();
						self.endereco = $(this).find('endereco').text();
						self.bairro = $(this).find('bairro').text();
						self.cep = $(this).find('cep').text();
						self.cidade = $(this).find('cidade').text();
						self.uf = $(this).find('estado').text();
						self.telefone = $(this).find('telefone').text();
						self.email = $(this).find('email').text();
						kendo.bind($("#form"), ClienteViewModel);
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