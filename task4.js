const applyDiscount = (cartValue, isMember) => {
  if (cartValue >= 100 && isMember == false) {
    console.log(`Sizga $${(cartValue * 5) / 100} chegirma qilinadi `);
  } else if (cartValue >= 100 && isMember == true) {
    console.log(`Sizga $${(cartValue * 10) / 100} chegirma qilinadi `);
  } else if (cartValue < 100) {
    console.log(`Sizga chegirma yo'q`);
  }
};

applyDiscount(100, true);
