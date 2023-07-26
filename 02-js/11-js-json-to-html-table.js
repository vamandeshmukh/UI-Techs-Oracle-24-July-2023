
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((resp) => {
        return resp.json();
    })
    .then((res) => {
        res.forEach((user) => {
            console.log(user);
        });
    })
    .catch(err => console.log(err));

