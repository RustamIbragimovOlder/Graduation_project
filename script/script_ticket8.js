ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/No_image.jpg",
            "question": "Какие действия при дорожно-транспортном происшествии должны немедленно осуществить водители, причастные к нему",
            "answer_1": "1. Освободить проезжую часть",
            "correct_1": "inCorrect",
            "answer_2": "2. Остановить (не трогать с места) транспортное средство, включить аварийную сигнализацию и выставить знак аварийной остановки",
            "correct_2": "correct",
            "answer_3": "3. Сообщить о случившемся в полицию",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. После ДТП, каждый водитель, являющийся участником данного ДТП обязан: 1. немедленно остановить (не трогать с места) ТС; 2. включить аварийную сигнализацию и выставить знак аварийной остановки, на той полосе движения, на которой находится ТС, со стороны худшей видимости. Далее оценить наличие или отсутствие пострадавших, после чего действовать согласно пунктов 2.6, 2.6.1 ПДД. Первые два требования при ДТП, первостепенны во всех случаях. (Пункт 2.5 ПДД)"
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket8_question2_img.jpg",
            "question": "В чем особенность скоростного режима на этом участке дороги?",
            "answer_1": "1. Рекомендуемая скорость движения – 40 км/ч",
            "correct_1": "inCorrect",
            "answer_2": "2. Минимальная допустимая скорость движения – 40 км/ч",
            "correct_2": "inCorrect",
            "answer_3": "3. Минимальная допустимая скорость движения по левой полосе – 40 км/ч",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Табличка 8.14 «Полоса движения» указывает, что действие знака 4.6 «Ограничение минимальной скорости» распространяется только на ту полосу движения, над которой находится знак. Так как действие происходит в населённом пункте, на данном участке по правой полосе можно двигаться со скоростью, не превышающей 60 км/ч, на левой полосе скорость должна быть не менее 40 км/ч и не более 60 км/ч. Правильный ответ – минимальная допустимая скорость движения по левой полосе – 40 км/ч. («Дорожные знаки»)."
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket8_question3_img.jpg",
            "question": "Какие из указанных знаков запрещают поворот налево?",
            "answer_1": "1. Только А",
            "correct_1": "inCorrect",
            "answer_2": "2. А и Б",
            "correct_2": "inCorrect",
            "answer_3": "3. А и В",
            "correct_3": "correct",
            "answer_4": "4. Все",
            "correct_4": "inCorrect",
            "hint": "Правильный ответ: 3. На перекрёстке, перед которым установлен знак «А» - 5.13.1 «Выезд на дорогу с полосой для маршрутных транспортных средств», запрещается поворот налево других транспортных средств. Запрещает поворот всем видам транспортных средств и знак «В» - 6.3.1 «Место для разворота». Среди изображённых знаков следует обратить внимание на знак «Б» - 3.19 «Разворот запрещён», который, наоборот, поворот налево не запрещает. («Дорожные знаки»)"
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket8_question4_img.jpg",
            "question": "Можно ли Вам повернуть направо на этом перекрёстке?",
            "answer_1": "1. Можно",
            "correct_1": "correct",
            "answer_2": "2. Можно, если Вы проживаете или работаете на территории, расположенной справа от перекрестка",
            "correct_2": "inCorrect",
            "answer_3": "3. Нельзя",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Знак 6.8.2 «Тупик» указывает, что примыкающая дорога не имеет сквозного проезда. Каких-либо ограничений он не вводит. Повернуть направо Вам можно. («Дорожные знаки»)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/ticket8_question5_img.jpg",
            "question": "Разрешается ли Вам перестроиться?",
            "answer_1": "1. Разрешается только на соседнюю полосу",
            "correct_1": "correct",
            "answer_2": "2. Разрешается, если скорость грузового автомобиля менее 30 км/ч",
            "correct_2": "inCorrect",
            "answer_3": "3. Запрещается",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Реверсивные светофоры выключены. Двойная прерывистая линия разметки 1.9 разделяет транспортные потоки противоположных направлений. Прерывистую линию разметки 1.5, находящуюся слева пересекать не запрещается, поэтому Вам можно перестроиться на левую (соседнюю) полосу и продолжить движение по ней. (Пункт 6.7 ПДД)"
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