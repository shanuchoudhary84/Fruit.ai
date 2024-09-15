# Full-Stack Project

## Overview
This project is a full-stack application with a front-end built using React and a back-end using Flask. The application includes a login page, a homepage with multiple services, and a backend API for managing FAQs.

## Live Page
https://fruit-ai-psi.vercel.app/

## Demo Video


## Front-End

### Login Page
- **Description**: A simple login page with fields for UserId and Password.
- **Functionality**: Uses hardcoded dummy credentials (`dummyUser` and `dummyPass`). On successful login, it redirects to the homepage.
- **File**: `src/Login.js`

### HomePage
- **Description**: The homepage contains four services: Chat, Translator, FAQ, and About.
- **Functionality**: Each service redirects to its respective page on click.
- **File**: `src/Home.js`

### Services
1. **Chat**: Displays a list of fruits as cards and individual fruit details.
2. **Translator**: An input box to show results in a regional language.
3. **FAQ Page**: Displays frequently asked questions.
4. **About Page**: Provides information about the application.

## Back-End

### Framework
- **Flask**: Chosen for its lightweight and minimalistic nature, making it suitable for quick setup.

### API Endpoints
- **GET /faqs**: Fetch all FAQs.
- **GET /faqs/:id**: Fetch a single FAQ by ID.
- **POST /faqs**: Create a new FAQ.
- **PUT /faqs/:id**: Update a FAQ by ID.
- **DELETE /faqs/:id**: Delete a FAQ by ID.

### Error Handling
- Proper error handling and validation are implemented for all endpoints to ensure robustness.

## Setup Instructions

### Front-End
1. **Navigate to the `frontend` directory**:
    ```sh
    cd frontend
    ```
2. **Install dependencies**:
    ```sh
    npm install
    ```
3. **Start the development server**:
    ```sh
    npm start
    ```

### Back-End
1. **Navigate to the `backend` directory**:
    ```sh
    cd backend
    ```
2. **Install dependencies**:
    ```sh
    pip install -r requirements.txt
    ```
3. **Start the Flask server**:
    ```sh
    python app.py
    ```

## Project Structure
project-root/ │ ├── frontend/ │ ├── src/ │ │ ├── Login.js │ │ ├── Home.js │ │ └── … │ ├── public/ │ ├── package.json │ └── … │ ├── backend/ │ ├── app.py │ ├── requirements.txt │ └── … │ └── README.md


## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
