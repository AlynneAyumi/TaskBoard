const API_BASE_URL = "https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/GetPersonByEmail";

async function validateEmail() {
    const email = document.getElementById('email').value.trim().toLowerCase(); // Converter para minuscula o Email para nao dar erro
    const messageElement = document.getElementById('message');
    messageElement.textContent = "";

    if (!email) {
        messageElement.textContent = "Por favor, insira um email.";
        messageElement.className = "error";
        return;
    }

    try {
        const url = `${API_BASE_URL}?Email=${encodeURIComponent(email)}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro ao validar email. Código: ${response.status}`);
        }

        const data = await response.json();

        // Exibe o retorno para depuração
        console.log("Retorno da API:", data);

        // Verifica se os dados retornam um ID, indicando email válido
        if (data && data.Id) {
            messageElement.textContent = "Login bem-sucedido...";
            messageElement.className = "success";

            // Redireciona para a tela principal
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        } else {
            messageElement.textContent = "Email não encontrado.";
            messageElement.className = "error";
        }

    } catch (error) {
        messageElement.textContent = `Erro ao validar email: ${error.message}`;
        messageElement.className = "error";
    }
}
