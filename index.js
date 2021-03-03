function calculateBill(bill, vat, tipRate) {
  if (
    typeof bill != "number" ||
    typeof vat != "number" ||
    typeof tipRate != "number"
  ) {
    return "error";
  } else {
    return `£${bill + vat + tipRate}`;
  }
}

calculateBill(100, 20, 10);

module.exports = calculateBill;
