// provide texts to views
export default {
  welcome: {
    title: 'Seja bem vindo!',
    content: `
    <p><h3>Olá, tudo bem por ai? Espero que sim</h3></p>
    <p>
    O repositório tem duas pastas, como se fossem dois projetos mesmo, que
    funcionam de forma independente: <b><i>back</i></b> e <b><i>front</i></b>.
    Na pasta back você poderá encontrar um serviço criado com express que consome
    uma api REST e entrega o conteúdo através de GraphQL. Já no front temos um projeto
    criado com o Vue-CLI com base bem simples. Nos dois foram aplicadas o mínimo
    de dependências que eu consegui (mas sempre dá para otimizar né... aceito dicas =)
    e sempre que deu tentei usar várias abordagens diferentes para uma mesma coisa.
    </p>
    <p>
    Este projeto é antes de tudo uma demonstração da forma com a qual eu trabalho
    com VueJS, Javascript, TypeScript, Stylus, e toda essa sopa de letrinhas.
    Provavelmente o front estará mais bonito que o back, mas a a oportunidade em
    questão era pra o front, então foi onde centrei meus esforços.
    </p>
    <br>
    <p>
    Na <a href="/#/dashboard/about">página Sobre</a> eu explico melhor sobre as 
    tecnologias aplicadas. Dá uma chegada lá para conferior. Você pode clicar neste
    link aqui detrás ou usar o "menuzinho" maroto que está pulsando lá em cima.
    </p>
    <br><br>
    <small>
    P.S.: este número estranho aqui embaixo é a versão do app. Ele muda toda vez
    que rola um deploy, também falo dele lá na <a href="/#/dashboard/about">página Sobre</a>!
    </small>
    `
  },
  orders: {
    title: 'Pedidos'
  },
  order: {
    title: 'Detalhes do Pedido'
  },
  about: {
    title: 'Sobre esta aplicação',
    content: `
    <h2 id="o-projeto">O projeto</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tincidunt auctor. Nunc vitae orci id odio aliquam congue et sit amet orci. Quisque tincidunt suscipit neque vel porttitor. Nullam dictum vulputate mi, eu bibendum tellus tincidunt eget. Sed sagittis pellentesque odio, sed sodales ante auctor in. Nam sollicitudin odio ultricies purus tempus, vel bibendum tortor convallis. Cras ut nibh lacus. Aliquam suscipit ligula sit amet nibh convallis, in egestas quam tempus. Praesent nec bibendum eros, vel ullamcorper neque. Cras lacinia risus et commodo accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent venenatis odio eget dui posuere luctus. Donec nunc nisi, porttitor in erat vel, pulvinar consequat enim. Duis non varius velit. Suspendisse malesuada nulla vitae nisi bibendum faucibus. Mauris id tellus laoreet, rhoncus lacus vel, accumsan nisl.
    </p>
    `
  }
}
