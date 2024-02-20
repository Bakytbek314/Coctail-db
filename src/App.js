import './App.css';
import Header from './Components/1_Header/Header';
import Main from './Pages/Main/Main';
import Footer from "./Components/9_Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
        <Footer/>
    </div>
  );
}

export default App;
