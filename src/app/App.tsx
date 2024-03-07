import { Provider } from 'react-redux'

import { store } from '@/app/providers/store/store'
import { Router } from '@/app/router'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
