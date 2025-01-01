import { useQuery } from "@tanstack/react-query";
import { todoListApi } from "../../shared/api/todoListApi";



export function TodoList() {

    const {data,error,isPending} = useQuery({
        queryKey:['tasks','list'],
        queryFn:todoListApi.getTodoList
    })

    if (isPending){
        return <div>Loading...</div>
    }

    if (error){
        return <div>error:{JSON.stringify(error)}</div>
    }

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}
