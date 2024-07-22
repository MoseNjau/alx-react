import $ from "jquery";

const paragraphs = [
    "<p>Holberton Dashboard</p>",
    "<p>Dashboard data for the students</p>",
    "<p>Copyright - Holberton School</p>",
];
paragraphs.forEach((paragraph) => $("body").append(paragraph));
