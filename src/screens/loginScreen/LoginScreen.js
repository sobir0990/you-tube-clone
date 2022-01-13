import React,{useEffect} from 'react';
import './_loginScreen.scss';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom"
import {login} from "../../redux/actions/auth.action";

const LoginScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const accessToken = useSelector(state => state.auth.accessToken);

    const handleLogin = () => {
        dispatch(login());
    };

    useEffect(() => {
       if (accessToken){
            history.push('/')
       }
    },[accessToken, history]);

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
                <button onClick={() => handleLogin()}>Login With google</button>
                <p>This Project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
};

export default LoginScreen