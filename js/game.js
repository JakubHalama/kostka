var hody = [];

document.getElementById('game').addEventListener('click',
    function(){
        hod();
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    var h1 = Math.ceil(Math.random() * 6);
    var h2 = Math.ceil(Math.random() * 6);
    hody.push(h1, h2);

    document.getElementById('cube1').src = 'img/kostka' + h1 + '.png';
    document.getElementById('cube2').src = 'img/kostka' + h2 + '.png';

    document.getElementById('result1').innerHTML = '<p>Hod hráče 1: ' + h1 + '</p>';
    document.getElementById('result1').innerHTML += '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result1').innerHTML += '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result1').innerHTML += '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
    document.getElementById('result1').innerHTML += '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result1').innerHTML += '<p>Nejnižší hod: ' + minimum(hody) + '</p>';

    document.getElementById('result2').innerHTML = '<p>Hod hráče 2: ' + h2 + '</p>';
    document.getElementById('result2').innerHTML += '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result2').innerHTML += '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result2').innerHTML += '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
    document.getElementById('result2').innerHTML += '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result2').innerHTML += '<p>Nejnižší hod: ' + minimum(hody) + '</p>';

    // Vyhlásit vítěze
    if (h1 > h2) {
        document.getElementById('winner').innerHTML = '<p>Vyhrál hráč 1!</p>';
    } else if (h1 < h2) {
        document.getElementById('winner').innerHTML = '<p>Vyhrál hráč 2!</p>';
    } else {
        document.getElementById('winner').innerHTML = '<p>Remíza!</p>';
    }
}


