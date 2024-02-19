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

