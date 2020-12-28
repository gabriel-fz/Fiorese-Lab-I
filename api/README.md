<h2 align="center">
  Criando a API
</h2>

- [1. Treinando o watson](#treinando-o-watson)
- [2. Criando a API com Node-RED](#criando-a-api-com-node-red)
  - [2.1. Rotas que a API necessita ter](#rotas-que-a-api-necessita-ter)
- [3. Videos de material de apoio](#videos-de-material-de-apoio)

## Treinando o watson

O primeiro passo para a criação da API é o treinamento do Watson. Para isso, assista os vídeos do material de apoi e utilize o arquivo `frases.txt` para poder treinar um modelo no Watson Knowledge Studio, de modo que ele reconheça as seguintes entidades:

<div align="center">

| Entidade        | Exemplo de marcação |
| --------------- | ------------------- |
| Frango_catupiry | frango com catupiry |
| Calabresa       | calabresa           |
| Portuguesa      | portuguesa          |
| Refrigerante    | refrigerante        |
| Suco            | suco                |

</div>

**Observação:** Apenas faça train e não faça evaluate!

Com um modelo criado, siga os próximos passos.

## Criando a API com Node-RED

Seguindo os vídeos do material de apoio, crie uma API com o Node-RED que se conecta ao modelo treinado no Watson Knowledge Studio e salva todos os dados no cloudant. Vale ressaltar que a API necessita ter as seguintes rotas:

### Rotas que a API necessita ter

É muito importante ter bastante atenção nos nomes das rotas e nos JSONs que elas recebem ou enviam, pois isso pode gerar erro na página do frantend.

**[POST] /comentar** recebe o JSON no seguinte formato:

```
{
	"comentario": "Eu odiei o suco que estava aguado. Porém, a pizza estava muito boa"
}
```

**[GET] /entidade-texto** retorna o JSON no seguinte formato:

```
[
  {
    "id": 0,
    "texto": "Eu odiei a pizza de calabresa. Mas gostei muito do suco, estava muito bom.",
    "entidades": [
      {
        "item": "Calabresa",
        "sentimento": "negative"
      },
      {
        "item": "Suco",
        "sentimento": "positive"
      }
    ]
  },
  {
    "id": 1,
    "texto": "Eu odiei a pizza portuguesa.",
    "entidades": [
      {
        "item": "Portuguesa",
        "sentimento": "negative"
      }
    ]
  }
]
```

**[GET] /apenas-entidade** retorna o JSON no seguinte formato:

```
[
  {
    "id": 1,
    "nome": "Pizza de Calabresa",
    "tipo": "pizza",
    "positivos": 2,
    "negativos": 2
  },
  {
    "id": 2,
    "nome": "Pizza de Frango com Catupiry",
    "tipo": "pizza",
    "positivos": 2,
    "negativos": 2
  },
  {
    "id": 3,
    "nome": "Pizza Portuguesa",
    "tipo": "pizza",
    "positivos": 1,
    "negativos": 2
  }
]
```

## Videos de material de apoio

Todos os vídeos à seguir foram retirados do [canal do Sérgio Gama](https://www.youtube.com/c/SergioGama/featured), e neles é mostrado de forma prática como treinar modelos costumizados no WKS e como criar e usar uma api no Node-RED:

- [How to read IoT Data using MQTT on Node-Red, and consume it on Jupyter Notebook with Pandas on CP4D](https://www.youtube.com/watch?v=yT_DIEu6uzA&t=1121s&ab_channel=SergioGama)
- [Creating a custom model on WKS and deploy it to NLU, use it thru API on Node-red and Cloud Functions](https://www.youtube.com/watch?v=Nqyd5rJ0KJU&t=1599s&ab_channel=SergioGama)
- [Criando Rest API Post no Node-red, multipart recebendo arquivo, e testando no Postman](https://www.youtube.com/watch?v=QQt9lZF4SQQ&t=327s&ab_channel=SergioGama)
- [https://www.youtube.com/watch?v=UyPVl7epAnU&t=87s&ab_channel=SergioGama](https://www.youtube.com/watch?v=UyPVl7epAnU&t=87s&ab_channel=SergioGama)
