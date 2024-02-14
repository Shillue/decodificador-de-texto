
function verificarTexto() {
    // Obter o texto do textarea
    let textoEntrada = document.getElementById("textoPrincipal").value;

    // Verificar se o texto contém apenas letras minúsculas sem acentos
    let regex =/^[a-z.,\s]+$/;

    if (!regex.test(textoEntrada)) {
        alert("Por favor, digite apenas letras minúsculas sem acentos.");
        return false;
    }
    return true;

}

function criptografar(texto) {
    // Regras de criptografia
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g,"ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

function descriptografar(texto) {
    // Regras de descriptografia
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g,"o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

function codificarTexto(){
    limparTelaSecundaria();
    if(verificarTexto()){
        ocultarImagem();
        let textoEntrada = document.getElementById("textoPrincipal").value;
        let textoCodificado = criptografar(textoEntrada);
        exibirResultado(textoCodificado);
    }
}
     
function decodificarTexto() {
    limparTelaSecundaria();
    if(verificarTexto()){
        ocultarImagem();
        var textoCodificado = document.getElementById("textoPrincipal").value;
        var textoDecodificado = descriptografar(textoCodificado);
        exibirResultado(textoDecodificado);
    }
}

function exibirResultado(texto) {
    let resultadoCodificado = document.getElementById("resultado");
    resultadoCodificado.querySelector("h2").innerText = "Sua mensagem:";
    resultadoCodificado.querySelector("p").innerText = texto;
    let botaoCopiar = document.querySelector(".botaoCopiar");
    botaoCopiar.style.display = "block";
    let telaSecundariaTexto = document.querySelector(".telaSecundariaTexto");
    telaSecundariaTexto.style.margin = "50px";
}
function ocultarImagem() {
    let imagem = document.querySelector(".imagemTelaSecundaria");
    imagem.classList.add("escondido"); 
}

function copiarTexto() {
    let resultadoCodificado = document.getElementById("resultado");
    let textoCopiar = resultadoCodificado.querySelector("p").textContent;   
  
    const textarea = document.getElementById("textoPrincipal");
    textarea.value = textoCopiar;
    limparTelaSecundaria();
}

function limparTelaPrincipal() {
    let textoPrincipal = document.getElementById("textoPrincipal");
    textoPrincipal.value = ""; // Limpar o conteúdo do textarea
}

function limparTelaSecundaria() {
    let resultadoCodificado = document.getElementById("resultado");
    resultadoCodificado.querySelector("h2").innerText = "Nenhuma mensagem encontrada";
    resultadoCodificado.querySelector("p").innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
    let botaoCopiar = document.querySelector(".botaoCopiar");
    botaoCopiar.style.display = "none";
    let imagem = document.querySelector(".imagemTelaSecundaria");
    imagem.classList.remove("escondido");
}

function limparTelas(){
    limparTelaPrincipal();
    limparTelaSecundaria();
}