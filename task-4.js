let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
            {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
            },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let newData = {
    ...data,
    hobby: ['Hiking', 'Swimming', 'Programming']
};

newData.name = 'Muhammad Zaqi Al-Quraisyi';
newData.email = 'zaqijr7@gmail.com';

const {street, city} = newData.address;

console.log(street);
console.log(city);
    