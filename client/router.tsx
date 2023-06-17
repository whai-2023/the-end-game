import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Homepage from './components/Homepage'
import Game from './components/Game'
import ChooseCharacterPage from './components/ChooseCharacterPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="character" element={<ChooseCharacterPage />} />
      <Route path="character/game" element={<Game />} />
    </Route>
  )
)
