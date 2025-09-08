// Coding Challenge 01

// Code goes here
let productName='SoccerBall'
let costPerUnit='12'
let basePrice='20'
let discountRate='0.15'
let salesTaxRate='0.07'
let fixedMonthlyCosts='2000'

let discountedPrice=basePrice * (1-discountRate)
let finalPriceWithTax=discountedPrice * (1+salesTaxRate)
let profitPerUnit=finalPriceWithTax - costPerUnit
let breakEvenUnits=Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit=profitPerUnit > 0;

console.log("Product Name:", productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPrice.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-even Units:", breakEvenUnits);
console.log("Per-unit Profitability:", isProfitable);
