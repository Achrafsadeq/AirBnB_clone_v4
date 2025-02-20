# 0x06. AirBnB Clone - Web Dynamic

## Background Context

This project focuses on building a dynamic web application using Flask, jQuery, and JavaScript. By completing this project, you will gain hands-on experience with dynamic web pages, DOM manipulation, and integrating with a RESTful API. You will also learn how to create interactive web pages that update without reloading the entire page.

## Requirements

| Category         | Details |
|------------------|---------|
| **Project Type** | Mandatory |
| **Review**       | Manually reviewed by peers or TAs |
| **Python Version** | Python 3.4.3 (Ubuntu 20.04 LTS) |
| **Flask Version** | Flask 1.1.2 |
| **jQuery Version** | jQuery 3.x |
| **README**       | A `README.md` file at the root of the project folder is mandatory |
| **File Extension** | All Python scripts must end with `.py` |

## General Requirements

1. **Python Scripts**: All Python scripts must be executable and follow PEP 8 style guidelines.
2. **File Structure**: All files should end with a new line, and the first line of each Python script must be a shebang (`#!/usr/bin/python3`).
3. **Ubuntu 20.04 LTS**: All files will be interpreted on Ubuntu 20.04 LTS.
4. **Flask Configuration**: Flask must be properly configured and running on the server.
5. **JavaScript**: All JavaScript must be in the `scripts` folder and use jQuery 3.x.
6. **HTML**: HTML should not reload for each action; use DOM manipulation to update values and fetch data.

## Tasks

| Task                          | Description                                  | Files                         |
|-------------------------------|---------------------------------------------|-------------------------------|
| **0. Last clone!**            | Fork the codebase and update the repository name to `AirBnB_clone_v4`. Update the `README.md` and install Flasgger. | `README.md` |
| **1. Cash only**              | Write a script that starts a Flask web application and updates the asset caching to avoid Flask caching issues. | `web_dynamic/0-hbnb.py`, `templates/0-hbnb.html` |
| **2. Select some Amenities to be comfortable!** | Make the filters section dynamic by adding checkboxes for amenities and updating the list of selected amenities dynamically. | `web_dynamic/1-hbnb.py`, `templates/1-hbnb.html`, `static/scripts/1-hbnb.js` |
| **3. API status**             | Update the API entry point to allow CORS and add a status indicator to the web page. | `api/v1/app.py`, `web_dynamic/2-hbnb.py`, `templates/2-hbnb.html`, `static/scripts/2-hbnb.js`, `static/styles/3-header.css` |
| **4. Fetch places**           | Fetch places from the API and display them dynamically on the web page. | `web_dynamic/3-hbnb.py`, `templates/3-hbnb.html`, `static/scripts/3-hbnb.js` |
| **5. Filter places by Amenity** | Add functionality to filter places by selected amenities. | `web_dynamic/4-hbnb.py`, `templates/4-hbnb.html`, `static/scripts/4-hbnb.js` |
| **6. States and Cities**      | Add functionality to filter places by selected states and cities. | `web_dynamic/100-hbnb.py`, `templates/100-hbnb.html`, `static/scripts/100-hbnb.js` |
| **7. Reviews**                | Add functionality to show and hide reviews dynamically. | `web_dynamic/101-hbnb.py`, `templates/101-hbnb.html`, `static/scripts/101-hbnb.js` |

## Submission

- **GitHub Repository**: [AirBnB_clone_v4](https://github.com/Achrafsadeq/AirBnB_clone_v4)
- **Directory**: `web_dynamic`

## Mission Director

This project is part of the ALX Software Engineering Program.

### Developer

**Codename**: Achraf Sadeq & Elhoucine Smaili

### Acknowledgments

This project was developed by Holberton School, in collaboration with the ALX Software Engineering Program, to provide practical, hands-on learning experiences in a professional and real-world context. It aims to equip learners with the skills and knowledge necessary to tackle complex challenges in software engineering.

