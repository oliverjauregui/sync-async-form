$(document).ready(function () {

  alert("Hola papu");
  $('input[type="submit"]').on("click", function(event) {
    event.preventDefault();

    var first_name = $('#first_name').val();

    var last_name = $('#last_name').val();

    var gender = $('input[name="gender"]:checked').val();

    var interest = $('input[name="interest"]:checked').val();

    // $.ajax('find.html' , {
    //     methot: 'post',
    //     data: {
    //         'first_name' : first_name
    //     }
    // });

  // methot   url       nombre parm.   valor param.
    $.post('find.html', {'first_name' : first_name});

    //$.get('find.html', {'first_name' : first_name}); for get

    $.post('find.html', {'last_name' : last_name});

    $.post('find.html', {'gender' : gender});

    $.post('find.html', {'interest' : interest});

  });
})
