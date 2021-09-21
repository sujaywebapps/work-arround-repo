const CPE = {
  g: 9.8,
  calc: (m, h) => {
    return this.g * m * h;
  },
};

const NewCPE = {
  g: 10,
};

const newCalc = CPE.calc.bind(NewCPE);

// console.log(newCalc(10, 10));
console.log(NewCPE.calc(10, 10));
