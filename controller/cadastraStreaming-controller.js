import { streamingService } from "../service/streamingVideos-service.js";

function getValues() {
    return {
        nome: document.querySelector("[data-nome]").value,
        genero: document.querySelector("[data-genero]").value,
        tipo: document.querySelector("[data-tipo]").value,
        plataforma: document.querySelector("[data-plataforma]").value,
    };
}

function validate() {
    const { nome, genero, tipo, plataforma } = getValues();

    if (
        nome.trim() === "" ||
        genero.trim() === "" ||
        tipo.trim() === "" ||
        plataforma.trim() === ""
    ) {
        alert("Por favor, preencha todos os campos");

        throw new Error("Por favor, preencha todos os campos");
    }
}

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    try {
        validate();
        const { nome, genero, tipo, plataforma } = getValues();
        const addStreaming = async () => {
            await streamingService.criaStreaming(nome, genero, tipo, plataforma);
            window.location.href = "../views/success.html";
        };
        addStreaming();
    } catch (error) {
        console.log(error);
    }
});
