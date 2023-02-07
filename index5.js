//5 leap year functions

const year=2021;
// if(year%400==0 ||(year%100!=0 && year%4==0))
// {
//     console.log("leap year: " + year);
// }
// else
// console.log("not leap year: " + year);


const leap=new Date(year,1,29).getDate()===29;
if(leap)
{
    console.log("leap year: " + year);
}
else
console.log("not leap year: " + year);






























