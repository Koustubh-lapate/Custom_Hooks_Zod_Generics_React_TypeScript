//Arrays in TypeScript
//Ways to define array
//1st Method
function getFirstElementMethod1(arr) {
    return arr[0];
}
function getFirstElementMethod2(arr) {
    return arr[0];
}
//Array with multiple data types
function getFirstElementMethod3(arr) {
    return arr[0];
}
//Problem
function getFirstElement(arr) {
    return arr[0];
}
var ans1 = getFirstElement([1, 2, 3]);
var ans2 = getFirstElement(["one", "two", "three"]);
//ans2.toLowerCase();
//Property toLowerCase doesn't exists on type number | string.
//Solution - Using Generics
function getFirstElementGen(arr) {
    return arr[0];
}
var answer1 = getFirstElementGen([1, 2, 3]);
var answer2 = getFirstElementGen(["one", "two", "three"]);
answer2.toLowerCase(); //T type
//Swapper function
function swap(a, b) {
    return [b, a];
}
//Zod
//It is used for backend validation. Bunch of checks on the data sent by the client to server, if it is not correct can break your server.
/*
import {z} from "zod";

let titleInputProps = z.object({
    title: z.string().min(1),
    description: z.string().min(1)
})

router.post('/todos', authenticateJwt, (req, res) => {
    const parsedInput = titleInputProps.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(411).json({
            msg: parsedInput.error
        })
    }

    let title = parsedInput.data.title;
    let description = parsedInput.data.description;
})
*/
//Custom hooks in react
/*
hook, swr, useSwr
function useTodos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch('http://localhost:3000/todo/todos', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            // Todo: Create a type for the response that you get back from the server
            const data = await response.json();
            setTodos(data);
            setLoading(false);
        };
        getTodos();
    }, []);

    return {
        loading,
        todos: todos,
        setTodos
    }
}
*/ 
