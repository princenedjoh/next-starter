# GADE - Modern Web Application

A modern web application built with Next.js 15, featuring a clean and responsive design with advanced UI components and animations.

## Features

- Modern UI components with TypeScript support
- Framer Motion for smooth animations
- Tailwind CSS for styling
- Responsive design with Montserrat font
- Reusable component architecture
- TypeScript for type safety
- Next.js 15 App Router

## Tech Stack

- **Framework**: Next.js 15
- **UI Components**: Framer Motion, React Icons, Lucide React
- **Styling**: Tailwind CSS, Custom CSS
- **State Management**: React Use
- **Date Handling**: Day.js
- **TypeScript**: Full TypeScript support

## Project Structure

```
src/
├── app/                 # Next.js App Router files
│   ├── styles/         # Shared styles and components
│   │   ├── components/ # Reusable UI components
│   │   └── theme.ts    # Theme configuration
│   └── page.tsx        # Main page component
├── components/         # Shared React components
│   ├── button/         # Button components
│   ├── chip/           # Chip components
│   ├── clickable/      # Clickable components
│   ├── divider/        # Divider components
│   ├── dropdown/       # Dropdown components
│   ├── input/          # Input components
│   ├── mouse-trail/    # Mouse trail effect
│   ├── overlay/        # Overlay components
│   ├── popup/          # Popup components
│   └── zoomImage/      # Image zoom components
└── utils/              # Utility functions and types
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project uses Next.js with Turbopack for faster development experience.

## Development

- The project uses TypeScript for type safety
- Components are organized in a modular structure
- Styles are managed with Tailwind CSS and custom CSS
- State management is handled with React Use hooks
- Animations are implemented using Framer Motion

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
