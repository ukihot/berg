import styles from './styles/Petal.module.css'
import { Component } from 'solid-js'
import { A } from '@solidjs/router'

const Stem: Component = () => {
    return (
        <div class={styles.App}>
            <nav>
                <A href="/">Berg</A>

                <A href="/material">Material</A>

                <A href="/ticket">Ticket</A>
            </nav>
        </div>
    )
}
export default Stem
