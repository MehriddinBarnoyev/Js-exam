const calculateTip = (amount, serviceLevel) => {
  switch (serviceLevel) {
    case "excellent":
      console.log(`$${Math.floor((100 * 20) / amount)} choychaqa`);
      break;
    case "good":
      console.log(`$${Math.floor((100 * 15) / amount)} choychaqa`);
      break;
    case "average":
      console.log(`$${Math.floor((100 * 10) / amount)} choychaqa`);
      break;
    case "poor":
      console.log(`$${Math.floor((100 * 5) / amount)} choychaqa`);
      break;
  }
};

calculateTip(150, "excellent");
