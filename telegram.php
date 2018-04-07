<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "560665069:AAGDg2ITF7789I2irKtLxaIp8wNQZjR-yvQ";
$chat_id = "-278524315";
$arr = array(
	'Имя пользователя: 🙋‍♂️' => $name,
	'Телефон: 📱' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "  ".$key."  ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id} $parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
	header('Location: thank-you.html');
} else {
	echo "Error";
}


 ?>