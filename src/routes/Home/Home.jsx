import { useState, useEffect } from "react"

const Home =()=>{

    const [produtos, setProdutos]= useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/produtos")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProdutos(data)
        })
    },[])

    return(
        <>
            {produtos.map((item, index)=>(
                <div key={index}>
                    <p>{item.nome}</p>
                    <img src={item.foto}/>
                </div>
            ))}
        </>
    )
}
export default Home