console.log("------- Step 1 -------");
// Program to count character 'a': Define a function charCount() with one argument and call this function by passing below strings one by one. This function must return the char count.
// • "JavaScript"
// • "Do or Die"
// • "Learn with us, Job with us"
// • "Empowering Dreams, Guaranteeing Futures"
// • "Anny, My favorite fruit is Apple"
function charCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a'){
            count++;
        }
    }
    return count;
}
console.log(`Total number of count 'a' is: ${charCount("JavaScript")}`); 
console.log(`Total number of count 'a' is: ${charCount("Do or Die")}`); 
console.log(`Total number of count 'a' is: ${charCount("Learn with us, Job with us")}`); 
console.log(`Total number of count 'a' is: ${charCount("Empowering Dreams, Guaranteeing Futures")}`); 
console.log(`Total number of count 'a' is: ${charCount("Anny, My favorite fruit is Apple")}`); 


console.log("------- Step 2 -------");
// Program to count vowels: Define a function vowelsCount( ) with one argument and call this function by passing below strings one by one. This function must return the vowels count that's been passed as an argument.
// • "JavaScript"
// • "HTML and CSS"
// • "Language Of Internet"
// • "I am UI Developer"
// • "Do or Die"
// Note: While counting vowel, consider the lower & upper-case vowels as well
function vowelsCount(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(`Number of vowels is: ${vowelsCount("JavaScript")}`); 
console.log(`Number of vowels is: ${vowelsCount("HTML and CSS")}`); 
console.log(`Number of vowels is: ${vowelsCount("Language Of Internet")}`); 
console.log(`Number of vowels is: ${vowelsCount("I am UI Developer")}`); 
console.log(`Number of vowels is: ${vowelsCount("Do or Die")}`); 


console.log("------- Step 3 -------");
// Program to count words: Define a function wordCount() with one argument and call this function by passing below strings one by one. This function must return the word count that's been passed as an argument.
// • "JavaScript The language of Internet"
// • "Enhance Your Learning Journey with Exclusive Add-ons"
// • "Beyond frameworks, Beyond Imagination"
// • "I am passionate software developer"
function wordCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count + 1;
}
console.log(`Total word count is: ${wordCount("JavaScript The language of Internet")}`);
console.log(`Total word count is: ${wordCount("Enhance Your Learning Journey with Exclusive Add-ons")}`);
console.log(`Total word count is: ${wordCount("Beyond frameworks, Beyond Imagination")}`);
console.log(`Total word count is: ${wordCount("I am passionate software developer")}`);

