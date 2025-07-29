(function (){
    // let username:string = 'Mariam';
    // let userAge:number = 22;
    // let isAdmin:boolean = false;
    // let myUser:object = {
    //     fName:"Mariam",
    //     lName:"Mahmoud",
    //     age:22
    // }

    // let friends:string[]=["ahmed","mohamed","ali"]
    // function welcome(username:string):string{
    //     return `welcome{username}`
    // }
    // welcome("dsadasda").slice(0,5);

    //Union
    let id:number |string="1234";
    id=222010394;

    let test:(number|boolean|string)[]=["1234",true,"222010394"];

    //Tuple
    let xy:[number,string]=[2,"mariam"];

    //Type checking
    // let x="ahmed";
    // x=14; error
    let x:any;
    x="ahmed";
    x=12;
    x--;
    let test2:unknown="ahmed";
    if (typeof test2 =="number"){
            test2--;
    }
    if (typeof test2 == "string"){
             test2.slice();
    }
    
    // interface User{
    //     fName:string,
    //     age:number,
    //     id:number | string
    // }
    type User={
        fName:string,
        age:number,
        id:number | string
    }
    let users:User[]=[
                {fName:"Mariam",age:22,id:"1234"},
                {fName:"Mariam",age:22,id:"1234"},
                {fName:"Mariam",age:22,id:"1234"},
                {fName:"Mariam",age:22,id:"1234"},
                {fName:"Mariam",age:22,id:"1234"},
                {fName:"Mariam",age:22,id:"1234"}
    ]
   //alias 
   type hambozo= string;
   let i:hambozo="ahmed";

   //Generics
   function printList<hambozo>(list:hambozo[]){
    return list.slice(0,2);
   }

   printList<string>(["ahmed","alis","mohamed"]); 
   printList([1,2,3,4]);

})()
