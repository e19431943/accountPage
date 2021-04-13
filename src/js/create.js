$('#createForm').submit(function() 
{ 
    console.log("r5es");
    changeInfoPage(1);
    /*判斷的部分 */
    isEmpty();
    /*傳值部分*/
    $.ajax({
        type: "POST",
        url: "./src/php/create.php",
        data: $("#createForm").serialize(), //把清單中有name值轉成查詢字串
        dataType: "json",
        success: function (json) {
            $("#showName").html(json);
        }
    });

    return false;
});

/*判斷空值 */
function isEmpty()
{
    let user = $('#userName').val();
    let id = $('#createId').val();
    let pass = $('#createPassword').val();
    let chPass = $('#checkPassword').val();
    
    if( user!="" && id != "" && pass != ""  && chPass != "")
    {
        if(pass === chPass)
        {
            $('#showName').html('創建完成');
        }
        else
        {
            $('#showName').html('密碼確認失敗');
        }

        
    }
    else{
        $('#showName').html('欄位不能為空');
    }
}