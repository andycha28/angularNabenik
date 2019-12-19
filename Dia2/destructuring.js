class Duke{

    constructor(name,edad, language)
    {
        this.name = name;
        this.edad = edad;
        this.language = language;
    }


}


var duke = new Duke('Java Duke', 20, 'Java');
var {name} = duke;
console.log(name);
