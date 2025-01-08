import { useEffect, useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)

  const passRef = useRef();
  const copyPass = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select();

    //select range 
    // passRef.current?.setSelectionRange(0, 5)
    alert(`Password Copied successfully ${password}`)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPKJLGFDSAZXCVBNMqwertyuioplkjhgfdsaazxcvbnm";
    if (number) str += "0987654321";
    if (character) str += "!@#$%^&*(){}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    console.log(setPassword(pass))


  }, [number, character, setPassword, length])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character])
  return (
    <>
      <div className="bg-black w-full h-screen flex  flex-col justify-center  items-center">
        <div className="bg-gray-400 p-2 rounded-lg boxshadow-customsh">
        <h1 className="text-black p-3 text-4xl text-center">PassWord Generator</h1>
        <div className="text-white">

          <div className="flex rounded-lg space-x-2">
            <input type="text " placeholder="Passowrd " readOnly value={password} className="text-black w-full py-1 px-3 outline-none rounded-lg" ref={passRef} />
            <button onClick={copyPass} className="outline-none bg-blue-700 rounded-lg text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 cursor-pointer">Copy</button>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-center gap-8 m-3 bg-slate-300 rounded-md align-middle text-black">
              <input className="cursor-pointer" type="range" min={8} max={15} value={length} onChange={(e) => setlength(e.target.value)} /><label>Length {length}</label>
            </div>

            <div className="flex justify-around  align-middle">
              <div className="space-x-2 text-2xl text-black ">
                <input type="checkbox" defaultChecked={number} onChange={() => { setnumber((prev) => !prev) }} /><label>Number</label></div>
              <div className="space-x-2 text-2xl text-black" >
                <input type="checkbox" defaultChecked={character} onChange={() => { setcharacter((prev) => !prev) }} /><label>Character</label></div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default App
