//arquivo que vai interagir com o layout e contatos
'use strict'
import { getContatos, getContatosPorNome } from "./contatos.js"

function criarCard(contato){
    const container=document.getElementById('container') 
    const card=document.createElement('div') 
    card.classList.add('card-contato')  
    console.log(contato);
    
    //usar innerHTML somente quando o card não existir
    card.innerHTML=`
                <img src="${contato.foto}" alt="Avatar 2">
                <h2>${contato.nome}</h2>
                <p>${contato.celular}</p>
                `
    
    container.appendChild(card)
}

async function carregarCards(){
    const contatos=await getContatos()
    
    contatos.forEach(criarCard)    
}

async function carregarPesquisa(evento){
    const container=document.getElementById('container')

    if(evento.key=='Enter'){
        const contatos=await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)
        
    }
}


carregarCards()

document.getElementById('nome-contato')
        .addEventListener('keydown', carregarPesquisa)