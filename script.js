/*Синтаксис
for(начало; условие; шаг){

}
//тело цикла
*/
//вывести в консоль числа от 0 до 3

for (let a = 0; a <= 3; a++) {
    console.log(a);
}

/*i=0 0<3
1
1+0=1
2<=3-yes
2
2+1=3
3<=3-yes
3
3+1=4
4<=3-no



объявляем переменную (счетчик)=> проверяем условие => выполняем телщ цикла => шаг (как правило увеличение на =>
проверка условия => тело цикла => шаг ююю И так пока условие не станет false)
*/


/*
for (let i = 0; i < 5; i++) {
    let pass = prompt('ведите пароль');
    if (pass == "qwerty") {
        alert("Добро пожаловать");
        break;
    } else {
        alert('неверный пароль')
    }
}
*/



console.log('Ввод нечотных  чисел от 0 до 10')
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}







































