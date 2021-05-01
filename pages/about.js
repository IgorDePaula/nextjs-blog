import React,{useState, useEffect} from 'react'
import axios from "axios";


export default function About(){
    const [repos, setRepos] = useState([])
    useEffect(async ()=>{
        const {data} = await axios.get('https://api.github.com/users/IgorDePaula/repos') || []
        setRepos(data)
    },[])
    return <div>
        About
       <ul>
           {repos.map(item=><li>{item.name}</li>)}
       </ul>
    </div>
}
export async function getStaticProps() {

    const {data} = await axios.get('https://api.github.com/users/IgorDePaula/repos') || []
    return {
        props: {repos: data }
    }
}
