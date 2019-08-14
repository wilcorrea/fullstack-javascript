// provide texts to views
export default {
  welcome: {
    title: 'Seja bem vindo!',
    content: `
    <p><h3>Olá, tudo bem por ai? Espero que sim</h3></p>
    <p>Você está tendo acesso à este projeto que é um desafio que fiz para uma avaliação
    para uma posição de Tech Lead Front na Wirecard Brasil, então vou explicar umas coisinhas
    sobre isso.</p>
    <p>
    Foi um grande prazer ter feito o teste e confesso que foi até divertido (em alguns momentos).
    Lidar com tarefas com escopo próximo do real sem compromisso é uma experiência que
    raramente temos.. estamos sempre com pressa para alguma coisa e acaba que a gente não
    para pra ver como as coisas podem ser legais :/ 
    </p>
    <p>
    Sem mais delongas, vamos ao que interessa! Vou tentar explicar um pouco para você
    (avaliador ou apenas alguém está dando uma olhadinha) como o projeto se passa.
    </p>
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
    A missão era fazer um backend que consumisse uma API REST e entregasse os dados
    recuperados usando GraphQL e um frontend que implementasse apenas umas telinhas
    de nada. Provavelmente se eu tivesse simplesmente feito a API e as telas teria
    acabado bem rápido, mas não foi isso que eu fiz :/
    </p>
    <h3 id="o-plano">O plano</h3>
    <p>
    A primeira coisa que eu fiz quando recebi o teste foi pensar em como fazer algo
    que fosse interessante para mim e para que o pessoal pudesse conhecer a minha forma
    de trabalho. Essa fase de avaliações é muito importante para ambas as partes porque
    permite que a gente se conheça melhor e é isso que eu espero com o teste, que os
    avaliadores conheçam meu trabalho e analisem se é ou não o que eles precisam para
    trabalhar com eles. 
    </p>
    <p>
    Sendo assim, criei um documento no README explicando o que eu iria fazer, criei umas
    issues e comecei à meter a mão na massa (no tempo que eu conseguia livre, hehe).
    </p>
    <h4 id="o-ambiente">Subindo o ambiente</h4>
    <p>
    Meu ambiente de desenvolvimento é 100% Docker. É uma espécie de desafio pessoal
    contínuo não instalar nada na minha máquina. Algumas vezes isso é bem custoso, mas
    como eu já estava familiarizado com o ambiente necessário foi bem suave processo.
    Criei um 'docker-compose.yml', criei as pastas back e front, configurei os serviços
    usando node para as duas pontas, um script de entrada com o nome de 'bootstrap.sh'
    e padronizei os comandos do yarn nas duas pontas.
    </p>
    <p>
    Para iniciar o desenvolvimento do projeto basta ter Docker instalado na máquina,
    clonar o repositório, criar uma cópia do 'docker-compose.yml.development' com o nome
    de 'docker-compose.yml' e dar um 'docker-compose up' e ir até as portas mapeadas
    (ou mudar a porta exposta se for o caso) e pronto! Tá rodando já =)
    </p>
    <h4 id="o-producao">Colocando a parada no ar</h4>
    <p>
    Assim que comecei à ter algo funcional configurei o ambiente de "produção" numa 
    instância EC2 na AWS usando Tevun (que é um projetinho pessoal) e configurei o CI
    para rodar os testes quando o MR for criado e o release build / deploy para quando
    a master for modificada. O Tevun cria um remote git no servidor de "produção" então
    para fazer a entrega eu faço apenas um push no final. O script de CI / DC está
    no .gitlab-ci.yml na raiz do projeto, só seguir os caminhos dos scripts que dá
    para ter uma noção do processo todo. Nesse aspecto o Tevun me ajuda demais porque
    ele roda em produção o meu 'docker-compose production' de forma bem automatizada.
    </p>
    <p>
    Enfim, eu subi um sudominio do wilcorrea.dev lá na AWS e tá lá no ar para o pessoal
    poder ver como o app se comporta em um ambiente próximo do real. Se quiser ver também
    pode <a href="https://fullstack-javascript.wilcorrea.dev">clicar aqui</a>.
    </p>
    <h4 id="o-back">O backend</h4>
    <p>
    Como o teste era para analisar minhas habilidades com o front procurei usar o tempo
    nele da forma mais rápida possível. Subi um express mesmo e subi o server com o
    http / https da std library mesmo. Comecei tudo do zero, (praticamente com um \`yarn init\`)
    e fui instalando dependências. Instalei o Express, GraphQL para o Express e o
    Apollo Server. Fiquei um pouco desapontado com o Apollo Server e com as tecnologias
    que pesquisei para fazer isso tudo rodar. Configurei o webpack para criar um arquivo
    de bundle único final.
    </p>
    <p>
    O ponto de entrada da aplicação é o back/src/index.js. Ele vai chamar os arquivos
    que montam os 'schemas' e os middleware para o express. No ambiente de desenvolvimento
    o playground fica ativado, já no produção não tem isso não. O backend então tem na
    prática apenas uma rota que é responsável por resolver as instruções GrapqQL. 
    </p>
    <p>
    Dentro de <i>src/</i> tem praticamente apenas duas coisas relevantes: a pasta <i>Schema/</i>
    e pasta <i>DataSource/</i>. A <i>Schema/</i> tem as definições dos esquemas do
    GraphQL. A <i>DataSource/</i> tem os serviços base que serão usados pelos resolvers
    dos schemas GraphQL.
    </p>
    <p>
    Em <i>src/Schema/Order/</i> tem o documento <i>OrderDataSource.js</i>. Esse cara
    estende o serviço principal que está em <i>src/DataSource</i> e é usado no
    <i>OrderGrapQL.js</i> para fazer as queries de <i>order</i> e de <i>orders</i>.
    </p>
    <h5 id="testando-o-back">Testes do backend</h5>
    <p>
    Eu recomendo usar o comando 'yarn test' para rodar os testes do backend. Como é pouca
    coisa que é feita tem pouco teste. A vantagem que a cobertura é excelente =)
    </p>
    `
  }
}
