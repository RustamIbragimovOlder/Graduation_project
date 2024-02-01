ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/No_image.jpg",
            "question": "Что называется разрешённой максимальной массой транспортного средства?",
            "answer_1": "1. Максимально допустимая для перевозки масса груза, установленная предприятием-изготовителем",
            "correct_1": "inCorrect",
            "answer_2": "2. Масса снаряженного транспортного средства без учета массы водителя, пассажиров и груза, установленная предприятием-изготовителем",
            "correct_2": "inCorrect",
            "answer_3": "3. Масса снаряженного транспортного средства с грузом, водителем и пассажирами, установленная предприятием-изготовителем в качестве максимально допустимой",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Пункт 1.2 ПДД термин «Разрешённая максимальная масса»."
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket6_question2_img.jpg",
            "question": "Вам разрешено продолжить движение?",
            "answer_1": "1. Только прямо",
            "correct_1": "inCorrect",
            "answer_2": "2. Прямо или в обратном направлении",
            "correct_2": "correct",
            "answer_3": "3. Во всех направлениях",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Знак 3.18.2 «Поворот налево запрещён» не запрещает производить разворот. Поэтому можете по своему усмотрению продолжить движение прямо или развернуться, и продолжить движение в обратном направлении. («Дорожные знаки»)"
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket6_question3_img.jpg",
            "question": "Какие из указанных знаков разрешают проезд на автомобиле к месту проживания или работы?",
            "answer_1": "1. Только А",
            "correct_1": "inCorrect",
            "answer_2": "2. Только В",
            "correct_2": "inCorrect",
            "answer_3": "3. А и В",
            "correct_3": "correct",
            "answer_4": "4. Все",
            "correct_4": "correct",
            "hint": "Правильный ответ: 3. Разрешают проезд на автомобиле к месту проживания или работы знаки: «А» - 3.2 «Движение запрещено», «В» - 3.3 «Движение механических транспортных средств запрещено». Из запрещающих знаков 6 знаков предоставляют такую «льготу». В их число не входит знак «Б» - 3.1 «Въезд запрещён», который запрещает въезд под знак всех ТС, кроме маршрутных транспортных средств и ТС, в случае применения знака 3.1 с табличками 8.4.1-8.4.8; 8.5.1, 8.5.2, 8.5.3, 8.5.4, 8.5.5-8.5.7 и 8.4.9-8.4.16. («Дорожные знаки»)"
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket6_question4_img.jpg",
            "question": "Что обозначают эти дорожные знаки?",
            "answer_1": "1. Парковочное место только для автобусов",
            "correct_1": "inCorrect",
            "answer_2": "2. Парковочное место для автобусов и троллейбусов",
            "correct_2": "inCorrect",
            "answer_3": "3. Парковочное место, где возможна пересадка на маршрутное транспортное средство (автобус или троллейбус)",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Знак 6.4 «Парковка (парковочное место)» применён с табличкой 8.21.2 «Вид маршрутного транспортного средства». Такое сочетание знаков показывает, что с этого места для дальнейшего движения можно воспользоваться маршрутными транспортными средствами – автобусом или троллейбусом, а свой автомобиль можно оставить на оборудованной стоянке. («Дорожные знаки»)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/ticket6_question5_img.jpg",
            "question": "Разметка в виде треугольника на полосе движения:",
            "answer_1": "1. Обозначает опасный участок дороги",
            "correct_1": "inCorrect",
            "answer_2": "2. Предупреждает Вас о приближении к месту, где нужно уступить дорогу",
            "correct_2": "correct",
            "answer_3": "3. Указывает место, где Вам необходимо остановиться",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Разметка 1.20 предупреждает о приближении к разметке 1.13, которая указывает место, где водитель должен при необходимости остановиться, уступая дорогу транспортным средствам, движущимся по пересекаемой дороге. («Горизонтальная разметка»)"
        }
    ]`;

const ticketInfo = JSON.parse(ticketData);

function renderTicketInfo(ticketInfo) {
    const ticketBox = document.querySelector('.ticket-box');

    ticketInfo.forEach(item => {
        ticketBox.insertAdjacentHTML('beforeend', `
        <div class="ticket_item-box" id="${item.title}">
			<div class="ticket_item">
                <p class="ticket_item-title">${item.title}</p>
                <img class="ticket_item-image" src="${item.image}" alt="">
                <p class="ticket_item-question">${item.question}</p>
                <div class="ticket_item-answer-box">
                    <button class="ticket_item-answer ${item.correct_1}" id="${item.id}">${item.answer_1}</button>
                    <button class="ticket_item-answer ${item.correct_2}" id="${item.id}">${item.answer_2}</button>
                    <button class="ticket_item-answer ${item.correct_3}" id="${item.id}">${item.answer_3}</button>
                    <button class="ticket_item-answer ${item.correct_4}" id="${item.id}">${item.answer_4}</button>
                </div>
                <button class="ticket_item-hint-btn">Показать подсказку</button>
                <p class="ticket_item-hint-text">${item.hint}</p>
		    </div>
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
                let buttons = document.getElementsByClassName("ticket_item-answer");
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
                let buttons = document.getElementsByClassName("ticket_item-answer");
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