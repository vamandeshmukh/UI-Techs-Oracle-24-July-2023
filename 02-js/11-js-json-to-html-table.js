
const url = 'https://jsonplaceholder.typicode.com/users';
const userData = document.getElementById('user-data');

const getUserData = () => {
    let temp = '';

    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((res) => {
            res.forEach((user) => {
                console.log(user);
                temp += `<p>${user.username}</p>`;
            });
            userData.innerHTML = temp;
        })
        .catch(err => console.log(err));
};

getUserData();

