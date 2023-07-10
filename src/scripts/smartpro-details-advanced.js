// Доработал раскрывающиеся блоки, чтобы при клике на другой блок, остальные закрывались
function toggleDetails(event) {
    var details = document.getElementsByTagName('details');
    for (var i = 0; i < details.length; i++) {
      if (details[i] === event.target) {
        if (details[i].hasAttribute('open')) {
          details[i].removeAttribute('open');
        } else {
          details[i].setAttribute('open', 'true');
        }
      } else {
        details[i].removeAttribute('open');
      }
    }
  }; 

//   close all details when clicking second time
    function closeDetails(event) {
        var details = document.getElementsByTagName('details');
        for (var i = 0; i < details.length; i++) {
            details[i].removeAttribute('open');
        }
    };