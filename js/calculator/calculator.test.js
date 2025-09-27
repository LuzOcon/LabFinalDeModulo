const calculator = require('./calculator');

describe("Tests de ejemplo para add y substract", ()=> {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('adds -4 + 8 to equal 4', () => {
    expect(calculator.add(-4, 8)).toBe(4);
  });

  test('subtract 5 - 4 to equal 1', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
  });

  test('subtract -5 - -10 to equal 5', () => {
    expect(calculator.subtract(-5, -10)).toBe(5);
  });
})

describe("Probando funcion divide", ()=> {
  test("Probando que 9/2= 4.5",()=>{
    expect(calculator.divide(9,2)).toBe(4.5);
  })
  test("Probando que 3/6=0.5",()=>{
    expect(calculator.divide(3,6)).toBe(0.5);
  })
  // tarea 3
 test("Probando que 8/0= undefined",()=>{
    expect(calculator.divide(8,0)).toBe(undefined);
  })
})

describe("Probando funcion multiply", ()=>{
  test("Probando que 3*5=15 ", ()=>{
    expect(calculator.multiply(3,5)).toBe(15);
  })
  test("Probando que 8*0=0 ", ()=>{
    expect(calculator.multiply(8,0)).toBe(0);
  })
})