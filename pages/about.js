import React from 'react'
import axios from "axios";
export default function About({repos}){
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
