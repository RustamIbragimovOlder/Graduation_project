ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/ticket5_question1_img.jpg",
            "question": "Сколько проезжих частей имеет данная дорога?",
            "answer_1": "1. Одну",
            "correct_1": "correct",
            "answer_2": "2. Две",
            "correct_2": "inCorrect",
            "answer_3": "3. Четыре",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Данная горизонтальная разметка 1.3 не делит дорогу на проезжие части. Поэтому в изображенной ситуации дорога имеет четыре полосы движения и одну проезжую часть. (Пункт 1.2 ПДД термин «Разделительная полоса»)"
        },
        {
            "id": "1",
            "title": "Вопрос 2",
            "image": "/./image/ticket5_question2_img.jpg",
            "question": "При наличии какого знака водитель должен уступить дорогу, если встречный разъезд затруднен?",
            "answer_1": "1. Только В",
            "correct_1": "inCorrect",
            "answer_2": "2. А и В",
            "correct_2": "correct",
            "answer_3": "3. Б и В",
            "correct_3": "inCorrect",
            "answer_4": "4. Б и Г",
            "correct_4": "inCorrect",
            "hint": "Правильный ответ: 2. На уклонах, обозначенных знаками: «А» - 1.13 «Крутой спуск» и «Б» - 1.14 «Крутой подъем» - при наличии препятствия уступить дорогу должен водитель транспортного средства, двигающегося на спуск. На узких участках дороги, где встречный разъезд затруднён, устанавливают знаки: с одной стороны - «В» - 2.6 «Преимущество встречного движения», с другой стороны движения - «Г» - 2.7 «Преимущество перед встречным движением». В данном случае при затруднённом встречном разъезде запрещается въезд на узкий участок дороги со стороны знака 2.6. Ответ - знаки «А» и «В». («Дорожные знаки»)"
        },
        {
            "id": "1",
            "title": "Вопрос 3",
            "image": "/./image/ticket5_question3_img.jpg",
            "question": "Разрешена ли Вам стоянка в указанном месте?",
            "answer_1": "1. Разрешена",
            "correct_1": "correct",
            "answer_2": "2. Разрешена только в светлое время суток",
            "correct_2": "inCorrect",
            "answer_3": "3. Запрещена",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Действие знака 3.27 «Остановка запрещена» распространяется от места установки до ближайшего перекрёстка, а при отсутствии перекрестка - до конца населённого пункта. В данном случае до знака 5.24.1 «Конец населённого пункта». Вы имеете право остановиться на обочине за знаком. («Дорожные знаки»)"
        },
        {
            "id": "1",
            "title": "Вопрос 4",
            "image": "/./image/ticket5_question4_img.jpg",
            "question": "Нарушил ли водитель грузового автомобиля правила стоянки?",
            "answer_1": "1. Нарушил",
            "correct_1": "correct",
            "answer_2": "2. Не нарушил, если разрешенная максимальная масса автомобиля не более 3,5 т",
            "correct_2": "inCorrect",
            "answer_3": "3. Не нарушил",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. На околотротуарную стоянку, обозначенную знаками 6.4 «Парковка (парковочное место)» и 8.6.4 «Способ постановки транспортного средства на стоянку» можно поставить указанным способом только легковой автомобиль или мотоцикл. Грузовым автомобилям, независимо от их р.м.м (разрешенной максимальной массы) стоянка в данном месте не разрешается. Данный водитель нарушил Правила. Не путайте табл. 8.6.4 «Способ постановки ТС на стоянку» с табл. 8.4.3 «Вид транспортного средства», иначе допустите ошибку. («Дорожные знаки»)"
        },
        {
            "id": "1",
            "title": "Вопрос 5",
            "image": "/./image/ticket5_question5_img.jpg",
            "question": "О чем предупреждает Вас вертикальная разметка, нанесенная на ограждение дороги?",
            "answer_1": "1. О приближении к железнодорожному переезду",
            "correct_1": "inCorrect",
            "answer_2": "2. О приближении к опасному перекрестку",
            "correct_2": "inCorrect",
            "answer_3": "3. О движении по опасному участку дороги",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Вертикальная разметка 2.5 обозначает боковые поверхности ограждений дорог на закруглениях малого радиуса, крутых спусках, других опасных участках."
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