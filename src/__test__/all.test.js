const slideShow = require("../all")

test('test slideshow', () => {
    let src = './images/banner.jpg'
    expect(src).toMatch("jpg")
})

test('test validate Feild', () => {
    let name = 'sara'
    !expect(name).toMatch("")
})

test('test validate email', () => {
    let mail = 'ahmad@gmail'
    !expect(mail).toMatch(/@/)
})

test('test undefiend ', () => {
    let n;
    !expect(n).toBeUndefined()
})

test('test object ', () => {
    let ob = {
        name: "asma",
        age: 21
    };
    expect(ob).toHaveProperty("age")
})
