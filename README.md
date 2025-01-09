# My React App

This is a React application with a simple 4-page structure including Home, About Us, Server, and Contact pages. The application also implements user authentication, allowing users to log in and modify the content of the Server page.

## Project Structure

```
my-react-app
├── public
│   ├── index.html        # Main HTML file
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components        # Contains all React components
│   │   ├── Home.tsx     # Home page component
│   │   ├── AboutUs.tsx  # About Us page component
│   │   ├── Server.tsx    # Server page component with authentication
│   │   ├── Contact.tsx   # Contact page component
│   │   └── Auth          # Authentication components
│   │       ├── Login.tsx # Login component
│   │       └── PrivateRoute.tsx # Protected route component
│   ├── context           # Context for authentication state
│   │   └── AuthContext.tsx # Auth context provider
│   ├── services          # Services for handling authentication
│   │   └── authService.ts # Authentication service
│   ├── App.tsx          # Main application component with routing
│   ├── index.tsx        # Entry point for the React application
│   └── types             # TypeScript types and interfaces
│       └── index.ts
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate through the pages using the links provided in the application.
- Use the Login component to authenticate users.
- The Server page content can be modified based on user authentication status.

## License

This project is licensed under the MIT License.