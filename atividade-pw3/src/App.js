import {useState, useEffect} from 'react'
import './App.css';

function App() {

/*-------------------------------------------------------------*/

  const [oneResource, setOneResource] = useState([]);
  function getOneResource(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) =>  setOneResource(json));    

    console.log(oneResource)
  }
 
/*-------------------------------------------------------------*/ 

  const [allResouce, setAllResource] = useState([]);
  function getAllResource(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) =>  setAllResource(json));
  }
  
/*-------------------------------------------------------------*/

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function createOneResource(event){
    event.preventDefault();
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: {title},
        body: {body},
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
/*-------------------------------------------------------------*/

  function updateOneResource(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

/*-------------------------------------------------------------*/  

function deleteOneSOurce(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
}

  return (
    <div className="App">
      <div>
        <h1>{oneResource.title}</h1>
        <button onClick={getOneResource}>Mostrar um componente</button>
      </div>
      <div>
        {
          allResouce.map((resource) => {
            return(
              <div>
                {resource.id}
              </div>
            );
          })
        }
       <button onClick={getAllResource}>Mostrar todos os componentes</button>
      </div>
      <div>
        <form onSubmit={createOneResource}>
          <div>
            <input value={title} onChange={(event) => {setTitle(event.target.value)}}/>
            <input value={body} onChange={(event) => {setBody(event.target.value)}}/>
          </div>
          <button type='submit'>Criar um componente</button>
        </form>      
      </div>
      <div>
        <button onClick={updateOneResource}>Atualizar um componente</button>
      </div>
      <div>
        <button onClick={deleteOneSOurce}>Excluir um componente</button>
      </div>
    </div>
  );
}

export default App;
