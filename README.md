<h2 align="center">
  Fiorese Lab I
</h2>

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

Os Labs tem como intuito principal a diversão através da programação e a prática de tudo o que eu aprendo sobre desenvolvimento no dia a dia. Para isso, imagino possíveis problemas que seriam legais de resolver, como o problema a seguir:

### :warning: O problema

Imagine que em um aplicativo de delivery, a pessoa pede apenas uma pizza e depois avalia com apenas uma estrela. Podemos presumir então que a pessoa não gostou da pizza, já que foi a única coisa que ela pediu.

Porém, imagine agora que a pessoa pediu uma pizza de calabresa, uma pizza portuguesa e um refrigerante, e avaliou o pedido com uma estrela e com o seguinte comentário:

_"A pizza de calabresa e a pizza portuguesa estavam ótimas, não é atoa que são as minhas preferidas dessa pizzaria. Porém, odiei que os refrigerantes tenham vindo com as latas todas amassadas. Essa pizzaria precisa rever os cuidados que estão tendo com seus produtos!"_

Ao ler o comentário, podemos observar que a pessoa elogiou as pizzas e criticou o refrigerante, o que fez com que ela avaliasse com apenas uma estrela o pedido. Até aí tudo bem, pois só se trata de uma avaliação e uma pessoa consegue ler sem esforço. Porém, quando há um número muito grande de avaliações é inviável ler todos os comentários, de modo com que seja necessário automatizar esse processo. Para isso então, surge a solução a seguir:

### :heavy_check_mark: A solução

Neste projeto eu criei uma API com Watson Knowledge Studio, Watson Natural Language Understanding e Node-RED para analisar comentários de avalizações de aplicativos de delivery, onde busco sobre quais itens a pessoa elogiou e criticou. Ao final, crio um projeto em React para poder enviar comentários, mostrar todos os itens que foram mais elogiados e mais criticados, e todos os comentários então feitos. Sendo assim, um simples comentário como o do exemplo acima poderia ser enviado para a API, analisado e transformado em:

```
[
  {
    item: "Pizza de calabresa",
    sentimento: "positivo"
  },
  {
    item: "Pizza portuguesa",
    sentimento: "positivo"
  },
  {
    item: "Refrigerante",
    sentimento: "negativo"
  },
]
```

Com isso então, é possível analisar quantidades enormes de comentários de maneira automática e sem precisar de nenhum esforço humano.

## :rocket: Esboço do projeto

### :art: Layout

O layout foi criado por mim utilizando o Figma, e está disponível no seguinte link:

- [https://www.figma.com/file/mXD0nbNoQveOCezNKhfnV2/pizzaria-Colors?node-id=0%3A1](https://www.figma.com/file/mXD0nbNoQveOCezNKhfnV2/pizzaria-Colors?node-id=0%3A1)

### :triangular_ruler: Arquitetura

Através do frontend é possível fazer requisições POST para enviar comentários para a API, que por sua vez conectada ao modelo treinado, analisaria o comentário e identificaria as entidades juntamente com suas respectivas emoções (positiva ou negativa). Com isso, o comentário e as entidades encontradas são salvas no banco de dados para que o frontend também possa fazer requisições GET para receber todos os dados salvos. Na imagem a seguir, é possível observar melhor como seria o funcionamento.

<img alt="Arquitetura" src="https://github.com/gabriel-fz/Fiorese-Lab-I/blob/master/assets/arquitetura.png" />

## :rocket: O que eu utilizei

- [Node-RED](https://nodered.org/)
- [Watson Knowledge Studio](https://www.ibm.com/br-pt/cloud/watson-knowledge-studio)
- [Watson Natural Language Understanding](https://www.ibm.com/br-pt/cloud/watson-natural-language-understanding)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [Unform](https://unform.dev/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axios](https://github.com/axios/axios)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start)
- [Jest](https://jestjs.io/)
- [React testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## :rocket: Instalação, execução e testes

A seguir, estão descritos todos os passos para a instalação, execução e testes.

### :memo: Pré-requisitos

- [Node](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install#debian-stable)(ou npm)
- [Json-server](https://github.com/typicode/json-server)
- [Git](https://git-scm.com/downloads) (Opcional)

(Caso esteja utilizando o VS Code, é desejável ter essas extensões:)

- [ESLint](https://eslint.org/)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://prettier.io/)

### :octocat: Clonando o repositório

Abra em sua máquina uma pasta de sua preferência. Em seguida, abra o terminal de sua máquina na respectiva pasta e rode o seguinte comando:

```
$ git clone https://github.com/gabriel-fz/Fiorese-Lab-I.git
```

Ou então, baixe este repositório zipado e descompacte ele dentro da pasta de sua preferência.

### :computer: Executando

Inicialmente, verifique se seu editor de código está utilizando versões mais recentes do Typescrip do que a versão `4.0.3`. No Visual Studio Code por exemplo, é possível que essa versão seja escolhida automaticamente gerando erros no código. Para resolver este problema (no VSCode) caso tenha, basta digitar `Ctrl + shift + p`, procurar por `Typescrip: select typescript version` e selecionar uma versão **diferente** da versão `4.0.3`.

Verifique também se a API se encontra disponível no ar. No [readme](https://github.com/gabriel-fz/Fiorese-Lab-I/blob/master/api/README.md) da pasta `api` estão descritos todos os passos para a criação da api com Watson Knowledge Studio, Watson Natural Language Understanding e Node-RED.

Agora vá até a pasta `frontend/src/config` e crie um arquivo com o nome de `apiConfig.ts`. Neste arquivo, cole o seguinte código abaixo e altere o os três asteriscos pela URL da sua API:

```
const apiConfig =
  'https://cors-anywhere.herokuapp.com/***;

export default apiConfig;
```

O arquivo ficará mais ou menos assim:

```
const apiConfig =
  'https://cors-anywhere.herokuapp.com/https://link-da-sua-api.mybluemix.net;

export default apiConfig;
```

Com todas as configurações feitas, abra a pasta `frontend` no terminal e execute o seguinte comando para poder rodar o app:

```
yarn start
```

Com isso, será aberto em uma aba do seu navegador a página referente aos layouts presentes no figma.

### :ballot_box_with_check: Rodando os testes

Os testes se encontram presentes na pasta `frontend/__tests__`. Para roda-los basta abrir a pasta `frontend` no terminal e executar o seguinte comando:

```
yarn test
```

Também é possível gerar um coverage report rodando o seguinte comando:

```
yarn test:coverage
```

Após rodar o coverage, será criada a pasta `fronten/coverage`. Para poder analizar os relatórios que mostram todas as linhas de código que os testes cobram, basta abrir o arquivo `frontend/coverage/lcov-report/index.html` em seu navegador.
