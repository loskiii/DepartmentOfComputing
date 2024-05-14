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
  