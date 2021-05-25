function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentialNumbers(array, n) {
    // var numbers = [];
    for (var i = 0; i < n; i++) {
        var j = (i + 1);
        numbers.push(j);
    }
    // show(numbers);
}

function createRandomNumbers(array, n) {
    // var numbers = [];
    for (var i = 0; i < n; i++) {
        var r = Math.floor(Math.random() * 10);
        numbers.push(r);
    }
    // show(numbers);
}