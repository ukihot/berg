/* @refresh reload */
import { render } from 'solid-js/web'
import { Component, lazy } from 'solid-js'
import { Router } from '@solidjs/router'

const Stem = lazy(() => import('./Stem'))
const Petal = lazy(() => import('./Petal'))

const Berg: Component = () => {
    return (
        <Router>
            <Stem />
            <Petal />
        </Router>
    )
}

render(() => <Berg />, document.getElementById('root') as HTMLElement)
