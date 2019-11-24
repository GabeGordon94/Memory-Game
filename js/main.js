function newGame() {
    board.empty();
    openedCards = [];
    score=0;
    setUpEasyGame();
}
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
}


function flip(e) {
    let ele = e.target;
    $(ele).removeClass('backgroundCard');
    console.log($(ele).css('background-image'));

    if (openedCards[0] == undefined) {
        console.log(ele);
        openedCards.push(ele);
    } else if ($(openedCards[0]).css('background-image') === $(ele).css('background-image')) {
        //cards stay put
        score++;
        console.log('same');
        console.log(score);
        if(score==6){
            alert('you won');
        }
        //clear array
        openedCards=[];
    } else {
        console.log('wrong');
        $('.card').css('pointer-events','none');
        setTimeout(function(e){
            console.log('timeout');
            $(ele).addClass('backgroundCard');
            $(openedCards[0]).addClass('backgroundCard');
            $('.card').css('pointer-events','');
            openedCards=[]
        },1000)

    }

}

function setUpEasyGame() {
    let easyImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg'];
    var cards = easyImages;
    cards = cards.concat(easyImages);
    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card backgroundCard';
        //card.style.backgroundImage=`url('img/${backgroundImg}')`;
        card.addEventListener('click', flip);
        card.style.backgroundImage = `url('img/${cards[i]}')`;
        board.append(card);
    }
}
function setUpMediumGame() {
    let mediumImages = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg'];
    var cards = easyImages;
    cards = cards.concat(easyImages);
    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card backgroundCard';
        //card.style.backgroundImage=`url('img/${backgroundImg}')`;
        card.addEventListener('click', flip);
        card.style.backgroundImage = `url('img/${cards[i]}')`;
        board.append(card);
    }
}

let openedCards = [];
let score=0;
const backgroundImg = 'background.jpg';
let board = $('#playField');

$('#newGameBtn').on('click', newGame);

