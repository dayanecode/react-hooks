import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome");

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo!")
    }, []);

    //Executa esse comando primeiro do que qualquer coisa
    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])

    console.log(name)

  return (
    <div>
        <h2>UseLayoutEffect</h2>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect