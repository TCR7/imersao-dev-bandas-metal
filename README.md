# Bandas de Metal - Busca Rápida e Intuitiva

## Descrição
Este projeto web é um buscador de bandas de metal feito durante a imersão dev da alura com o google gemini, criado para auxiliar os fãs a encontrarem suas bandas favoritas de forma rápida e eficiente. A aplicação permite pesquisar por título, descrição e tags das bandas, oferecendo uma experiência intuitiva e personalizada.

## Tecnologias Utilizadas
* **HTML:** Estruturação da página e elementos da interface do usuário.
* **CSS:** Estilização da página, definindo a aparência visual.
* **JavaScript:** Lógica da aplicação, incluindo a função de pesquisa e a manipulação do DOM.

## Como Funciona
1. **Interface:** O usuário digita o nome da banda ou um termo relacionado no campo de pesquisa.
2. **Busca:** Ao clicar no botão "Pesquisar", a aplicação busca no banco de dados de bandas (armazenado em `dados.js`) por correspondências com o termo pesquisado.
3. **Resultados:** Os resultados da pesquisa são exibidos na seção "Resultados da Pesquisa", com informações como título, descrição e link para mais detalhes.
4. **Validação:** A aplicação valida a entrada do usuário, garantindo que a pesquisa seja realizada apenas com termos válidos (com pelo menos dois caracteres).

## Estrutura de Arquivos
* **index.html:** Arquivo principal da aplicação, contendo a estrutura HTML.
* **style.css:** Arquivo CSS responsável pelo estilo da página.
* **dados.js:** Arquivo JavaScript contendo o banco de dados de bandas.
* **app.js:** Arquivo JavaScript contendo a lógica da aplicação, incluindo a função de pesquisa.

## Como Utilizar
1. **Clonar o repositório:** Clone este repositório para sua máquina local utilizando o Git.
2. **Abrir os arquivos:** Abra os arquivos em um editor de código de sua preferência.
3. **Executar:** Abra o arquivo `index.html` em um navegador para visualizar a aplicação.

## Contribuições
Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, por favor, abra um issue ou faça um pull request.

## Próximos Passos
* **Implementar um sistema de filtragem por gênero:** Permitir que o usuário filtre os resultados por gênero musical.
* **Adicionar um sistema de recomendações:** Sugerir bandas semelhantes com base na pesquisa do usuário.
* **Integrar com APIs de música:** Obter informações mais detalhadas sobre as bandas, como discografia, shows e notícias.
