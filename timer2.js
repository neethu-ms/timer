const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const settingAlarm = function(num) {
  if (num > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },num * 1000);
  }
  
};

stdin.on('data', (key) => {
 
  if (key === 'b') {
    process.stdout.write('beep');
    process.stdout.write('\x07');
  } else if (key === '\u0003') {
    process.exit();
  } else  if (key > 0 && key < 9) {
   
    settingAlarm(key);
    console.log(`setting timer for ${key} seconds...`);
  }
});
