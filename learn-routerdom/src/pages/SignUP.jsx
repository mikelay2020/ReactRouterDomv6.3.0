import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useHttp } from "../hook/http.hook";
import "materialize-css";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const fromPage = location.state?.from?.pathname || "/";
  const { request } = useHttp();
  const [form, setForm] = useState();
  const changeHandler1 = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const registerHandler = async () => {
    const form2 = {
      LoginName: form.LoginName,
      Password: form.Password,
      TypeId: form.TypeId,
      Info: {
        Name: form.InfoName,
        Email: form.InfoEmail,
        Surname: form.InfoSurname,
      },
    };
    try {
      const data = await request("/api/v1/user", "POST", { ...form2 });
      signin('data.LoginName', () => navigate(fromPage, { replace: true }));
    } catch (e) {}
  };
  return (
    <div>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Регистрация</span>
              <div className="input-field">
                <input
                  placeholder="Введите Логин"
                  type="text"
                  name="LoginName"
                  onChange={changeHandler1}
                />
                <label></label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  type="Password"
                  name="Password"
                  onChange={changeHandler1}
                />
                <label></label>
              </div>
              <div>
                <div className="input-field">
                  <input
                    placeholder="Введите TypeID"
                    type="text"
                    name="TypeId"
                    onChange={changeHandler1}
                  />
                  <label></label>
                </div>
                <div className="input-field">
                  <input
                    placeholder="Введите имя"
                    type="text"
                    name="InfoName"
                    onChange={changeHandler1}
                  />
                  <label></label>
                </div>
                <div className="input-field">
                  <input
                    placeholder="Введите Email"
                    type="text"
                    name="InfoEmail"
                    onChange={changeHandler1}
                  />
                  <label></label>
                </div>
                <div className="input-field">
                  <input
                    placeholder="Введите Фамилию"
                    type="text"
                    name="InfoSurname"
                    onChange={changeHandler1}
                  />
                  <label></label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button className="btn gray darken-1" onClick={registerHandler}>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignUp };
