import { streamingService } from '../service/streamingVideos-service.js'

const btnFechaModal = document.querySelector("#btn_close_modal");
        btnFechaModal.addEventListener("click", () => {
            document.querySelector(".modal-overlay").classList.remove("active");
        });

        
function getValues(){
    return {
        nome: document.querySelector('[data-nome]').value,
        genero: document.querySelector('[data-genero]').value,
        tipo: document.querySelector('[data-tipo]').value,
        plataforma: document.querySelector('[data-plataforma]').value
    }
}

function validate() {
    const { nome, genero, tipo, plataforma } = getValues()
        
        if (nome.trim() === "" || genero.trim() === "" || tipo.trim() === "" || plataforma.trim() === "") {
            throw new Error("Por favor, preencha todos os campos")
        }
}

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    try {
        validate()
        const { nome, genero, tipo, plataforma } = getValues()
        const addStreaming = async () => {
            await streamingService.criaStreaming(nome, genero, tipo, plataforma)
           
        }
        addStreaming()

        // alert(document.querySelector(".modal-overlay").classList.add("active"))
        
    }
    catch (error) {
        console.log(error)
    }

})