function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var programmingLangs;
programmingLangs = ['Python', 'Java', 'Js'];
programmingLangs = reverse(programmingLangs);
console.log(programmingLangs);
var yearProgrammingLangs = [1994, 1995, 1996];
yearProgrammingLangs = reverse(yearProgrammingLangs);
console.log(yearProgrammingLangs);
