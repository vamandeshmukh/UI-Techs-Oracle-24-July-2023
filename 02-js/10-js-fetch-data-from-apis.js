
const url = 'https://jsonplaceholder.typicode.com/vaman';

fetch(url)
    .then((resp) => {
        return resp.json();
    })
    .then((res) => {
        console.log(res);
    })
    .catch(err => console.log(err));

