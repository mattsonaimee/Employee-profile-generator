const Employee = require("../lib/employee");



// describe("Employee", () => { 
//   describe("Initialization", () => {  
//     it("creates an object with name, id and email as properties", () => {
//      const employee = new Employee();
//      expect(typeof(employee)).toBe("object");

//     });
//   });
  
// });



describe("Employee Class", () => {
  describe("getName method", () => {
    it("creates a name for the employee class object", () => {
      const employee = new Employee("New employee", [{ name: " " }]);
      employee.getName("");
      expect(employee.name).toBe("New employee");
    });
  });
});

