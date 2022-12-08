import { Component, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import styles from "./App.module.css";
const Home = lazy(() => import("./pages/Home"));

const App: Component = () => {
    return (
        <div class={styles.App}>
            <h1>Hello, world!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
