document.querySelector('#convert').addEventListener('click', convert)

function convert() {

    let distanceInch = document.querySelector('#meter').value
    let distanceFoot = document.querySelector('#meter').value
    let distanceYard = document.querySelector('#meter').value
    let distanceMile = document.querySelector('#meter').value

    distanceInch = distanceInch * 39.370078740157
    distanceFoot = distanceFoot * 3.28084
    distanceYard = distanceYard * 0.9144
    distanceMile = distanceMile / 1609

    document.querySelector('#placeToConvertInch').innerText = distanceInch;
    document.querySelector('#placeToConvertFoot').innerText = distanceFoot;
    document.querySelector('#placeToConvertYard').innerText = distanceYard;
    document.querySelector('#placeToConvertMile').innerText = distanceMile;

}
