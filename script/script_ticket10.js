ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/ticket10_question1_img.jpg",
            "question": "Главная дорога показана:",
            "answer_1": "1. Только на левом верхнем рисунке",
            "correct_1": "inCorrect",
            "answer_2": "2. На левом верхнем и нижнем рисунках",
            "correct_2": "correct",
            "answer_3": "3. На всех рисунках",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Главная дорога показана на левом верхнем и нижнем рисунках, на которых перед перекрестком имеются знаки приоритета. На правом верхнем рисунке перед перекрестком установлен знак 6.8.2 «Тупик», который является информационным знаком, данный перекресток является равнозначным. (Пункт 1.2 термин «Главная дорога». «Дорожные знаки»)"
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket10_question2_img.jpg",
            "question": "Какие из указанных знаков распространяют своё действие только на период времени, когда покрытие проезжей части влажное?",
            "answer_1": "1. Только А",
            "correct_1": "correct",
            "answer_2": "2. А и Б",
            "correct_2": "inCorrect",
            "answer_3": "3. Все",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Только комбинация знаков «А» - 3.24 «Ограничение максимальной скорости» с табличкой 8.16 «Влажное покрытие», указывающей, что действие знака распространяется на период, когда покрытие проезжей части влажное - является правильным ответом. Знак «Б» - 1.18 «Выброс гравия» - предупреждает об участке дороги, на котором возможен выброс гравия, щебня и тому подобного из-под колёс транспортных средств. Знак «В» - 1.15 «Скользкая дорога» - предупреждает об участке дороги с повышенной скользкостью проезжей части. Причиной этого может быть выпадение снега, обледенение, разлив битума при производстве дорожных работ и т. п. («Дорожные знаки»)"
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket10_question3_img.jpg",
            "question": "Разрешается ли Вам поставить автомобиль на стоянку в указанном месте?",
            "answer_1": "1. Разрешается",
            "correct_1": "inCorrect",
            "answer_2": "2. Разрешается, если Вы проживаете рядом с этим местом",
            "correct_2": "inCorrect",
            "answer_3": "3. Запрещается",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Табличка 8.2.2 «Зона действия» указывает, что зона действия знака 3.28 «Стоянка запрещена» имеет протяжённость 50 м от знака. Вы явно нарушите правила, если поставите автомобиль на стоянку в данном месте, если расстояние от знака до автомобиля будет менее 50 м. Хотя «на глазок» и на рисунке, и в практике такие расстояния точно определить непросто. («Дорожные знаки»)"
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket10_question4_img.jpg",
            "question": "Вы управляете грузовым автомобилем с разрешённой максимальной массой не более 3,5 т. В каком направлении Вам разрешено дальнейшее движение?",
            "answer_1": "1. Только направо",
            "correct_1": "inCorrect",
            "answer_2": "2. Направо, налево и в обратном направлении",
            "correct_2": "inCorrect",
            "answer_3": "3. В любом",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. И знак 6.15.2 «Направление движения для грузовых автомобилей», и знак 3.4 «Движение грузовых автомобилей запрещено» распространяют своё действие только на грузовые автомобили с разрешённой максимальной массой более 3,5 т. Ваш автомобиль не относится к такому классу. Можете продолжить движение в любом направлении. («Дорожные знаки»)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/ticket10_question5_img.jpg",
            "question": "Такой вертикальной разметкой обозначают:",
            "answer_1": "1. Все вертикальные элементы дорожных сооружений",
            "correct_1": "inCorrect",
            "answer_2": "2. Только вертикальные элементы дорожных сооружений, представляющие опасность для движущихся транспортных средств",
            "correct_2": "correct",
            "answer_3": "3. Только вертикальные элементы дорожных сооружений на автомагистралях и дорогах, обозначенных знаком 5.3 «Дорога для автомобилей»",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Вертикальной разметкой 2.1 обозначают элементы дорожных сооружений, когда эти элементы представляют опасность для движущихся транспортных средств."
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




