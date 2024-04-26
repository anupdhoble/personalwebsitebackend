- Website -> [anupdhoble.tech](https://anupdhoble.tech)
- Frontend Code -> [https://github.com/anupdhoble/personalwebsitefrontend](https://github.com/anupdhoble/personalwebsitefrontend)

---

# Portfolio Website Backend

This is the backend for my portfolio website, responsible for managing data and providing various functionalities. It was built using Node.js and MongoDB.

## Features

1. **New Blog Creation:** Allows users to create and publish new blog posts. Users can input the title, content, and other relevant details for the blog.

2. **Image Upload:** Provides the ability to upload images for use in blog posts or other sections of the website. Images can be stored in the database or on a file storage service like Amazon S3.

3. **Data Storage:** Utilizes MongoDB to store data, including blog posts, user information, and uploaded images. Data is organized into collections and documents for efficient retrieval and manipulation.

4. **RESTful API:** Exposes a RESTful API for frontend communication, allowing the frontend to interact with the backend to retrieve data, create new content, and perform other actions.

5. **Validation and Error Handling:** Implements validation and error handling mechanisms to ensure data integrity and provide meaningful feedback to users in case of errors or invalid inputs.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration

Before running the application, ensure you have the following environment variables configured in .env file:
```
MONGODB_URI = < Enter uri here>
PORT = < Enter port no here >
GET_ALL_BLOGS=/getAll
CREATE_BLOG=/create
GET_A_BLOG=/get/:id
DELETE_BLOG=/remove/:id
UPDATE_BLOG=/update/:id
```
## Usage

To run the backend server, use the following command:

```
npm start
```

The server will start listening for incoming requests on the specified port.

## API Documentation

For detailed information on the available API endpoints and their usage, refer to the API in code .

## Deployment

The backend can be deployed to any suitable hosting service, such as Heroku, AWS, or DigitalOcean. Make sure to configure the deployment settings accordingly.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README to better fit your backend project's specific details and requirements. Let me know if you need any further assistance or clarification!
