const messageInput = document.getElementById("message-input");
//used to type the input by user.
const result = document.getElementById("result");
//used to display the result to the output.
const checkMessageButton = document.getElementById("check-message-btn");
//used to get the input from the user.

const helpRegex = /please help|assist me/i;
// '//' works like an empty string. '|' works like an or condition. it will notify the user if any one of them occur in tht message. /i is used to apply case insensitivity.

const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
// ? -> matches zero or one occurrence of the preceding character or group
// ?: -> this is known as a non-capturing group. usually the regex matches are stored, this is used in order to not store the matches.
//In this line [0-9]is is used that any number can appear from one to zero.
//+ is used that the numbers can have many digits [0-9].

const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
/* \s is used to match spaces, tabs and line break. they are used so that the filter also filters inputs like ' free money' or ' free money ' or 'free money '. But we have to also eliminate the normal one without space. So use ^ is used to match input with no space in front. $  is match input with no space at the end. 
In recent the spams have become advanced. For ex: free money can also be represented as  fr33 mon3y. we have eliminate this type too.[] is called a character class. It matches which are given within the character class.
In the case of [e3] the regex will take it as match either 3 is present in the string or e is present in the string.*/
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
/* here s or 5 will be taken as they are present within a character class.
and thers like t or 7, o or 0. For c there are many options as the brackets might be used to represent c*/
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];
//The different types of regex are stored in an array.

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
/*The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function.
The test() method of RegExp instances executes a search with this regular expression for a match between a regular expression and a specified string. Returns true if there is a match; false otherwise.*/

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message." // message to be displayed in case if input is spam.
    : "This message does not seem to contain any spam."; // message to be displayed if input is not spam.
  messageInput.value = "";
});
/*
learnt how to use regular expressions 
---key takeaways---
1) /i --> i flag can be used to make the expression ignore case, causing it to match hello, HELLO, and Hello for the expression /hello/.
2) | --> The alternate sequence | can be used to match either the text on the left or the text on the right of the |. For example, the regular expression /yes|no/ will match either yes or no.
3) A character class is defined by square brackets, and matches any character within the brackets. For example, [aeiou] matches any character in the list aeiou. You can also define a range of characters to match using a hyphen. For example, [a-z] matches any character from a to z.
4) + --> + quantifier can be used - this matches one or more consecutive occurrences. For example, the regular expression /a+/ matches one or more consecutive a characters.
5)A capture group is a way to define a part of the expression that should be captured and saved for later reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, /h(i|ey) camper/ would match either hi camper or hey camper, and would capture i or ey in a group.
6)The ? quantifier matches zero or one occurrence of the preceding character or group. For example, the regular expression /colou?r/ matches both color and colour, because the u is optional.
7)a non-capturing group in a regular expression, you can add ?: after the opening parenthesis of a group. For instance, (?:a|b) will match either a or b, but it will not capture the result.
8)\s -->  \s, which will match spaces, tabs, and line breaks.
9)Matches the beginning of input. If the multiline (m) flag is enabled, also matches immediately after a line break character. For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".
10)$ --> $ anchor to match the end of the string.
*/
