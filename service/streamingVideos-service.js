const listaStreaming = () => {
    return fetch(`http://localhost:3000/streamingVideos`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível listar os itens')
    })
}

const criaStreaming = (nome, genero, tipo, plataforma) => {
    return fetch(`http://localhost:3000/streamingVideos`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            genero: genero,
            tipo: tipo,
            plataforma: plataforma
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.body
            }
            throw new Error('Não foi possível criar um item')
    })
}

export const streamingService = {
    listaStreaming,
    criaStreaming
}