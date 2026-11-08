//This component will contain
//1 a body for a title of the todo message
//2 a button for deleting this todo entry
//3 a button to edit this todo entry
//4 a checkbox that will be used to check the entry if completed
import type { TodoCardFunction } from './ToDoApp';

export default function TodoCard({checked, title}: TodoCardFunction)
{
    return  (
    <div>
<input type="checkbox" name="checked" id="checked" checked={checked}/>
<span>{title}</span>
<button>Delete</button>
<button>Edit</button>
    </div>
    );
};