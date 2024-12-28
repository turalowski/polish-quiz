# Quiz Polski

A simple and interactive Polish language learning quiz application built with Next.js and TypeScript.

## Features

- Multiple quiz topics and sets
- Interactive quiz interface with instant feedback
- Progress tracking
- Clean and responsive UI using shadcn/ui
- Polish language questions with English translations

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/turalowski/quiz-polski.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
quiz-polski/
├── app/
│   ├── _components/
│   │   ├── Header.tsx
│   │   ├── Quiz.tsx
│   │   ├── QuizSetSelector.tsx
│   │   └── TopicSelector.tsx
│   ├── _data/
│   │   └── sampleData.ts
│   ├── _types/
│   │   └── index.ts
│   ├── layout.tsx
│   └── page.tsx
```

## Author

- TH ([@turalowski](https://github.com/turalowski))

## License

MIT License - feel free to use this project for learning purposes.
