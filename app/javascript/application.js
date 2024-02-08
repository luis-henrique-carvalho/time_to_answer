// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
// ....
import "bootstrap";

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip();
});
// ....

import "./stylesheets/application";
require("admin-lte");
import "@fortawesome/fontawesome-free/js/all";
