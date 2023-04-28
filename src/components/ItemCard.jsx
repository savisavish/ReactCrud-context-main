// icons
import { BiEditAlt } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// context
import { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

export default function ItemCard({ item }) {
    const { id, title, description, image } = item
    const { removeItem } = useContext(ItemsContext)
    return (
        <div className='shadow-md mt-5 flex flex-col sm:flex-row justify-between items-center rounded overflow-hidden'>
            <div className='flex flex-col sm:flex-row gap-2'>
                <div className='min-w-max'>
                    <img
                        src={image}
                        alt={title}
                        className='sm:w-20 sm:h-20 h-52 w-full object-cover '
                    />
                </div>
                <div className='px-2 sm:px-0'>
                    <p className='text-xl font-medium tracking-widest'>{title}</p>
                    <p className='text-sm text-gray-600'>
                        {description.length > 150 ? description.slice(0, 150)+ '...' : description}
                    </p>
                </div>
            </div>
            <div className='px-2 flex flex-row  gap-3 py-2'>
                <Link to={`update/${id}`}>
                    <BiEditAlt size={16} className='cursor-pointer' />
                </Link>
                <AiFillDelete
                    onClick={() => removeItem(id)}
                    size={16}
                    className='cursor-pointer  text-red-400'
                />
            </div>
        </div>
    )
}
