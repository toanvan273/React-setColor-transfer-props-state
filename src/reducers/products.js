let initialState = [
    {
        id: 1,
        name: "Iphone 6 Plus",
        price: 500,
        status: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S7",
        price: 600,
        status: false
    },
    {
        id: 3,
        name: "Oppo F1",
        price: 300,
        status: true
    },
]

const products = (state = initialState, action) => {
    switch(action.type){
        default:
            return [...state]
    }
}
export default products