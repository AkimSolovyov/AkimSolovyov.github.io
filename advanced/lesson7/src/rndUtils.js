function getRandomElement(array) {
    var i = Math.floor( Math.random() * array.length, 10);
    return array[i];
}

module.exports = getRandomElement;
