const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

describe("Probando funcion findByEmail", ()=>{
  test("Probando con email santiago@generation.org",()=>{
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);  
    expect(userController.findByEmail("santiago@generation.org")).toStrictEqual(user);
  })
  test("Probando con email luz@generation.org",()=>{
    expect(userController.findByEmail("luz@generation.org")).toStrictEqual(undefined);
  })
})

describe("Probando funcion findById", () =>{
  test("Probando con id 1234 ", ()=>{
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);  
    expect(userController.findById(1234)).toStrictEqual(user);
  })
  test("Probando con id 2222",()=>{
    expect(userController.findByEmail("2222")).toStrictEqual(undefined);
  })
})

