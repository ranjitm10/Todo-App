import logo from './logo.svg';
import './App.css';
import Header from "./mycomponent/header";
import Footer from "./mycomponent/footer";
import Todo from "./mycomponent/todo";
import Todos from "./mycomponent/todos";

function App() {
  return (
    <>
     <Header/>
     <Footer/>
     <Todo/>
     <Todos/>
    </>
  );
}

export default App;
