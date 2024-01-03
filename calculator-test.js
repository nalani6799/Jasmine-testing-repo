
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 2000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('26.09');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 15,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual("83.67");
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1050,
    years:30, 
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual("86.63");
})

 