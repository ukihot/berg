import styles from './styles/Petal.module.css'
import { Component, lazy } from 'solid-js'
import { A, Route, Routes } from '@solidjs/router'

const ForumPetal = lazy(() => import('./pages/ForumPetal'))
const TicketPetal = lazy(() => import('./pages/TicketPetal'))

const Petal: Component = () => {
    return (
        <div class={styles.App}>
            <Routes>
                <Route path="/forum" element={<ForumPetal />} />
                <Route path="/ticket" element={<TicketPetal />} />
            </Routes>
        </div>
    )
}
export default Petal
