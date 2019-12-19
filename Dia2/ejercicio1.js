


// FALSY EXERCISE
function test(val)
{
    return val?console.log('truthy'):console.log('falsy');
    
}
test(false);
test(undefined);
test('');
test(null);
test(5/0);
test(false);
