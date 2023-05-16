const axios = require('axios');

function gerarTreino() {
  const nivel = 'Iniciante'; // Substitua pelos valores desejados ou passe-os como argumentos para a função
  const grupoMuscular = 'Peito'; // Substitua pelos valores desejados ou passe-os como argumentos para a função
  const modalidade = 'Musculação'; // Substitua pelos valores desejados ou passe-os como argumentos para a função

  axios.post("https://api.openai.com/v1/engine/davinci-codex/completions", {
    prompt: `Gerar treino de ${nivel} nível para ${grupoMuscular} usando ${modalidade}.`,
    max_tokens: 2000,
    temperature: 0.5,
    n: 1,
    stop: "\n"
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    }
  })
  .then(response => {
    const treino = response.data.choices[0].text.trim();
    console.log(treino); // Exibe a resposta no console
  })
  .catch(error => {
    console.log(error);
  });
}

gerarTreino(); // Executa a função

  