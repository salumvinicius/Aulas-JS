const getHarryPotterHouses = async () => {
  try {
    const resposta = await fetch('https://potterapi-fedeperin.vercel.app/pt/houses/');
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(dados.error);
    }
    if (!resposta.ok){
      const status = resposta.status;
      throw new Error('Falha na requisição');
    }
    console.log(dados);
  }
    catch (erro) {
    console.log(erro);
  }
}

getHarryPotterHouses();