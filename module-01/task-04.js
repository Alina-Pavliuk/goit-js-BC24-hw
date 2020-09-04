const credits = 23580;
const pricePerDroid = 3000;

const quantityDroid = prompt('Введите количество дроидов');
let totalPrice = pricePerDroid * quantityDroid;
if(quantityDroid === null) {
  console.log('Отменено пользователем!');
} else if(credits < totalPrice) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(`'Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.'`);
}