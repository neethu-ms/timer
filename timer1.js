const alarm = function(args) {
  for (let num of args) {
    let digits = /^\d/;
    let flag = 0;
    for (let n of num) {
      if (!n.match(digits))
        flag = 1;
    }
    if (num > 0 && flag === 0) {
      
      setTimeout(() => {
        process.stdout.write('\x07');
      },num * 1000);
    }
  }
};

alarm(process.argv.slice(2));


