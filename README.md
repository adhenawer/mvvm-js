#Objetivo

Com base em arquitetura em Camadas e MVVM utilizando a framework [KendoUI](http://docs.telerik.com/kendo-ui/framework/mvvm/overview), desenvolver um Client Application (HTML/JavaScript), que irá consumir um serviço distribuído, que realiza operações de persistência de dados em uma tabela chamada `Cliente` em um banco de dados remoto.

#UI (User Interface)

Desenvolver uma interface adequada aos padrões independente e desacoplada.

#WEB Service
http://www.webservice-exemplo.com.br

- ?operacao=`insert`

- ?operacao=`select`

- ?operacao=`update`

- ?operacao=`delete`

#Parâmetros POST
|   Parâmetro |  Tipo    |
|    -------  |  -----   |
|   nome      |  String  |
|   endereco  |  String  |
|   cidade    |  String  |
|   bairro    |  String  |
|   estado    |  String  |
|   cep       |  String  |
|   telefone  |  String  |

#Retorno XML
```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
 <Cliente>
 <id>3472</id>
 <nome>RODOLFO MORAES</nome>
 <endereco>AV. NAÇOES UNIDAS</endereco>
 <cidade>BAURU</cidade>
 <bairro>AV. NAÇOES UNIDAS</bairro>
 <estado>SP</estado>
 <cep>17033330</cep>
 <telefone></telefone>
 <email>adhenawer@gmail.com</email>
 </Cliente>
</root>
```
