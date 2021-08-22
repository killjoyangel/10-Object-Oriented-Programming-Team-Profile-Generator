const rewire = require("rewire")
const index = rewire("./index")
const queEngineer = index.__get__("queEngineer")
const init = index.__get__("init")
// @ponicode
describe("queEngineer", () => {
    test("0", () => {
        let callFunction = () => {
            queEngineer()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("init", () => {
    test("0", () => {
        let callFunction = () => {
            init()
        }
    
        expect(callFunction).not.toThrow()
    })
})
