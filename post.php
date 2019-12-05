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
$sql = "INSERT INTO `survey` (`name`,`id`,`address`,`tel`) VALUES('$name',$id,'$add',$tel);";
mysqli_select_db( $conn, 'test' );
$retv = mysqli_query( $conn, $sql );
if(! $retv )
{
    die('无法插入数据: ' . mysqli_error($conn));
}
echo '感谢完成问卷';

mysqli_close($conn);
?> 
