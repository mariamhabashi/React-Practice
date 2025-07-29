(function () {
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
    var id = "1234";
    id = 222010394;
    var test = ["1234", true, "222010394"];
    //Tuple
    var xy = [2, "mariam"];
    //Type checking
    // let x="ahmed";
    // x=14; error
    var x;
    x = "ahmed";
    x = 12;
    x--;
    var test2 = "ahmed";
    if (typeof test2 == "number") {
        test2--;
    }
    if (typeof test2 == "string") {
        test2.slice();
    }
    var users = [
        { fName: "Mariam", age: 22, id: "1234" },
        { fName: "Mariam", age: 22, id: "1234" },
        { fName: "Mariam", age: 22, id: "1234" },
        { fName: "Mariam", age: 22, id: "1234" },
        { fName: "Mariam", age: 22, id: "1234" },
        { fName: "Mariam", age: 22, id: "1234" }
    ];
    var i = "ahmed";
    //Generics
    function printList(list) {
        return list.slice(0, 2);
    }
    printList(["ahmed", "alis", "mohamed"]);
    printList([1, 2, 3, 4]);
})();
