# Soul-Space ✨

> Your Quiet Companion for thoughts and reflections.

Soul-Space is a beautifully designed web application that provides a safe and private space for you to chat with a personalized AI companion. Choose a character, define their personality with unique traits, and share your thoughts, ideas, or even images in a calm, non-judgmental environment.

\<br\>

\<br\>

## 🚀 About The Project

In a world that's always moving, Soul-Space offers a moment of pause. It's more than just a chatbot; it's a personal diary, a sounding board for ideas, and a quiet friend available anytime you need. By leveraging the power of Google's Gemini API, your companion can engage in deep, empathetic, and context-aware conversations, remembering your chat history in the current session and even reacting to the images you share.

The goal is to create a serene digital experience that prioritizes user emotion and privacy.

\<br\>

## 🌟 Key Features

  * **👤 User Welcome:** Greets the user and asks for their name for a personalized touch.
  * **🤖 Character Selection:** Choose from four unique AI companions, each with their own backstory and ethnicity.
  * **🛠️ Companion Customization:**
      * Give your chosen companion a custom name.
      * Select from 16 different personality traits (like `Empathetic`, `Witty`, or `Philosophical`) to shape their conversation style.
  * **💬 Interactive Chat:** A smooth, modern chat interface for seamless conversation.
  * **🖼️ Image Recognition:** Upload images and your companion will recognize and react to them.
  * **🌐 Bilingual Support:** Companions with Indian ethnicity will naturally converse in **Hinglish** (a mix of Hindi and English).
  * **💾 Session Memory:** `localStorage` is used to save your current chat. A "Continue Last Chat" button makes it easy to pick up where you left off.
  * **✨ Stunning UI:** A dynamic, animated gradient background with floating particles and a glassmorphism design for a premium feel.
  * **📱 Fully Responsive:** Looks and works great on all devices, from desktops to mobile phones.

\<br\>

## 🛠️ Tech Stack

This project was built using a modern, serverless-first approach.

  * **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Custom Animations
  * **Backend:** [Netlify Functions](https://www.netlify.com/products/functions/) (for secure API calls)
  * **AI:** [Google Gemini API](https://ai.google.dev/)
  * **Deployment:** [Netlify](https://www.netlify.com/)

\<br\>

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed to run `npm`. You will also need your own Google Gemini API Key.

1.  Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your_username/soul-space.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd soul-space
    ```
3.  **Install NPM packages:** This is required for the serverless function.
    ```sh
    npm install
    ```
4.  To run the project locally, you can use a simple live server. If you use VS Code, the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension is a great choice.

> **Note:** The API calls will not work locally unless you use the Netlify CLI to simulate the serverless environment. The easiest way to test is to deploy it directly to Netlify.

\<br\>

## ☁️ Deployment

This app is designed for easy deployment on **Netlify**.

1.  **Push to GitHub:** Create a new repository on GitHub and push the project code.

2.  **Deploy to Netlify:**

      * Log in to your Netlify account and select "Add new site" -\> "Import an existing project".
      * Connect it to your GitHub repository.
      * Netlify will automatically detect the `netlify.toml` file and set up the build settings. The standard settings should work fine:
          * **Build command:** Leave empty or use `npm install`
          * **Publish directory:** `.` (or your root folder)

3.  **Set Environment Variable (CRITICAL STEP):**

      * In your Netlify site's dashboard, go to `Site configuration` \> `Build & deploy` \> `Environment`.
      * Click "Edit variables" and add a new variable:
          * **Key:** `GEMINI_API_KEY`
          * **Value:** Paste your Google Gemini API key here.
      * This keeps your API key secure and out of the frontend code.

Your site will now be live\!

\<br\>

## 📁 File Structure

```
/
├── netlify/
│   └── functions/
│       └── gemini.js     # Serverless function to securely call the Gemini API
├── index.html            # Main HTML structure
├── style.css             # Custom styles and animations
├── script.js             # Core application logic
├── package.json          # Project dependencies (for Netlify function)
├── netlify.toml          # Netlify deployment configuration
└── README.md             # You are here!
```

\<br\>

## 🗺️ Future Improvements

  * [ ] User accounts to save chat history across devices.
  * [ ] Add more characters and personality traits.
  * [ ] Implement voice input and text-to-speech (TTS) output.
  * [ ] Add a "Search History" feature.
  * [ ] Allow users to choose different UI themes.

\<br\>

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

\<br\>

## 🤝 Contact

Keshav - @KeshavCreates - keshavreach@gmail.com

Project Link: https://soulspacee.netlify.app
