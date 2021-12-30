import { streamingService } from "../service/streamingVideos-service.js";

(async () => {
    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get("id");

    const inputNome = document.querySelector("[data-nome]");
    const inputGenero = document.querySelector("[data-genero]");
    const inputTipo = document.querySelector("[data-tipo]");
    const inputPlataforma = document.querySelector("[data-plataforma]");

    try {
        const dados = await streamingService.detalhaStreaming(id);
        inputNome.value = dados.nome;
        inputGenero.value = dados.genero;
        inputTipo.value = dados.tipo;
        inputPlataforma.value = dados.plataforma;
    } catch (error) {
        console.log(error);
        window.location.href = "../views/error.html";
    }

    const formulario = document.querySelector("[data-form]");

    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        try {
            await streamingService.atualizaStreaming(
                id,
                inputNome.value,
                inputGenero.value,
                inputTipo.value,
                inputPlataforma.value
            );
            window.location.href = "../views/success.html";
        } catch (error) {
            console.log(erro);
            window.location.href = "../views/error.html";
        }
    });
})();
