import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'
import './styles/global.css';

function App() {
  return (
    <div className="App">
        <Menu/>
        <Main />
        <Footer/>
    </div>
  );
}

export default App;
