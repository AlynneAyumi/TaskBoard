
// Armazena o nome dos quadros disponíveis

fetch('https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/Boards')
  .then(response => response.json())
  .then(dados => {

    const boardNames = dados.map(board => ({id: board.Id, nome: board.Name}));

    console.log(boardNames);

     // Coloca o nome dos quadros dentro da caixa de seleção
    if (boardNames != null) {

        const selectList = document.getElementById('selectedBoard');

        for (let i = 0; i < boardNames.length; i++) {
            
            const option = document.createElement('option');
            option.value = boardNames[i].id;
            option.textContent = boardNames[i].nome;
            option.className = 'listOption';
            selectList.appendChild(option);
        }
    } else {
    
    }
     
  })
  .catch(error => console.error("Erro:", error));


// Apresentação do Quadro: Após a seleção, o sistema deverá exibir o quadro escolhido,
// com as colunas e tarefas associadas a ele, permitindo o acompanhamento do progresso das atividades.
const selectedBoard = document.getElementById('selectedBoard');

selectedBoard.addEventListener('change', () => {
  console.log("Teste");
})


