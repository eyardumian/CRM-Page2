/* add your functions here */
(function () {

  for (var i = 0; i < books.length; i++) {

  document.write("<div class='mdl-cell mdl-card mdl-shadow--2dp'>");
  document.write("<div class='mdl-card__media'>");
  document.write("<img src='images/" + books[i].isbn + ".jpg'>");
  document.write("</div>");
  document.write("<div class='mdl-card__supporting-text'>");
  document.write("<p>" + books[i].description + "</p>");
  document.write("<h6>Adopters</h6>");
  document.write("<ul>");
    for (var j = 0; j < books[i].universities.length; j++) {
      document.write("<li>" + books[j].universities[j] + "</li>");
    }
  document.write("</ul>");
  document.write("</div>");
  document.write("<div class='mdl-card__actions mdl-card--border'>");
  document.write("<a class='mdl-button'>READ MORE</a>");
  document.write("</div>");
  document.write("</div>");
}
})();
