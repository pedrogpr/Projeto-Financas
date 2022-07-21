import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

import { withRouter } from "react-router-dom";
import { useState } from "react";

function CadastroUsuario() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaRepeticao, setSenhaRepeticao] = useState('')

  const cancelar = () => {
    this.props.history.push('/login')
  }

  return (
    <Card title="Cadastro de Usuário">
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <FormGroup label="Nome: *" htmlFor="inputNome">
              <input type="text"
                id="inputNome"
                className="form-control"
                name="nome"
                onChange={e => setNome(e.target.value)} />
            </FormGroup>
            <FormGroup label="Email: *" htmlFor="inputEmail">
              <input type="email"
                id="inputEmail"
                className="form-control"
                name="email"
                onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup label="Senha: *" htmlFor="inputSenha">
              <input type="password"
                id="inputSenha"
                className="form-control"
                name="senha"
                onChange={e => setSenha(e.target.value)} />
            </FormGroup>
            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
              <input type="password"
                id="inputRepitaSenha"
                className="form-control"
                name="senhaRepeticao"
                onChange={e => setSenhaRepeticao(e.target.value)} />
            </FormGroup>
            <button type="button" class="btn btn-success">Salvar</button>
            <button onClick={cancelar} type="button" class="btn btn-danger">Cancelar</button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CadastroUsuario;