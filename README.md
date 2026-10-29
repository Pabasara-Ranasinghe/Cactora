<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:386641,50:6A994E,100:A7C957&height=220&section=header&text=CACTORA%20%F0%9F%8C%B5&fontSize=65&fontColor=FFFFFF&fontAlignY=38&animation=fadeIn&desc=Every%20cactus%20tells%20a%20story.&descSize=19&descAlignY=60" width="100%" alt="Cactora — Every cactus tells a story"/>

  <h3>🌿 Discover • Explore • Learn • Grow 🌿</h3>

  **A little garden of cactus knowledge, built for curious minds.** 🌵

  Explore fascinating cactus genera, discover botanical information, and get answers to your cactus-related questions with Cactora AI. 💚

  <br/>

  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java"/>
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>

  <br/><br/>

  <a href="https://github.com/Pabasara-Ranasinghe/Cactora">🌵 Explore the Repository</a> ·
  <a href="https://github.com/Pabasara-Ranasinghe">👩‍💻 Developer Profile</a>

</div>

---

## 🌱 Welcome to Cactora!

Every cactus tells a story — a story of resilience, diversity, and nature's creativity. 🌵✨

**Cactora** is a cactus knowledge platform designed to make discovering and learning about these remarkable plants simple, engaging, and accessible.

From exploring different cactus genera to discovering botanical information, Cactora brings plant knowledge into one place. With **Cactora AI**, users can also ask cactus-related questions and explore answers through an AI-powered conversational experience.

Whether you're a cactus enthusiast, a plant lover, or simply curious about the natural world, there's always something new to discover. 🌿

> 💚 *Every cactus tells a story. Let's discover yours.*

## ✨ What Can You Discover?

🌵 **Explore Cactus Genera**

Discover a collection of cactus genera and explore the fascinating diversity of cacti.

🔎 **Search & Discover**

Find cactus genera and navigate the available botanical information with ease.

📚 **Botanical Guides**

Explore cactus subfamilies and learn more about the diversity of these remarkable plants.

🖼️ **Discover Cactus Images**

View available cactus imagery, including images retrieved through the Wikimedia Commons API.

🤖 **Meet Cactora AI**

Ask cactus-related questions and explore AI-generated responses through an integrated AI assistant.

🔓 **Open to Everyone**

Explore Cactora and access its AI assistant without creating an account.

📱 **A Modern Browsing Experience**

Enjoy a user-friendly interface designed to make cactus discovery simple and engaging across different screen sizes.

📬 **Get in Touch**

Use the contact form to prepare a message to the project owner through your email application.

## 🤖 Meet Cactora AI 🌿

<div align="center">

  ### Your cactus knowledge companion 🌵

  *Curiosity grows here. 🌱*

</div>

Have a question about cacti? Let Cactora AI help you explore the world of these fascinating plants! 💬

✨ Ask cactus-related questions.

🌱 Discover information about different cacti.

🔎 Explore new topics through conversation.

🔓 Access the assistant without signing in.

Cactora AI integrates with Google's Gemini API through the Spring Boot backend to generate responses.

> 📝 AI-generated information may occasionally be inaccurate. Always verify important botanical details using reliable sources.

## 🛠️ The Technology Behind the Garden

Cactora combines modern frontend development with a Java backend and AI integration. 🌿

**🌱 Frontend**

- ⚛️ **React** — Building interactive and reusable user interfaces.
- ⚡ **Vite** — Fast development and production builds.
- 🟨 **JavaScript** — Application logic and interactions.
- 🎨 **CSS** — Styling and responsive layouts.

**☕ Backend**

- ☕ **Java 21** — Backend programming language.
- 🍃 **Spring Boot** — Backend application and REST API development.
- 🗃️ **Spring Data JPA** — Database access and persistence.
- 🔄 **Hibernate** — Object-relational mapping.
- 📦 **Maven** — Dependency management and builds.

**🌍 Database & Integrations**

- 🐬 **MySQL** — Relational database.
- 🤖 **Google Gemini API** — AI-powered responses.
- 🖼️ **Wikimedia Commons API** — Retrieving available cactus images.
- 🌿 **Git & GitHub** — Version control and source code hosting.
- 🚀 **Vercel** — Intended frontend hosting platform.

## 🚀 Getting Started

Want to grow your own copy of Cactora? Let's get it running locally! 🌵

### 📋 Prerequisites

Before getting started, make sure you have:

