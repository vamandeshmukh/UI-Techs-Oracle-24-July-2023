
// const url = 'https://jsonplaceholder.typicode.com/users';
// const userData = document.getElementById('user-data');
// const tableData = document.getElementById('table-data');
// const tableHeaders = document.getElementById('table-headers');

// const getUserData = () => {
//     let temp = '';
//     let temp2 = '';
//     let temp3 = '';

//     fetch(url)
//         .then((resp) => {
//             return resp.json();
//         })
//         .then((res) => {
//             res.forEach((user) => {
//                 temp2 = user;
//                 console.log(user);
//                 temp += `<tr> 
//                 <td>${user.id} </td>
//                 <td>${user.name} </td>
//                 <td>${user.username} </td>
//                 <td>${user.email} </td>
//                 <td>${user.address.city} </td>
//                 <td>${user.phone} </td>
//                 <td>${user.website} </td>
//                 <td>${user.company.name} </td>
//                 </tr>`;
//             });

//             Object.keys(temp2).forEach(elem => temp3 += `<th>${elem}</th>`);
//             tableHeaders.innerHTML = temp3;
//             tableData.innerHTML = temp;
//         })
//         .catch(err => console.log(err));
// };

// getUserData();


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
                temp += `<tr> 
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.company.name}</td>
                </tr>`;
            });
            tableData.innerHTML = temp;
        })
        .catch(err => console.log(err));
};

getUserData();

// The above code is an example of GET request.
// To make a POST request -
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

