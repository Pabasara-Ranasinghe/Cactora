
<!-- ==================== CACTORA HEADER ==================== -->

<div align="center">

  <img
    src="https://capsule-render.vercel.app/api?type=waving&color=0:064E3B,40:047857,75:10B981,100:6EE7B7&height=250&section=header&text=CACTORA%20%F0%9F%8C%B5&fontSize=68&fontColor=FFFFFF&fontAlignY=36&animation=fadeIn&desc=Every%20cactus%20tells%20a%20story.&descSize=20&descColor=ECFDF5&descAlignY=58"
    width="100%"
    alt="Cactora — Every cactus tells a story"
  />

  <h3>🌿 Discover • Explore • Learn • Grow 🌿</h3>


  <p>
    <strong>A little garden of cactus knowledge, built for curious minds.</strong> 🌵
  </p>

  <p>
    Explore fascinating cactus genera, discover botanical information,
    and get answers to your cactus-related questions with Cactora AI. 💚
  </p>

  <br />

  <!-- Technology Badges -->

  <p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A" alt="React" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
    <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  </p>

  <br />

  <!-- Repository Links -->

  <a href="https://github.com/Pabasara-Ranasinghe/Cactora">
    🌵 Explore the Repository
  </a>
  &nbsp; • &nbsp;
  <a href="https://github.com/Pabasara-Ranasinghe">
    👩‍💻 Developer Profile
  </a>

</div>

---

## 🌱 Welcome to Cactora!

Every cactus tells a story — a story of resilience, diversity, and nature's creativity. 🌵✨

**Cactora** is a cactus knowledge platform designed to make discovering and learning about these remarkable plants simple, engaging, and accessible.

From exploring different cactus genera to discovering botanical information, Cactora brings plant knowledge into one place. With **Cactora AI**, users can also ask cactus-related questions through an AI-powered conversational experience.

Whether you're a cactus enthusiast, a plant lover, or simply curious about the natural world, there's always something new to discover. 🌿

> 💚 *Every cactus tells a story. Let's discover yours.*

---

## ✨ What Can You Discover?

- 🌵 **Explore Cactus Genera** — Discover different cactus genera and explore their fascinating diversity.

- 🔎 **Search & Discover** — Find cactus genera and navigate available botanical information with ease.

- 📚 **Botanical Guides** — Explore cactus subfamilies and learn more about the diversity of these remarkable plants.

- 🖼️ **Discover Cactus Images** — View available cactus imagery, including images retrieved through the Wikimedia Commons API.

- 🤖 **Meet Cactora AI** — Ask cactus-related questions and explore AI-generated responses through an integrated AI assistant.

- 🔓 **Open to Everyone** — Explore Cactora and access its AI assistant without creating an account.

- 📱 **A Modern Browsing Experience** — Enjoy a user-friendly interface designed to make cactus discovery simple and engaging across different screen sizes.

- 📬 **Get in Touch** — Use the contact form to prepare a message to the project owner through your email application.

---

## 🤖 Meet Cactora AI

<div align="center">

  <h3>🌿 Your Cactus Knowledge Companion 🌵</h3>

  <p><em>Curiosity grows here. 🌱</em></p>

</div>

Have a question about cacti? Let Cactora AI help you explore the world of these fascinating plants! 💬

- ✨ Ask cactus-related questions.
- 🌱 Discover information about different cacti.
- 🔎 Explore new topics through conversation.
- 🔓 Access the assistant without signing in.

Cactora AI integrates with Google's Gemini API through the Spring Boot backend to generate responses.

> 📝 **Important:** AI-generated information may occasionally be inaccurate. Verify important botanical details using reliable sources.

---

## 🛠️ The Technology Behind the Garden

Cactora combines modern frontend development with a Java backend, database persistence, and AI integration. 🌿

### 🌱 Frontend

- ⚛️ **React** — Building interactive and reusable user interfaces.
- ⚡ **Vite** — Fast development and production builds.
- 🟨 **JavaScript** — Application logic and interactions.
- 🎨 **CSS** — Styling and responsive layouts.

### ☕ Backend

- ☕ **Java 21** — Backend programming language.
- 🍃 **Spring Boot** — Backend application and REST API development.
- 🗃️ **Spring Data JPA** — Database access and persistence.
- 🔄 **Hibernate** — Object-relational mapping.
- 📦 **Maven** — Dependency management and builds.

### 🌍 Database & Integrations

- 🐬 **MySQL** — Relational database.
- 🤖 **Google Gemini API** — AI-powered responses.
- 🖼️ **Wikimedia Commons API** — Retrieving available cactus images.
- 🌿 **Git & GitHub** — Version control and source code hosting.
- 🚀 **Vercel** — Intended frontend hosting platform.

---

## 🚀 Getting Started

Want to grow your own copy of Cactora? Follow the steps below to run the project locally. 🌵

### 📋 Prerequisites

Before getting started, make sure you have installed the following tools:

