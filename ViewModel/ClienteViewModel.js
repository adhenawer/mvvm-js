/**
 * ViewModel - Cliente
 **/
var ClienteViewModel = kendo.observable({

	url_web_service: "http://www.riasoftware.com.br/aplicacoes/php/crud/cliente/service/ClienteService.php?operacao=",

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
	 * Método - actionNovo
	 */
	actionNovo: function() {
		this.actionPostWS('insert');
	},

	actionAtualizar: function() {
		this.actionPostWS('update');
	},

	actionConsultar: function(e) {
		var id = $(e.target).data('parameter');
		//var cliente = new ClienteModel();
		var self = this;
		$.ajax({
			url : this.url_web_service + 'select',
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
	
	actionDeletar: function() {
		var id = this.get("id");
		$.ajax({
			url : this.url_web_service + 'delete',
			method: "POST",
			dataType : "xml",
			data : {
				id: id
			},
			beforeSend : function(){
				console.log('Enviando');
			},
			success : function(xml){
				console.log(xml);
			}
		});
	},

	actionPostWS: function (metodo) {
		if (metodo == 'insert') {
			var id = null;
		} else {
			var id = this.get("id");
		};

		var nome = this.get("nome");
		var endereco = this.get("endereco");
		var bairro = this.get("bairro");
		var cep = this.get("cep");
		var cidade = this.get("cidade");
		var uf = this.get("uf");
		var telefone = this.get("telefone");
		var email = this.get("email");

		$.ajax({
			url : this.url_web_service + metodo,
			method: "POST",
			dataType : "xml",
			data: { 
				id: id,
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
				alert('Cliente salvo!');
			}
		});
	}
});