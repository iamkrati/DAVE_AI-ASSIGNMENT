//extract the element form by using it's id : formlist
let form=document.getElementById("formlist");
// console.log(b);
// let a variable message to know that all peoples get the seat in bus or not
let message="";
// use event listener at form element to use it's data
form.addEventListener('submit',(e)=>
{ 
e.preventDefault();
// get the number of persons from input tag
let p=document.getElementById("person").value;
// // get the number of buses from input tag
let b=document.getElementById("buses").value;
// call function  which returns the array[number of people got into first bus, number of people got into second bus, …. , number of people who got into last bus]

let ans=do_allocation(p,b);
// console.log(ans);
// insert the returning array into HTML Page
document.getElementById("result").innerHTML=ans;

// check message length 
if(message.length!=0)
{
    // if not able to accomodate all passengers alert message
    alert(message);
    // reset message for further results
    message="";
}
}
);

//function

function do_allocation(p,b)
{
    // console.log(p);
    let people=p;
    let bus=b;
    const buses=[];
    // initially first bus have a capacity=1
    buses[0]=1;
    // console.log(bus);
    
    // use sum as helper variable which tells us that the maximum number of persons can get seat in total buses.
    let sum=1;
    if(bus>1)
    {
        // I consider the second bus capacity is 1
        buses[1]=1;
        sum+=1;
    }
    for(var i=2;i<bus;i++)
    {
        //Calculate the other buses capacity
        buses[i]=buses[i-1]+buses[i-2];
        sum+=buses[i];
    }
    // check the condition
    if(people>sum)
    {
        message="Not all passengers will be able to sit in buses";
    }
    // console.log(buses);

    //initialize resultant array
    const pep = Array.from({ 
        length: bus
      }, () => 0) ;
    // fill the resultant array
    for(var i=0;i<pep.length;i++)
    {
         if(people>buses[i])
         {
            pep[i]=buses[i];
            people=people-buses[i];
         }
         else
         {
            pep[i]=people;
            people=0;
         }
    }  
    // console.log(pep);
    // return array
    return pep;
}