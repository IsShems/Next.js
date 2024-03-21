import { Todo } from "../../../types/Todo"
import Link from "next/link";
import styled from "styled-components";

interface Props {
    todos: Todo[]
}

const CustomUl = styled.ul({
    justifyContent: 'space-between',
    display: 'flex',
    listStyle: 'none',
    marginTop: 10,
    fontSize: 25,
});


export default function ToDos({ todos }: Props) {
    return (
        <div>
            {todos.map((todo) => (
                <CustomUl key={todo.id}>
                    <Link href={`/todos/${todo.id}`} >{todo.title}</Link>
                </CustomUl>
            ))}
        </div>
    )
}



export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json()

    return {
        props: {
            todos: todos
        }
    }
}
