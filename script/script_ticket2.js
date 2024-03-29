ticketData = `
    [
        {
            "id": "1",
            "title": "Вопрос 1",
            "image": "/./image/ticket2_question1_img.jpg",
            "question": "Сколько полос для движения имеет данная дорога?",
            "answer_1": "1. Две",
            "correct_1": "inCorrect",
            "answer_2": "2. Четыре",
            "correct_2": "correct",
            "answer_3": "3. Пять",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. Разделительная полоса делит дорогу на проезжие части. Данная дорога имеет две проезжие части, четыре полосы движения. (Пункт 1.2 ПДД)"
        },
        {
            "id": "2",
            "title": "Вопрос 2",
            "image": "/./image/ticket2_question2_img.jpg",
            "question": "Можно ли Вам въехать на мост первым?",
            "answer_1": "1. Можно",
            "correct_1": "correct",
            "answer_2": "2. Можно, если Вы не затрудните движение встречному автомобилю",
            "correct_2": "inCorrect",
            "answer_3": "3. Нельзя",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Знак 2.7 «Преимущество перед встречным движением» предоставляет Вам право первым проехать через узкий участок дороги, т. е. через мост. («Дорожные знаки», пункт 1.2 термин «Уступить дорогу»)"
        },
        {
            "id": "3",
            "title": "Вопрос 3",
            "image": "/./image/ticket2_question3_img.jpg",
            "question": "Разрешено ли Вам произвести остановку для посадки пассажира?",
            "answer_1": "1. Разрешено",
            "correct_1": "correct",
            "answer_2": "2. Разрешено только по чётным числам месяца",
            "correct_2": "inCorrect",
            "answer_3": "3. Разрешено только по нечётным числам месяца",
            "correct_3": "inCorrect",
            "answer_4": "4. Запрещено",
            "correct_4": "inCorrect",
            "hint": "Правильный ответ: 1. Знак 3.29 «Стоянка запрещена по нечётным числам месяца» ограничивает только стоянку. Остановка в его зоне действия не запрещается в любой период времени. («Дорожные знаки»)"
        },
        {
            "id": "4",
            "title": "Вопрос 4",
            "image": "/./image/ticket2_question4_img.jpg",
            "question": "Что запрещено в зоне действия этого знака?",
            "answer_1": "1. Движение любых транспортных средств",
            "correct_1": "inCorrect",
            "answer_2": "2. Движение всех транспортных средств со скоростью не более 20 км/ч",
            "correct_2": "inCorrect",
            "answer_3": "3. Движение механических транспортных средств",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Знак 5.33 «Пешеходная зона» обозначает место, с которого начинается территория (участок дороги), на которой разрешено движение только пешеходов и приравненных к ним лиц (это передвигающиеся в инвалидных колясках без двигателя, ведущие велосипед, мопед, мотоцикл, везущие санки, тележку, детскую и инвалидную коляску), а также велосипедистов и лицам, использующим для передвижения СИМ в случаях, установленных в пунктах 24.2, 24.3, 24.4 и 24.6 ПДД. Въезд в обозначенную зону и соответственно движение в ней любых механических транспортных средств запрещено. («Дорожные знаки», термин «Пешеход» п. 1.2 ПДД)"
        },
        {
            "id": "5",
            "title": "Вопрос 5",
            "image": "/./image/ticket2_question5_img.jpg",
            "question": "Разрешен ли Вам выезд на полосу с реверсивным движением, если реверсивный светофор выключен?",
            "answer_1": "1. Разрешен",
            "correct_1": "inCorrect",
            "answer_2": "2. Разрешен, если скорость автобуса менее 30 км/ч",
            "correct_2": "inCorrect",
            "answer_3": "3. Запрещен",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. При выключенных сигналах реверсивного светофора, который расположен над полосой, обозначенной с обеих сторон разметкой 1.9, въезд на эту полосу запрещен. (Пункт 6.7 ПДД)"
        },
        {
            "id": "6",
            "title": "Вопрос 6",
            "image": "/./image/ticket2_question6_img.jpg",
            "question": "Информационная световая секция в виде силуэта пешехода и стрелки с мигающим сигналом бело-лунного цвета, расположенная под светофором, информирует водителя о том, что:",
            "answer_1": "1. На пешеходном переходе, в направлении которого он поворачивает, включен сигнал светофора, разрешающий движение пешеходам",
            "correct_1": "correct",
            "answer_2": "2. На пешеходном переходе, в направлении которого он поворачивает, включен сигнал светофора, запрещающий движение пешеходам",
            "correct_2": "inCorrect",
            "answer_3": "3. Он поворачивает в направлении пешеходного перехода",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Информационная световая секция в виде силуэта пешехода и стрелки с мигающим сигналом бело-лунного цвета, расположенная под светофором, информирует водителя о том, что на пешеходном переходе, в направлении которого он поворачивает, включен сигнал светофора, разрешающий движение пешеходам. Направление стрелки указывает на пешеходный переход, на котором включен сигнал светофора, разрешающий движение пешеходам (п. 6.4)."
        },
        {
            "id": "7",
            "title": "Вопрос 7",
            "image": "/./image/ticket2_question7_img.jpg",
            "question": "Поднятая вверх рука водителя легкового автомобиля является сигналом, информирующим Вас о его намерении:",
            "answer_1": "1. Повернуть направо",
            "correct_1": "inCorrect",
            "answer_2": "2. Продолжить движение прямо",
            "correct_2": "inCorrect",
            "answer_3": "3. Снизить скорость, чтобы остановиться и уступить дорогу мотоциклу",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. У водителя не работает световая сигнализация, поэтому он вынужден подавать соответствующие сигналы рукой. Согласно знаку 2.4 «Уступите дорогу» мотоциклист имеет преимущество."
        },
        {
            "id": "8",
            "title": "Вопрос 8",
            "image": "/./image/ticket2_question8_img.jpg",
            "question": "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
            "answer_1": "1. На левом",
            "correct_1": "inCorrect",
            "answer_2": "2. На правом",
            "correct_2": "inCorrect",
            "answer_3": "3. На обоих",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. На левом рисунке преимущество у автомобиля, двигающегося попутно по полосе без изменения направления движения, т.е. у «хозяина полосы». Водитель, двигающийся по левой полосе уступает. На правом рисунке одновременное перестроение. Водители руководствуются «правилом правой руки», т.е. у кого помеха справа, тот и уступает. Помеха справа у водителя, двигающего также по левой полосе. Он уступает дорогу и в этой ситуации. (Пункт 8.4 ПДД)"
        },
        {
            "id": "9",
            "title": "Вопрос 9",
            "image": "/./image/ticket2_question9_img.jpg",
            "question": "Можно ли Вам выполнить разворот в этом месте?",
            "answer_1": "1. Можно",
            "correct_1": "correct",
            "answer_2": "2. Можно только при отсутствии приближающегося поезда",
            "correct_2": "inCorrect",
            "answer_3": "3. Нельзя",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Разворот запрещён на железнодорожном переезде, границами которого являются шлагбаумы, а при их отсутствии - знаки 1.3.1 «Однопутная железная дорога» или 1.3.2 «Многопутная железная дорога». В нашем случае железнодорожный переезд без шлагбаума. Вы можете совершить разворот по указанной траектории, так как совершаете его на безопасном удалении от железнодорожных путей. (Пункт 8.11 ПДД)"
        },
        {
            "id": "10",
            "title": "Вопрос 10",
            "image": "/./image/No_image.jpg",
            "question": "В каких случаях разрешается наезжать на прерывистые линии разметки, разделяющие проезжую часть на полосы движения?",
            "answer_1": "1. Только если на дороге нет других транспортных средств",
            "correct_1": "inCorrect",
            "answer_2": "2. Только при движении в темное время суток",
            "correct_2": "inCorrect",
            "answer_3": "3. Только при перестроении",
            "correct_3": "correct",
            "answer_4": "4. Во всех перечисленных случаях",
            "correct_4": "inCorrect",
            "hint": "Правильный ответ: 3. Наезжать на прерывистые линии разметки разрешается лишь при перестроении. (Пункт 9.7 ПДД)"
        },
        {
            "id": "11",
            "title": "Вопрос 11",
            "image": "/./image/ticket2_question11_img.jpg",
            "question": "Разрешено ли Вам обогнать мотоцикл?",
            "answer_1": "1. Разрешено",
            "correct_1": "inCorrect",
            "answer_2": "2. Разрешено, если водитель мотоцикла снизил скорость",
            "correct_2": "inCorrect",
            "answer_3": "3. Запрещено",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Перекресток равнозначный. На равнозначных перекрёстках обгон запрещён всех видов транспорта всеми транспортными средствами. Мотоциклист притормаживает, он уступает помехе справа. То же самое делаете и Вы. В противном случае Вы нарушите и правила обгона, и правила проезда перекрёстков. (Пункты 11.4, 13.11 ПДД)."
        },
        {
            "id": "12",
            "title": "Вопрос 12",
            "image": "/./image/ticket2_question12_img.jpg",
            "question": "Разрешается ли Вам остановиться в указанном месте?",
            "answer_1": "1. Разрешается",
            "correct_1": "inCorrect",
            "answer_2": "2. Разрешается, если автомобиль будет находиться не ближе 5 м от края пересекаемой проезжей части",
            "correct_2": "correct",
            "answer_3": "3. Запрещается",
            "correct_3": "inCorrect",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 2. На перекрёстке с круговым движением Вы можете совершить остановку и стоянку, но при этом расстояние между остановившимся транспортным средством и краем проезжей части должно быть не менее 5 м. (Пункты 12.4, 12.5 ПДД)."
        },
        {
            "id": "13",
            "title": "Вопрос 13",
            "image": "/./image/ticket2_question13_img.jpg",
            "question": "Вы намерены повернуть налево. Кому Вы должны уступить дорогу?",
            "answer_1": "1. Только пешеходам",
            "correct_1": "inCorrect",
            "answer_2": "2. Только автобусу",
            "correct_2": "inCorrect",
            "answer_3": "3. Автобусу и пешеходам",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Перекрёсток регулируемый. Знаки приоритета «не работают». При повороте налево Вы уступаете автобусу, движущемуся прямо со встречного направления, и пешеходам, переходящим проезжую часть дороги, на которую Вы поворачиваете. (Пункты 13.1, 13.3, 13.4 ПДД)."
        },
        {
            "id": "14",
            "title": "Вопрос 14",
            "image": "/./image/ticket2_question14_img.jpg",
            "question": "В каком случае Вы имеете преимущество?",
            "answer_1": "1. Только при повороте направо",
            "correct_1": "inCorrect",
            "answer_2": "2. Только при повороте налево",
            "correct_2": "inCorrect",
            "answer_3": "3. В обоих перечисленных случаях",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Перекресток равнозначный. Водители между собой руководствуются «правилом правой руки», т. е. у кого помеха справа, тот и уступает. У Вас преимущество и при повороте направо и при повороте налево, т. е. в обоих перечисленных случаях. (Пункт 13.11 ПДД)."
        },
        {
            "id": "15",
            "title": "Вопрос 15",
            "image": "/./image/ticket2_question15_img.jpg",
            "question": "Обязан ли водитель мотоцикла уступить Вам дорогу?",
            "answer_1": "1. Обязан",
            "correct_1": "correct",
            "answer_2": "2. Не обязан",
            "correct_2": "inCorrect",
            "answer_3": "",
            "correct_3": "",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 1. Мотоциклист выезжает на дорогу, обозначенную знаком 5.1 «Автомагистраль», которая является главной дорогой по отношению к примыкающей. На перекрёстке неравнозначных дорог преимущество имеют транспортные средства, движущиеся по главной дороге. Мотоциклист обязан уступить Вам дорогу. (Пункты 1.2, 13.9 ПДД)."
        },
        {
            "id": "16",
            "title": "Вопрос 16",
            "image": "/./image/ticket2_question16_img.jpg",
            "question": "Разрешается ли водителю выполнить объезд грузового автомобиля?",
            "answer_1": "1. Разрешается",
            "correct_1": "inCorrect",
            "answer_2": "2. Разрешается, если между шлагбаумом и остановившимся грузовым автомобилем расстояние более 5 м",
            "correct_2": "inCorrect",
            "answer_3": "3. Запрещается",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Водитель легкового автомобиля хочет объехать стоящий перед закрытым шлагбаумом грузовик. Правила, оговаривающие порядок проезда через железнодорожный переезд, такой маневр (с выездом на полосу встречного движения) запрещают. (Пункт 15.3 ПДД)."
        },
        {
            "id": "17",
            "title": "Вопрос 17",
            "image": "/./image/No_image.jpg",
            "question": "В каких из перечисленных случаев запрещена буксировка на гибкой сцепке?",
            "answer_1": "1. Только на горных дорогах",
            "correct_1": "inCorrect",
            "answer_2": "2. Только в гололедицу",
            "correct_2": "correct",
            "answer_3": "3. Только в тёмное время суток и в условиях недостаточной видимости",
            "correct_3": "inCorrect",
            "answer_4": "4. Во всех перечисленных случаях",
            "correct_4": "inCorrect",
            "hint": "Правильный ответ: 2. Запомните этот ответ. На экзамене часто отвечают, что только на горных дорогах. Видимо, ассоциируется опасность, связанная с высотой. Правилами запрещается буксировка на гибкой сцепке только в гололедицу. (Пункт 20.4 ПДД)."
        },
        {
            "id": "18",
            "title": "Вопрос 18",
            "image": "/./image/No_image.jpg",
            "question": "Запрещается эксплуатация мототранспортных средств (категории L), если остаточная глубина рисунка протектора шин (при отсутствии индикаторов износа) составляет не более:",
            "answer_1": "1. 0,8 мм",
            "correct_1": "correct",
            "answer_2": "2. 1,0 мм",
            "correct_2": "inCorrect",
            "answer_3": "3. 1,6 мм",
            "correct_3": "inCorrect",
            "answer_4": "4. 2,0 мм",
            "correct_4": "inCorrect",
            "hint": "Правильный ответ: 1. Для мототранспортных средств, относящихся к ТС категорий L, остаточная глубина рисунка протектора шин (при отсутствии индикаторов износа), должна быть не более 0,8 мм («Перечень неисправностей» п. 5.4)"
        },
        {
            "id": "19",
            "title": "Вопрос 19",
            "image": "/./image/No_image.jpg",
            "question": "Исключает ли антиблокировочная тормозная система возможность возникновения заноса или сноса при прохождении поворота?",
            "answer_1": "1. Полностью исключает возможность возникновения только заноса",
            "correct_1": "inCorrect",
            "answer_2": "2. Полностью исключает возможность возникновения только сноса",
            "correct_2": "inCorrect",
            "answer_3": "3. Не исключает возможность возникновения сноса или заноса",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. Антиблокировочные системы (АБС) автомобилей представляют собой системы, оснащённые устройствами управления тормозами с обратной связью, которые предотвращают блокировку колёс во время торможения, тем самым сохраняя управляемость и курсовую устойчивость. Эта система имеет «большой плюс», но имеет и «минус». При ускоренном (не экстренном) нажатии на педаль тормоза на разнородном, даже твёрдом дорожном покрытии она может сработать. В момент ее срабатывания (от 1 до 2 сек.) водитель не может повлиять на процесс торможения. Чтобы появился навык управления автомобилем при срабатывании АБС, произведите несколько «контрольных» торможений на абсолютно свободном участке дороги или территории. При прохождении поворота на автомобиль действует центробежная сила. Антиблокировочная система в таких ситуациях не может повлиять на возможность возникновения сноса или заноса."
        },
        {
            "id": "20",
            "title": "Вопрос 20",
            "image": "/./image/No_image.jpg",
            "question": "В каких случаях следует начинать сердечно-легочную реанимацию пострадавшего?",
            "answer_1": "1. При наличии болей в области сердца и затрудненного дыхания",
            "correct_1": "inCorrect",
            "answer_2": "2. При отсутствии у пострадавшего сознания, независимо от наличия дыхания",
            "correct_2": "inCorrect",
            "answer_3": "3. При отсутствии у пострадавшего сознания, дыхания и кровообращения",
            "correct_3": "correct",
            "answer_4": "",
            "correct_4": "",
            "hint": "Правильный ответ: 3. В комментариях ответов по медицинским вопросам для лучшего запоминания правильного ответа используется прием «ключевых слов», которые выделены в тексте шрифтом. Обратите на это внимание. Правильный ответ - при отсутствии у пострадавшего сознания, дыхания и кровообращения."
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