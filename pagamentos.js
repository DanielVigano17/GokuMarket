const lista_item = document.querySelector(".carrinho");
const botaoAdicionarCarrinho = document.querySelector(".lista_item");

const user = JSON.parse(sessionStorage.getItem("user")) || null

function listarItensDaLoja (){
   let html = "";
   user.carrinho.forEach(item => {
       html+= `
       <div class="itens" style="z-index: 5;"">
       <img src="${item.imagem}" class="img_carrinho" alt="">

       <div class="infos_item">
           <div class="description">
               <h3>${item.nome}</h3>
               <p>Preço : R$${item.preco}</p>
               <div class="quantidade">
                   <span>Unidades:</span>
                   <input type="number" value="1" onchange="alterarValor(event)" class="${item.nome}">
               </div>
           </div>
           <div class="actions">
               <div class="valor_total">
                   <label>Valor Total:</label>
                   <span class="${item.nome}">${item.preco}R$</span>
               </div>
               <button class="btn btn-danger excluir" id="${item.id}" onclick="excluirDoCarrinho(event)">X</button>
           </div>
       </div>
       
   </div>
           `;
   });
   lista_item.innerHTML = html;
}


function alterarValor(e){

    const span = document.querySelector(`span.${e.target.classList[0]}`);
    const item = user.carrinho.find(element =>{
        return element.nome.includes(e.target.classList[0]);
    })

    console.log();
    span.innerHTML = `${e.target.value * item.preco}R$`

}

function excluirDoCarrinho(e){

   const user = JSON.parse(sessionStorage.getItem("user"));
   const item = user.carrinho.filter(element => {
       
       return element.id !== e.target.id
       
   })
   console.log(item)
   user.carrinho = item;
   sessionStorage.setItem("user",JSON.stringify(user));
   location.reload();
}

listarItensDaLoja();