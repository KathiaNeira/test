test('Testeando objeto' , ()  => {
    expect(1 + 1).toBe(2) // true
    expect('on' + 'e').toBe('one') // true
    expect(1 === 1).toBe(true) // true
    
    let oneObj = {one: 1};
    expect(oneObj).toBe(oneObj) // true
    // expect(oneObj).toBe({one: 1}) // false!
})

