window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    /**
     * success
     * This receives two parameters from ajax(), but doesn't use them?
     */
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    /**
     * success
     * This receives two parameters from ajax(), but doesn't use them?
     */
    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    /**
     * Event Handler: form submission
     */
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

/**
 * helper function: ajax
 * @param {*} method
 * @param {*} url
 * @param {*} data
 * @param {function} success what to do if HTTP 200
 * @param {*} error
 * @return {void} : Open, set, check, and send with XHR
 */
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
