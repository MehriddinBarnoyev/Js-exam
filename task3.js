const calculateRentalPrice = (daysRented, carType) => {
  switch (carType) {
    case "economy":
      if (daysRented >= 7) {
        console.log(
          `Siz $${daysRented * 30 - (daysRented * 30) / 10} to'laysiz `
        );
      } else console.log(`Siz $${daysRented * 30} to'laysiz `);
      break;
    case "standard":
      if (daysRented >= 7) {
        console.log(
          `Siz $${daysRented * 50 - (daysRented * 50) / 10} to'laysiz `
        );
      } else console.log(`Siz $${daysRented * 50} to'laysiz `);

      break;
    case "luxury":
      if (daysRented >= 7) {
        console.log(
          `Siz $${daysRented * 100 - (daysRented * 100) / 10} to'laysiz `
        );
      } else console.log(`Siz $${daysRented * 100} to'laysiz `);

      break;
  }
};

calculateRentalPrice(7, "luxury");