- 🟢 [Node.js](https://nodejs.org/) — for the frontend.
- ☕ [Java JDK 21](https://adoptium.net/) — for the backend.
- 📦 [Apache Maven](https://maven.apache.org/) — for building the backend.
- 🐬 [MySQL](https://dev.mysql.com/downloads/) — for the database.
- 🌿 [Git](https://git-scm.com/) — for cloning the repository.

### 1️⃣ Clone the Repository 🌿

Open your terminal and run:

```bash
git clone https://github.com/Pabasara-Ranasinghe/Cactora.git
```

Move into the project directory:

```bash
cd Cactora
```

### 2️⃣ Set Up the Database 🐬

Start MySQL and create the Cactora database:

```sql
CREATE DATABASE cactora_db;
```

Configure the backend database connection according to your application's settings.

For example, if your backend expects these environment variables:

```dotenv
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
```

Replace the example values with your own local MySQL credentials.

🔐 **Keep your credentials private.** Never commit database passwords or secret configuration files to GitHub.

### 3️⃣ Configure Cactora AI 🤖

Cactora AI requires a Google Gemini API key.

1. Visit [Google AI Studio](https://aistudio.google.com/).
2. Obtain an API key.
3. Configure the `GEMINI_API_KEY` environment variable expected by the backend.

**Windows Command Prompt:**

```cmd
set GEMINI_API_KEY=your_gemini_api_key
```

**Windows PowerShell:**

```powershell
$env:GEMINI_API_KEY="your_gemini_api_key"
```

These commands apply to the current terminal session. Configure the variable again when using a new terminal, or use a suitable secure environment-variable setup.

⚠️ **Never expose your Gemini API key in frontend code or upload it to GitHub.**

### 4️⃣ Run the Backend ☕

Open a terminal in the project directory:

```bash
cd backend
```

Start the Spring Boot application:

```bash
mvn spring-boot:run
```

Alternatively, on Windows, you can use the project's startup script if the required configuration is ready:

```cmd
run-backend.bat
```

The backend is configured to run locally on port `8081`:

```text
http://localhost:8081
```

Wait until the application starts successfully before proceeding.

### 5️⃣ Run the Frontend ⚡

Open a **separate terminal** from the project root:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, usually:

```text
http://localhost:5173
```

Open the displayed URL in your browser and start exploring Cactora! 🌵💚

### 6️⃣ Troubleshooting 🔧

If the frontend or AI assistant doesn't work as expected, check the following:

- 🌐 Is the frontend configured with the correct backend API URL?
- ☕ Is the Spring Boot backend running successfully?
- 🐬 Is MySQL running with the correct database credentials?
- 🔑 Is `GEMINI_API_KEY` configured in the backend environment?
- 🔒 Does CORS allow requests from the frontend's origin?
- 🤖 Does the frontend use the correct AI endpoint and request format?

Remember: successfully starting the frontend does not guarantee that the backend or AI integration is working.

## 🧪 Build for Production

### ⚡ Build the Frontend

From the `frontend` directory:

```bash
npm run build
```

The production build will be generated in the `dist/` directory.

To preview it locally:

```bash
npm run preview
```

### ☕ Build the Backend

From the `backend` directory:

```bash
mvn clean package
```

If the build succeeds, Maven generates the packaged application in the `target/` directory.

## 🌍 Deployment 🌱

Cactora has a separate frontend and backend, so each part needs its own deployment configuration.

🚀 **Frontend:** Vercel or another suitable frontend hosting provider.

☕ **Backend:** A hosting platform that supports Java and Spring Boot.

🐬 **Database:** A managed MySQL service or another production-ready MySQL server.

🤖 **AI integration:** Configure the Gemini API key securely in the backend environment.

Before deploying, make sure to:

- 🔗 Set the correct production API base URL.
- 🔑 Configure database credentials and the Gemini API key.
- 🌐 Allow requests from the deployed frontend origin.
- 🔒 Enable HTTPS and suitable database permissions.
- 🧪 Test the complete frontend-to-backend flow.

*Deployment links will be added once the application is successfully deployed and the URLs are confirmed.* 🌿

## 🔐 Growing Securely

A healthy project needs a secure foundation. 🛡️

- 🔑 Keep API keys and passwords out of source control.
- 🔒 Store sensitive configuration in environment variables or a secrets manager.
- 🌐 Restrict production CORS to trusted origins.
- 🔐 Use HTTPS in production.
- 🖼️ Respect image licensing and attribution requirements.
- 🤖 Verify important information provided by AI.

## 🌎 The Vision Behind Cactora

Cactora is built around a simple idea: **make learning about cacti accessible, engaging, and enjoyable.** 💚

🌵 **Discover** the diversity of cactus genera.

📚 **Learn** through botanical information and guides.

🤖 **Ask** questions with an AI-powered companion.

🌱 **Explore** the natural world with curiosity.

💚 **Grow** your knowledge, one cactus at a time.

## 👩‍💻 About the Developer

<div align="center">

  ### 🌿 Pabasara Ranasinghe 🌿

  **Software Engineering Student & Developer**

  Interested in software engineering, modern web development, and AI-powered applications.

  <a href="https://github.com/Pabasara-Ranasinghe">
    <img src="https://img.shields.io/badge/GitHub-Follow_My_Journey-386641?style=for-the-badge&logo=github&logoColor=white" alt="GitHub profile"/>
  </a>

</div>

## 📊 My GitHub Garden 🌱

<div align="center">

  <img src="https://github-readme-stats.vercel.app/api?username=Pabasara-Ranasinghe&show_icons=true&hide_border=true&title_color=386641&icon_color=6A994E&text_color=40513B&bg_color=F3F5E9" height="165" alt="GitHub statistics"/>

  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Pabasara-Ranasinghe&layout=compact&hide_border=true&title_color=386641&text_color=40513B&bg_color=F3F5E9" height="165" alt="Most used programming languages"/>

  <br/><br/>

  <img src="https://streak-stats.demolab.com?user=Pabasara-Ranasinghe&hide_border=true&background=F3F5E9&ring=6A994E&fire=A7C957&currStreakLabel=386641&sideLabels=386641&dates=657565" alt="GitHub contribution streak"/>

</div>

*🌱 GitHub statistics are provided by third-party services and may occasionally be unavailable.*


## 📄 License

Cactora is licensed under the [MIT License](LICENSE).

Copyright © 2026 Pabasara Ranasinghe.

Feel free to explore the project and review the license terms before using, modifying, or distributing the code. 🌿

---

<div align="center">

 ### 🌵 CACTORA 🌵

  **Every cactus tells a story.** 💚

  🌿 Keep exploring. Keep learning. Keep growing. 🌿

  <sub>Made with 💚 for cacti.</sub>

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:386641,50:6A994E,100:A7C957&height=130&section=footer" width="100%" alt="Cactora botanical footer"/>
</div>
