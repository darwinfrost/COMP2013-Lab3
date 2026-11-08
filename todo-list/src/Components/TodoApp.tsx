import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./ToDosContainer";
export interface TodoCardProps
{
    id: string;
    title: string
    checked: boolean
}

export interface TodosContainerProps
{
    todosList: TodoCardProps[];
}

export default function TodoApp()
{
  //states
  //a state to store the input change
  // ONCe the submit button is clicked the state will be stored
  // as a todo entry in the other state that will save a list of todos
  const [todo, setTodo] = useState<TodoCardProps>({
    id:"",
    title:"",
    checked:false,
  });

  //seccond state a state to store all the todo entry in one array
  const [todosList, setTodosList] = useState<TodoCardProps[]>([]);

  export interface FormComponentProps extends TodoCardProps {
    handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  }
  //handlers
//1.Handle the form input change that will allow typing in the input
const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo((prevTodo)=>({...prevTodo, [e.target.name]: e.target.value}))

  //.2 handle the on click submit event for the form to add the input to the todo list
  const handleOnSubmit = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodosList((prevList) => [...prevList, {
      id: crypto.randomUUID(),
      title: todo.title,
      checked:false,
    },
  ]);
  setTodo({
    id:"",title:"",checked:false,
  });


}
  //.3Handle the checkbox toggle in the todocard
  const handleTodoCheck = (e: ChangeEvent<HTMLInputElement>,id:string) => {
setTodosList((prevList) => prevList.map((entry) => entry.id === id
?{...entry, checked: e.target.checked}
: {...entry}, ),);
  };

  //main return
  return (
  <div>
    <h1>Todo List App</h1>
    <FormComponent {...todo} handleFormOnChange={handleFormOnChange} handleOnSubmit={handleOnSubmit}/>
    <TodosContainer todosList={todosList}/>
  </div>
  );
}