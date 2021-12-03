function printFullName(firstName, lastName, customNameFunc) {
  let fullName;
  if (customNameFunc) {
    fullName = customNameFunc();
  } else {
    fullName = `${firstName} ${lastName}`;
  }
  console.log(fullName);
}

// without callback
printFullName('John', 'Doe');

// with callback
printFullName('John', 'Doe', function (firstName, lastName) {
  return `Full name: ${firstName} ${lastName}`;
});
