import { useState } from "react"


function App() {
  const [color, setColor] = useState("Olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "red" }}>Red</button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "green" }}>Green</button>
            <button
              onClick={() => setColor("blue")}

              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "blue" }}>Blue</button>
            <button
              onClick={() => setColor("orange")}

              className=" outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "orange" }}>orange</button>
            <button
              onClick={() => setColor("indigo")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "indigo" }}>Indigo</button>
            <button
              onClick={() => setColor("Aqua")}

              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "aqua" }}>Aqua</button>
            <button
              onClick={() => setColor("white")}

              className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{ backgroundColor: "white" }}>white</button>
            <button
              onClick={() => setColor("yellow")}

              className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{ backgroundColor: "yellow" }}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
