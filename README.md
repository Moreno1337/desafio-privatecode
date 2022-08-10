# Desafio Front-end - Private Code

## Por João Moreno
<br>
<br>
Olá! Para realizar o teste do projeto, siga os passos a seguir:
<br><br>
1º - Para realizar o teste, é necessário que você tenha os arquivos do projeto em uma pasta em seu computador. Caso não tenha, faça o download.
<br><br>
2º - Após baixar os arquivos do projeto, é necessário realizar a instalação do "json-server" (caso ainda não esteja instalado no seu computador). Para isso, abra um terminal de sua escolha e digite o seguinte comando: ' <strong><em>npm install -g json-server</em></strong> ' e dê <strong>enter</strong>. Agora, só aguardar a instalação.
<br><br>
3º - Após a instalção, é importante checar se o seu computador permite a utilização de scripts externos. Para isso, novamente no seu terminal digite o seguinte comando: ' <strong><em>Get-ExecutionPolicy</em></strong> '. Se o retorno deste comando resultar em algum valor diferente de "<em>Unrestricted</em>" (como: restricted, bypass, default, etc), digite este comando no terminal: ' <strong><em>Set-ExecutionPolicy unrestricted</em></strong>'. Pronto, agora seu computador está liberado para rodar scripts externos como o "json-server".
<br><br>
4º - Agora, vamos utilizar o json-server para simular a comunicação do site com uma API de pedidos. Para isso, com o seu terminal referenciando a pasta do projeto (que contem o arquivo <em>db.json</em>, execute o seguinte comando: ' <strong><em>json-server --watch db.json</em></strong> '. Pronto, um server de simulação foi aberto.
<br><br>
5º - Agora que o ambiente está todo pronto para realizar o teste, abra o arquivo "index.html" e tudo estará funcionando como deve.
