import { useEffect, useState } from "react"
import { useHttp } from '../hook/http.hook'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'

import 'materialize-css'


const SignIn = () =>{

    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/signin/new';
    
    
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        LoginName: '', Password: ''
    })
    const changeHandler = event => {
        event.preventDefault();
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const loginHandler = async () => {
        try {
           const data = await request('/api/v1/signin', 'POST', { ...form })
           signin(data.LoginName, () => navigate(fromPage, {replace: true}))
console.log(fromPage)
        } catch (e) { }
    }

    return(
        <div>
             <Link to="/signin/new" style={{margin: '1rem 0', display: 'inline-block'}}>Add new post</Link>
           <div className="row">
            <div className="col s6 offset-s3">

                <div className="card blue-grey darken-3">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введите Email"
                                    id="LoginName"
                                    type="text"
                                    name="LoginName"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email"></label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Введите пароль"
                                    id="Password"
                                    type="Password"
                                    name="Password"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password"></label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn gray darken-1"
                            onClick={loginHandler}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export {SignIn}