// Método GET

const getPosts = async () => {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dados = await resposta.json();
    if (dados.erros){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error("Ops! Algo deu errado!");
    }
    console.log("Dados do GET: ", dados);
  } catch (error){
    console.log(error);
  }
}

getPosts();

// Método POST

try{
  const publishNewPost = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const dados = await resposta.json();
  if (dados.erros){
    throw new Error(data.error);
  }
  if (!resposta.ok){
    throw new Error("Ops! Algo deu errado!");
  }
  console.log("Resposta do POST: ", dados);
} catch (error){
  console.log(error);
}

publishNewPost();

// Método PUT

const editPost = async () => {
  try{
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error("Ops! Algo deu errado!");
    }
    console.log("Resposta do PUT: ", dados);
  } catch (error){
    console.log(error);
  }
}

editPost();

// Método PATCH

const editPostTitle = async () => {
  try{
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error("Ops! Algo deu errado!");
    }
    console.log("Resposta do PATCH: ", dados);
  } catch (error){
    console.log(error);
  }
}

editPostTitle();

// Método DELETE

  const deletePost = async () => {
  try{
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
    const dados = await resposta.json();
    if (dados.error){
      throw new Error(data.error);
    }
    if (!resposta.ok){
      throw new Error("Ops! Algo deu errado!");
    }
    console.log("Resposta do DELETE: ", dados);
  } catch (error){
    console.log(error);
  }
  }
  
deletePost();