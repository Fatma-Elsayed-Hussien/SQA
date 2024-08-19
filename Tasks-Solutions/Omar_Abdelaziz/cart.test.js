var arr = [
    {
        id : 1,
        name : "shirt",
        price : 150,
        quantity : 2,
        addedToFav : true,
        totalPrice : 300
    },
    {
        id : 2,
        name : "T-shirt",
        price : 200,
        quantity : 4,
        addedToFav : false,
        totalPrice : 800
    },
    {
        id : 3,
        name : "jacket",
        price : 550,
        quantity : 2,
        addedToFav : true,
        totalPrice : 1100
    }
  ]
  test('Check the data types and values of each property', () => {
    arr.forEach(item => {
        expect(item).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(Number),
                quantity: expect.any(Number),
                addedToFav: expect.any(Boolean),
                totalPrice: expect.any(Number)
            })
        );
        expect(item.id).toBeGreaterThan(0);
        expect(item.price).toBeGreaterThan(50);
        expect(item.totalPrice).toBeGreaterThan(50);
        expect(item.quantity).toBeGreaterThan(0);
        expect(item.totalPrice).toBe(item.price * item.quantity);
    });
});  
