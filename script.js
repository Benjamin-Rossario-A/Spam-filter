const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
/*
learnt regular expressions 
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
