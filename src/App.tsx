import {useState} from 'react';
import * as C  from './App.styles';
import { Item } from  './types/item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {

  const [List, setList] = useState<Item[]>([])

  const handeAddTask = (taksName: string) => {
    var myList = [...List];
    myList.push({
      id: List.length + 1,
      name: taksName,
      done: false
    });
    setList(myList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de tarefas
        </C.Header>

      {/* Àrea de adicionar nova tarefa */}
      <AddArea onEnter={handeAddTask}/>

       {/* Lista de tarefas */}
       {List.map((item,index)=>(
        <ListItem key={index} item={item}/>
       )

       )}

      </C.Area>
    </C.Container>
  );
}
export default App