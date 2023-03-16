let random_array = [];  //массив для заполнения случайными числами
for(let i=0; i<30; i++)
{
    random_array[i] = GetRandomInt (100); //заполнение массива случайными числами
}

let table = document.createElement ('table'); //создание узла таблицы

let html = '<tbody>'; //символьная строка с будущим набором тегов tr и td для первичного формирования таблицы 5*6
for (let i = 0; i < 6; i++) //цикл формирования строк tr таблицы 
{
    html += '<tr>';
    for (let j=0; j<5; j++) //цикл фомирования ячеек td таблицы
    {
       let k = random_array[i*5+j]; 
       if (k >= 50) 
        {
        html += '<td class="alert">'; //раскраска ячейки, если число >=50
        }
       else
       {
        html += '<td>';
       } 
        html += k;
        html += '</td>';
    }
    html += '</tr>';
}
table.innerHTML = html + '</tbody>'; //окончательное формирование строки HTML-кода

document.body.append(table); //вставка сформированного HTML-кода в тело


//-----------------------------------
//Функция случайного числа
//-----------------------------------
function GetRandomInt (max)
{
	return Math.floor(Math.random() * max);				//возвращает случайное число от 0 до max
}
//-----------------------------------

//-----------------------------------
//Функция добавления случайного числа в таблицу. Вызывается по нажатии кнопки
//-----------------------------------
function AddNumber()
{
    let number = GetRandomInt (99); //получение случайного числа
    
    var elem = document.querySelectorAll ("td"); //получение всех узлов-ячеек
   // alert(elem.length);

    if (elem.length % 5 == 0) //если количество ячеек делится без остатка, формирование новой строки в таблице
    {
        tr = document.createElement('tr');
        table.append(tr);
        CreateCell(tr, number); //добавление ячейки в новую строку
    }
    else                       //если количество ячеек не делится без остатка, добавление ячейки в неполную строку
    {    
        CreateCell(tr, number);
    }
}

//-----------------------------------
//Функция добавления ячейки td в ряд tr и размещение числа
//-----------------------------------

function CreateCell(tr, number)
{
    let td = document.createElement('td');
    tr.append(td);
    if (number >= 50)
    {
        td.classList.add('alert');
    }
    td.append(number);
}
