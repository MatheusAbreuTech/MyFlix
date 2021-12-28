const listaStreaming = () => {
    return fetch(`http://localhost:3000/streamingVideos`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível listar os itens')
    })
}

export const streamingService = {
    listaStreaming
}