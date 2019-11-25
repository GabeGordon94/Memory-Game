function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
}


function flip(e) {
    let ele = e.target;
    //console.log(ele);
    $(ele).removeClass('backgroundCard');

    console.log($(ele).css('background-image'));


    if (openedCards[0] == undefined) {
        //console.log(ele);
        openedCards.push(ele);
        ele.removeEventListener('click', flip);

    } else if ($(openedCards[0]).css('background-image') === $(ele).css('background-image')) {

        ele.removeEventListener('click', flip);
        //cards stay put
        score++;
        /* console.log('same' );*/
        /* console.log(score); */
        if (score == maxScore) {
            winScreen();
        }
        //clear array
        openedCards = [];
    } else {
        /* console.log('wrong' );*/
        guesses++;
        $('#counter').text(guesses);
        $('.card').css('pointer-events', 'none');
        setTimeout(function (e) {
            //console.log('timeout');
            $(ele).addClass('backgroundCard');
            $(openedCards[0]).addClass('backgroundCard');
            openedCards[0].addEventListener('click', flip);
            $('.card').css('pointer-events', '');
            openedCards = []
        }, 1000)

    }

}

function setUpEasyGame() {
    maxScore = 6;
    guesses = 0;
    $('#counter').text(null);
    board.empty();
    openedCards = [];
    score = 0;
    $('#popup').hide();
    let easyImages;
    if (theme == 'nature') {
        easyImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg'];
        addCards();
    } else {
        //api to put 6 jpgs in easyImgs array
        $.get({
            url: 'https://picsum.photos/v2/list?limit=6',
            success: function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].url);
                    easyImages.push(data[i].url);
                    if (easyImages.length == 6) {
                        addCards();
                    }
                }
 
            }
            /* 
            url:'https://picsum.photos/v2/list?limit=6',
            success:function(data){
                for(var i=0;i<data.length;i++){
                    console.log(data[i].url);
                }
            } */
        })
    }
    function addCards() {

        var cards = easyImages;
        cards = cards.concat(easyImages);
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            let card = document.createElement('div');
            card.className = 'card cardEasy backgroundCard';
            //card.style.backgroundImage=`url('img/${backgroundImg}')`;
            card.addEventListener('click', flip);
            card.style.backgroundImage = `url('img/${cards[i]}')`;
            board.append(card);
        }
        board.show();
    }
}
function setUpMediumGame() {
    maxScore = 9;
    guesses = 0;
    $('#counter').text(null);
    board.empty();
    openedCards = [];
    score = 0;
    $('#popup').hide();

    let mediumImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg', 'eight.jpg', 'nine.jpg'];
    var cards = mediumImages;
    cards = cards.concat(mediumImages);
    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card cardMedium backgroundCard';
        //card.style.backgroundImage=`url('img/${backgroundImg}')`;
        card.addEventListener('click', flip);
        card.style.backgroundImage = `url('img/${cards[i]}')`;
        board.append(card);
    }
    board.show();
}
function setUpHardGame() {
    maxScore = 12;
    guesses = 0;
    $('#counter').text(null);
    board.empty();
    openedCards = [];
    score = 0;
    $('#popup').hide();

    let hardImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg',
        'eight.jpg', 'nine.jpg', 'ten.jpg', 'eleven.jpg', 'twelve.jpg'];
    var cards = hardImages;
    cards = cards.concat(hardImages);
    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card cardHard backgroundCard';
        //card.style.backgroundImage=`url('img/${backgroundImg}')`;
        card.addEventListener('click', flip);
        card.style.backgroundImage = `url('img/${cards[i]}')`;
        board.append(card);
    }
    board.show();
}
function showOptions() {
    board.hide()
    $('#win').hide();
    $('#counter').text(null);
    $('#popup').show();

}

function popUpNewGame() {
    $('#win').hide();
    let $popUp = $('#popup');
    $popUp.append($('<p>Welcome to Nature!</p>'));
    $popUp.append($('<button class="btnOption" id="easy" onclick="setUpEasyGame()">Easy</button>'));
    $popUp.append($('<button class="btnOption" id="medium" onclick="setUpMediumGame()">Medium</button>'));
    $popUp.append($('<button class="btnOption" id="hard" onclick="setUpHardGame()">Hard</button>'));
}

function winScreen() {
    board.hide();
    let $winScr = $('#win');
    $winScr.empty();
    $winScr.append($('<h1>You won!</h1>'));
    $winScr.append($(`<h3>It took you ${guesses} guesses!</h3>`));
    $winScr.append($('<button onclick="showOptions()">Play again</button>'));

    $winScr.show();

}

function toggleTheme() {
    if (theme == 'nature') {
        theme = 'api'
    } else {
        theme = 'nature';
    }
    console.log(theme);
}

let theme = 'nature';
let openedCards = [];
let score = 0;
let guesses = 0;
let maxScore;
let board = $('#playField');
popUpNewGame();
$('#newGameBtn').on('click', showOptions);
