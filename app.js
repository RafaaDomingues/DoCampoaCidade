function openTab(tabName) {
    // Verifica se banner deve ser mostrado
    setBanner(tabName);
    // Esconder todas as seções
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Remover a classe 'active' de todos os botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostrar a aba selecionada
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Adicionar a classe 'active' ao botão clicado
    event.currentTarget.classList.add('active');
}


function setBanner (tab) {
    // pega o banner
    const image = document.getElementById('banner');
    // verifica se é a tab de "inicio"
    if(tab == 'inicio') {
        // mostra o banner
      return  image.style.display = 'block';
    }
    // caso nao seja incio esconde
    return image.style.display = 'none';
}