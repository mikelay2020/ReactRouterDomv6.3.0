import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const CreateUser = () => {
  const auth = useContext(AuthContext);
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState();

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
  console.log(form2)

  const changeHandler1 = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/v1/user", "POST", { ...form2 });
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
                  //  id="LoginName"
                  type="text"
                  name="LoginName"
                  onChange={changeHandler1}
                />
                <label></label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  //  id="Password"
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
                    //  id="TypeId"
                    type="text"
                    name="TypeId"
                    onChange={changeHandler1}
                  />
                  <label></label>
                </div>
                <div className="input-field">
                  <input
                    placeholder="Введите имя"
                    //    id="Name"
                    type="text"
                    name="InfoName"
                    onChange={changeHandler1}
                  />
                  <label></label>
                </div>
                <div className="input-field">
                  <input
                    placeholder="Введите Email"
                    //   id="email"
                    type="text"
                    name="InfoEmail"
                    onChange={changeHandler1}
                  />
                  <label></label>
                </div>
                <div className="input-field">
                  <input
                    placeholder="Введите Фамилию"
                    //  id="Info.Surname"
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
