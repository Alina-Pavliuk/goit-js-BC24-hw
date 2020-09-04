let price;
let selectedCountry;
let country = prompt('Введите страну');

if(country === null) {
  console.log('Заказ отменен');
} else {
  selectedCountry = country.toLowerCase();


  switch(selectedCountry) {
    case 'китай':
      price = 100;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'чили':
      price = 250;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'австралия':
      price = 170;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'индия':
      price = 80;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'ямайка':
      price = 120;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
      
    default:
      console.log('В вашей стране доставка не доступна');
  }
};





