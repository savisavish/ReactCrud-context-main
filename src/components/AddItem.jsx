import { useState } from 'react'
// context
import { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

export default function AddItem() {
    const { addItem } = useContext(ItemsContext)
    const [itemForm, setItemForm] = useState({
        id: Math.random().toString(16).slice(2),
        title: '',
        image: null,
        description: '',
    })
    // change the state of item
    const onChangeFun = (e) => {
        setItemForm({ ...itemForm, [e.target.name]: e.target.value })
    }
    return (
        <div className='shadow-xl px-2 py-8 mt-20 '>
            <h1 className='text-2xl mb-4  font-bold'>Add new Item</h1>
            <form onSubmit={(e) => addItem(e, itemForm)}>
                <div className='grid gap-6 mb-4 md:grid-cols-2'>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Title
                        </label>
                        <input
                            type='text'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Title'
                            name='title'
                            onChange={(e) => onChangeFun(e)}
                            required
                        />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Image url
                        </label>
                        <input
                            type='text'
                            name='image'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='past image url from web'
                            onChange={(e) => onChangeFun(e)}
                            required
                        />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Description
                        </label>
                        <textarea
                            type='text'
                            rows={7}
                            name='description'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='write about the product'
                            onChange={(e) => onChangeFun(e)}
                            required
                        />
                    </div>

                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Image view
                        </label>
                        {itemForm.image && (
                            <img
                                // src={
                                //     'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80'
                                // }
                                src={itemForm.image}
                                alt={itemForm.title}
                                className='w-40 h-40 object-cover'
                            />
                        )}
                    </div>
                </div>
                <button className='bg-green-300 px-6 py-1 rounded text-sm tracking-widest font-bold '>
                    Add
                </button>
            </form>
        </div>
    )
}
