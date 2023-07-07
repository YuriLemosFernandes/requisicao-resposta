       
       ////////////////////// ---STYLE--- //////////////////////////

       document.querySelector("button").style.padding = "10px";
       document.querySelector("button").style.backgroundColor = "#e9d6da";
       document.querySelector("button").style.borderColor = "#d99aa3";
       document.querySelector("button").style.marginTop = "20px"
       document.querySelector("button").style.marginLeft = "20px"

       ////////////////////////////////////////////////////////////

       document.querySelector("a").style.textDecoration = "none";
       document.querySelector("a").style.fontSize = "15px";
       document.querySelector("a").style.color = "#a24261";
       document.querySelector("a:link").style.color = "#a24261";

       ////////////////////////////////////////////////////////////

       document.querySelector("h1").style.color = "#d38787";
       document.querySelector("h1").style.textAlign = "center";
       document.querySelector("h1").style.fontSize = "50px";

       ////////////////////////////////////////////////////////////

       document.querySelector("form").style.display = "block";
       document.querySelector("form").style.marginTop = "5px"


       ///////////////////////////////////////////////////////////




       document.querySelector('#btCadastrar').addEventListener('click', () => {

           const dados = {
               'id': null,
               'descricao': document.querySelector('#descricao').value,
               'preco': document.querySelector('#preco').value
           }

           fetch('http://localhost:3000/produtos', {
               method: 'POST',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(dados)
           })
           .then(resposta => {
               if(resposta.ok) {
                   alert('Produto cadastrado');
               }
           });

       });

       fetch('http://localhost:3000/produtos', {
           method: 'GET',
           headers: {
               'Content-type': 'application/json'
           }
       })
           .then(resposta => resposta.json())
           .then(resposta => {
               
               for(let i = 0; i < resposta.length; i++) {

                   const ul = document.createElement('ul');

                   ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;

                   ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;

                   ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;


                   
                   document.querySelector('#listaProdutos').appendChild(ul);
               }
               
           });
