// import Form from "./components/Form";
// import FormAddress from "./components/Form2";
// import FormDesafio from "./components/formulario-cadastro/FormDesafio";

import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState({ name: "Gandolf", age: 1000 });
  return (
    <>
      <UserCard user={user} setUser={setUser} />
    </>
  );
}

export default App;
