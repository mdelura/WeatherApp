"use strict";

let searchButton = document.querySelector("button");
let searchCity = document.querySelector("#city");

let loadingText = document.querySelector("#load");
let weatherBox = document.querySelector("#weather");
let weatherCity = weatherBox.firstElementChild;
let weatherDescription = weatherBox.querySelector("#weatherDescription");
let weatherTemperature = weatherBox.lastElementChild;

