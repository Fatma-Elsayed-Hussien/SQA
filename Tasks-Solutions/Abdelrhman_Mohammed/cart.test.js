var arr = [
    {
        id: 10,
        name: "pants",
        price: 300,
        quantity: 3,
        addedtoFav: false,
        totalPrice: 900
    },
    {
        id: 20,
        name: "socks",
        price: 50,
        quantity: 10,
        addedtoFav: true,
        totalPrice: 500
    },
    {
        id: 30,
        name: "hat",
        price: 200,
        quantity: 2,
        addedtoFav: true,
        totalPrice: 400
    }
]

test('Check the data types of each property', () => {
    arr.forEach(el => {
        expect(el).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(Number),
                quantity: expect.any(Number),
                addedtoFav: expect.any(Boolean),
                totalPrice: expect.any(Number)
            })
        );
    });
});
  
  test('Validate the values for price and quantity', () => {
      arr.forEach(el => {
          expect(el.id).toBeGreaterThan(0);
          expect(el.price).toBeGreaterThanOrEqual(50);
          expect(el.totalPrice).toBeGreaterThan(50);
          expect(el.quantity).toBeGreaterThan(0);
      });
  });
  
  test('ensures that the total price for object is calculated correctly based on the quantity and price', () => {
      arr.forEach(el => {
          expect(el.totalPrice).toBe(el.price*el.quantity);
      });
  });