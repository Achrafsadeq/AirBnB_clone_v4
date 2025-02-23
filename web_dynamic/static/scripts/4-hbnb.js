$(document).ready(function() {
  // Store selected amenities
  const amenities = {};

  // Handle amenity checkbox changes
  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if (this.checked) {
      amenities[amenityId] = amenityName;
    } else {
      delete amenities[amenityId];
    }

    const amenitiesList = Object.values(amenities).join(', ');
    $('.amenities h4').text(amenitiesList || '\u00A0');
  });

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
        amenities: Object.keys(amenities)
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
