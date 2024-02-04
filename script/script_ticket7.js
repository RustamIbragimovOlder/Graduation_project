ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/No_image.jpg",
            "question": "Может ли владелец мотоцикла с рабочим объемом двигателя внутреннего сгорания, не превышающим 125 см3, и максимальной мощностью, не превышающей 11 квт, передавать управление этим транспортным средством в своем присутствии другому лицу, имея страховой полис обязательного страхования гражданской ответственности на бумажном носителе или в виде электронного документа либо его копии на бумажном носителе?",
            "answer_1": "1. Может при наличии у этого лица водительского удостоверения на право управления транспортным средством категории «A» или подкатегории «А1»",
            "correct_1": "correct",
            "answer_2": "2. Может при наличии у этого лица водительского удостоверения на право управления транспортным средством подкатегории «B1»",
            "correct_2": "inCorrect",
            "answer_3": "3. Может при наличии у этого лица водительского удостоверения на право управления транспортным средством категории «М»",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Статья 25 п. 7 Федерального закона «О безопасности дорожного движения» не запрещает передачу управления транспортным средством другому лицу, имеющему при себе водительское удостоверение личности данной категории или подкатегории и соответствующий страховой полис или распечатанную на бумажном носителе информацию о заключении соответствующего договора обязательного страхования в виде электронного документа. В данном случае для управления мотоциклом необходимо иметь удостоверение категории А или подкатегории А1."
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket7_question2_img.jpg",
            "question": "О чем информируют Вас эти дорожные знаки?",
            "answer_1": "1. О приближении к перекрёстку, где установлен знак «Уступите дорогу»",
            "correct_1": "inCorrect",
            "answer_2": "2. О приближении к перекрёстку, где установлен знак «Движение без остановки запрещено»",
            "correct_2": "correct",
            "answer_3": "3. О приближении к таможне",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Табличка 8.1.2 «Расстояние до объекта» указывает расстояние от знака 2.4 «Уступите дорогу» до перекрёстка в случае, если непосредственно перед перекрёстком установлен знак 2.5 «Движение без остановки запрещено». («Дорожные знаки»)"
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket7_question3_img.jpg",
            "question": "Разрешено ли Вам остановиться в указанном месте?",
            "answer_1": "1. Запрещено",
            "correct_1": "correct",
            "answer_2": "2. Разрешено только для посадки и высадки пассажиров",
            "correct_2": "inCorrect",
            "answer_3": "3. Разрешено",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Сплошная линия разметки 1.4 жёлтого цвета обозначает места, где запрещена остановка. С 1 марта 2023 года данная разметка может применяться самостоятельно. Из определения зоны действия знака 3.27 «Остановка запрещена», она исключена. В данной ситуации является функционально недействующей. Останавливаться в указанном месте – ЗАПРЕЩЕНО. («Дорожные знаки», «Горизонтальная разметка»)."
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket7_question4_img.jpg",
            "question": "Действие каких знаков из указанных распространяется только до ближайшего по ходу движения перекрёстка?",
            "answer_1": "1. А и В",
            "correct_1": "inCorrect",
            "answer_2": "2. Б и Г",
            "correct_2": "correct",
            "answer_3": "3. В и Г",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Действие знаков: Б – 3.24 «Ограничение максимальной скорости» и Г – 3.28 «Стоянка запрещена» распространяется до ближайшего перекрёстка за ним, а в населённых пунктах при отсутствии перекрёстка – до конца населенного пункта. Действие же знаков: А – 5.31 «Зона с ограничением максимальной скорости» и В - 5.27 «Зона с ограничением стоянки» отменяется соответствующими только им знаками 5.32 «Конец зоны с ограничением максимальной скорости» и 5.28 «Конец зоны с ограничением стоянки». («Дорожные знаки»)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/ticket7_question5_img.jpg",
            "question": "Что обозначают прерывистые линии разметки на перекрёстке?",
            "answer_1": "1. Обязательное направление движения на перекрёстке",
            "correct_1": "inCorrect",
            "answer_2": "2. Полосы движения в пределах перекрёстка",
            "correct_2": "correct",
            "answer_3": "3. Предупреждение о приближении к разметке, разделяющей транспортные потоки противоположных или попутных направлений",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. «Горизонтальная разметка» 1.7 обозначает полосы движения в пределах перекрестка."
        }
    ]`;

const ticketInfo = JSON.parse(ticketData);

function renderTicketInfo(ticketInfo) {
    const ticketBox = document.querySelector('.ticket-box');

    ticketInfo.forEach(item => {
        ticketBox.insertAdjacentHTML('beforeend', `
            <div class="ticket-box_item">
                <p class="ticket-box_item__title">${item.title}</p>
                <img class="ticket-box_item__image" src="${item.image}" alt="">
                <p class="ticket-box_item__question">${item.question}</p>
                <button class="ticket-box_item__answer ${item.correct_1}" id="${item.id}">${item.answer_1}</button>
                <button class="ticket-box_item__answer ${item.correct_2}" id="${item.id}">${item.answer_2}</button>
                <button class="ticket-box_item__answer ${item.correct_3}" id="${item.id}">${item.answer_3}</button>
                <button class="ticket-box_item__answer ${item.correct_4}" id="${item.id}">${item.answer_4}</button>
                <button class="ticket-box_item__hint-btn">Показать подсказку</button>
                <p class="ticket-box_item__hint-text">${item.hint}</p>
            </div>
            `)
        let resultCount = document.getElementById('counter').textContent;

        let correctCount = document.getElementById('counterCorrect').textContent;
        document.querySelectorAll('.correct').forEach(function (e) {
            e.addEventListener('click', function () {
                this.style.backgroundColor = "#A8E4A0";
                correctCount++;
                resultCount++;
                document.getElementById('counterCorrect').textContent = correctCount;
                document.getElementById('counter').textContent = resultCount;
                const id = this.getAttribute('id');
                let buttons = document.getElementsByClassName("ticket-box_item__answer");
                for (const button of buttons) {
                    let buttonId = button.getAttribute('id');
                    if (id === buttonId) {
                        button.disabled = true;
                    }
                }
            })
        });

        let inCorrectCount = document.getElementById('inCounterCorrect').textContent;
        document.querySelectorAll('.inCorrect').forEach(function (e) {
            e.addEventListener('click', function () {
                this.style.backgroundColor = "#F80000";
                inCorrectCount++;
                resultCount++;
                document.getElementById('inCounterCorrect').textContent = inCorrectCount;
                document.getElementById('counter').textContent = resultCount;
                const id = this.getAttribute('id');
                let buttons = document.getElementsByClassName("ticket-box_item__answer");
                for (const button of buttons) {
                    let buttonId = button.getAttribute('id');
                    if (id === buttonId) {
                        button.disabled = true;
                    }
                }
            })
        });
    });
}

renderTicketInfo(ticketInfo);

let navigation = document.querySelector(".navigation");
let slider = document.querySelector(".slider");
// let content = document.querySelector(".slider .content");
let content = document.querySelector(".slider .ticket-box");

let navcount = content.offsetWidth / slider.offsetWidth;
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
for (let i = 1; i <= navcount; i++) {
    let num = document.createElement("span");
    num.className = "num";
    num.dataset.index = i;
    num.textContent = i;
    next.before(num);
}
navigation.firstElementChild.nextSibling.classList.add("selected");
let nums = Array.from(document.querySelectorAll(".num"));

next.addEventListener("click", function () {
    let current = document.querySelector(".selected");
    if (nums.indexOf(current) + 1 < nums.length) {
        nums.forEach((e) => {
            e.classList.remove("selected");
        });
        current.nextElementSibling.classList.add("selected");
        content.style.transform = `translateX(${current.dataset.index * -slider.offsetWidth}px)`;
    }
});
previous.addEventListener("click", function () {
    let current = document.querySelector(".selected");
    if (nums.indexOf(current) > 0) {
        nums.forEach((e) => {
            e.classList.remove("selected");
        });
        content.style.transform = `translateX(${(current.dataset.index - 2) * -slider.offsetWidth}px)`;
        current.previousElementSibling.classList.add("selected");
    }
});
nums.forEach((e) => {
    e.addEventListener("click", function () {
        nums.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
        content.style.transform = `translateX(${nums.indexOf(e) * -slider.offsetWidth}px)`;
    });
});