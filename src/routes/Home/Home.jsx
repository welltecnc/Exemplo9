import { useState, useEffect } from "react"

const Home =()=>{

    // const [produtos, setProdutos]= useState([])

    useEffect(()=>{
        fetch("https://exemplodb.vercel.app/dados.json")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProdutos(data)
        })
    },[])

    return(
        <>
{/*             {dados.map((item, index)=>(
                <div key={index}>
                    <p>{item.nome}</p>
                    <img src={item.foto}/>
                </div>
            ))} */}
        </>
    )
}
export default Home
