#!/usr/bin/python3
"""
Index view for the API
"""
from api.v1.views import app_views
from flask import jsonify
from models import storage

@app_views.route('/stats', methods=['GET'], strict_slashes=False)
def get_stats():
    """Retrieve the number of each objects by type"""
    stats = {
        'amenities': storage.count('Amenity'),
        'cities': storage.count('City'),
        'places': storage.count('Place'),
        'reviews': storage.count('Review'),
        'states': storage.count('State'),
        'users': storage.count('User')
    }
    return jsonify(stats)
