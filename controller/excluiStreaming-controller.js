import { streamingService } from "../service/streamingVideos-service.js";

const tabela = document.querySelector("[data-tabela]");

tabela.addEventListener("click", async (evento) => {
    let botaoDeletar = evento.target.className === "bx bx-trash-alt";

    if (botaoDeletar) {
        try {
            const linhaStreaming = evento.target.closest("[data-id]");
            let id = linhaStreaming.dataset.id;
            await streamingService.removeStreaming(id);
            linhaStreaming.remove();
        } catch (error) {
            console.log(error);
            window.location.href = "../views/error.html";
        }
    }
});
