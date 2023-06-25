const roomTypeButtons = document.querySelectorAll('button[name="room_type_button"]');

roomTypeButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Nastawiamy wartośc dla pay_method input field
    const roomTypeInput = document.querySelector('input[name="type"]');
    roomTypeInput.value = event.target.value;
  });
});

// Add Amenity
const addAmenityBtn = document.querySelector('.add-amenity-btn');
const amenitiesContainer = document.querySelector('#amenities-container');

addAmenityBtn.addEventListener('click', () => {
  const newAmenityInput = document.createElement('input');
  newAmenityInput.type = 'text';
  newAmenityInput.name = 'amenities[]';
  newAmenityInput.placeholder = 'Enter amenity';
  newAmenityInput.classList.add('form-control', 'mb-3');

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.classList.add('btn', 'btn-outline-secondary', 'remove-btn');
  removeBtn.textContent = 'Remove';

  const inputGroup = document.createElement('div');
  inputGroup.classList.add('input-group', 'mb-3');
  inputGroup.appendChild(newAmenityInput);
  inputGroup.appendChild(removeBtn);

  amenitiesContainer.appendChild(inputGroup);
});

// Remove Amenity or Price
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const inputGroup = event.target.parentNode;
    const container = inputGroup.parentNode;
    container.removeChild(inputGroup);
  }
});