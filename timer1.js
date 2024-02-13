const beepTimes = process.argv.slice(2).map(Number); //takes in multiple inputs

if (beepTimes.length > 0) {
  for (const time of beepTimes) {
    if (time > 0 && typeof time === 'number') {
      setTimeout(() => {
        process.stdout.write(`\x07${time} second(s)!\n`);
      }, time * 1000);
      // '* 1000' because console takes in milliseconds, but user gives number meaning in seconds. this creates the millisecond equivelent
    }
  }
} else {

  return;
}
