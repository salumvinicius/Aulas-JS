// const request = fetch('https://potterapi-fedeperin.vercel.app/pt/houses/');

// console.log(request);

const getHarryPotterHouses = () => {
  fetch('https://potterapi-fedeperin.vercel.app/pt/houses/')
  .then((resposta) => {
    if (!resposta.ok){
      console.log('Erro ao fazer a requisição');
    }
    return resposta.json()})
  .then((data) => {
    if (data.error){
      throw new Error(data.error);
    }
    console.log('Harry potter houses', data)
  })
  .catch((erro) => console.log(erro))
}


getHarryPotterHouses();