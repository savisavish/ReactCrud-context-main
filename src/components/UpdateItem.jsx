import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// context
import { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

export default function UpdateItem() {
    const { id } = useParams()
    const { items, updateItem } = useContext(ItemsContext)
    const [updateForm, setUpdateForm] = useState(null)

    // change the state of item
    const onChangeFun = (e) => {
        setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        // get item by id for update
        const getCurrentItem = (id) => {
            const currentItem = items.find((item) => item.id.toString() === id.toString())
            setUpdateForm(currentItem)
        }
        // set state for the form on inital run
        getCurrentItem(id)
    }, [id, items])
    return (
        <div className='shadow-xl px-2 py-8 mt-20'>
            <h1 className='text-2xl mb-4 font-bold '>Update Item</h1>
            {updateForm && (
                <form onSubmit={(e) => updateItem(e, updateForm)}>
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
                                value={updateForm.title}
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
                                value={updateForm.image}
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
                                value={updateForm.description}
                                required
                            />
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Image view
                            </label>
                            {updateForm.image && (
                                <img
                                    // src={
                                    //     'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80'
                                    // }
                                    src={updateForm.image}
                                    alt={updateForm.title}
                                    className='w-40 h-40 object-cover'
                                />
                            )}
                        </div>
                    </div>
                    <button className='bg-green-300 px-6 py-1 rounded text-sm tracking-widest font-bold '>
                        Update
                    </button>
                </form>
            )}
        </div>
    )
}
