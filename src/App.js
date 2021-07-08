import { NotesProvider } from './store/notes-context';

import Header from './components/Layout/Header'
import NewNote from './components/Notes/NewNote';
import NoteList from './components/Notes/NoteList';

function App() {

  return (
    <NotesProvider>
      <Header />
      <NewNote />
      <NoteList />
    </NotesProvider>
  )
}

export default App;