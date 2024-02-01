ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/ticket4_question1_img.jpg",
            "question": "Сколько полос для движения имеет проезжая часть данной дороги?",
            "answer_1": "1. Одну полосу",
            "correct_1": "inCorrect",
            "answer_2": "2. Две полосы",
            "correct_2": "correct",
            "answer_3": "3. Три полосы",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Сплошная линия горизонтальной разметки 1.1 применяется часто. Она может быть использована и для распределения транспортных потоков, и для обозначения границ полос. В данном случае она разделяет транспортные потоки одной неширокой проезжей части, на которой, судя по автомобилю, по одной полосе движения в каждом направлении, т.е. две. Мотоциклисты двигаются по одной полосе в два ряда, что им не запрещено. («Горизонтальная разметка», пункты 1.2, 9.1 ПДД)"
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket4_question2_img.jpg",
            "question": "Эти знаки предупреждают Вас:",
            "answer_1": "1. О наличии через 500 м опасных поворотов",
            "correct_1": "inCorrect",
            "answer_2": "2. О том, что на расстоянии 150-300 м за дорожным знаком начнётся участок дороги протяженностью 500 м с опасными поворотами",
            "correct_2": "correct",
            "answer_3": "3. О том, что сразу за знаком начнется участок протяженностью 500 м с опасными поворотами",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Табличка 8.2.1 «Зона действия» указывает протяженность ряда опасных поворотов, первый из которых - налево - начинается через 150 - 300 м. («Дорожные знаки» 8.2.1, 1.12.2)"
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket4_question3_img.jpg",
            "question": "Какой из указанных знаков распространяет свое действие только на ту полосу, над которой он установлен?",
            "answer_1": "1. Только А",
            "correct_1": "correct",
            "answer_2": "2. Только Б",
            "correct_2": "inCorrect",
            "answer_3": "3. Б и В",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Знак с табличкой 8.14 «Полоса движения» («А»), указывающей полосу движения, на которую распространяется действие знака или светофора. («Дорожные знаки»)"
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket4_question4_img.jpg",
            "question": "Вы буксируете неисправный автомобиль. По какой полосе Вам можно продолжить движение в населенном пункте?",
            "answer_1": "1. Только по правой",
            "correct_1": "correct",
            "answer_2": "2. Только по левой",
            "correct_2": "inCorrect",
            "answer_3": "3. По любой",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. По ходу Вашего движения установлен знак 5.15.3 «Начало полосы». По основной полосе знаком 4.6 «Ограничение минимальной скорости» введено ограничение – минимальная скорость должна быть не менее 60 км/ч. Водитель, который не может продолжать движение с указанной скоростью, должен перестроиться на правую полосу. Буксирующим механическим ТС разрешается движение со скоростью не более 50 км/ч. Вам следует продолжать движение только по правой полосе. («Дорожные знаки», пункт 10.4 ПДД)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/No_image.jpg",
            "question": "Что означает разметка в виде надписи «СТОП» на проезжей части?",
            "answer_1": "1. Предупреждает о приближении к стоп-линии перед регулируемым перекрёстком",
            "correct_1": "inCorrect",
            "answer_2": "2. Предупреждает о приближении к стоп-линии и знаку «Движение без остановки запрещено»",
            "correct_2": "correct",
            "answer_3": "3. Предупреждает о приближении к знаку «Уступите дорогу»",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Разметка 1.21 (надпись «СТОП») предупреждает о приближении к стоп-линии (разметке 1.12), когда она применяется в сочетании со знаком 2.5 «Движение без остановки запрещено». («Горизонтальная разметка»)"
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