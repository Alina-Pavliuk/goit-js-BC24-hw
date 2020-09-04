let input;
let number;
let total = 0;


while(true){
   input = prompt('Введите число');
   number = Number(input);
  
  if (isNaN(number)) {
    alert('Введите числовое значение');
    continue;
  };

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  };
  total += number;
  console.log(total); 
}
