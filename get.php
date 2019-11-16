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
 
$sql = 'SELECT * FROM Survey';
 
//mysqli_select_db( $conn, 'Survey' );
mysqli_query($conn,"use test;");
$retv = mysqli_query( $conn, $sql );
if(! $retv )
{
    die('无法读取数据: ' . mysqli_error($conn));
}
echo '<h2>当前已报名人员<h2>';
echo '<table border="1"><tr><td>姓名</td><td>学号</td><td>地址</td><td>电话</td></tr>';
$sum=0;
while($row = mysqli_fetch_array($retv, MYSQLI_ASSOC))
{
    echo "<tr><td> {$row['name']}</td> ".
         "<td>{$row['id']} </td> ".
         "<td>{$row['address']} </td> ".
         "<td>{$row['tel']} </td> ".
         "</tr>";
    $sum++;
}
echo '</table><br>共'.$sum.'人';
mysqli_close($conn);
?> 
