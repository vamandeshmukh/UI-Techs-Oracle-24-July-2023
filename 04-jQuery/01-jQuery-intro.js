
// // without jQuery 

// document.addEventListener('DOMContentLoaded', () => {
//     let button = document.getElementById('jq-demo');
//     let paragraph = document.getElementById('jq-para');
//     button.addEventListener('click', () => {
//         paragraph.textContent = 'Text changed without jQuery';

//     })
// });

// with jQuery 

$(document).ready(
    () => {
        $('#jq-demo').click(() => {
            $('#jq-para').text('Text changed with jQuery');
            // $('#jq-para').hide();
        });
    }
);

// syntax
// $(document).ready(
//     () => {
//     $('#element-id').eventName(() => {
//         action to perform on the event
//     });
//     }
// );









