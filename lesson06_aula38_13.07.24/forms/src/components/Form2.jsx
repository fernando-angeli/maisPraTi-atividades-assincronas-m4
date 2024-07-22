import { useState } from "react";

function FormAddress() {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!address.street || !address.city || !address.zipCode) {
      alert(`ATENÇÃO
        Todos os campos devem ser preenchidos.`);
      return;
    } else {
      alert(`Cadastrado: 
        Rua: ${address.street}
        Cidade: ${address.city}
        CEP: ${address.zipCode}
        `);
    }
  };

  return (
    <>
      <h1>Formulário 2</h1>
      <form onSubmit={handleSubmit}>
        <label>Rua </label>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
        />
        <label>Cidade </label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
        />
        <label>CEP </label>
        <input
          type="text"
          name="zipCode"
          value={address.zipCode}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormAddress;
