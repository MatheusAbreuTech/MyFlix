import { streamingService } from "../service/streamingVideos-service.js";

const criaNovaLinha = (nome, genero, tipo, plataforma, id) => {
    const linhaNovoItem = document.createElement("tr");
    const conteudo = `
    <td>${nome}</td>
    <td>${genero}</td>
    <td>${tipo}</td>
    <td>${plataforma}</td>
    <td>
        <ul class="buttons">
            <li class="btn_excluir"><i class="bx bx-trash-alt"></i></li>
            <li><a href="../views/edit.html?id=${id}"><i class="bx bxs-edit"></i></a></li>
        </ul>
    </td>
    `;

    linhaNovoItem.innerHTML = conteudo;
    linhaNovoItem.dataset.id = id;

    return linhaNovoItem;
};

const tabela = document.querySelector("[data-tabela]");

const render = async () => {
    try {
        const listaItem = await streamingService.listaStreaming();

        listaItem.forEach((element) => {
            tabela.appendChild(
                criaNovaLinha(
                    element.nome,
                    element.genero,
                    element.tipo,
                    element.plataforma,
                    element.id
                )
            );
        });
    } catch (error) {
        console.log(error);
    }
};

render();
