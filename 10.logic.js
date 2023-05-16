function menghitung(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// menghitung(5);

var cek_nama = (nama) => {
  for (let i = 0; i <= nama.length - 1; i++) {
    console.log(`${i} = ${nama[i]}`);
  }
};
// cek_nama("estalabuste");

var countdown = (number) => {
  for (let i = number; i > 0; i--) {
    console.log(i);
  }
};
// countdown(10);

var countdown1 = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(num - i);
  }
};
// countdown1(5);

var countdown2 = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
};
// countdown2(5);

var countup1 = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
// countup1(3);

var countup2 = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(num - i + 1);
  }
};
// countup2(3);

var reverse = (string) => {
  let result = [];
  for (let i = 1; i <= string.length; i++) {
    // console.log(string[string.length - i]);
    // result = result + string[string.length - i];
    result.push(string[string.length - i]);
  }
  return result;
};
// console.log(reverse("owi"));
// console.log("tiara".split());

var reverse1 = (str) => {
  let result = [];
  for (let i = 1; i <= str.length; i++) {
    result.push(str[str.length - i]);
  }
  return result;
};
console.log(reverse1("abc"));
