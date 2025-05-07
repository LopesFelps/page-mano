document.addEventListener("DOMContentLoaded",
    initApp);
    // Função principal que inicializa o app
    function initApp(){
    const form = document.getElementById("statusForm");
    const submitBtn = document.getElementById("submitBtn");
    const resultDiv = document.getElementById("resultDiv");
    
    initFormValidation(form, submitBtn);
    initFormSubmitHandler(form, resultDiv);
    }
    
    // Inicializa a validação do formulario0 para habilitar/desabilitar o app
    function initFormValidation(form, submmitBtn){
    const toggleSubmit = () => {
    submitBtn.disabled =
    !form.checkValidity();
    
    };
    
    form.addEventListener
    ("input", toggleSubmit);
    toggleSubmit(); // Estado Inicial
    }
    
    // Registra o manipulador de envio do formulário
    
    function initFormSubmitHandler(form, resultDiv){
    form.addEventListener
    ("submit", async (event) => {
    event.preventDefault();
    resultDiv.innerHTML = "";
    
    const { code, source } =
    getFormData();
    const urls = buildUrls
    (code, source);
    
    await handleRequests(urls, resultDiv);
    });
    }
    
    //Lida com as requisições e exibição das imagens (async = aguarde)
    async function handleRequests(url, container){
    const blob = await fetchImage(url);
    displayImage(blob, container);
    }
    //Captura os dados preenchidos no formulário
    
    function getFormData(){
    const code = document.getElementById("code")
    .value.trim();
    const source = "dog";
    return { code, source };
    }
    
    //Constrói as URLs com base na opção selecionada
    
    function buildUrls(code) {
    return `https://http.dog/${code}.jpg`;
    }
    
    //fetch = cria uma promessa (aceita ou recusa) blob = retorna em imagem
    async function fetchImage(url) {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`Erro
    ${response.status} ao buscar: ${url}`);
    }
    return await response.blob();
    }
    
    //Usado para imagens que foram recuperadas
    
    function displayImage(blob, container){
    const imgURL = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagem HTTP Status";
    container.appendChild(img);
    }