/* 👉Список елементів:

Тег span з id ”s1”;
Тег b з класом ”s2”;
Тег i, вкладений в блок “second”
Тег q з вспливаючою підказкою
Ссилка, яка відкривається в новій вкладці
Тег span з класом extra, який є другий по послідовності на сторінці. -->
       

 */
/* 
$(document).ready(function(){
    let message =`$('#s1').text()$('b.s2').text()
    $('second>i').text()$('q[title])$('a[target="_blank"])$('span.extra:nth-child(2)')`
    
 
}) */

console.log('test', $('span.extra:nth-child(2)').text());