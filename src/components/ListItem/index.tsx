import * as C from './style'
import { Item } from '../../types/item'
import { useState } from 'react'

type props = {
    item: Item;
}

export const ListItem = ({item }: props) => {
    const [isChecked, setIsChecked] = useState(item.done)
    return (
        <C.Container done={isChecked}>
            <input type="checkbox"
             checked={isChecked}
             onChange={e => setIsChecked(e.target.checked)}
             />
            <label htmlFor="">{item.name}</label>
        </C.Container>
    );
}