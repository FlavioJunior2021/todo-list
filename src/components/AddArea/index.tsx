import * as C from './style'
import { useState, KeyboardEvent} from 'react'

type Props = {
    onEnter: (taksName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState("");
    const handleKayUp = (e: KeyboardEvent) =>{
        if(e.code === "Enter" && inputText!==""){
            onEnter(inputText);
            setInputText("")
        }
    }
    return (
        <C.Container>
            <div className="image">➕</div>
            <input type="text"
            placeholder="Adicione uma tarefa"
            value={inputText}
            onChange={e=>setInputText(e.target.value)}
            onKeyUp={handleKayUp}
            />
        </C.Container>
    )
}