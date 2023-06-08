import { Routes, Route, Link } from 'react-router-dom'
import { Root } from './routes/root'
import { PokemonInfo } from './routes/PokemonInfo'
import { PokemonList } from './routes/PokemonList'
import { AiFillHome } from 'react-icons/ai'
import { Infinity } from './routes/InfinityScroll'

export const App = () => {
  return (
    <div>
      <div className="">
        <Link to="/" className="">
          <AiFillHome size={50} color={'#FFF'}/>
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/PokemonList' element={<PokemonList />}>
          <Route path=':ID' element={<PokemonInfo />} />
        </Route>
        <Route path='/inf' element={<Infinity />} />
      </Routes>
    </div>
  )
}