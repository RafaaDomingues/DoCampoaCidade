function openTab(tabName) {
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