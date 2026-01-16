# NAPLAN Workshop Test

A child-friendly, interactive quiz application built with React and TypeScript that helps students practice NAPLAN-style questions across multiple skill areas. The application provides an engaging learning experience with progress tracking and instant feedback.

## 📚 About

NAPLAN (National Assessment Program – Literacy and Numeracy) Workshop Test is designed to help students prepare for NAPLAN assessments by practicing questions in four key skill areas:

- **Language Conventions** - Grammar, punctuation, and spelling
- **Reading** - Reading comprehension and understanding texts
- **Numeracy** - Number skills, problem-solving, and mathematical thinking
- **Writing** - Writing techniques, sentence structure, and creative expression

## ✨ Features

- 🎯 **Interactive Quizzes** - Navigate through questions with Previous/Next navigation
- 📊 **Progress Tracking** - Visual progress indicator showing completed questions
- 🎉 **Instant Results** - View your score and performance summary after completing a quiz
- 🎨 **Modern UI** - Clean, responsive design built with Tailwind CSS and shadcn/ui components
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🔍 **Detailed Explanations** - Each question includes explanations to help students learn
- 🏠 **Easy Navigation** - Simple routing between home page and quiz sections

## 🛠️ Tech Stack

- **React 19** - Modern React library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing for navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - High-quality React component library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/naplan-workshop-test.git
   cd naplan-workshop-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   The application will be available at `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
naplan-workshop-test/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── footer/         # Footer component
│   │   ├── layout/         # Layout wrapper component
│   │   ├── nav/            # Navigation bar component
│   │   └── ui/             # UI components (buttons, cards)
│   ├── pages/              # Page components
│   │   ├── home/           # Home page
│   │   ├── quiz/           # Quiz page
│   │   └── notFound/       # 404 page
│   ├── types/              # TypeScript type definitions
│   ├── lib/                # Utility functions
│   ├── data.ts             # Quiz data and questions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Project dependencies
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🗺️ Application Routes

| Route              | Description                         |
| ------------------ | ----------------------------------- |
| `/`                | Home page with skill area selection |
| `/quiz/:skillId`   | Quiz page for the selected skill    |
| `*`                | 404 Not Found page                  |

## 📝 Quiz Skill Areas

### Language Conventions
Practice grammar, punctuation, and spelling with questions covering:
- Punctuation rules
- Verb agreement
- Apostrophes
- Spelling
- Capitalization
- Sentence structure

### Reading
Enhance reading comprehension skills with:
- Vocabulary understanding
- Main idea identification
- Text type recognition
- Literary techniques
- Context clues
- Author's purpose

### Numeracy
Develop mathematical thinking with:
- Basic arithmetic operations
- Geometry and area calculations
- Fractions and equivalencies
- Word problems
- Patterns and sequences
- Prime numbers

### Writing
Improve writing skills through:
- Descriptive language
- Sentence variety
- Word choice and expression
- Sentence combining
- Transition words
- Topic sentences and conclusions

## 🎮 How to Use

1. **Select a Skill Area**
   - From the home page, choose one of the four skill areas
   - Each card shows the skill name, description, and number of questions

2. **Take the Quiz**
   - Click "Start Quiz" to begin
   - Navigate through questions using "Previous" and "Next" buttons
   - Select your answer by clicking on an option
   - Your progress is shown at the top of the quiz

3. **View Results**
   - Click "Finish Quiz" on the last question
   - See your score and performance summary
   - Click "Back to Home" to try another skill area






---

Built with ❤️ for students preparing for NAPLAN assessments
