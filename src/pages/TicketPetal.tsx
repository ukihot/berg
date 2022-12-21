import { Component } from 'solid-js'
import styles from '../styles/Petal.module.css'
import { A } from '@solidjs/router'

const TicketPetal: Component = () => {
    return (
        <div class={styles.App}>
            <h1>Hello, Ticket</h1>
            <button>
                <A href="/">Home</A>
            </button>
        </div>
    )
}

export default TicketPetal
