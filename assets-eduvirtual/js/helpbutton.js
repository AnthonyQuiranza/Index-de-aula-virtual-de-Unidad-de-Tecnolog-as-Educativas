$(function() {
    $(".need-help-component").on("click touch", "#need-help-button", function() {
      toggleClass();
    });
  });
  
  function handleBtnKeyPress(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      toggleClass();
    }
  }
  
  function toggleClass() {
    $(".need-help-component").toggleClass("is-open");
    //set the ARIA attributes
    // Check to see if the button is pressed
    var pressed = $("#need-help-button").attr("aria-pressed") === "true"; // Change aria-expanded to the opposite state
    $("#need-help-button").attr("aria-pressed", !pressed);
    //check to see if help group is hidden
    var expanded = $("#need-help-group").attr("aria-expanded") === "true";
    //change aria-hidden to opposite
    $("#need-help-group").attr("aria-expanded", !expanded);
    return false;
  }
  
  // Dynamic CSS
  var sheet = document.createElement("style");
  sheet.innerHTML =
    ".is-open #need-help-button-text:after { content: 'Close help X'} #need-help-button-text:after {content:'Need Help?';}";
  document.body.appendChild(sheet);
  