# Домашнее задание. JS. Урок 17.

## Задача 1 (Внешние ссылки)

Сделайте желтыми внешние ссылки, добавив им класс external.
Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.

```html
<style>
    .external {
        background-color: yellow
    }
</style>

<a name="list">список</a>
<ul>
    <li><a href="http://google.com">http://google.com</a></li>
    <li><a href="/tutorial">/tutorial.html</a></li>
    <li><a href="local/path">local/path</a></li>
    <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
    <li><a href="http://nodejs.org">http://nodejs.org</a></li>
    <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>
```

## Задача 2 (Календарик)

Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).

Календарь должен быть таблицей, где каждый день — это `TD`. У таблицы должен быть заголовок с названиями дней недели, каждый день — `TH`.

Синтаксис: `createCalendar(id, year, month).`

Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь элемента с указанным `id`.

Например: `createCalendar("cal", 2012, 9)` сгенерирует в `<div id='cal'></div>` следующий календарь:

![calendar.png](https://raw.githubusercontent.com/puzankov/javascript_hw/master/lesson17/calendar.png)

## Задача 3 (Часы)

Неоходимо создать часы на js (часы:минуты:секунды).

Сделайте так чтобы с каждым перключением цифры (в часах, минутах и секундах) изменяло цвет числа рандомным образом.

Пару вариантов как это выглядит:

![clock1.png](https://raw.githubusercontent.com/puzankov/javascript_hw/master/lesson17/clock1.png)

![clock2.jpg](https://raw.githubusercontent.com/puzankov/javascript_hw/master/lesson17/clock2.jpg)