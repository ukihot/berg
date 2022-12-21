/* @refresh reload */
import { render } from 'solid-js/web'
import { Component, lazy } from 'solid-js'
import { Router} from '@solidjs/router'

const Petal = lazy(() => import('./Petal'))
const Stem = lazy(() => import('./Stem'))

const Berg: Component = () => {
    return (
        <div>
            <Router>
                <Stem />
                <Petal />
            </Router>
        </div>
    )
}

render(() => <Berg />, document.getElementById('root') as HTMLElement)
