import React, { Component } from 'react';
import logo from './lemconcode.gif';

export default function Home() {
  const [name, setName] = React.useState("");

  return (
    <div>
      <h1>Home</h1>
      <h2>Bienvenido, {name}</h2>
      <img src={logo} width="100"/>
      <NameEdit name={name} asignaNombre={setName}/>
    </div>
  );
}

interface Props {
  name: string;
  asignaNombre : (nuevoNombre : string) => void;
}

const NameEdit = (props: Props) => {
  return (
    <div>
    <label>Escribe tu nombre</label> 
    <input value={props.name} 
    onChange={e => props.asignaNombre(e.target.value)} />
    </div>
  );
};