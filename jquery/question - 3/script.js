
//Set the constant of the button's class function
var showPass = $(".showPass");

//The following calculation will be activated when you click on the button
showPass.click(function() {
  var $this = $(this);

//If the contacts in the input box are in the form of a password(type="password"), it will be converted to text(type="text").

//If it is in text, it will be converted to password

  if ($this.text().toLowerCase() === "show") {
     $this.text("Hide");
     $this
     .prev("input")
     .prop("type", "text");
  } else {
    $this.text("Show");
     $this
      .prev("input")
      .prop("type", "password");
    }
  });