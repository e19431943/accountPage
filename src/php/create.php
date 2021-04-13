<?php
$DB_Driver ="mysql";
$serverName = "localhost";
$DB_User = "root";
$DB_Password = "we1219";
$DB_Name = "firsttest";
$DB_Port ="3307";
$dsn ="$DB_Driver:host=$serverName;dbname=$DB_Name;port=$DB_Port";
date_default_timezone_set("Asia/Taipei");

if($_SERVER['REQUEST_METHOD'] == 'POST') //判斷METHOD是否為post,如果有人用GET來丟值時，才不會被截取
{
    $userName = $_POST['userName'];
    $account = $_POST['createId'];
    $password = $_POST['createPassword'];
    $date = date("Y-m-d");
    
    try
    {
        $connect =new PDO($dsn,$DB_User,$DB_Password);
        $connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $sql ="INSERT INTO account (UserName, UserId, Password, CreateDate) VALUES ('{$userName}', '{$account}', '{$password}', '{$date}')";
        $connect->exec($sql);
        echo "Connect successfully";
    }
    catch(PDOException $e)
    {
        echo $sql."<br>"."Connect failed".$e->getMessage();
    }


}


$connect =null;

?>