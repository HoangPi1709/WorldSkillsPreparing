<?php
$sourceImage = './image.jpg';
$watermarkImage = './logo.png';

$image = imagecreatefromjpeg($sourceImage);

$watermark = imagecreatefrompng($watermarkImage);

$imageWidth = imagesx($image);
$imageHeight = imagesy($image);
$watermarkWidth = imagesx($watermark);
$watermarkHeight = imagesy($watermark);

$positionX = $imageWidth - $watermarkWidth - 10; 
$positionY = $imageHeight - $watermarkHeight - 10; 


imagecopy($image, $watermark, $positionX, $positionY, 0, 0, $watermarkWidth, $watermarkHeight);

imagejpeg($image, './new.jpeg');

imagedestroy($image);
imagedestroy($watermark);

echo 'Successful';
?>