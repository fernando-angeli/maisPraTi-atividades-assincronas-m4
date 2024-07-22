import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    // Comportamento padrão do Submit é recarregar a página
    // O event.preventDefault impede que a página seja recarregada
    event.preventDefault();
    alert(`Olá ${name}`);
  };

  return (
    <>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome </label>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Form;
