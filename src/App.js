import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
        <TodoTemplate>
            <TodoHead />
            <TodoList />
        </TodoTemplate>
    </div>
  );
}

export default App;
