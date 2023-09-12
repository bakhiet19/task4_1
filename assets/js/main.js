function add(){
    let result_even =0;
    let sum_index =0;
    let a = [3,4,2,5,3,6,19,12,8,13];
    for(let i =0 ; i< a.length ; i++){
        if(a[i] % 2 == 0){
            result_even += a[i];
        }
         if(i < 5){
        sum_index+= a[i]
     }}
     document.write(`<h1>part one :</h1>`)
    document.write(`<p>the result of sum numbers even are : ${result_even}</p>`);
    document.write(`<p>the result of sum first five indexes are : ${sum_index}</p>`);
}

add();














let ob = {
    name : 'bakhit',
    number : "0994723426",
    age : "25",
    email : "bkhet4040@gmail.com",
    allinfo : function(){
        return "my name is " + ob.name + " , my age is " + ob.age + " , my email is " + ob.email + " and my number is " + ob.number
    }
};



document.write(`<h1>part two </h1>`)


document.write(JSON.stringify(ob));
document.write(`<p>${ob.allinfo()}</p>`);
document.write(`my name is ${ob.name} , my number is ${ob.number} , my age is ${ob.age} and my email is ${ob.email} `); 
document.write(`<p>my name is : ${ob.name}</p>`)
document.write(`<p>my number is : ${ob.number}</p>`)
document.write(`<p>my age is : ${ob.age}</p>`)
document.write(`<p>my email is : ${ob.email}</p>`)
document.write(ob)


// function a(n){
//     let b = [];
//     for(let i =0; i < 10 ; i++){
//         b.push(Math.ceil(n * 6))
//     }
//     console.log(b);
// }

// a(Math.random())