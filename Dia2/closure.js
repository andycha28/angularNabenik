function theFunction(arg) {
    var innerValue = arg;
        console.log("Ejecutando outer");
        
        return function innerFunction ()
        {
            console.log(innerValue);
            
        }

}


var behave = theFunction("hello world");
behave();