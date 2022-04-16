test('test myobj', () => {
    let ob = {
        name: "asma",
        age: 21
    }
    expect(ob).toHaveProperty("age", 21)
})