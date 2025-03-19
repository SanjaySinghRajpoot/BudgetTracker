# Budget Tracker Application

This project is a Budget Tracker application designed to help users manage and split expenses efficiently. It is built with scalability and maintainability in mind, making it suitable for both small and large-scale use cases.

---

## Features

- **Add, Edit, and Delete Expenses**: Manage expenses with ease.
- **Split Expenses Equally**: Automatically calculate and split expenses among participants.
- **Responsive Design**: Works seamlessly across devices (desktop, tablet, and mobile).
- **Error Handling and Validation**: Ensures data integrity with robust form validation.
- **Scalable Architecture**: Built with reusable components and modular design for easy feature expansion.
- **Modern UI**: Styled with Tailwind CSS for a clean and intuitive user experience.

---

## Scalability

This project is designed to be scalable with the following considerations:

1. **Component Reusability**: The application uses modular and reusable React components, such as `Button` and `AddExpense`, to ensure consistency and reduce code duplication.
2. **State Management**: Easily extendable state management using React's Context API or integration with libraries like Redux for larger applications.
3. **API Integration**: Ready for integration with RESTful APIs or GraphQL for dynamic data handling.
4. **Code Maintainability**: Written in TypeScript for type safety and better developer experience.
5. **Performance Optimization**: Lazy loading and code splitting can be implemented for faster load times.

---

## AddExpense Component

The `AddExpense` component is a key part of the application, allowing users to add new expenses. Below are its details:

### Props

- **data**: An object containing the current state of the expense form (e.g., `amount`).
- **errors**: An object containing validation errors for the form fields.
- **handleChange**: A function to handle input changes in the form.
- **validate**: A function to validate the form fields.
- **handleAddExpense**: A function to handle the submission of the expense form.

### Key Features

- **Input Field**: Captures the expense amount (`value={data.amount}`).
- **Error Handling**: Displays error messages for invalid inputs (`error={errors ? errors.amount : ""}`).
- **Split Equally**: A visual indicator (`<p>` tag) to show that the expense will be split equally.
- **Add Expense Button**: A button to submit the form. It is disabled if the form validation fails (`disabled={validate()}`).

---

## Best Features of This Project

1. **User-Friendly Interface**: Intuitive design for seamless user interaction.
2. **Scalable Codebase**: Modular architecture ensures easy addition of new features.
3. **Error Feedback**: Real-time error messages for better user experience.
4. **Responsive Design**: Optimized for all screen sizes.
5. **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS for performance and maintainability.

---

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>## BudgetTracker
A Simple budget tracker and bill splitting application. 

### Technologies Used

- Reactjs
- Nodejs
- Javascript & Typescript 
- MongoDB 
- Tailwind CSS


## Frontend
- Clone the frontend and backend repos
- Install the `node_modules` with `yarn install`
- For frontend run `yarn start` and for backend run `yarn dev`


## Backend
.env for Backend

```
MONGO_DB_URL=
JWT_PRIVATE_KEY=
```

Install all the dependecies using `npm install` than use `nodemon index.js` to start the server. 

## Testing ID 

email - `rohit_new22@gmail.com`
password - `123456`

## Images
![Screenshot_20230105_215321](https://user-images.githubusercontent.com/67458417/211132079-0cbdd237-e9d9-4261-81ca-9909df9aecec.png)
![Screenshot_20230105_215341](https://user-images.githubusercontent.com/67458417/211132104-162e80a7-0a43-40e3-8703-25dda2c9e120.png)
![Screenshot_20230105_214851](https://user-images.githubusercontent.com/67458417/211132145-393dbda9-2584-412e-b5bd-f450b2322b76.png)
![Screenshot_20230105_143851](https://user-images.githubusercontent.com/67458417/211132134-41752e0e-5bcf-4db9-bd51-2db77f1706c2.png)

![Screenshot_20230105_143929](https://user-images.githubusercontent.com/67458417/211132235-45c6e3d7-28d6-4c84-915b-174820eb6d95.png)









