$(document).ready(function() {
  // Store selected items
  const amenities = {};
  const states = {};
  const cities = {};

  // Handle amenity checkbox changes
  $('.amenities input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');
    updateSelection(this.checked, amenityId, amenityName, amenities);
    updateH4Text('.amenities h4', amenities);
  });

  // Handle state checkbox changes
  $('.locations .popover > ul > li > input[type="checkbox"]').change(function() {
    const stateId = $(this).data('id');
    const stateName = $(this).data('name');
    const cityCheckboxes = $(this).closest('li').find('ul li input[type="checkbox"]');
   
    updateSelection(this.checked, stateId, stateName, states);
   
    // Check/uncheck all cities in this state
    cityCheckboxes.prop('checked', this.checked).trigger('change');
   
    updateH4Text('.locations h4', {...states, ...cities});
  });

  // Handle city checkbox changes
  $('.locations .popover ul ul li input[type="checkbox"]').change(function() {
    const cityId = $(this).data('id');
    const cityName = $(this).data('name');
    updateSelection(this.checked, cityId, cityName, cities);
    updateH4Text('.locations h4', {...states, ...cities});
  });

  // Helper function to update selection dictionaries
  function updateSelection(isChecked, id, name, dictionary) {
    if (isChecked) {
      dictionary[id] = name;
    } else {
      delete dictionary[id];
    }
  }

  // Helper function to update h4 text
  function updateH4Text(selector, dictionary) {
    const text = Object.values(dictionary).join(', ');
    $(selector).text(text || '\u00A0');
  }

  // Check API status
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  }).fail(function() {
    $('#api_status').removeClass('available');
  });

  // Function to fetch and display places
  function fetchPlaces() {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        amenities: Object.keys(amenities),
        states: Object.keys(states),
        cities: Object.keys(cities)
      }),
      success: function(places) {
        $('.places').empty(); // Clear existing places
        places.forEach(function(place) {
          const article = `
            <article>
              <div class="title_box">
                <h2>${place.name}</h2>
                <div class="price_by_night">$${place.price_by_night}</div>
              </div>
              <div class="information">
                <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
              </div>
              <div class="description">
                ${place.description}
              </div>
            </article>
          `;
          $('.places').append(article);
        });
      },
      error: function(error) {
        console.error('Error fetching places:', error);
      }
    });
  }

  // Initial places load
  fetchPlaces();

  // Handle search button click
  $('button').click(function() {
    fetchPlaces();
  });
});
