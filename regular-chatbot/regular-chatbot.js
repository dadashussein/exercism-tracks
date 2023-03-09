// @ts-check

export function isValidCommand(command) {
  // regular expression to match the keyword "Chatbot" at the beginning of the command
  const regex = /^chatbot/i;
  return regex.test(command);
}

export function removeEmoji(message) {
  // Create a regular expression to match the "emoji" string followed by one or more digits
  const regex = new RegExp("emoji\\d+", "g");
  // Replace all matches of the regex with an empty string
  return message.replace(regex, "");
}

export function checkPhoneNumber(phoneNumber) {
  // regular expression to match the expected phone number format
  const regex = /^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/;
  
  if (regex.test(phoneNumber)) {
    return "Thanks! You can now download me to your phone.";
  } else {
    return `Oops, it seems like I can't reach out to ${phoneNumber}`;
  }
}

export function getURL(userInput) {
  const url = new RegExp(/[a-z]*\.[a-z]*/gi);
  return userInput.match(url);
}


export function niceToMeetYou(fullName) {
  // Extract the first and last name from the full name
  const [lastName, firstName] = fullName.split(',').map(s => s.trim());
  // Use a Regular Expression to replace the last and first name in the desired order
  const greeting = "Nice to meet you, $2 $1";
  return greeting.replace(/\$1/g, lastName).replace(/\$2/g, firstName);
}

let str = 'Smith, John';
console.log(niceToMeetYou(str)); // "Nice to meet you, John Smith"
