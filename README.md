# React + Vite Project

## Overview

The app is a React Application that  includes a login page, a onebox screen with API integrations, keyboard shortcuts, a custom text editor, and supports both light and dark modes.

### Design File
[Design File on Figma](https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design)

### API Documentation
[API Documentation on Postman](https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27)

## Features


1. **Login Page**: Implemented based on the provided design.
2. 
3. **Onebox Screen**:
4. ![Screenshot from 2024-08-28 13-27-49![Screenshot from 2024-08-28 13-27-55](https://github.com/user-attachments/assets/909d0691-99d3-42b3-8473-1b7ef14d2a9a)
](https://github.com/user-attachments/assets/3af8c593-1f55-4a27-b6f4-295a0f24fdff)
![Uploading Screenshot from 2024-08-28 13-27-55.png…]()



   - Fetch data using API endpoints:
     - `GET /onebox/list`
     - `GET /onebox/:thread_id`
     - `DELETE /onebox/:thread_id`
   - Keyboard shortcuts:
     - **D**: Delete a thread
     - **R**: Open reply box
6. **Custom Text Editor**:
7. ![Screenshot from 2024-08-28 13-28-11](https://github.com/user-attachments/assets/7fc21507-88da-4862-8d6e-1965da2a96f5)

8. 
   - Includes custom buttons like "SAVE" and "Variables".
9. **Reply Function![Screenshot from 2024-08-28 13-28-44](https://github.com/user-attachments/assets/007ff39b-f834-42ee-ae34-4731c1a5c747)
ality**:
10. 
   - Send replies using the API endpoint:
     - `POST /reply/:thread_id`
     - Request body: 
       ```json
       {
         "from": "email",
         "to": "email",
         "subject": "",
         "body": "<html></html>"
       }
       ```
11. **Light and Dark Mode**: Implemented for a better user experience.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   

3. **Install dependencies:**
    ```bash
     npm install

4. **Start the development server:**
      ```bash
         npm run dev
