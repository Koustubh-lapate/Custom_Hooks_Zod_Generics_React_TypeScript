//Arrays in TypeScript
//Ways to define array

//1st Method
function getFirstElementMethod1(arr: number[]): number{
    return arr[0];
}

//2nd Method
type NumberArray = number[];
function getFirstElementMethod2(arr: NumberArray): number{
    return arr[0];
}

//3rd Method
interface User{
    name: string,
    age: number
}

type Users = User[];

//Array with multiple data types
function getFirstElementMethod3(arr: (number | string)[]): (number | string){
    return arr[0];
}

//Problem

function getFirstElement(arr: (number | string)[]){
    return arr[0];
}

let ans1 = getFirstElement([1, 2, 3]);
let ans2 = getFirstElement(["one", "two", "three"]);

//ans2.toLowerCase();
//Property toLowerCase doesn't exists on type number | string.

//Solution - Using Generics
function getFirstElementGen<T>(arr: T[]): T{
    return arr[0];
}

let answer1 = getFirstElementGen([1, 2, 3]);
let answer2 = getFirstElementGen(["one", "two", "three"]);

answer2.toLowerCase() //T type

//Swapper function
function swap<T>(a: T, b: T): [T, T] {
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

