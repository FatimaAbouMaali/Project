const { validateField } = require("../validate")



test('test validate Exhbition ', () => {
    let elm = "<input id = 'fnamw'>"
    expect(validateField(elm)).toBe(true)
})