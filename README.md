# 🌵 Cactora
### Every cactus tells a story.

<p align="center">
  <strong>Discover the fascinating world of cacti.</strong><br/>
  Explore cactus genera, learn about their unique characteristics, and get answers to your cactus-related questions with Cactora AI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java"/>
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
</p>

---

## 🌿 About the Project

**Cactora** is a cactus knowledge platform designed to make discovering and learning about cacti simple, engaging, and accessible.

From exploring different cactus genera to discovering fascinating plant characteristics, Cactora brings cactus information together in one place. It also features **Cactora AI**, an AI-powered assistant that helps users find answers to cactus-related questions without requiring an account.

Built with a modern frontend and a Java Spring Boot backend, Cactora combines an interactive browsing experience with backend services and AI integration.

> 🌵 *Every cactus tells a story. Let's discover yours.*

## ✨ Features

- 🌵 **Explore Cacti** — Discover a collection of cactus genera and learn more about different types of cacti.
- 🔎 **Genus Discovery** — Browse and search cactus genera to find plants of interest.
- 📚 **Cactus Knowledge** — Explore genus information, descriptions, and available cactus images.
- 🤖 **Cactora AI** — Ask cactus-related questions and receive AI-generated responses.
- 🌱 **Subfamily Guide** — Explore the cactus subfamilies and learn about their diversity.
- 📱 **Responsive Experience** — Designed to provide a user-friendly experience across different screen sizes.
- 📬 **Contact Page** — Find a way to contact the project owner with questions or feedback.
- 🔓 **Open Access** — Explore the platform and use Cactora AI without creating an account.

## 🖥️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | Building reusable user interface components |
| Vite | Development server and production build tooling |
| JavaScript | Application logic and interactions |
| CSS | Styling and responsive layouts |

### Backend

| Technology | Purpose |
|---|---|
| Java 21 | Backend programming language |
| Spring Boot | Backend application and REST API development |
| Spring Data JPA | Database persistence |
| Hibernate | Object-relational mapping |
| Maven | Dependency management and build automation |

### Database & Integrations

| Technology | Purpose |
|---|---|
| MySQL | Relational database |
| Google Gemini API | AI integration for Cactora AI |
| Wikimedia Commons API | Retrieving cactus images where available |
| Git & GitHub | Version control and source code management |
| Vercel | Frontend deployment target |


*Note: The structure above is a simplified overview. Some folder names may differ in the current implementation.*

## ⚙️ Getting Started

Follow these steps to run Cactora locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — for the frontend
- [Java JDK 21](https://adoptium.net/) — for the backend
- [Apache Maven](https://maven.apache.org/) — for building the backend
- [MySQL](https://dev.mysql.com/downloads/) — for database services
- [Git](https://git-scm.com/) — for cloning the repository

### 1. Clone the Repository

```bash
git clone https://github.com/Pabasara-Ranasinghe/Cactora.git
```

```bash
cd Cactora
```

### 2. Configure the Database

Create a MySQL database:

```sql
CREATE DATABASE cactora_db;
```

Configure the backend database connection using your local MySQL credentials.

For example, your environment configuration may contain:

```properties
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
```

Ensure that the backend's database configuration references the correct environment variables.

### 3. Configure the AI Integration

Cactora AI requires a valid Google Gemini API key.

Set the `GEMINI_API_KEY` environment variable before starting the backend.

**Windows Command Prompt:**

```cmd
set GEMINI_API_KEY=your_gemini_api_key
```

**PowerShell:**

```powershell
$env:GEMINI_API_KEY="your_gemini_api_key"
```

Get an API key from [Google AI Studio](https://aistudio.google.com/).

Keep your API key private. Never commit API keys, database passwords, or other secrets to GitHub.

### 4. Run the Backend

Open a terminal in the backend directory:

```bash
cd backend
```

Run the application using Maven:

```bash
mvn spring-boot:run
```

Alternatively, on Windows, use the project's backend startup script if its required environment variables are configured:

```cmd
run-backend.bat
```

The backend is configured to run locally on:

```text
http://localhost:8081
```

### 5. Run the Frontend

Open a separate terminal:

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

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

If the frontend cannot connect to the backend, verify the API base URL, backend status, CORS configuration, and required environment variables.

## 🤖 Cactora AI

**Meet Cactora AI — your cactus knowledge companion.**

Cactora AI is designed to make cactus-related information easier to explore through a conversational interface.

Users can ask questions about cacti and receive AI-generated responses through the backend's AI integration.

- No account required.
- Accessible directly through the website.
- Powered by a backend service connected to Google's Gemini API.

AI-generated responses may occasionally be inaccurate. For important botanical or plant-care decisions, verify information with reliable references.

## 🛠️ Development

### Build the Frontend

```bash
cd frontend
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run the Backend

```bash
cd backend
mvn spring-boot:run
```

### Version Control

Cactora uses Git for source control and GitHub for repository hosting.

```bash
git status
git add .
git commit -m "describe your changes"
git push
```

## 🚀 Deployment

Cactora is organized into separate frontend and backend applications.

- **Frontend:** Vercel can host the React + Vite application.
- **Backend:** A Java-compatible hosting platform is required for Spring Boot.
- **Database:** A MySQL-compatible database service is required for production.

For deployment, configure the production API base URL, database credentials, AI API key, and allowed frontend origin. Store sensitive configuration in the hosting provider's environment-variable settings.

Do not expose backend secrets through frontend environment variables.

## 🔐 Security Notes

- Never commit `.env` files containing secrets.
- Do not expose the Gemini API key in frontend code.
- Use environment variables for database credentials and API keys.
- Configure production CORS rules for trusted origins.
- Use HTTPS and production-appropriate database permissions when deployed.

## 🎯 Project Goals

Cactora aims to:

- Make cactus knowledge accessible to more people.
- Help users discover the diversity of cactus genera.
- Provide a convenient AI-powered learning experience.
- Combine modern web development with an engaging botanical topic.
- Deliver a simple, accessible, and user-friendly platform.

## 👩‍💻 Author

**Pabasara Ranasinghe**

Software Engineering Student & Developer

- GitHub: [@Pabasara-Ranasinghe](https://github.com/Pabasara-Ranasinghe)
- Project Repository: [Cactora](https://github.com/Pabasara-Ranasinghe/Cactora)

## 📄 License

No license has been specified yet. If you intend to make Cactora open source, consider adding a `LICENSE` file that defines how others may use, modify, and distribute the project.

---

<p align="center">
  Made with 💚 and a love for cacti 🌵
  <br/><br/>
  <strong>CACTORA — Every cactus tells a story.</strong>
</p>
