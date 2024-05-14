 const lista_item = document.querySelector(".lista_item");
 const botaoAdicionarCarrinho = document.querySelector(".lista_item");
 
 const itens = [
    {
        id:"1",
        nome:"Miniatura Goku | Dragon Ball",
        preco:200,
        imagem:"/img/miniatura_goku.webp",
        quantidade:1,
    },
    {
        id:"2",
        nome:"Peruca Goku, Em Espuma!",
        preco:70,
        imagem:"/img/peruca_goku.webp",
        quantidade:1,
    },
    {
        id:"3",
        nome:"Macacão Para Meninos Dragon Ball",
        preco:42,
        imagem:"/img/roupa_goku.webp",
        quantidade:1,
    },
    {
        id:"4",
        nome:"Macacão do Vegeta para crianças",
        preco:110,
        imagem:"/img/roupa_vegeta.webp",
        quantidade:1,
    },
    {
        id:"5",
        nome:"Máscara Vegeta",
        preco:60,
        imagem:"/img/mascara_vegeta.webp",
        quantidade:1,
    },
    {
        id:"6",
        nome:"Regata Vegeta",
        preco:70,
        imagem:"/img/regata_vegeta.webp",
        quantidade:1,
    },
    {
        id:"7",
        nome:"Mascara Goku",
        preco:120,
        imagem:"/img/mascara_goku.webp",
        quantidade:1,
    },
    {
        id:"8",
        nome:"Esferas Dragão",
        preco:70,
        imagem:"/img/esferas_dragao.webp",
        quantidade:1,
    }
 ]

function listarItensDaLoja (){
    let html = "";
    itens.forEach(item => {
        html+= `
            <div class="card" style="width: 16rem;">
            <img class="card-img-top" src="${item.imagem}">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center;">${item.nome}</h5>
                <p id="valor" style="z-index: 2;">R$ ${item.preco}</p>
                <a href="#" id="${item.id}" style="z-index: 2;" onclick="adicionarAoCarrinho(event)" class="btn btn-primary">Comprar</a>
                <img src="img/bottom_card_img.png" id="card_bottom" alt="">
            </div>
            </div>
            `;
    });
    lista_item.innerHTML = html;
}



function adicionarAoCarrinho(e){

    const user = JSON.parse(sessionStorage.getItem("user"));
    const item = itens.filter(element => {
        
        return element.id == e.target.id
        
    })
    user.carrinho.push(item[0]);
    sessionStorage.setItem("user",JSON.stringify(user));
}

listarItensDaLoja();