import { styled } from 'solid-styled-components'
import styles from '../styles/Petal.module.css'
import { Component } from 'solid-js'
import { A } from '@solidjs/router'

const Btn = styled('button')`
    border-radius: 4px;
`

const Home: Component = () => {
    return (
        <div class={styles.App}>
            <h1>Hello, world!!</h1>
            <Btn>
                <A href="/forum">Forum</A>
                <A href="/ticket">Ticket</A>
            </Btn>
        </div>
    )
}
export default Home
