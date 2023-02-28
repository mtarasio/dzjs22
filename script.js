

let a= 0.1;
let b = 0.2;
let summa = a + b;
console.log(summa);



let x = "1";
let y = 2;
let result = Number(x) + y;
console.log(result); 




let flashDriveSize = prompt("Введіть обсяг флешки в Гб:");
let flashDriveSizeMb = flashDriveSize * 1024;
let filesCount = Math.floor(flashDriveSizeMb / 820);
alert(`На флешку обсягом ${flashDriveSize} Гб можна помістити ${filesCount} файлів розміром 820 Мб`);



let money = prompt("Введіть суму грошей в гаманці:");
let price = prompt("Введіть ціну однієї шоколадки:");
let chocolates = Math.floor(money / price);
let change = money - chocolates * price;
alert("Ви можете купити " + chocolates + " шоколадок, і у вас залишиться " + change.toFixed(2) + " грн.");



let number = prompt("Введіть тризначне число:");
let digit1 = number % 10;
let digit2 = Math.floor(number / 10) % 10; 
let digit3 = Math.floor(number / 100); 
let reversedNumber = digit1 * 100 + digit2 * 10 + digit3; 
alert("Число задом наперед: " + reversedNumber);


let depositAmount = prompt("Введіть суму вкладу:");
let interestRate = 5; 
let numberOfMonths = 2; 
let interestAmount = depositAmount * interestRate / 100 / 12 * numberOfMonths;
alert("Сума нарахованих відсотків: " + interestAmount.toFixed(2));


alert (2 && 0 && 3);
alert ( 2 || 0 || 3);
alert (2 && 0 || 3);