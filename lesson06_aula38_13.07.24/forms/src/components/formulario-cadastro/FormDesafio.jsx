import { useState } from "react";
import "./formulario.css";

function FormDesafio() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors([]);
      setUser({
        name: "",
        email: "",
        password: "",
        checkPassword: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!user.name) {
      newErrors.name = "Nome é obrigatório.";
    } else if (
      !/^[A-ZÀ-ÿ][a-zà-ÿ]+(?:['-][A-ZÀ-ÿ][a-zà-ÿ]+)*\s[A-ZÀ-ÿ][a-zà-ÿ]+(?:['-][A-ZÀ-ÿ][a-zà-ÿ]+)*$/.test(
        user.name
      )
    ) {
      newErrors.name = "Nome inválido.";
    }
    if (!user.email) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)
    ) {
      newErrors.email = "E-mail inválido.";
    }
    if (!user.password) {
      newErrors.password = "Senha é obrigatória.";
    } else if (user.password.length < 8) {
      newErrors.password = "A senha deve ter no mínimo 8 caracteres.";
    }
    if (!user.checkPassword) {
      newErrors.checkPassword = "A confirmação de senha é obrigatória.";
    } else if (user.password !== user.checkPassword) {
      newErrors.checkPassword =
        "A senha e confirmação de senha devem ser iguais.";
    }
    return newErrors;
  };

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        {submitted && <p className="success">Cadastrado com sucesso!</p>}
        <label>Nome completo </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <label>E-mail </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <label>Senha </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <label>Confirme sua senha </label>
        <input
          type="password"
          name="checkPassword"
          value={user.checkPassword}
          onChange={handleChange}
        />
        {errors.checkPassword && (
          <p className="error">{errors.checkPassword}</p>
        )}
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default FormDesafio;
