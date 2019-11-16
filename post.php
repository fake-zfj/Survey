<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");
$name=$_POST['name'];
$id=$_POST['id'];
$add=$_POST['address'];
$sql = "INSERT INTO `survey` (`name`,`id`,`address`) VALUES('$name',$id,'$add');";
mysqli_select_db( $conn, 'test' );
$retv = mysqli_query( $conn, $sql );
if(! $retv )
{
    die('无法插入数据: ' . mysqli_error($conn));
}
echo '感谢完成问卷';

mysqli_close($conn);
?> 
