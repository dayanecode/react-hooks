import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    // Executa toda hora (re-renderização)
    useEffect(() => {
        console.log("Estou sendo executado")
    })

    const [number, setNumber] = useState(1)
    
    const changeSomething = () => {
        setNumber(number + 1)
    }
    // useEffect sem dependência, executa uma única vez, quando o componente é carregado
    // Para trazer os dados do banco, por exemplo, e não fazer mais nada. 
    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, [])

    // Executa só quando algum valor específico é alterado
    const [anotherNumber, setAnotherNumber] = useState(0)
    
    
    useEffect(() => {
        // Vai usar este efeito somente quando o anotherNumber sofrer alteração, ou seja for maior do que zero.
        if (anotherNumber > 0) {
        console.log("Sou executado apenas quando o anotherNumber muda!")
    } 
    }, [anotherNumber])
    
    //  cleanup do useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("Hello World")
        //     setAnotherNumber(anotherNumber + 1)
        // }, 2000);
        // // função para parar o Timer e não continuar o efeito em outra página
        // return () => clearTimeout(timer);
    }, [anotherNumber]);

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect