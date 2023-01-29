import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [disable, setDisable] = React.useState(false);
  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;

  function handleSignUp(e) {
    e.preventDefault();
    setDisable(true);

    const request = axios.post(`${REACT_APP_API_URL}/sign-up`, {
      email: email,
      name: name,
      password: password,
    });
    request.then(() => {
      setDisable(false);
      navigate(`/`);
    });
    request.catch((error) => {
      alert(error.response.data.message);
      setDisable(false);
    });
  }

  return (
    <Container>
      <h1>Cadastrar</h1>
      <form onSubmit={handleSignUp}>
        <input
          name="name"
          placeholder="Nome"
          type="text"
          required
          disabled={disable}
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          required
          disabled={disable}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          required
          disabled={disable}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit" disabled={disable}>
          Cadastrar
        </button>
      </form>

      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    margin-top: 100px;
	color: #000000;
	font-size: 22px;
}
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    margin-top: 33px;
    margin-bottom: 100px;
  }
  input {
    width: 335px;
    height: 57px;
    padding-left: 48px;
    background: #ffffff;
    border: none;
    border-radius: 10px;
    ::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 137%;
      color: #230a06;
      opacity: 0.5;
    }
  }
  button {
    width: 205px;
    height: 59px;
    background: #f67952;
    border: none;
    border-radius: 133px;
    font-size: 19px;
    color: #ffffff;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(35, 10, 6, 0.5);
  }
`;
