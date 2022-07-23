# Desafio SHOW ME THE CODE - FULL STACK

Este projeto Full-Stack foi criado utilizando a biblioteca Javascript para criação de interfaces React.js (https://pt-br.reactjs.org/docs/getting-started.html)
como Front-End da aplicação e no Back-End, para construção da API, foi utilizado o Framework Herbs.js com Express na criação da API, Mocha para os testes e Cors
para criação da ponte entre as aplicações.

## Instalando a aplicação

Para iniciar a aplicação é necessário instalar todos os módulos contidos nos arquivos package.json de ambos os diretórios /API para o Back-End
e /view para o Front-End.

## Front-End
Inicie um Terminal e entre primeiro na pasta /API e digite:
    $ npm install
    $ npm start
O sistema acessar a página inicial do projeto pelo endereço [http://localhost:3000](http://localhost:3000).

Ele irá executar a aplicação em modo de desenvolvimento.\

A página irá atualizar quando você fizer mudanças.\
Você também consegue ver qualquer erro no console(botão F12).

## Back-End
Inicie um Terminal e entre primeiro na pasta /view e digite:
    $ npm install
    $ npm start
O sistema acessa a API pelo endereço [http://localhost:9000/], você pode enviar requests utilizando aplicativos como Postman.

# $ npm test
Dentro da pasta API utilizando o terminal, este comando executa os testes pré-configurados utilizando o Mocha constantes na pasta tests.\
Você pode visualizar os resultados pelo arquivo gerado test-results.xml no diretório /API.

## Detalhes do Desafio

A empresa de telefonia VxTel, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado FaleMais.
Normalmente um cliente VxTel pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino.

![alt text](https://ibb.co/TcDZDjW)

Com o novo produto FaleMais da VxTel o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só́ paga os minutos excedentes. Os minutos excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

A VxTel, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2) sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este problema.

## Acesso à Calculadora
Ao abrir a página principal da aplicação, clicar na barra de navegação, no botão Serviços, que abrirá o diretório em questão.



