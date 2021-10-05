import {useState} from 'react';
import * as C  from './App.styles';
import {} from  './types.item'

const App = () => {

  const [List, setList] = useState([])

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de tarefas
        </C.Header>
      </C.Area>
    </C.Container>
  );
}
export default App