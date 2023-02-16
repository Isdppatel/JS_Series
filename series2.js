// fibonacci number print between 1 to 1000
var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 1000; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  document.writeln(fib[i] +  "   ");
}

 




