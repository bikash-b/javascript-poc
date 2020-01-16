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
 * 
*/
function identifier(){
    // Rule 1: A JavaScript identifier must begin with a letter, an underscore (_), or a dollar sign ($). 
    a 
    _name
    $location

    // Rule 2: Subsequent characters can be letters, digits, underscores, or dollar signs.
    ab
    v13
    name_
    location$

    // Rule 3: Digits are not allowed as the first character so that JavaScript can easily distinguish identifiers from numbers.
    // 13 - Not allowed
}

/**
 * JavaScript reserved words.
*/
function reservedWords(){
    // Rule 1: Many of the reserved words such as if, while and for may not be used as the name of constants, variables, functions or classes. But they can all be used as the names of properties within an object.

    // const if = 12; - Not allowed
    // const while = 10; - Not allowed
    // const for = false; - Not allowed

    const obj = {
        if: 12,
        while: 10,
        for: false 
    }

    console.log(obj);

    // Rule 2: Few reserved words such as from, of, get and set can be used as identifier with no syntactic ambiguity.
    const get = 12;
    const obj2 = {
        get: 10,
        get item(){
            return this.get;
        }
    } 
    console.log(get);
    console.log(obj2.item);

    // Rule 3: Few reserved words such as let are not fully reserved in order to retain them in compatibility with older programs. So there are complex rules that govern when they can be used as identifier and when they cannot.
    var let = 10;
    // var const = 30; - Not allowed

    class A{
        // let a; - Not allowed
        // const b; - Not allowed
    }
    console.log(let);
}

/**
 * Caller space
*/

caseSensitivitySpaceAndLineBreak();
literals();
reservedWords();