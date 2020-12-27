<h3 align="center">
  Fiorese Lab I
</h3>

<p align="center">
  <a href="#rocket-sobre-o-lab-i">Sobre o Lab I</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-esboço-do-projeto">Esboço do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-o-que-eu-utilizei">O que eu utilizei</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-instalação-e-execução">Instalação e execução</a>
</p>

<p align="center">
  Feito com :purple_heart: by <a href="https://github.com/gabriel-fz" target="_blank">gabriel-fz</a>
</p>

## :rocket: Sobre o Lab I

Os Labs tem como intuito principal a diversão através da programação e a prática de tudo o que eu aprendo sobre desenvolvimento no dia a dia. Neste projeto em específico, eu crio uma api com Watson Knowledge Studio, Watson Natural Language Understanding e Node-RED para analizar comentários de avalizações de aplicativos de delivery, onde busco sobre quais itens a pessoa criticou e elogiou. Ao final, crio um projeto em React para poder enviar comentários, mostrar todos os itens que foram mais elogiados e mais criticados, e todos os comentários então feitos.

## :rocket: Esboço do projeto

Através do frontend é possível fazer requisições POST para enviar comentários para a API, que por sua vez conectada ao modelo treinado, analizaria o comentário e identificaria as entidades juntamente com suas respectivas emoções (positiva ou negativa). Com isso, o comentário e as entidades encontradas são salvas no banco de dados para que o frontend também possa fazer requisições GET para receber todos os dados salvos. Na imagem a seguir, é possível observar melhor como seria o funcionamento.

<img alt="Arquitetura" src="https://raw.githubusercontent.com/gabriel-fz/Fiorese-Lab-I/blob/master/assets/arquitetura.png" />

## :rocket: O que eu utilizei

(disponível após conclusão do projeto)

## :rocket: Instalação e execução

(disponível após conclusão do projeto)
