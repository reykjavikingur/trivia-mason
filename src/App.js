import React from "react";
import "./App.css";
import TriviaSearch from "./components/TriviaSearch";

function App() {
    return (
        <section className="container-fluid">
            <div className="col">
                <div className="row">
                    <TriviaSearch />
                </div>
            </div>
        </section>
    );
}

export default App;
