function pesquisar() {
  // Função responsável por pesquisar e exibir os resultados na página.

  let section = document.getElementById("resultados-pesquisa");
  // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome da banda ou do genêro musical.</p>";
    return;
  }
  if (campoPesquisa.trim().length < 2){
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome da banda ou do genêro musical.</p>";
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados da pesquisa, que serão concatenados no loop.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada objeto (banda) no array "dados". Para cada objeto, cria um novo elemento HTML para representar um resultado da pesquisa.
  for (dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se o titulo inclui no campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações.</a>
      </div>
      `;
      // Concatena a string com o HTML formatado para cada resultado, incluindo o título, descrição e link da banda.
    }
  }


  if(!resultados){
    resultados = "<p>Nada foi encontrado.</p>"
  }
  section.innerHTML = resultados;
  // Atribui o conteúdo HTML gerado à seção "resultados-pesquisa", substituindo o conteúdo anterior.
}
