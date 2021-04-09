$("#loginForm").submit(function () { //在submit傳輸之前觸發
    $.ajax(
        {
            type:"POST",
            url:"./src/php/login.php", //這個路徑要看index的位置來決定
            dataType:'json',
            data:$("#loginForm").serialize(),
            success(json)
            {
                console.log(json);
                $("#showName").html(json);
    
            }
    
        }   
    );
    return false;
});




