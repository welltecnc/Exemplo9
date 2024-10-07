import { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'

const Produto=()=>{

    let{id} = useParams();

    const navigate = useNavigate();

    const [produtos, setProdutos]=useState({
        id,
        nome:"",
        foto:""
    })

    const handleChange=(e)=>{
        setProdutos({...produtos,[e.target.name]:e.target.value})};

    const handleSubmit =(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/produtos/${id ? id :""}`,{
        method:"post",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(produtos)
    }).then(()=>{
        navigate("/")
    })      
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:5000/produtos/${id}`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setProdutos(data)
            })
        }
    },[id])


    return(
        <section className="produto">
            <h1>Cadastro de Produto</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={produtos.nome}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <label htmlFor="foto">Imagem do Produto</label>
                    <input
                        type="url"
                        name="foto"
                        id="foto"
                        value={produtos.foto}
                        onChange={handleChange}
                    />
                </p>
                <button type="submit">Cadastrar</button>

            </form>
     
        </section>
    )
}
export default Produto