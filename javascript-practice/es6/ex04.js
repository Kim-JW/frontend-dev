/**
 * Default Parameter
 * 
 */

const print = function(strs, end='\n') {
    console.log(strs.join(end));
}

print(['Always', 'With', 'me']);
print(['Always', 'With', 'me'], ' ');