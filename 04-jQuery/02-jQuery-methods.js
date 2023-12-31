
// jQuery - DOM elements methods - 

// add / remove / toggle CSS classes 

// $('#jq-demo').click(() => {
//     $('#jq-para').toggleClass('my-style my-style-2 my-style-3');
//     $('#jq-para-2').removeClass('my-style');
//     $('#jq-para-3').toggleClass('my-style');
// });

// text values 

// $('#jq-demo').click(() => {

//     let myText = $('#jq-para-2').text();
//     $('#jq-para').text(myText);

// });

// $(div).html()



// jQuery selectors -

// $()

// $('#elem-id')
// $('.elem-class')
// $(element)
// $(p)
// $('p:class-name')
// $('*')
// $(tr)
// $('tr:even')
// $('tr:odd')


// DOM events

// $(selector).event(action)

// text()
// html()
// val()

// attr()


// add remove elements 

// add()
// remove()

// $('#jq-demo').click(() => {
//     $('#jq-div').remove();
//     // $('#jq-div').hide();
// });

// append, prepend 

// $('#jq-demo').click(() => {

//     $('#jq-para').append('<p>jQuery Demo appended</p>');
//     $('#jq-para').prepend('<p>jQuery Demo prepended</p>');
//     $('#jq-para').append('<p>jQuery Demo appended</p>', '<p>jQuery Demo appended</p>', '<p>jQuery Demo appended</p>');
//     $('#jq-para').before('<p>jQuery Demo appended</p>');
//     $('#jq-para').after('<p>jQuery Demo appended</p>');

// });

// remove and empty 

// $('#jq-demo').click(() => {

//     // $('#jq-div').remove();
//     // $('#jq-div').empty();
//     // $('p').remove();
//     $('p').remove('.my-style');

// });


// Chaining jQuery actions 

// $('#jq-demo').click(() => {

//     // $('#jq-para-2').text('Some text added');
//     // $('#jq-para-2').addClass('my-style');

//     $('#jq-para-2')
//         .text('Some text added')
//         .addClass('my-style');
// });


// animation 

// $('#jq-demo').click(() => {

//     $('#jq-para-2')
//         .hide(2000)
//         .fadeIn(2000);
// });

// traversal 


$('#jq-demo').click(() => {

    // $('#jq-child-1').children().remove();
    $('#jq-child-1').parent().remove();

});



