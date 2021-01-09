import React , {useState} from 'react';
import "./Login.css";
import {Link , useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error =>alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/69927072_104904540901873_2128774246472613888_n.png?_nc_cat=108&ccb=2&_nc_sid=dd9801&_nc_ohc=7YVD-4aupm4AX9ghvxL&_nc_ht=scontent.fbbi1-2.fna&oh=0ad0ad767c9004d3436b4e13e54b5bda&oe=601B6372"/>
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e =>setEmail(e.target.value)} />

                    <h5>Passwoed</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By Signing in you agreed to Our Conditions of Use & Sale. Please see our privacy Notice, our Cookies Notice AND our Interest Based Ads
                </p>

                <button onClick={register} className="login__registerButton">Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
