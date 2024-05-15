document.addEventListener("DOMContentLoaded", function() {

    var researchOptions = [
      { text: "PhD Research", id: "phd" },
      { text: "Masters Research", id: "masters" },
      { text: "Undergraduate Projects", id: "undergraduate" }
    ];
  
    
    var dropdownMenu = document.getElementById("researchDropdown");
    researchOptions.forEach(function(option) {
      var a = document.createElement("a");
      a.className = "dropdown-item";
      a.href = "#" + option.id;
      a.textContent = option.text;
      dropdownMenu.appendChild(a);
    });
  
  
    var dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(function(item) {
      item.addEventListener("click", function(event) {
        event.preventDefault();
        var sectionId = event.target.getAttribute("href").substring(1);
        scrollToSection(sectionId);
      });
    });
  
  
    function scrollToSection(sectionId) {
      var section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  
  document.querySelector('.btn-outline-success').addEventListener('click', function(event) {
    event.preventDefault();
    var searchQuery = document.querySelector('.form-control').value.toLowerCase().trim();
    
    
    if (searchQuery.includes("phd")) {
        window.location.href = 'phd.html';
    } else if (searchQuery.includes("masters")) {
        window.location.href = 'masters.html';
    } else if (searchQuery.includes("undergrad")) {
        window.location.href = 'undergrad.html';
    } else {
        alert('No results found for "' + searchQuery + '". Please try different keywords.');
    }
});
