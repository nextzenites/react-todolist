import { useState } from "react"

function App() {

  const notes = [
    'Note 1: Weak up in the morning',
    'Note 2: Brush Teeth',
    'Note 3: Take breakfast',
    'Note 4: Wear dress',
    'Note 4: Wear dress',
  ]

  return (
    <div className="container mx-auto h-screen">
      <div className="flex items-center justify-center">
        <div>
          {/* title */}
          <h1 className="mt-12 text-2xl font-semibold">Todo List APP</h1>

          {/* text input */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your task?</legend>
            <input type="text" className="input" placeholder="Type here" />
            <button className="btn btn-neutral shadow-sm!">Neutral</button>
          </fieldset>


          <div className="mt-4">
            <ul className="list bg-amber-100 rounded-box shadow-md">

              {
                notes.map((note, index) => {
                  return (

                    <li className="list-row">
                      <div>
                        <div> {note} </div>
                      </div>
                    </li>

                  );
                })
              }







            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
