document.addEventListener("DOMContentLoaded", function() {
    console.log('%c HI', 'color: firebrick');
  
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
   .then(function(response) {
      return response.json();
    })
   .then(function(object) {
      const imagesContainer = document.getElementById("dog-image-container");
      object.message.forEach((imageUrl) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imagesContainer.appendChild(imgElement);
      });
      console.log(object);
    })
   .catch(function(error) {
      alert("Access Denied");
      console.log(error.alert);
    });
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
   .then(function(response) {
      return response.json();
    })
   .then(function(object) {
      const breedListElement = document.getElementById("dog-breeds");
      const breedDropdown = document.getElementById("breed-dropdown");
    
    // Function to display breeds
    function displayBreeds(breeds) {
      breedListElement.innerHTML = '';
      breeds.forEach((breed) => {
        const listItem = document.createElement("li");
        listItem.textContent = breed;
        breedListElement.appendChild(listItem);
        listItem.addEventListener("click", () => {
          listItem.style.color = "blue";
        });
      });
    }
  
    // Initial display of all breeds
    const breeds = Object.keys(object.message);
    displayBreeds(breeds);
    
    // Event listener for the dropdown
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
      displayBreeds(filteredBreeds);
    });
      console.log(object);
    })
   .catch(function(error) {
      alert("Dogs Unavailable")
      console.log(error.alert);
    })
  });