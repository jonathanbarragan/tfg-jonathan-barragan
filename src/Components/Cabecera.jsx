import React, {useState} from "react"
import "./Cabecera.css";
import { Image } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
export const Cabecera =() =>{
    return(
        <div className="header-container">
            <Image className="logo-web" src="./Assets/PNG/logo.png" />
            <div className='search-bar'>
                <input type='text' />
                <div className='search-bar-Icon'><SearchIcon /> </div>
            </div>
            <Image className="cart" src="./Assets/PNG/cart.png" />
            <Image className="profile" src="./Assets/PNG/profile.png" />
        </div>
    )


}