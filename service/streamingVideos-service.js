const listaStreaming = () => {
  return fetch(
    `https://my-json-server.typicode.com/MatheusAbreuTech/MyFlix-db/streamingVideos`
  ).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possível listar os itens");
  });
};

const criaStreaming = (nome, genero, tipo, plataforma) => {
  return fetch(
    `https://my-json-server.typicode.com/MatheusAbreuTech/MyFlix-db/streamingVideos`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        genero: genero,
        tipo: tipo,
        plataforma: plataforma,
      }),
    }
  ).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("Não foi possível criar um item");
  });
};

const removeStreaming = (id) => {
  return fetch(
    `https://my-json-server.typicode.com/MatheusAbreuTech/MyFlix-db/streamingVideos/${id}`,
    {
      method: "DELETE",
    }
  ).then((resposta) => {
    if (!resposta.ok) {
      throw new Error("Não foi possível remover o item");
    }
  });
};

const detalhaStreaming = (id) => {
  return fetch(
    `https://my-json-server.typicode.com/MatheusAbreuTech/MyFlix-db/streamingVideos/${id}`
  ).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possível detalhar o item");
  });
};

const atualizaStreaming = (id, nome, genero, tipo, plataforma) => {
  return fetch(
    `https://my-json-server.typicode.com/MatheusAbreuTech/MyFlix-db/streamingVideos/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        genero: genero,
        tipo: tipo,
        plataforma: plataforma,
      }),
    }
  ).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possível atualizar o item");
  });
};

export const streamingService = {
  listaStreaming,
  criaStreaming,
  removeStreaming,
  detalhaStreaming,
  atualizaStreaming,
};
