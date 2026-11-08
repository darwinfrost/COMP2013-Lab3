//This component will have a todo list as a prop then wee will map it into several todocards
import type { TodosContainerProps } from './ToDoApp'
import TodoCard from './ToDoCard';
export default function TodosContainer({todosList, handleTodoCheck}: TodosContainerProps)
{
    return(
    <div>
        {todosList.length > 0 || "Todo List is Empty"}
        {todosList.map
        ((todo) => 
            (<TodoCard key={todo.id} {...todo} handletoCheck={handleTodoCheck}/>))}
    </div>
    );
}