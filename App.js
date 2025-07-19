//import logo from './logo.svg';
import './App.css';
import Header from './myComponent/Header.js';
import Main from './myComponent/Main.js';
import Footer from './myComponent/Footer.js';

function App() {
  return (
    
    <div className="app-container">
      <Header title="Products" searchBar={false} />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
