import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'
import './styles/global.css';
import {useState} from 'react'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
        <Menu search={search} setSearch={setSearch}/>
        <Main search={search} setSearch={setSearch}/>
        <Footer/>
    </div>
  );
}

export default App;
