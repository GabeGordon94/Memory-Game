function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
}


function flip(e) {
    let ele = e.target;
    $(ele).removeClass(`${backgroundClass}`);



    if (openedCards[0] == undefined) {
        openedCards.push(ele);
        ele.removeEventListener('click', flip);

    } else if ($(openedCards[0]).css('background-image') === $(ele).css('background-image')) {

        ele.removeEventListener('click', flip);
        //cards stay put
        score++;
        if (score == maxScore) {
            winScreen();
        }
        //clear array
        openedCards = [];
    } else {
        guesses++;
        $('#counter').text(guesses);
        $('.card').css('pointer-events', 'none');
        setTimeout(function (e) {
            $(ele).addClass(`${backgroundClass}`);
            $(openedCards[0]).addClass(`${backgroundClass}`);
            openedCards[0].addEventListener('click', flip);
            $('.card').css('pointer-events', '');
            openedCards = []
        }, 1000)

    }

}

function setUpEasyGame() {
    $('#changeTheme').hide();
    maxScore = 6;
    guesses = 0;
    $('#counter').text(null);
    board.empty();
    openedCards = [];
    score = 0;
    $('#popup').hide();
    let easyImages = [];
    if (theme == 'nature') {
        easyImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg'];
        addCards();
    } else {
        //api to put 6 jpgs in easyImgs array
        $.get({
            url: 'https://picsum.photos/v2/list?limit=6',
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    easyImages.push(data[i].download_url);
                    if (easyImages.length == 6) {
                        addAPICards();
                    }
                }

            }
        })
    }
    function addCards() {

        var cards = easyImages;
        cards = cards.concat(easyImages);
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            let card = document.createElement('div');
            card.className = `card cardEasy ${backgroundClass}`;
            //card.style.backgroundImage=`url('img/${backgroundImg}')`;
            card.addEventListener('click', flip);
            card.style.backgroundImage = `url('img/${cards[i]}')`;
            board.append(card);
        }
        board.show();
    }
    function addAPICards() {

        var cards = easyImages;
        cards = cards.concat(easyImages);
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            let card = document.createElement('div');
            card.className = `card cardEasy ${backgroundClass}`;
            card.addEventListener('click', flip);
            card.style.backgroundImage = `url('${cards[i]}')`;
            board.append(card);
        }
        board.show();
    }

}
function setUpMediumGame() {
    $('#changeTheme').hide();
    maxScore = 9;
    guesses = 0;
    $('#counter').text(null);
    board.empty();
    openedCards = [];
    score = 0;
    $('#popup').hide();
    mediumImages = [];
    if (theme == 'nature') {
        mediumImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg', 'eight.jpg', 'nine.jpg'];
        addCards();
    } else {
        //api to put 9 jpgs in mediumimages array
        $.get({
            url: 'https://picsum.photos/v2/list?limit=9',
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    mediumImages.push(data[i].download_url);
                    if (mediumImages.length == 9) {
                        addAPICards();
                    }
                }

            }
        })
    }
    function addCards() {
        var cards = mediumImages;
        cards = cards.concat(mediumImages);
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            let card = document.createElement('div');
            card.className = `card cardMedium ${backgroundClass}`;
            //card.style.backgroundImage=`url('img/${backgroundImg}')`;
            card.addEventListener('click', flip);
            card.style.backgroundImage = `url('img/${cards[i]}')`;
            board.append(card);
        }
        board.show();

    }
    function addAPICards() {

        var cards = mediumImages;
        cards = cards.concat(mediumImages);
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            let card = document.createElement('div');
            card.className = `card cardMedium ${backgroundClass}`;
            card.addEventListener('click', flip);
            card.style.backgroundImage = `url('${cards[i]}')`;
            board.append(card);
        }
        board.show();
    }
}
function setUpHardGame() {
    $('#changeTheme').hide();
    maxScore = 12;
    guesses = 0;
    $('#counter').text(null);
    board.empty();
    openedCards = [];
    score = 0;
    $('#popup').hide();
    hardImages = [];
    if (theme == 'nature') {
        hardImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg',
            'eight.jpg', 'nine.jpg', 'ten.jpg', 'eleven.jpg', 'twelve.jpg'];
        addCards();
    } else {
        //api to put 12 jpgs in mediumimages array
        $.get({
            url: 'https://picsum.photos/v2/list?limit=12',
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    hardImages.push(data[i].download_url);
                    if (hardImages.length == 12) {
                        addAPICards();
                    }
                }

            }
        })
    }
    function addCards() {
        var cards = hardImages;
        cards = cards.concat(hardImages);
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            let card = document.createElement('div');
            card.className = `card cardHard ${backgroundClass}`;
            //card.style.backgroundImage=`url('img/${backgroundImg}')`;
            card.addEventListener('click', flip);
            card.style.backgroundImage = `url('img/${cards[i]}')`;
            board.append(card);
        }
        board.show();

    }
    function addAPICards() {

        var cards = hardImages;
        cards = cards.concat(hardImages);
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            let card = document.createElement('div');
            card.className = `card cardHard ${backgroundClass}`;
            card.addEventListener('click', flip);
            card.style.backgroundImage = `url('${cards[i]}')`;
            board.append(card);
        }
        board.show();
    }
}
function showOptions() {
    $('#changeTheme').show();
    board.hide()
    $('#win').hide();
    $('#counter').text(null);
    $('#popup').show();

}

