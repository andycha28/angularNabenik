function reverse<T> (items:T[]):T[]{
    var toreturn =[];
    for(let i = items.length -1; i >= 0; i --)
    {
        toreturn.push(items[i]);
    }

    return toreturn;


}


var programmingLangs:string[];
programmingLangs = ['Python','Java','Js'];
programmingLangs = reverse(programmingLangs);

console.log( programmingLangs);

var yearProgrammingLangs: number[] =  [1994,1995,1996];
yearProgrammingLangs = reverse(yearProgrammingLangs);
console.log(yearProgrammingLangs);


