
// Armazena o nome dos quadros disponíveis

fetch('https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/Boards')
  .then(response => response.json())
  .then(dados => {

    const boardNames = dados.map(board => board.Name);

    //console.log(boardNames);

     // Coloca o nome dos quadros dentro da caixa de seleção
    if (boardNames != null) {

        const selectList = document.getElementById('selectedBoard');

        for (let i = 0; i < boardNames.length; i++) {
            
            const option = document.createElement('option');
            option.value = null;
            option.textContent = boardNames[i];
            selectList.appendChild(option);
        }
    } else {
    
    }
     
  })
  .catch(error => console.error("Erro:", error));

