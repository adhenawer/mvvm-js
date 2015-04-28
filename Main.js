/**
 * Evento de criação da página
 **/
$(document).ready(function() {
	//Efetua Bind com a DIV form
	kendo.bind($("#form"), ClienteViewModel);
	
	$.ajax({
        url : "http://www.riasoftware.com.br/aplicacoes/php/crud/cliente/service/ClienteService.php?operacao=select",
        success : function(xml){
			var table_data = "<tr><td>Nome</td><td>Cidade</td><td>UF</td><tr>";
			$(xml).find('Cliente').each(function(){
				table_data += "<tr>";
				table_data += "<td>" + $(this).find('nome').text() + "</td>";
				table_data += "<td>" + $(this).find('cidade').text() + "</td>";
				table_data += "<td>" + $(this).find('estado').text() + "</td>";
	
				table_data += "<td><button data-bind='click: actionConsultar' data-parameter='" + $(this).find('id').text() + "'>Editar</button></td>";
	
				table_data += "</tr>";
			});
			$('#view').html(table_data);
			kendo.bind($("#form"), ClienteViewModel);
        }
    });
});