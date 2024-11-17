const args = process.argv.slice(2);

const isPositiveNumber = (value) => {
  const number = Number(value);
  return !isNaN(number) && number > 0;
};

args.forEach((arg) => {
  if (isPositiveNumber(arg)) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, arg * 1000);
  }
});
