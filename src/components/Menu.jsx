import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu(){
 return (
 <header>
    <nav>
        <ul>
            <li><Link to="/"> Início </Link> </li>
            <li><Link to="/usuarios"> Perguntas </Link></li>
        </ul>
    </nav>
 </header>
 )
}