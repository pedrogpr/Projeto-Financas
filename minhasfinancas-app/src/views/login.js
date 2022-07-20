import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const entrar = () => {

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                        <input type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email" />
                      </FormGroup>
                      <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                        <input type="password"
                          value={senha}
                          onChange={e => setSenha(e.target.value)}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password" />
                      </FormGroup>
                      <button onClick={entrar} className="btn btn-success">Entrar</button>
                      <button className="btn btn-danger">Cadastrar</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;