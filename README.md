
# MediMate - Healthcare Chatbot 

MediMate is an AI-based healthcare chatbot designed to provide personalized healthcare assistance and information to users. It leverages the power of artificial intelligence to understand user queries, provide relevant and accurate responses, and offer valuable insights into various healthcare topics.

![Logo](https://github.com/Char-Coders/LiveTheCode/blob/master/frontend/public/logo_inverted_blackbg-removebg.png)
![App Screenshot](https://github.com/Char-Coders/LiveTheCode/blob/master/frontend/public/home.jpeg)

## Authors

- [@LakshayGMZ](https://github.com/LakshayGMZ)
- [@martian0x80](https://github.com/martian0x80)
- [@AnishHazra](https://www.github.com/AnishHazra)
- [@Dhruvgera](https://github.com/Dhruvgera)



## Features

- Personalized Assistance: MediMate offers personalized assistance by understanding user queries and providing tailored responses based on the information provided.

- Healthcare Information: Users can ask MediMate questions about symptoms, diseases, treatments, medications, and general healthcare information.
- Appointment Scheduling: MediMate allows users to schedule appointments with healthcare professionals based on their availability and location.
- Reminders: Users can set medication reminders through MediMate to help them stay on track with their prescribed medications.
- Healthy Lifestyle Tips: The chatbot provides users with tips and suggestions to lead a healthy lifestyle, including exercise routines, nutrition advice, and stress management techniques.
- 24/7 Availability: MediMate is available round the clock to assist users with their healthcare queries and concerns

## Getting Started

To use MediMate, follow these steps:

- Clone the MediMate repository from GitHub.
```bash
git clone https://github.com/CharCoders/LiveTheCode.git
```
- Install the required dependencies for the frontend and backend specified in the documentation. You must have `node.js` installed.

For Linux:
```bash
cd LiveTheCode/frontend/ && npm install
```

> **Important**  
> The backend is not linked to the frontend intentionally, since it is already hosted on a remote server whose address is already hardcoded in `vite.config.js`.


For Windows:
```powershell
cd .\LiveTheCode\frontend\; npm install
```
- Specify your HuggingFace credentials in `chatbot.py`. You can remove them after the initialization.

> **Note**  
> The credentials are only used for the initial run, the cookies are saved in `usercookies/<user>.json`.

- Run the application locally or deploy it to your preferred hosting platform.

To run locally:

For Linux:
```bash
cd LiveTheCode/frontend/ && npm run dev
```
For Windows:
```ps1
cd .\LiveTheCode\frontend\; npm run dev
```
- Access the application through a web browser or integrate it into your existing system using the provided API endpoints. Go to http://localhost:5173/.
- Customize the chatbot's responses, behaviors, and integration points as per your requirements.

## Usage/Examples

- User: "What are the symptoms of the flu?"
MediMate: "Common symptoms of the flu include fever, cough, sore throat, body aches, and fatigue. If you are experiencing these symptoms, it is recommended to consult a healthcare professional."

- User: "Can you schedule an appointment with a dentist for me?"
MediMate: "Sure! Please provide your location and preferred date and time for the appointment, and I will check the availability of dentists in your area."

- User: "I need help managing my stress levels."
MediMate: "Stress management is important for maintaining good overall health. Here are a few techniques you can try: deep breathing exercises, meditation, regular physical exercise, and getting enough sleep. Remember to take breaks and engage in activities you enjoy to relax and unwind."

## Screenshots

![App Screenshot](https://github.com/Char-Coders/LiveTheCode/blob/master/frontend/public/chat1.jpeg)
![App Screenshot](https://github.com/Char-Coders/LiveTheCode/blob/master/frontend/public/chat2.jpeg)
![App Screenshot](https://github.com/Char-Coders/LiveTheCode/blob/master/frontend/public/features.jpeg)
