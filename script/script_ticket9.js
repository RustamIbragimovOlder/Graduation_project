ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/No_image.jpg",
            "question": "Какое удостоверение достаточно иметь водителю, управляющему легковым автомобилем с прицепом, разрешенная максимальная масса которого не превышает 750 кг?",
            "answer_1": "1. На право управления транспортным средством подкатегории «B1»",
            "correct_1": "inCorrect",
            "answer_2": "2. На право управления транспортным средством категории «В»",
            "correct_2": "correct",
            "answer_3": "3. На право управления транспортным средством категории «BE»",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Согласно статьи 25 п.1 Федерального закона «О безопасности дорожного движения» водители, имеющие право на управление транспортными средствами категории «В» могут управлять ими также при наличии прицепа, разрешённая максимальная масса которого не превышает 750 кг, т.е. без отметки в графе «Е». В данном случае необходимо иметь удостоверение категории «В»."
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket9_question2_img.jpg",
            "question": "Знаки предупреждают Вас о том, что:",
            "answer_1": "1. На протяжении 150 м возможно появление пешеходов на проезжей части",
            "correct_1": "inCorrect",
            "answer_2": "2. Через 150 м находится пешеходный переход",
            "correct_2": "correct",
            "answer_3": "3. Через 150 м находится пешеходная дорожка",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Под знаком 1.22 «Пешеходный переход» установлена табличка 8.1.1 «Расстояние до объекта», указывающая расстояние до опасного участка, о котором информирует предупреждающий знак. («Дорожные знаки»)"
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket9_question3_img.jpg",
            "question": "Вам разрешено продолжить движение:",
            "answer_1": "1. Только в направлении Б",
            "correct_1": "correct",
            "answer_2": "2. В направлениях А или Б",
            "correct_2": "inCorrect",
            "answer_3": "3. В направлениях Б или В",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Согласно знаку 4.3 «Круговое движение» Вы выезжаете на перекрёсток, движение по которому разрешается только в направлении стрелок, изображённых на знаке. Встречное движение по траектории «В» запрещено. Поворот направо по траектории «А» запрещает знак 3.18.1 «Поворот направо запрещён». Можете из указанных направлений продолжить движение только по траектории «Б». («Дорожные знаки»)"
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket9_question4_img.jpg",
            "question": "Какие из указанных знаков запрещают движение транспортных средств, скорость которых по технической характеристике или их состоянию менее 40 км/ч?",
            "answer_1": "1. Только А",
            "correct_1": "inCorrect",
            "answer_2": "2. Только В",
            "correct_2": "inCorrect",
            "answer_3": "3. А и Б",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Что запрещено на дорогах, обозначенных знаком «А» - 5.1 «Автомагистраль», запрещено и на дорогах, обозначенных знаком «Б» - 5.3 «Дорога для автомобилей». На данных дорогах запрещается движение транспортных средств, скорость которых по технической характеристике или их состоянию менее 40 км/ч. Знак «В» - 6.2 «Рекомендуемая скорость» распространяет действие только на участок дороги, никаких ограничений на движение с большей или меньшей скоростью по данному участку не вводит. («Дорожные знаки», пункт 16.1 ПДД)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/ticket9_question5_img.jpg",
            "question": "Можно ли Вам выполнить обгон при наличии данной разметки?",
            "answer_1": "1. Можно",
            "correct_1": "correct",
            "answer_2": "2. Можно, если скорость трактора менее 30 км/ч",
            "correct_2": "inCorrect",
            "answer_3": "3. Нельзя",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Разметку 1.11 разрешается пересекать со стороны прерывистой линии, а также и со стороны сплошной, но только при завершении обгона или объезда препятствия. В данной ситуации Вам выполнить обгон можно, независимо от скорости трактора. («Горизонтальная разметка»)"
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