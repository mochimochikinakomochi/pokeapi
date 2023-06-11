import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Root } from './routes/root'
import { PokemonInfo } from './routes/PokemonInfo'
import { PokemonList } from './routes/PokemonList'
import { AiFillHome } from 'react-icons/ai'

const homeUrl = process.env.PUBLIC_URL || "/"

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="">
          <Link to={homeUrl} className="">
            <AiFillHome size={50} color={'#FFF'}/>
          </Link>
        </div>
        <Routes>
          <Route path={homeUrl} element={<Root />} />
          <Route path={homeUrl + '/PokemonList'} element={<PokemonList />}>
            <Route path=':ID' element={<PokemonInfo />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}