- 🟢 [Node.js](https://nodejs.org/) — For the frontend.
- ☕ [Java JDK 21](https://adoptium.net/) — For the backend.
- 📦 [Apache Maven](https://maven.apache.org/) — For building and running the backend.
- 🐬 [MySQL](https://dev.mysql.com/downloads/) — For the database.
- 🌿 [Git](https://git-scm.com/) — For cloning the repository.

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

Configure the backend database connection according to the application's configuration.

For example, if your backend expects these environment variables:

```dotenv
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
```

Replace the example values with your own local MySQL credentials.

Make sure the backend's database URL, username, and password match your local MySQL configuration.

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

These commands configure the variable for the current terminal session. You may need to configure it again in a new terminal.

⚠️ **Never expose your Gemini API key in frontend code or upload it to GitHub.**

### 4️⃣ Run the Backend ☕

Open a terminal in the project directory and navigate to the backend:

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

Open a **separate terminal** from the project root.

Navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, usually:

```text
http://localhost:5173
```

Open the displayed URL in your browser and start exploring Cactora! 🌵💚

### 6️⃣ Troubleshooting 🔧

If the frontend, backend, or AI assistant doesn't work as expected, check the following:

- 🌐 Is the frontend configured with the correct backend API URL?
- ☕ Is the Spring Boot backend running successfully?
- 🐬 Is MySQL running with the correct database credentials?
- 🔑 Is `GEMINI_API_KEY` configured in the backend environment?
- 🔒 Does CORS allow requests from the frontend's origin?
- 🤖 Does the frontend use the correct AI endpoint and request format?
- 📦 Have the frontend dependencies been installed successfully?

Remember: successfully starting the frontend does not guarantee that the backend or AI integration is working.

---

## 🧪 Build for Production

### ⚡ Build the Frontend

From the `frontend` directory, run:

```bash
npm run build
```

The production build will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

### ☕ Build the Backend

From the `backend` directory, run:

```bash
mvn clean package
```

If the build succeeds, Maven generates the packaged application in the `target/` directory.

---

## 🌍 Deployment 🌱

Cactora has a separate frontend and backend, so each part needs its own deployment configuration.

- 🚀 **Frontend:** Vercel or another suitable frontend hosting provider.
- ☕ **Backend:** A hosting platform that supports Java and Spring Boot.
- 🐬 **Database:** A managed MySQL service or another production-ready MySQL server.
- 🤖 **AI Integration:** Configure the Gemini API key securely in the backend environment.

### 🚀 Frontend Deployment with Vercel

When configuring the Vercel project, use the following settings for the Vite frontend:

- **Root Directory:** `frontend`
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Make sure the frontend uses the correct production backend API URL. Configure any required frontend environment variables according to the application's actual API configuration.

### 🔐 Before Deploying

- 🔗 Set the correct production API base URL.
- 🔑 Configure database credentials and the Gemini API key.
- 🌐 Allow requests from the deployed frontend origin.
- 🔒 Enable HTTPS and suitable database permissions.
- 🛡️ Keep all secret keys on the backend.
- 🧪 Test the complete frontend-to-backend flow.

*Deployment links will be added once the application is successfully deployed and the URLs are confirmed.* 🌿

---

## 🔐 Growing Securely

A healthy project needs a secure foundation. 🛡️

- 🔑 Keep API keys and passwords out of source control.
- 🔒 Store sensitive configuration in environment variables or a secrets manager.
- 🌐 Restrict production CORS to trusted origins.
- 🔐 Use HTTPS in production.
- 🖼️ Respect image licensing and attribution requirements.
- 🤖 Verify important information provided by AI.
- 🐬 Use appropriate database permissions and secure connection settings.

---

## 🌎 The Vision Behind Cactora

Cactora is built around a simple idea: **make learning about cacti accessible, engaging, and enjoyable.** 💚

🌵 **Discover** the diversity of cactus genera.

📚 **Learn** through botanical information and guides.

🤖 **Ask** questions with an AI-powered companion.

🌱 **Explore** the natural world with curiosity.

💚 **Grow** your knowledge, one cactus at a time.

---

## 👩‍💻 About the Developer

<div align="center">

  <h3>🌿 Pabasara Ranasinghe 🌿</h3>

  <p><strong>Software Engineering Student & Developer</strong></p>

  <p>
    Interested in software engineering, modern web development,
    and AI-powered applications.
  </p>

  <a href="https://github.com/Pabasara-Ranasinghe">
    <img
      src="https://img.shields.io/badge/GitHub-Follow_My_Journey-386641?style=for-the-badge&logo=github&logoColor=white"
      alt="Visit my GitHub profile"
    />
  </a>

</div>

---

## 📄 License

Cactora is licensed under the [MIT License](LICENSE).

Copyright © 2026 Pabasara Ranasinghe.

Please review the license terms before using, modifying, or distributing the code. 🌿

---

<!-- ==================== CACTORA FOOTER ==================== -->

<div align="center">

  <h2>🌵 CACTORA 🌵</h2>

  <p><strong>Every cactus tells a story. 💚</strong></p>

  <p>🌿 Keep exploring. Keep learning. Keep growing. 🌿</p>

  <p>
    <sub>Made with 💚 for cacti.</sub>
  </p>

  <br />

 <img
    src="https://capsule-render.vercel.app/api?type=waving&color=0:064E3B,40:047857,75:10B981,100:6EE7B7&height=120&section=footer"
    width="100%"
    alt="Cactora Footer"
  />

</div>
