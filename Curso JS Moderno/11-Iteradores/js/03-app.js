pestaña = "App 3";
console.log(pestaña);


for(let i = 0; i <= 100; i++)
{
    if(i % 3 == 0 && i%5 == 0)
    {
        console.log(`Fizzbuzz ${i}`);
    }
    else if(i % 3 == 0)
    {
        console.log(`Fizz ${i}`);
    }
    else if(i % 5 == 0)
    {
        console.log(`Buzz ${i}`);
    }
    else
    {
        console.log(i);
    }
}