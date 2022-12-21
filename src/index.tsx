/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./styles/index.css";
import { Component, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import styles from "./styles/App.module.css";

const Home = lazy(() => import("./pages/Home"));
const ForumPetal = lazy(() => import("./pages/ForumPetal"));

const Berg: Component = () => {
    return (
        <div class={styles.App}>
            <h1>Hello, world!!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forumpetal" element={<ForumPetal />} />
            </Routes>
        </div>
    );
};

render(
    () => (
        <Router>
            <Berg />
        </Router>
    ),
    document.getElementById("root") as HTMLElement
);
