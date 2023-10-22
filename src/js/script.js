document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById("submit-btn");

    myButton.addEventListener("click", function() {
        // Clear input fields
        document.getElementById("name-input").value = "";
        document.getElementById("email-input").value = "";
        document.getElementById("message-input").value = "";

        // Display alert
        alert("You submitted the form!");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('hero-drop');
    const dropdown = document.getElementById('myDropdown');
  
    svgElement.addEventListener('click', function() {
      dropdown.classList.toggle('hidden');
    });
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('art-btn');
    const dropdown = document.getElementById('art-drop');
  
    svgElement.addEventListener('click', function() {
      dropdown.classList.toggle('hidden');
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('food-btn');
    const dropdown = document.getElementById('food-drop');
  
    svgElement.addEventListener('click', function() {
      dropdown.classList.toggle('hidden');
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('wt-btn');
    const dropdown = document.getElementById('wt-drop');
  
    svgElement.addEventListener('click', function() {
      dropdown.classList.toggle('hidden');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('man-btn');
    const dropdown = document.getElementById('man-drop');
  
    svgElement.addEventListener('click', function() {
      dropdown.classList.toggle('hidden');
    });
  });