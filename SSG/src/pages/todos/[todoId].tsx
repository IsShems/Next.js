import { Todo } from "../../../types/Todo"
import { useRouter } from "next/router";
import styled from "styled-components";

interface Props 
{
    todo: Todo
}


const CustomDiv = styled.div({
    listStyle: 'none',
    marginTop: 10,
    fontSize: 25,
});



export default function ToDoDetails({todo} : Props) {
    
    let router = useRouter()
    if (router.isFallback)
    {
        return <>Loading...</>
    }

    return (
        <CustomDiv >
            <p>Id: {todo.id}</p>
            <p>User id: {todo.userId}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? 'true' : 'false'}</p>
        </CustomDiv>
    )
}

export function getStaticPaths()
{
    return {
        paths: [
            {
                params: {
                    todoId: '1'
                }
            },
        ],
        fallback: true
    }
}


export async function getStaticProps(context: any) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
    const todo = await response.json()

    return {
        props:
        {
            todo: todo
        }
    }
}