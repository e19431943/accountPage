<?php
$serverName = "localhost";
$DB_User = "root";
$DB_Password = "we1219";
$DB_Name = "firsttest";
$DB_Post ="3307";

if($_SERVER['REQUEST_METHOD']=='POST')
{
    $account = $_POST['inputId'];
    $password =$_POST['inputPassword'];
    $sql = "SELECT UserName FROM account WHERE UserId = 'admin' AND Password = 'we1219'";
    /*連接資料庫中 */
    $connect = mysqli_connect($serverName,$DB_User,$DB_Password,$DB_Name,$DB_Post);
    
    /*檢查連線 */
    if(mysqli_connect_errno())
    {
        die("錯誤代碼".mysqli_connect_error()) ;
    }
    $result = mysqli_query($connect,$sql);

    /*判斷有沒有值 */
    if(mysqli_num_rows($result) >0)
    {
        $row = mysqli_fetch_array($result,MYSQLI_NUM);
        echo json_encode($row[0]);
    }
    else
    {
        die("error");

    }
}
else
{
    die("錯誤");
}




?>