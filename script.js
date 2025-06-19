function add(a,b){
    return a+b;
}
const mul=(a,b)=>{
    return a*b;
}
//console.log(add(2,4));

const obj={
    name: 'Senthil',
    age:40,
    message:function(){
        let name=obj.name
        return `hello I am ${name}`
    }
}
//console.log(obj.name);
//console.log(obj.message());

const num=[1,3,4,67,89,-4]
const mappednum=num.map((n)=>n*3)
//console.log(mappednum);

const pos=num.filter((n)=>n%2!=0)
//console.log(pos);

//const total=num.reduce((sum,n)=>sum+n,0)
//console.log(total)
const product=[
    {name:'tv',price:47800},
    {name:'refrigirator',price:10000},
    {name:'airconditioner',price:393839}
]
/*const total=product.reduce((sum,n)=>sum+n.price,0)
console.log(total);*/
const total=product.filter((n)=>n.price>10000)
//console.log(total);


//Destructuring
const user={name:'Preetha',password:'1234'}
const {name,password}=user
console.log(password);

const numb=[1,2,3,4,5];
const [first, second,third,...spread] = numb;
console.log(spread);

// Spread Operator
const arr1 = [1, 2, 3];
const copy = [...arr1,4,5,6];
console.log(copy);

// Rest Operator
function add2(...args) {
    return args.reduce((sum,num) => sum + num, 0);
}
console.log(add2(1, 2, 3, 4, 5));

//callbacks
function call() {
    console.log("This is a callback function");

}
function fun (name, callback) {
    callback();
    return `${name} from outside callback`
}
console.log(fun('call',()=>{console.log(`from inside callback`)}))

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    data.map((a) => console.log(a.name))
    }
    catch (error) {
        console.log(error);
    } 
}
fetchUsers();   