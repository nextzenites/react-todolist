import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function App() {

  const notes = [
    { id: 1, text: 'Wake up' },
    { id: 2, text: 'tooth Brush' },
    { id: 3, text: 'breakfast' }
  ]

  // object  { key: value }
  // array of object [{ key: value } , {key value }]

  const [myNotes, setMyNotes] = useState(notes);
  const [userName, setUserName] = useState('');

  const setName = () => {
    const nameFromStorage = localStorage.getItem('user-name')
    if (nameFromStorage) {
      setUserName(nameFromStorage)
    } else {
      setUserName("New User")
    }
  }

  useEffect(() => {
    console.log('Home')
    setName()
  }, [])


  const handleAddNewNote = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newtext = formData.get("newNote");

    setMyNotes(prev => [
      ...prev,
      { id: prev.length + 1, text: newtext.trim() }
    ]);

  }

  const handleNoteDelete = (id) => {
    const notes = myNotes.filter(note => note.id != id)
    setMyNotes([...notes])
  }

  return (
    <div className="container mx-auto h-screen">
      <div className="flex items-center justify-center">
        <div>
          {/* title */}

          <h1 className="mt-12 text-2xl font-semibold">Welcome {userName} </h1>
          <h1 className="mt-2 text-2xl font-semibold">Todo List APP</h1>
          <Link to={'/'}>Login Link </Link>
          {/* text input */}
          <form onSubmit={handleAddNewNote}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your task?</legend>
              <input type="text" className="input" placeholder="Type here" name="newNote" />
              <button type="submit" className="btn btn-neutral shadow-sm!">Add new note</button>
            </fieldset>
          </form>


          <div className="mt-4">
            <ul className="list bg-amber-100 rounded-box shadow-md">

              {
                myNotes.map((note, index) => {
                  return (

                    <li className="list-row">
                      <div>
                        <div> {note.id} - {note.text} </div>
                      </div>
                      <button className="btn" onClick={() => handleNoteDelete(note.id)}>❌</button>
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
