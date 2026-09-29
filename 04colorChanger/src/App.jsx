import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full h-screen duration-700"
      style={{ backgroundColor: color }}>
      <h1 className="text-white text-3xl text-center pt-10">
        {message}
      </h1>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <diV className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2 ">
          <button onClick={() => { setColor("red"); setMessage("Red color click"); }} className="outline-none px-4 py-1 bg-red-500 rounded-3xl shadow-lg ">Red</button>
          <button onClick={() => { setColor("green"); setMessage("") }} className="outline-none px-4 py-1 bg-green-500 rounded-3xl shadow-lg ">Green</button>
          <button onClick={() => { setColor("blue"); setMessage("") }} className="outline-none px-4 py-1 bg-blue-500 rounded-3xl shadow-lg ">Blue</button>
          <button onClick={() => { setColor("olive"); setMessage("") }} className="outline-none px-4 py-1 bg-olive-500 rounded-3xl shadow-lg ">Olive</button>
          <button onClick={() => { setColor("gray"); setMessage("") }} className="outline-none px-4 py-1 bg-gray-500 rounded-3xl shadow-lg ">gray</button>
          <button onClick={() => { setColor("yellow"); setMessage("") }} className="outline-none px-4 py-1 bg-yellow-500 rounded-3xl shadow-lg ">yellow</button>
          <button onClick={() => { setColor("pink"); setMessage("") }} className="outline-none px-4 py-1 bg-pink-500 rounded-3xl shadow-lg ">pink</button>
          <button onClick={() => { setColor("purple"); setMessage("") }} className="outline-none px-4 py-1 bg-purple-500 rounded-3xl shadow-lg ">Purple</button>
          <button onClick={() => { setColor("black"); setMessage("") }} className="outline-none px-4 py-1 bg-black text-white rounded-3xl shadow-lg ">black</button>
        </diV>
      </div>
    </div >
  )
}

export default App
