const formulario = document.querySelector("#form_login");


   const users = [
        {
            id:1,
            nome:"daniel",
            email:"danielvigano17@gmail.com",
            senha:"1234",
        }
    ]

localStorage.getItem("users") ?  null : localStorage.setItem("users",JSON.stringify(users))

function CadastrarUsuario(nome,password,email){
    const dadosBd = JSON.parse(localStorage.getItem("users"))

    const userRegistred = dadosBd.find(user => {
        if( user.email == email){
            return user
        }
    });
  
    if(userRegistred){
        
        alert("Seu usuário já está cadastrado !!")

    }else{
       const newUser = {
            id:dadosBd.length+1,
            nome:nome,
            email:email,
            senha:password,
       }

       dadosBd.push(newUser)

       localStorage.setItem("users", JSON.stringify(dadosBd))
       window.location.href = "/loja.html"
    }

}

formulario.addEventListener('submit', (e)=>{
e.preventDefault();
CadastrarUsuario(e.target.nome.value,e.target.password.value,e.target.email.value);

})