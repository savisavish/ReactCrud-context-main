import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// context
import { ItemsProvider } from './context/ItemsContext.js'
// components
import Home from './components/Home.jsx'
import AddItem from './components/AddItem.jsx'
import UpdateItem from './components/UpdateItem.jsx'
import NavBar from './Layouts/NavBar.jsx'

function App() {
    return (
        <div>
            <div className='sm:w-3/5 w-4/5 m-auto'>
                <Router>
                    <NavBar />
                    <ItemsProvider>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/add' element={<AddItem />} />
                            <Route path='/update/:id' element={<UpdateItem />} />
                        </Routes>
                    </ItemsProvider>
                </Router>
            </div>
        </div>
    )
}

export default App
