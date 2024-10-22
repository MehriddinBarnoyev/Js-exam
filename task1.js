const calculateElectricityBill = (n) => {
  let bill = 0;
  if (n < 100) {
    bill = n * 0.1;
    console.log(`Siz $${bill} to'laysiz `);
  } else if (n < 300) {
    bill = n * 0.15;
    console.log(`Siz $${bill} to'laysiz `);
  } else if (n > 300) {
    bill = n * 0.2;
    console.log(`Siz $${bill} to'laysiz `);
  }
};

calculateElectricityBill(110);
