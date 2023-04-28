import { Link } from 'react-router-dom'
// context
import { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'
// components
import ItemCard from './ItemCard'

export default function Home() {
    const { items } = useContext(ItemsContext)
    return (
        <div  className='mt-20'>
            <div className='text-right '>
                <Link
                    to='/add'
                    className='bg-yellow-200 px-3 py-1 rounded text-sm font-medium'
                >
                    New Item
                </Link>
            </div>
            {/* list of items */}
            {items.length > 0 ?
                items.map((item) => {
                    return <ItemCard item={item} key={item.id} />
                }):<p className='text-center text-xl'>No Item to show</p>}
        </div>
    )
}
