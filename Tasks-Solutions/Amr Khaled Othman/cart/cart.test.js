var arr = [
  {
      id : 1,
      name : "shirt",
      price : 150,
      quantity : 2,
      addedtoFav : true,
      totalPrice : 300
  },
  {
      id : 2,
      name : "T-shirt",
      price : 200,
      quantity : 4,
      addedtoFav : false,
      totalPrice : 400
  },
  {
      id : 3,
      name : "jacket",
      price : 550,
      quantity : -1,
      addedtoFav : false,
      totalPrice : 180
  }
]
test('Check the data types of each property', () => {
    arr.map(item => {
        expect(item).toEqual(
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
    arr.map(item => {
        expect(item.id).toBeGreaterThan(0);
        expect(item.price).toBeGreaterThan(50);
        expect(item.totalPrice).toBeGreaterThan(50);
        expect(item.quantity).toBeGreaterThan(0);
    });
});

test('ensures that the total price for object is calculated correctly based on the quantity and price', () => {
    arr.map(item => {
        expect(item.totalPrice).toBe(item.price*item.quantity);
    });
});