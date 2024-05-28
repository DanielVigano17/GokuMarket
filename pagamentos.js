const lista_item = document.querySelector(".carrinho");
const botaoAdicionarCarrinho = document.querySelector(".lista_item");
const nome_usuario = document.querySelector(".nome_usuario");

const btn_pagar = document.querySelector(".btn_pagar");

const user = JSON.parse(sessionStorage.getItem("user")) || null
nome_usuario.innerHTML = `Seu carrinho, ${user.nome}!!`

let totalPagamento = 0;

function listarItensDaLoja (){
   let html = "";
   user.carrinho.forEach(item => {
       html+= `
       <div data-aos="zoom-in-down" class="itens" style="z-index: 5;"">
       <img src="${item.imagem}" class="img_carrinho" alt="">

       <div class="infos_item">
           <div class="description">
               <h3>${item.nome}</h3>
               <p>Preço : R$${item.preco}</p>
               <div class="quantidade">
                   <span>Unidades:</span>
                   <input type="number" value="1" onchange="alterarValor(event)" id="qtd" min="1" class="${item.nome}">
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
        if(element.nome.includes(e.target.classList[0])){
            element.quantidade = e.target.value

            // sessionStorage.setItem("user",JSON.stringify(user))
        }

        

        return element.nome.includes(e.target.classList[0]);
    })
    
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

btn_pagar.addEventListener("click",function(e){
    totalPagamento = 0;
    user.carrinho.forEach(element =>{

        totalPagamento += element.preco * element.quantidade
    });

    const valor = document.querySelector(".valor");
    valor.innerHTML = totalPagamento + "R$"
})

listarItensDaLoja();