import { Component } from 'solid-js'
import styles from '../styles/Petal.module.css'
import { A } from '@solidjs/router'
import { MetalicRatio } from '../templates/Paideia'

const ForumPetal: Component = () => {
    return (
        <div class={styles.App}>
            <h1>Hello, Forum</h1>
            <button>
                <A href="/">Home</A>
            </button>

        </div>
    )
}

export default ForumPetal
