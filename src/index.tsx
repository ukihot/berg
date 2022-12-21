/* @refresh reload */
import { render } from 'solid-js/web'
import './styles/index.css'
import { Component, lazy } from 'solid-js'
import { Router, Routes, Route } from '@solidjs/router'
import styles from './styles/Petal.module.css'

const Home = lazy(() => import('./pages/Home'))
const ForumPetal = lazy(() => import('./pages/ForumPetal'))
const TicketPetal = lazy(() => import('./pages/TicketPetal'))

const Berg: Component = () => {
    return (
        <div class={styles.App}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forum" element={<ForumPetal />} />
                <Route path="/ticket" element={<TicketPetal />} />
            </Routes>
        </div>
    )
}

render(
    () => (
        <Router>
            <Berg />
        </Router>
    ),
    document.getElementById('root') as HTMLElement
)
