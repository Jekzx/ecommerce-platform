# E-commerce Platform

A full-stack e-commerce solution with real-time inventory management, built with modern web technologies.

## Features

- User authentication and authorization
- Product catalog with categories and search
- Shopping cart functionality
- Real-time inventory tracking
- Order management system
- Admin dashboard
- Secure payment processing
- Responsive design

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication

### Tools & Infrastructure
- Docker
- Git
- CI/CD Pipeline
- AWS Deployment

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
cd ecommerce-platform
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

5. Start the backend server
```bash
npm run server
```

## Project Structure

```
ecommerce-platform/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux store configuration
│   │   └── types/        # TypeScript type definitions
│   └── public/           # Static assets
├── server/                # Backend Node.js application
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── middleware/      # Custom middleware
└── shared/               # Shared utilities and types
```

## API Documentation

The API documentation is available at `/api-docs` when running the development server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Gabriel Rodrigues
