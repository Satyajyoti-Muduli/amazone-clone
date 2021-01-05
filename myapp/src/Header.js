import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
//https://webneel.com/sites/default/files/images/manual/logo/1-online-shopping-cart-logo-branding.gif
//http://pngimg.com/uploads/amazon/amazon_PNG11.png

function  Header() {

    const [{basket, user}, dispatch]=useStateValue();

    const handleAuthentication = () =>{
        if (user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/"> <img className='header__logo' src='https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/69927072_104904540901873_2128774246472613888_n.png?_nc_cat=108&ccb=2&_nc_sid=dd9801&_nc_ohc=7YVD-4aupm4AX9ghvxL&_nc_ht=scontent.fbbi1-2.fna&oh=0ad0ad767c9004d3436b4e13e54b5bda&oe=601B6372'/> </Link>
            

            <div className='header__search'>
                <input className="header_searchInput" type='text'/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>Hello {!user ? "Guest" : user.email}</span>
                        <span className='header__optionLineTwo'> {user ? 'SignOut' : 'SignIn'}</span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}
                        </span>

                </div>
                 </Link>

                
            </div>
        </div>

    )
}

export default  Header
