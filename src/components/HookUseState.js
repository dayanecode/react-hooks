import React from "react";
import { useState } from "react";

const HookUseState = () => {
  //1-UseState
  let userName = "João";
  const [name, setName] = useState("");

  const userChange = () => {
    userName = "Maria Aparecida";

    setName("Natália de Araujo Nogueira");
  };

  //2-useState e input
  const [age, setAge] = useState(18);
  // faz com que a pagína não seja recarregada
  const handleSubmit = (e) => {
    e.preventDefault()  
    console.log(age)
}

  return (
    <div>
      Hooks
      {/* 1-useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={userChange}>Mudar Nomes</button>
      {/* //2-useState e input */}
      <p>Digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      <input type="submit" value="enviar" />
      </form>
      <p>Voce tem {age} anos!</p>
      {/*faz a divisão entre um componente e outro  */}
<hr/>
   
    </div>
  );
};

export default HookUseState;
