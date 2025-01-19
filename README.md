# Camper Rental Platform

A web application for renting campers, featuring a user-friendly interface, dynamic filters, and a
detailed booking experience. Built with modern technologies like React and TypeScript, the platform
ensures smooth functionality and enhanced user interaction.

## Features

### Pages

1. **Home Page**: A welcoming page introducing the service.
2. **Catalog Page**:
   - Displays a list of camper ads with filters for:
     - **City**
     - **Vehicle Equipment**
     - **Vehicle Type**
   - Includes a "Load More" button to fetch additional ads dynamically.
   - Shows a loader for asynchronous requests.
   - Clicking on a camper ad navigates to the detailed camper page.

### Camper Details Page

- **Photo Gallery**: Additional photos with a zoom-in feature on click.
- **Sections**:
  - **Features**: Displays key specifications of the camper.
  - **Reviews**: Lists feedback from users.
- **Booking Form**:
  - Includes validation using `Formik` and `Yup`.
  - Clears inputs after successful submission.
  - Displays a toast notification confirming the booking.

## Technologies Used

- **Core Framework**: React
- **TypeScript**: For type safety and improved development experience.
- **State Management**: Redux Toolkit with `@reduxjs/toolkit` and `redux-persist`.
- **Form Handling**: Formik with validation powered by Yup.
- **HTTP Requests**: Axios for API integration.
- **Routing**: React Router DOM for dynamic navigation.
- **UI Utilities**:
  - `clsx` for conditional class management.
  - `react-datepicker` for date selection in the booking form.
  - `react-modal` for modals.
  - `react-hot-toast` for user notifications.
  - `react-spinners` for loader animations.

## Setup and Run Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository: `git clone`

2. Install dependencies: `npm install`

3. Run the Development Server: `npm run dev`
