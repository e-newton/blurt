import logo from './logo.svg';
import './App.css';
import Canvas from "./components/canvas/Canvas";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Canvas/>
                </header>
            </div>
        );
    }
}

export default App;
