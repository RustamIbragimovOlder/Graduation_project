ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/ticket3_question1_img.jpg",
            "question": "Выезжая с грунтовой дороги на перекресток, Вы попадаете:",
            "answer_1": "1. На главную дорогу",
            "correct_1": "correct",
            "answer_2": "2. На равнозначную дорогу, поскольку отсутствуют знаки приоритета",
            "correct_2": "inCorrect",
            "answer_3": "3. На равнозначную дорогу, поскольку проезжая часть имеет твердое покрытие перед перекрестком",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Главной является дорога с покрытием по отношению к грунтовой. Перекрёсток неравнозначный. Вы находитесь на второстепенной дороге, выезжать будете на главную. (Пункт 1.2 термин «Главная дорога»)"
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket3_question2_img.jpg",
            "question": "Где Вы должны остановиться?",
            "answer_1": "1. Перед знаком (А)",
            "correct_1": "inCorrect",
            "answer_2": "2. Перед перекрестком (Б)",
            "correct_2": "inCorrect",
            "answer_3": "3. Перед краем пересекаемой проезжей части (В)",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. В случае установки знака 2.5 «Движение без остановки запрещено» непосредственно перед пересечением проезжих частей водитель обязан остановиться у стоп-линии. При её отсутствии (как в данном случае) водитель обязан остановиться перед границей проезжих частей, т.е. не заезжая за линию «В». Имейте в виду, что такие места опасны, часто находятся «под особым контролем» инспекторов ГИБДД. Поэтому всегда выполняйте главное условие - обязательную остановку. Это избавит Вас от конфликтной ситуации и сохранит Вашу собственную безопасность. («Дорожные знаки»)"
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket3_question3_img.jpg",
            "question": "Вам необходимо двигаться со скоростью не более 40 км/ч:",
            "answer_1": "1. Только во время дождя",
            "correct_1": "inCorrect",
            "answer_2": "2. Во время выпадения осадков (дождя, града, снега)",
            "correct_2": "inCorrect",
            "answer_3": "3. Во всех случаях, когда покрытие проезжей части влажное",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Табличка 8.16 «Влажное покрытие» указывает, что действие знака распространяется на период времени, когда покрытие проезжей части влажное. («Дорожные знаки»)"
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket3_question4_img.jpg",
            "question": "Какой из указанных знаков устанавливается в начале дороги с односторонним движением?",
            "answer_1": "1. Только А",
            "correct_1": "inCorrect",
            "answer_2": "2. Только Б",
            "correct_2": "correct",
            "answer_3": "3. Б или Г",
            "correct_3": "inCorrect",
            "answer_4": "4. Б или В",
            "correct_4": "inCorrect",
            "hint": "Правильный ответ: 2. Знак «Б» - 5.5 «Дорога с односторонним движением». («Дорожные знаки»)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/ticket3_question5_img.jpg",
            "question": "Можно ли Вам остановиться в этом месте для посадки или высадки пассажиров?",
            "answer_1": "1. Можно",
            "correct_1": "inCorrect",
            "answer_2": "2. Можно, если при этом не будут созданы помехи движению маршрутных транспортных средств",
            "correct_2": "correct",
            "answer_3": "3. Нельзя",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. В данном случае место остановки маршрутных транспортных средств обозначено соответствующим знаком и жёлтой зигзагообразной разметкой 1.17.1. Остановка в указанном месте допускается, если Вы произведёте ее для посадки или высадки пассажиров и в это время не создадите помех движению маршрутных транспортных средств или ТС, используемых в качестве легкового такси. («Дорожные знаки», «Горизонтальная разметка», пункт 12.4 ПДД)"
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