import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'

import { FirebaseRepository } from '../../storage/'
import { RootStore } from '../../stores/'
import Router from '../../lib/router'
import { App } from '../'


describe('App', () => {
  it('renders without crashing', async () => {
    const repository = new FirebaseRepository()
    const store = new RootStore(repository, 'me')
    const router = new Router(store)
    const div = document.createElement('div')
    ReactDOM.render(
      <RouterProvider router={router.instance}>
        <App rootStore={store} />
      </RouterProvider>,
      div
    )
  })

})
