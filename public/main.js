$(document).ready(function () {

  alert("Hola papu");
  $('input[type="submit"]').on("click", function(event) {
    event.preventDefault();

    var first_name = $('#first_name').val();

    // $.ajax('find.html' , {
    //     methot: 'post',
    //     data: {
    //         'first_name' : first_name
    //     }
    // });

  // methot   url       nombre parm.   valor param.
    $.get('find.html', {'first_name' : first_name});

    $.post('find.html', {'first_name' : first_name});

  });
})
