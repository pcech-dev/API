'use strict';

function fetchDogPics(numberOfDogs) {
    fetch('https://dog.ceo/api/breeds/image/random/' + numberOfDogs)
        .then(response => response.json())
        .then(responseJson => displayImg(responseJson))
        .catch(error => alert('Dogs pics could not be downloaded'));
}

function watchForm() {
    $('form').submit(function (event) {
        event.preventDefault();
        fetchDogPics($('#input1').val());
    })
}

function displayImg(responseJson) {
    $('.dog-img').empty();
    for (let i = 0; i < responseJson.message.length; i++) {
        $('.dog-img').append(`<img src="${responseJson.message[i]}" alt="picture of a dog" class="img-result">`)
    }
    $('.images-js').removeClass('hidden');
}

function initFunction() {
    console.log('everything works');
    watchForm();
}

$(initFunction);