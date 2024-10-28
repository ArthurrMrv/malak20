# Birthday Surprise Web App

This web application allows users to log in and view a birthday surprise message along with a downloadable PDF. The project is built using Firebase for authentication and storage, and includes a Python script for generating a QR code to the project's link.

## Features

- User authentication via Firebase
- Display of a personalized birthday message
- Ability to download a surprise PDF
- QR code generation for easy access to the project link

## Project Structure

```
/your-project-directory
│
├── index.html        # Main HTML file for the application
├── style.css         # Styles for the application
├── script.js         # JavaScript for handling login and PDF download
├── firebase-config.js # Firebase configuration file
├── qrCode.py         # Python script to generate QR code for the project link
└── README.md         # Project documentation
```

## Technologies Used

- HTML
- CSS
- JavaScript
- Firebase (for authentication and storage)
- Python (for QR code generation)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   - Ensure you have Python installed for the QR code generation. You can install the required packages using pip:
   ```bash
   pip install qrcode[pil]
   ```

3. **Set Up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication and Firebase Storage.
   - Copy your Firebase configuration and update `firebase-config.js` with your credentials.

4. **Run the QR Code Generator**:
   - To generate a QR code for the project link, run the following command:
   ```bash
   python qrCode.py
   ```
   - This will create a `qrcode.png` file in the project directory, which contains the QR code linking to the project.

5. **Open the Application**:
   - Open `index.html` in your web browser to view the application.

## Usage

- Users can log in using their email and password.
- After logging in, a birthday surprise message will be displayed.
- Users can click on the gift box to download the surprise PDF.
- A QR code can be scanned to quickly access the project link.

## Notes

- Ensure your web browser allows pop-ups for the PDF download to work correctly.
- Test the application on different devices to ensure responsiveness.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to Firebase for providing an easy-to-use platform for authentication and storage.
- Special thanks to [QRCode](https://pypi.org/project/qrcode/) for the Python QR code generation library.
