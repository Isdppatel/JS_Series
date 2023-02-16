let n = 5;

//pyramid pattern
for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    document.write(" ")
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    document.write("x")
  }
  document.writeln("<br />");
}
console.log(string);