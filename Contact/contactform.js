

(function(){
 var form = document.getElementById('contactform');

   addEventListener(form, 'submit', function(e) {
    e.preventDefault();
    var elements = this.elements;
    var fname = elements.fname.value;
    var msg = fname + ', thanks for reaching out!';
    document.getElementById('reply').textContent = msg;
  });
}());
