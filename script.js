document.body.innerHTML = '<h1> Hello from JS </h1>'

const items = [
    { price: 40},
    { price : 120},
    { price: 505},
    { price: 350}];
  
  for (const item of items){
  console.log(`Price: ${item.price}`);
  }