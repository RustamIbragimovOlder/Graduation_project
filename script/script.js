ticketData = `
    [
        {
            "id": "1",
            "title": "Билет 1",
            "subtitle": "ticket1"
        },
        {
            "id": "2",
            "title": "Билет 2",
            "subtitle": "ticket2"
        },
        {
            "id": "3",
            "title": "Билет 3",
            "subtitle": "ticket3"
        },
        {
            "id": "4",
            "title": "Билет 4",
            "subtitle": "ticket4"
        },
        {
            "id": "5",
            "title": "Билет 5",
            "subtitle": "ticket5"
        },
        {
            "id": "6",
            "title": "Билет 6",
            "subtitle": "ticket6"
        },
        {
            "id": "7",
            "title": "Билет 7",
            "subtitle": "ticket7"
        },
        {
            "id": "8",
            "title": "Билет 8",
            "subtitle": "ticket8"
        },
        {
            "id": "9",
            "title": "Билет 9",
            "subtitle": "ticket9"
        },
        {
            "id": "10",
            "title": "Билет 10",
            "subtitle": "ticket10"
        },
        {
            "id": "11",
            "title": "Билет 11",
            "subtitle": "ticket11"
        },
        {
            "id": "12",
            "title": "Билет 12",
            "subtitle": "ticket12"
        },
        {
            "id": "13",
            "title": "Билет 13",
            "subtitle": "ticket13"
        },
        {
            "id": "14",
            "title": "Билет 14",
            "subtitle": "ticket14"
        },
        {
            "id": "15",
            "title": "Билет 15",
            "subtitle": "ticket15"
        },
        {
            "id": "16",
            "title": "Билет 16",
            "subtitle": "ticket16"
        },
        {
            "id": "17",
            "title": "Билет 17",
            "subtitle": "ticket17"
        },
        {
            "id": "18",
            "title": "Билет 18",
            "subtitle": "ticket18"
        },
        {
            "id": "19",
            "title": "Билет 19",
            "subtitle": "ticket19"
        },
        {
            "id": "20",
            "title": "Билет 20",
            "subtitle": "ticket20"
        },
        {
            "id": "21",
            "title": "Билет 21",
            "subtitle": "ticket21"
        },
        {
            "id": "22",
            "title": "Билет 22",
            "subtitle": "ticket22"
        },
        {
            "id": "23",
            "title": "Билет 23",
            "subtitle": "ticket23"
        },
        {
            "id": "24",
            "title": "Билет 24",
            "subtitle": "ticket24"
        },
        {
            "id": "25",
            "title": "Билет 25",
            "subtitle": "ticket25"
        },
        {
            "id": "26",
            "title": "Билет 26",
            "subtitle": "ticket26"
        },
        {
            "id": "27",
            "title": "Билет 27",
            "subtitle": "ticket27"
        },
        {
            "id": "28",
            "title": "Билет 28",
            "subtitle": "ticket28"
        },
        {
            "id": "29",
            "title": "Билет 29",
            "subtitle": "ticket29"
        },
        {
            "id": "30",
            "title": "Билет 30",
            "subtitle": "ticket10"
        },
        {
            "id": "31",
            "title": "Билет 31",
            "subtitle": "ticket31"
        },
        {
            "id": "32",
            "title": "Билет 32",
            "subtitle": "ticket32"
        },
        {
            "id": "33",
            "title": "Билет 33",
            "subtitle": "ticket33"
        },
        {
            "id": "34",
            "title": "Билет 34",
            "subtitle": "ticket34"
        },
        {
            "id": "35",
            "title": "Билет 35",
            "subtitle": "ticket35"
        },
        {
            "id": "36",
            "title": "Билет 36",
            "subtitle": "ticket36"
        },
        {
            "id": "37",
            "title": "Билет 37",
            "subtitle": "ticket37"
        },
        {
            "id": "38",
            "title": "Билет 38",
            "subtitle": "ticket38"
        },
        {
            "id": "39",
            "title": "Билет 39",
            "subtitle": "ticket39"
        },
        {
            "id": "40",
            "title": "Билет 40",
            "subtitle": "ticket40"
        }
    ]`;

const ticketInfo = JSON.parse(ticketData);

function renderTicketInfo(ticketInfo) {
    const ticketBox = document.querySelector('.ticket-box');

    ticketInfo.forEach(item => {
        ticketBox.insertAdjacentHTML('beforeend', `
        <button class="ticket-box_btn" onclick="document.location='tickets/${item.subtitle}.html'">${item.title}</button>
        `)
    });
}

renderTicketInfo(ticketInfo);