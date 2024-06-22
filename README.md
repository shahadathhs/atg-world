# ATG-WORLD

## Live Site URLs

- <https://task-atg-world.web.app>
- <https://task-atg-world.firebaseapp.com>

## Tools and Technologies Used

- **Tailwind CSS**
- **React.js**
- **Firebase**

## How to Run This Project Locally

### Prerequisites in machine

- Node.js (>=14.x.x)
- npm (>=6.x.x)

### Steps

- **Clone the repository:**

   ```sh
   git clone https://github.com/shahadathhs/atg-world.git
   ```

- **Navigate to the project directory:**

   ```sh
   cd atg-world
   ```

- **Install the dependencies:**

   ```sh
   npm install
   ```

- **Create a `.env.local` file in the root of the project and add the required environment variables from firebase(web)**

   ```sh
   VITE_APIKEY=your-api-key
   VITE_AUTHDOMAIN=your-auth-domain
   VITE_PID=your-project-id
   VITE_STORAGE=your-storage-bucket
   VITE_MESSAGE=your-messaging-sender-id
   VITE_APPTD=your-app-id
   ```

- **Run the development server:**

   ```sh
   npm run dev
   ```

You should now see the ATG-WORLD website running locally on your machine.
