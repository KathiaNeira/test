test('Testeando toMatch' , ()  => {
    let id1 = '155-60-7723';
    let id2 = '15-60-7723';
    let socialSecurityNumberFormat = /\d{3}-\d{2}-\d{4}/;
    expect(id1).toMatch(socialSecurityNumberFormat); // true
    // expect(id2).toMatch(socialSecurityNumberFormat); // false
})

