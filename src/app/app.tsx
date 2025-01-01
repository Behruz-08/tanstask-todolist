import { TodoList } from "../modules/todo-list/todo-list";
import { queryClient } from "../shared/api/query-client";
import {QueryClientProvider} from "@tanstack/react-query"

export function App() {
 

  return (
    <QueryClientProvider client={queryClient}>

    <div>
    <TodoList/>
    </div>
    </QueryClientProvider>
  )
}


