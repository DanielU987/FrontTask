# Shipments CRUD App with React and Axios

## Introduction
This is a simple CRUD (Create, Read, Update, Delete) application created using React and Axios. The app allows users to manage shipments by performing operations such as creating new shipments, retrieving shipment data from an API, updating shipment details, and deleting shipments.

## Features
- Create: Users can add new shipments by providing details such as tracking number, origin, destination, and status.
- Read: The app retrieves shipment data from an API and displays it to the user.
- Update: Users can edit the details of existing shipments and save the changes.
- Delete: Users can remove shipments from the list.

## Prerequisites
To run this application, you need to have the following installed on your system:
- Node.js and npm (Node Package Manager)

## Getting Started
Follow these steps to get started with the Shipments CRUD app:

1. Clone the repository from GitHub:
```
git clone https://github.com/DanielU987/React-Axios
```
2. Open a command prompt or terminal and navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Open the `src/pages/Home.jsx` file and update the API endpoint to the appropriate URL.
5. Run `npm start` to start the development server.

## Usage
- Open your web browser and access the application at `http://localhost:3000`.
- The homepage displays a list of shipments retrieved from the API.
- To add a new shipment, click on the "Add Shipment" button and fill in the required details in the form.
- To edit a shipment's details, click on the "Edit" button next to the desired shipment and make the necessary changes.
- To delete a shipment, click on the "Delete" button next to the desired shipment.

## Project Structure
The project follows a standard structure for a React application:

- `src/components`: Contains reusable React components used in the application.
- `src/pages/Home.jsx`: Contains the API configuration and functions to interact with the shipments API.
- `src/pages`: Contains the main application pages, such as the shipment list and shipment form.

## Technologies Used
- React: JavaScript library for building user interfaces.
- Axios: HTTP client library for making API requests.
- HTML/CSS: Markup and styling languages for structuring and presenting the application.

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## Acknowledgments
This project was inspired by the need for a simple CRUD application and built using React and Axios.

## Contact
Feel free to explore, modify, and have fun with this Shipments CRUD app!
