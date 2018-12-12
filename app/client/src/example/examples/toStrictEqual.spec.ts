let data = {
    "code": 200,
    "error": false,
    "status": "OK",
    "message": "SUCCESS",
}

test('Testeando toStrictEqual', () => {
    let trama = {
        "code": 200,
        "error": false,
        "status": "OK",
        "message": "SUCCESS",
    };
    expect(data).toStrictEqual(trama);
  });