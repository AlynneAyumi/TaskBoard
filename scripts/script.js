// Importa a variável da API
//import { API_BASE_URL } from "./config/API.mjs";
const API_BASE_URL = "https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard";

// Variáveis e constantes
const listBoardNames = document.getElementById('selectedBoard'); // <select id='selectedBoard'>
const boardTitle     = document.getElementById('boardTitle'); // <h2 id='boardTitle'>

/*
 * Utilizar 'async' na declaração de uma função á torna assíncrona, 
 * não necessitando do seu retorno completo para continuar os demais 
 * processos.
 */
async function loadBoards() {

  try {
    // 'await' faz o programa esperar até obter o retorno total
    const response = await fetch(`${API_BASE_URL}/Boards`);

    // Caso a resposta seja diferente de 200 'ok'
    if (!response.ok) {
      throw new Error("Erro ao carregar boards");
    }

    // Armazena a resposta json em uma const
    const boards = await response.json();

    // Passa o objeto como parâmetro para popular a lista
    populateBoardsList(boards);

  } catch (error) {
    console.error("Erro ao carregar boards:", error);
  }
};


// Popula a lista <select> com os nomes das boards
function populateBoardsList(boards) {

  // Para cada objeto retornado dentro do JSON irá executar o processo
  boards.forEach((board) => {
    
    const option = document.createElement('option');
    option.value = board.Id;
    option.textContent = board.Name;
    option.className = 'listOption';
    listBoardNames.appendChild(option);

  });
}



// Apresentação do Quadro: Após a seleção, o sistema deverá exibir o quadro escolhido,
// com as colunas e tarefas associadas a ele, permitindo o acompanhamento do progresso das atividades.
listBoardNames.addEventListener('change', changeBoard);

function changeBoard(){

  var selectedIndex = listBoardNames.selectedIndex;  // Obtém o índice da opção selecionada
  var boardId = listBoardNames.options[selectedIndex].value;  // Obtém o valor da opção selecionada

  fetch(`${API_BASE_URL}/Board?BoardId=${boardId}`)
  .then(response => response.json())
  .then(dados => {
    boardTitle.innerHTML = dados.Name;
    loadBoards(board.Id);
  })
  .catch(error => console.error("Erro:", error));

};


async function loadBoard(id) {

    try {
      
      const response = await fetch(`${API_BASE_URL}/ColumnByBoardId?BoardId=${id}`);
      if (!response.ok) {
        throw new Error("Erro ao carregar colunas");
      }
      const columns = await response.json();
      populateColumns(columns);

    } catch (error) {
      console.error("Erro ao carregar colunas: ", error);
    }

};

function populateColumns(columns) {

    columns.forEach((column) => {

    });
}





// Função inicial
function init() {
  loadBoards();
};

// Inicia os processos
init();