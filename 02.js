function manipulateString(inputString, callback) {
    const manipuledString = inputString.toUpperCase();

    callback(manipuledString);
}

function logString(manipuledString) {
    console.log(`The Manipulated string is: ${manipuledString}`);
}
manipulateString("hello, world!", logString);