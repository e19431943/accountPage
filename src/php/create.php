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
    $checkSql = "SELECT UserId FROM account WHERE UserId ='{$account}'";
    try
    {
        $connect =new PDO($dsn,$DB_User,$DB_Password);
        $connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $state = $connect->prepare($checkSql);
        $state->execute();
        $result =$state->fetchAll(PDO::FETCH_NUM);
        if(empty($result[0]))
        {
            $sql ="INSERT INTO account (UserName, UserId, Password, CreateDate) VALUES ('{$userName}', '{$account}', '{$password}', '{$date}')";
            $connect->exec($sql);
            echo json_encode("帳號新建成功");
        }
        else
        {
            echo json_encode("帳號已使用");
        }
        
        /*
        
        */



    }
    catch(PDOException $e)
    {
        echo $checkSql."<br>"."Connect failed".$e->getMessage();
    }


}


$connect =null;

?>