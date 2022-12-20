const input = document.querySelector('input')
const btn = document.querySelector('button')

//=====================================================================//
//1) Проверка ТОЛЬКО ЦИФРЫ:
btn.addEventListener('click', () => {
   input.value.match(/^\d+$/) ? console.log('Успешно') : console.log('Ошибка!')
   input.value = ''
   input.focus()
})

//=====================================================================//

// //2) Проверка ТОЛЬКО БУКВЫ ИЗ АЛФАВИТА АНГЛИЙСКОГО ЯЗЫКА: 
// btn.addEventListener('click', () => {
//    input.value.match('^[a-zA-Z]+$') ? console.log('Успешно') : console.log('Ошибка!')
//    input.value = ''
//    input.focus()
// })

// //=====================================================================//

// //3) ПРОВЕРКА ТОЛЬКО БУКВЫ В ВЕРХНЕМ РЕГИСТРЕ ИЗ АЛФАВИТА АНГЛИЙСКОГО ЯЗЫКА:
// btn.addEventListener('click', () => {
//    input.value.match('^[A-Z]+$') ? console.log('Успешно') : console.log('Ошибка!')
//    input.value = ''
//    input.focus()
// })
