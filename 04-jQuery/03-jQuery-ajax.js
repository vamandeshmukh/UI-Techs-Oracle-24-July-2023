
// https://jsonplaceholder.typicode.com/posts/1

// // using AJAX 

const getBlogPost = () => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

        xhr.send();

        xhr.onload = () => {

            const resp = JSON.parse(xhr.responseText);
            document.getElementById('title').innerHTML = resp.title;
            document.getElementById('body').innerHTML = resp.body;
        };

        xhr.onerror = () => {
            console.log('error');
        };
};


// using jQuery and AJAX 

$(document).ready(() => {
    $('#blog-btn').on('click', () => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'GET',
            dataType: 'json',
            success: (resp) => {
                $('#title').text(resp.title);
                $('#body').text(resp.body);
            },
            error: () => { }
        });
    });
});




