// get the select element
const select = document.getElementById('select1');

// disable all options except the default option
const options = select.options;
for (let i = 1; i < options.length; i++) {
  options[i].disabled = true;
}

// listen for change events on the select element
select.addEventListener('change', function() {
  // enable all options
  for (let i = 1; i < options.length; i++) {
    options[i].disabled = false;
  }
});