/**
 * Case-sensitivity, space and line break
*/
function caseSensitivitySpaceAndLineBreak(){
    const WHILE = 1234;
    console.log(WHILE);
    const While = 1234;
    console.log(While);
    
    //const while = 1234; // SyntaxError: Unexpected token while
    //console.log(while);
}

/**
 * Literals
 * A literal is a data value that appears directly in a program
*/
function literals(){
    12               // The number twelve
    1.2              // The number one point two
    "hello world"    // A string of text
    'Hi'             // Another string
    true             // A Boolean value
    false            // The other Boolean value
    null             // Absence of an object
}

/**
 * An identifier is simply a name.
 * In JavaScript, identifiers are used to name constants, variables, functions and classes and to provide labels for certain loops in JavaScript code.
 * Rule: Digits are not allowed as the first character so that JavaScript can easily distinguish identifiers from numbers.
 * 
*/
function identifier(){
    //Rule 1: A JavaScript identifier must begin with a letter, an underscore (_), or a dollar sign ($). Subsequent characters can be letters, digits, underscores, or dollar signs.
    a 
    _name
    $location
    
}

/**
 * Caller space
*/

caseSensitivitySpaceAndLineBreak();
literals();