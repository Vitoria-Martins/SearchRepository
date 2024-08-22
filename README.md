# Search Repository

## Descrição
É um aplicativo React que permite buscar e visualizar os repositórios de um usuário específico do GitHub. Oferece uma interface simples e exibe detalhes como descrição e número de estrelas dos repositórios, além de permitir a navegação entre páginas de resultados. Foram criados dois componentes nesta aplicação:
- `ComponentSearch.js`: Para comportar o código necessário para a busca.
- `RepositoryList.js`: Para exibir a lista de repositórios.

## Funcionalidades

- **Busca de Repositórios**: Pesquisa repositórios de um usuário específico do GitHub.

- **Paginamento**: Navegue entre as páginas com os botões de navegação.

- **Exibição de Detalhes**: Mostra o nome, a descrição e o número de estrelas dos repositórios.
- **Mensagens de Estado**: Exibe mensagens de carregamento e erros.

- **Link para o Repositório**: O nome do repositório é um link clicável para a página do repositório no GitHub.


## Instruções de Uso

- Na caixa de entrada, digite **Facebook** para ser redirecionado ao repositório do Facebook.
- Use o botão **Search** para realizar a busca.
- Clicando no nome do repositório, será redirecionado para a página do repositório no GitHub.
-Ao final da lista, clique nos botões de navegação para ir para a próxima página ou retornar à página anterior.


## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Material-UI**: Biblioteca de componentes React para estilização.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **GitHub API**: Fonte de dados dos repositórios.

## Observações

**Obs* Utilizei o repositório público do Facebook para demonstrar a funcionalidade do projeto. A escolha foi feita devido à grande quantidade de repositórios disponíveis, o que permite uma navegação eficiente entre páginas. Além disso, o Facebook é a empresa que criou o React, que é a tecnologia principal utilizada neste projeto.