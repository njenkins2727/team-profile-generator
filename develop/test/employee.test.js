const Employee = require("../src/employee/employee")

describe('Employee Test', () =>{

    test('getName() will return the name property', () =>{

        //Arrange 
        const name = 'nathan';
        const dummy = new Employee(1, 'nathan@jenkins.com', name);
        //Act 
        const result = dummy.getName();
        //Assert 
        expect(result).toStrictEqual(name);
    });

    test('getEmail() will return the name property ', () => {
        //arrange 
        const email = 'nathan@jenkins.com'
        const dummy = new Employee(1, email, 'nathan');
        // act
        const result = dummy.getEmail();
        // assert
        expect(result).toStrictEqual(email);
    });

    test('getId() will return the id property ', () => {
        //arrange 
        const id = 123
        const dummy = new Employee(id, 'fake@bmail.com', 'nathan');
        // act
        const result = dummy.getId();
        // assert
        expect(result).toStrictEqual(id);
    });

    test('getEmail() will validate that it is an email', () => {
        //arrange 
        const email = 'fake@bmail.com'
        const dummy = new Employee(123, email, 'nathan')
        //act
        const result = dummy.getEmail();
        //assert
        expect(result).toStrictEqual(email)
    });

})
 