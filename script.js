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

function BuscarLogin(password,email){
    const dadosBd = JSON.parse(localStorage.getItem("users"))

    const userRegistred = dadosBd.find(user => {
        if( user.email == email && user.senha == password){
            return user
        }
    });
  
    if(userRegistred){

        window.location.href = "/loja.html"

    }else{
        alert("Usuário ou senha inválido")
    }

}

formulario.addEventListener('submit', (e)=>{
e.preventDefault();
BuscarLogin(e.target.password.value,e.target.email.value);

})