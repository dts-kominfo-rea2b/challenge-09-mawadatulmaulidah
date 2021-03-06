import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header.js';
import Contact from './components/Contact.js';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header/>
      <Contact data={contacts[0]} />
      <Contact data={contacts[1]} />
      <Contact data={contacts[2]} />
      <Contact data={contacts[3]} />
      <Contact data={contacts[4]} />
      <Contact data={contacts[5]} />
    </div>
  );
}

export default App;
