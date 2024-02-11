import dataUser from "./data.mjs"

const clikEnter = () => {
    const enter = document.querySelector(".enter_login")
    enter.addEventListener("click", () => {
        inputAnalysisUser()
    })
}

const inputAnalysisUser = () => {
    const password1 = document.querySelector(".password_input")
    const email1 = document.querySelector(".email_input")

    const password = password1.value
    const email = email1.value

    //chame sua funçao na linha a baixo, a funçao que vai analiza a senha e email, passando o parametro como (password e email) ex: funcion (password, email)

}

clikEnter()

// vc deve analizar o email e senha e retonar se a senha ou o email esta errado no terminal se estver correto vc rotona que o usuario foi logado com suseso, nao esqueca de mostra o nome do usuario
// escreva sua logica aparti da aqui

// se o usuario tiver acceso como negado retonar para o usuario que vc nao pode entra mas usando essa conta