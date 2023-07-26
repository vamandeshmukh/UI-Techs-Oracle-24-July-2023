
const url = 'https://jsonplaceholder.typicode.com/users';
const userData = document.getElementById('user-data');
const tableData = document.getElementById('table-data');

const getUserData = () => {
    let temp = '';

    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((res) => {
            res.forEach((user) => {
                console.log(user);
                temp += `<tr> <td>${user.name} </td>
                <td>${user.username} </td>
                <td>${user.email} </td></tr>`;
            });
            tableData.innerHTML = temp;
        })
        .catch(err => console.log(err));
};

getUserData();