function popUpNewGame() {
    $('#win').hide();

    let $popUp = $('#popup');
    $popUp.append($(`<p id='title'>Welcome to ${title}!</p>`));
    $popUp.append($('<button class="btnOption" id="easy" onclick="setUpEasyGame()">Easy</button>'));
    $popUp.append($('<button class="btnOption" id="medium" onclick="setUpMediumGame()">Medium</button>'));
    $popUp.append($('<button class="btnOption" id="hard" onclick="setUpHardGame()">Hard</button>'));
}

function winScreen() {
    $('#changeTheme').show();
    board.hide();

    if (maxScore == 6) {//easy game
        checkEasyHighScore();
    } else if (maxScore == 9) {
        checkMediumHighScore();
    } else {
        checkHardHighScore();
    }

    let $winScr = $('#win');
    $winScr.empty();
    $winScr.append($('<h1>You won!</h1>'));
    $winScr.append($(`<h3 style='color:white'>It took you ${guesses} guesses!</h3>`));
    $winScr.append($('<button onclick="showOptions()">Play again</button>'));

    $winScr.show();

}

function toggleTheme() {

    let $wrap = $('#wrapper');
    let $popup = $('#popup');
    let $win = $('#win');
    if (board.hide) { }
    if (theme == 'nature') {
        title = "Sunsets";
        theme = 'api';
        backgroundClass = 'backgroundCardAPI';
        $wrap.removeClass('wrapperNature');
        $wrap.addClass('wrapperAPI');
        $popup.removeClass('popupNature');
        $popup.addClass('popupAPI');
        $win.removeClass('winNature');
        $win.addClass('winAPI');
        $('#title').text(`Welcome to ${title}!`);
        $('#logoText').text(`${title} Memory Game`);

    } else {
        title = "Nature";
        theme = 'nature';
        backgroundClass = 'backgroundCard';
        $wrap.removeClass('wrapperAPI');
        $wrap.addClass('wrapperNature');
        $popup.removeClass('popupAPI');
        $popup.addClass('popupNature');
        $win.removeClass('winAPI');
        $win.addClass('winNature');
        $('#title').text(`Welcome to ${title}!`);
        $('#logoText').text(`${title} Memory Game`);

    }
}

//highScore
let easy = JSON.parse(localStorage.getItem('easyHighScore'));
let easyName = Object.keys(easy);
let easyScore = Object.values(easy);

let medium = JSON.parse(localStorage.getItem('mediumHighScore'));
let mediumName = Object.keys(medium);
let mediumScore = Object.values(medium);

let hard = JSON.parse(localStorage.getItem('hardHighScore'));
let hardName = Object.keys(hard);
let hardScore = Object.values(hard);
let nameUser;


//stati
let title = "Nature";
let backgroundClass = 'backgroundCard'
let theme = 'nature';
let openedCards = [];
let score = 0;
let guesses = 0;
let maxScore;
let board = $('#playField');
popUpNewGame();
$('#logoText').text("Nature's Memory Game");
$('#newGameBtn').on('click', showOptions);
$('#highScore').click(function () {
    updateHighScore();
    $('#highScoreDetails').toggle();
});


//highscore implementation
function checkEasyHighScore() {
    if (easyScore== undefined || easyScore > guesses) {
        nameUser = prompt('You have the highScore! \n What is your name?');
        localStorage.setItem('easyHighScore', JSON.stringify({ [nameUser]: guesses }));
        updateHighScore();
    }

}
function checkMediumHighScore() {
    if (mediumScore == undefined ||mediumScore > guesses) {
        nameUser = prompt('You have the highScore! \n What is your name?');
        localStorage.setItem('mediumHighScore', JSON.stringify({ [nameUser]: guesses }));
        updateHighScore();
    }

}
function checkHardHighScore() {
    if (hardScore == undefined || hardScore > guesses) {
        nameUser = prompt('You have the highScore! \n What is your name?');
        localStorage.setItem('hardHighScore', JSON.stringify({ [nameUser]: guesses }));
        updateHighScore();
    }
}

function updateHighScore() {
    easy = JSON.parse(localStorage.getItem('easyHighScore'));
    easyName = Object.keys(easy);
    easyScore = Object.values(easy);
    
    medium = JSON.parse(localStorage.getItem('mediumHighScore'));
    mediumName = Object.keys(medium);
    mediumScore = Object.values(medium);
    
    hard = JSON.parse(localStorage.getItem('hardHighScore'));
    hardName = Object.keys(hard);
    hardScore = Object.values(hard);

    $('#easyHS').text(`${easyName}: ${easyScore}`);
    $('#mediumHS').text(`${mediumName}: ${mediumScore}`);
    $('#hardHS').text(`${hardName}: ${hardScore}`);


}