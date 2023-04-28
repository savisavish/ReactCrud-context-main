import { useState, createContext } from 'react'
import { data } from '../data'
import { useNavigate } from 'react-router-dom'

export const ItemsContext = createContext()

export const ItemsProvider = (props) => {
    const nagivate = useNavigate()
    const [items, setItems] = useState(data)
    // // Add a new item
    const addItem = (e, item) => {
        e.preventDefault()
        setItems([...items, item])
        nagivate('/')
    }
    // Update an item
    const updateItem = (e, item) => {
        e.preventDefault()
        const newRecord = items.map((curItem) => {
            if (curItem.id === item.id) {
                return {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    description: item.description,
                }
            } else {
                return curItem
            }
        })
        setItems(newRecord)
        nagivate('/')
    }
    // Will remove a item from list
    const removeItem = (id) => {
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
    }

    return (
        <ItemsContext.Provider value={{ items, addItem, updateItem, removeItem }}>
            {props.children}
        </ItemsContext.Provider>
    )
}
