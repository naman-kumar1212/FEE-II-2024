# USports - Your Ultimate Sports Hub

USports is an interactive sports platform that allows users to explore various sports, view upcoming events, and stay connected with the latest updates. It includes functionalities like theme switching, event viewing, and user preferences for a personalized experience.

## Features

- **Theme Switching**: Toggle between light and dark mode for optimal viewing based on user preference.
- **Sports and Events**: Browse a list of sports and explore details of upcoming events.
- **Signup Form**: Users can sign up and store their data locally (for demonstration purposes).
- **Responsive Design**: The website is designed to be fully responsive across devices.
- **Interactive Chatbot**: A chatbot interface is available to assist users with sports-related queries.

## Technologies Used

- **HTML5**: Structure of the web pages.
- **CSS3**: Styling, layout, and responsiveness.
- **JavaScript**: Interactivity, theme switching, and data handling.
- **LocalStorage**: Storing user preferences (theme and signup details) locally.
- **FontAwesome**: Icons for better visual representation.
- **Google Fonts**: For typography styling.

## File Structure

- **SPORTSHOMEPAGE.html**: Main webpage file that structures the homepage.
- **style.css**: Contains styles for the webpage including the dark and light themes.
- **script.js**: Handles interactivity like theme switching, signup form logic, and dynamic loading of sports and events.

## Key Functionalities

### Theme Switching
- The user can toggle between light and dark modes using the switch in the top-right corner. This setting is saved in `localStorage` and remembered on subsequent visits.

### Signup Form
- The form allows users to enter their username, email, and password. Though for demonstration purposes, the data is stored in `localStorage`.

### Dynamic Sports and Events
- The sports section loads a predefined list of sports dynamically. Users can load more sports with a button.
- The events section also displays upcoming events with detailed descriptions in a modal popup.

### Responsive Design
- The layout adjusts based on screen size, providing an optimal experience across devices, including desktop and mobile.

## Future Improvements
- Connect to a real backend for user signup and authentication.
- Allow users to book sports slots directly through the platform.
- Implement an AI chatbot for more interactive and dynamic responses.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
