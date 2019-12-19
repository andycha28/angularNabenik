function doSomething(...params)
{
    //for(let i = 0; i< params.length; i++)
    for(var i = 0; i< params.length; i++)
    {
        console.log(params[i]);
        
    }
    console.log( i);
    
}

doSomething(1,2,3);
doSomething(1,2,3,4,5,6);
doSomething('TypeScript','Kotlin','Go','Java');