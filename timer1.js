// Take in command line arguments
const args = process.argv.slice(2);

// Check if number is positive
const isPositiveNumber = (value) => {
  const number = Number(value);
  return !isNaN(number) && number > 0;
};

// Loop through arguments to set timer for valid numbers
args.forEach((arg) => {
  if (isPositiveNumber(arg)) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, arg * 1000);
  }
});
