/* 👉Список елементів:

Тег span з id ”s1”;
Тег b з класом ”s2”;
Тег i, вкладений в блок “second”
Тег q з вспливаючою підказкою
Ссилка, яка відкривається в новій вкладці
Тег span з класом extra, який є другий по послідовності на сторінці. -->
       

 */

$(document).ready(function(){
    let message =$('#s1').text()+$('b.s2').text()+$('second>i').text()+$('q[title]').text()+$('a[target="_blank"]').text()+$('span.extra').eq(1).text();
    alert(message); 
}) 

