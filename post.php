<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'Survey_user';            // mysql用户名
$dbpass = 'surveypw';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");
$name=$_POST['name'];
$id=$_POST['id'];
$add=$_POST['address']!="undefined"?$_POST['address']:"";
$tel=$_POST['tel']?:'0';
$sql = "INSERT INTO `survey` (`name`,`id`,`address`,`tel`) VALUES('$name','$id','$add',$tel);";
mysqli_select_db( $conn, 'test' );
$retv = mysqli_query( $conn, $sql );
if(! $retv )
{
    die('无法插入数据: ' . mysqli_error($conn));
}
echo '<!DOCTYPE html>
<html>
<head>
    <title>提交成功</title>
</head>
<body>
    <center>
        <img src="./提交成功.png" alt="提交成功">
        <br>
        <img src="./飞机娘.jpg" alt="飞机娘">
    </center>
</body>
</html>';

mysqli_close($conn);
?> 
