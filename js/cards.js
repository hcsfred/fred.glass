function createCard(img) {
    var template = [
        '<div class="col-md-4">',
        '<div class="card text-white bg-dark mb-4 shadow-sm">',
        '<img class="card-img-top" src=', img.src, '>',
        '<div class="card-body">',
        '<h5 class="card-title">', img.title, '</h5>',
        '<div class="d-flex justify-content-between align-items-center">',
        '<a role="button" class="btn btn-sm btn-outline-secondary" href=', img.src, '>View</a>',
        '</div> </div> </div> </div>'
    ];

    return $(template.join(''));
}

function createCards(data) {
    var cards = $();

    data.forEach(function(img) {
        cards = cards.add(createCard(img));
    });

    $(".row").append(cards);
}

var data = [
    { "src": "res/dragonfire_2.png", "title": "Dynamic World Map" },
    { "src": "res/dragonfire_3.gif", "title": "Bespoke Sailing Skill" },
    { "src": "res/dragonfire_4.png", "title": "Enhanced Construction" },
    { "src": "res/dragonfire_5.gif", "title": "Streamlined Dev Environment" },
    { "src": "res/dragonfire_6.png", "title": "Exclusive Models" },
    { "src": "res/dragonfire_7.gif", "title": "Replicated Interfaces" },
];

createCards(data);