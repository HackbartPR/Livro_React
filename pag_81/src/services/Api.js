import axios from 'axios'

export const recebeLivros = async ()=>{

    try{
        const {data} = await axios.get("/api/todosOsLivros.json")
        return data
    }catch(error){
     
        const title = document.querySelector(".wrapper .title")
        title.innerHTML = "Erro Encontrado"
        const content = document.querySelector(".wrapper .card")
        content.insertAdjacentHTML("beforeend", "<p class='erro'>Arquivo não encontrado</p>")
        return error
    }
    
    
}