// Lista para armazenar os nomes
let nomes = [];

// Função para capitalizar a primeira letra de cada palavra
function capitalizar(nome) {
    return nome
        .split(" ")
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");
}

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Verifica se já houve um sorteio
    const resultado = document.getElementById("resultado");
    if (resultado.innerHTML !== "") {
        const manterNomes = confirm(
            "Deseja manter os nomes já adicionados? Clique em 'OK' para manter ou 'Cancelar' para começar uma nova lista."
        );

        if (!manterNomes) {
            reiniciarLista();
        }
    }

    // Adiciona o nome formatado à lista
    nomes.push(capitalizar(nome));

    // Atualiza a interface
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a exibição da lista de nomes
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista exibida

    nomes.forEach((nome, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${nome}`;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um nome da lista
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo sorteado: <strong>${sorteado}</strong>!</li>`;
}

// Função para reiniciar a lista e o resultado
function reiniciarLista() {
    nomes = []; // Limpa a lista de nomes

    // Limpa a interface
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
