
$.ajax(
    {
        type:"POST",
        url:"../php/login.php",
        success(json)
        {
            $("#showName").html(json);

        }

    }   
);