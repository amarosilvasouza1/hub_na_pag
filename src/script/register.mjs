import dataUser from "./data.mjs"

const clikEnter = () => {
    const enter = document.querySelector(".enter_register")
    enter.addEventListener("click", () => {
        inputAnalysisUser()
    })
}

const inputAnalysisUser = () => {
    const password = document.querySelector(".password_input").value
    const email = document.querySelector(".email_input").value
    const repeatPassword = document.querySelector(".password_repeat_input").value
    const name = document.querySelector(".name_input").value

    
    console.log(password,email,repeatPassword,name)
    // chame sua funçao abaixo passando os paramentos de (password, email, reptyPasword , name)
}

// faça uma funçao que resebe (password, email, reptyPasword , name) e addiciona un novo usuario a {dataUser} que esta em data.mjs que esta importado na linha 1
// DICA: nao se esqueca de definir o acceso do usuario como (false)
// faça sua logica a parti da qui 




// na sua funçao verifique se ja tem um usuario com o mesmo nome ou email em dataUser e se ja estiver retone que o usuario ja posui uma conta criada 
// se nao, colete todos os paramentos e adicione ao array em dadaUser
// ao final retone que o usuario conseguiu se registra com suseco
// DICA: nao se esqueca de definir o acceso do usuario como (false)

clikEnter()

