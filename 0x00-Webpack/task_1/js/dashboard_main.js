import $ from "jquery";
import _ from "lodash";

const elements = [
    "<p>Holberton Dashboard</p>",
    "<p>Dashboard data for the students</p>",
    "<button>Click here to get started</button>",
    "<p id='count'></p>",
    "<p>Copyright - Holberton School</p>",
];

elements.forEach((e) => $("body").append(e));

let counter = 0;
function updateCounter() {
    counter++;
    $("#count").text(`${counter} clicks on the button`)
}

$("button").on('click', _.debounce(updateCounter, 1000));

