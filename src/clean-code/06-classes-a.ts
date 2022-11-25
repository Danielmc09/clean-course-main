(() => {
  // No aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  class Person {
    // Forma Larga de manejar las classes en TypeScritp
    // public name: string
    // public gender: Gender
    // public birthdate: Date
    // constructor(name: string, gender: Gender, birthdate: Date){
    //     this.name = name;
    //     this.gender = gender;
    //     this.birthdate = birthdate;
    // }

    // Forma corta de manejar las classes en TypeScritp
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  // const newPerson = new Person('John', 'M', new Date(1999-10-11));
  // console.log({newPerson});

  /* The User class extends the Person class and adds the email, role, and lastAcces properties. 
    The User class also has a constructor that takes the email, role, and lastAcces properties as
    parameters. 
    The constructor also calls the super() method, which calls the constructor of the Person class. 
    The super() method takes the name, gender, and birthdate properties as parameters. 
    */
  class User extends Person {
    public lastAcces: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAcces = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  /* UserSettings is a class that extends User and has a constructor that takes in a
    workingDirectory, lastOpenFolder, email, role, name, gender, and birthdate and passes the last
    five parameters to the super constructor. */
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const UserSettings1 = new UserSettings(
    "/test/user",
    "/test/home",
    "john.doe@gmail.com",
    "Admin",
    "John",
    "M",
    new Date(1999 - 10 - 11)
  );

  console.log({ UserSettings1 });
})();
