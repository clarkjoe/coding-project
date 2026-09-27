# Attorney Dashboard - Full Stack Coding Challenge

## Overview

Create a simple attorney dashboard application using React + TypeScript for the frontend, Go for the backend API, and PostgreSQL for data storage, all orchestrated with Docker.

## Requirements

Build a landing page for an attorney that includes:

1. **Navigation Bar** - Simple navigation (links don't need to be functional)
2. **Quick Look Tasks** - Display a list of tasks to be completed 
3. **Latest Case Changes** - Show recent updates to existing cases

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Go (Gin framework recommended)
- **Database**: PostgreSQL
- **Containerization**: Docker + Docker Compose

## Core Requirements

### Frontend (React + TypeScript)
- Navigation bar with attorney branding and menu items
- Tasks widget displaying pending tasks with priority color-coding (red=high, yellow=medium, green=low)
- Cases widget showing recent case updates with status badges
- Professional legal industry styling
- Responsive design (desktop and tablet)
- Loading states and error handling
- TypeScript with proper type definitions

### Backend (Go)
Implement a REST API with these endpoints:
- `GET /api/tasks` - Return pending tasks (limit to 5 most recent)
- `GET /api/cases` - Return recent case updates (limit to 5 most recent)
- `GET /health` - Health check endpoint
- CORS configuration for frontend communication
- PostgreSQL database integration
- Proper error handling and JSON responses

### Database (PostgreSQL)
**You must design and create your own database schema:**

Create tables for:
- **Tasks** - Include fields such as: id, title, description, priority, status, due_date, timestamps
- **Cases** - Include fields such as: id, case_number, client_name, case_type, status, last_activity, timestamps

Consider:
- Appropriate data types and constraints
- Primary keys and indexes for performance
- Sample data for testing (at least 5-10 records per table)
- Realistic legal industry data

### DevOps (Docker)
- Frontend: Multi-stage Docker build (build + nginx serve)
- Backend: Multi-stage Docker build for optimal image size
- Database: PostgreSQL container with initialization
- Docker Compose orchestrating all services
- Proper networking between containers
- Volume mounts for database persistence

## Getting Started

1. Clone this repository
2. **Design your database schema** in `db/init.sql`
3. **Implement the backend API** in Go
4. **Build the frontend components** in React + TypeScript
5. Run `docker-compose up --build`
6. Access the application at http://localhost:3000

## Project Structure

```
attorney-dashboard/
├── frontend/                 # React + TypeScript app
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API service functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── main.tsx        # Application entry point
│   ├── Dockerfile
│   └── package.json
├── backend/                  # Go API server
│   ├── main.go             # Main application file
│   ├── Dockerfile
│   └── go.mod
├── db/                      # Database initialization
│   └── init.sql            # Your database schema + sample data
├── docker-compose.yml
└── README.md
```

## Sample Data Suggestions

### Tasks
Consider including tasks like:
- Contract reviews with deadlines
- Court filing preparation
- Client meeting scheduling
- Document drafting
- Case research

### Cases
Consider including cases such as:
- Personal injury cases
- Family law matters
- Corporate legal issues
- Criminal defense cases
- Real estate transactions

## Acceptance Criteria

### Functional Requirements:
- [ ] Application starts with `docker-compose up --build`
- [ ] Frontend loads at `http://localhost:3000`
- [ ] Backend API responds at `http://localhost:8080/api`
- [ ] Database initializes with your custom schema and sample data
- [ ] Navigation bar displays with all required elements
- [ ] Tasks widget shows pending tasks from API with priority colors
- [ ] Cases widget shows recent case updates from API with status badges
- [ ] All API endpoints return proper JSON responses

### Code Quality:
- [ ] TypeScript with proper type definitions
- [ ] Go code follows standard conventions
- [ ] Clean, readable code structure
- [ ] Error handling in both frontend and backend
- [ ] Responsive CSS that works on different screen sizes

### Database Design:
- [ ] Well-designed schema with appropriate data types
- [ ] Proper constraints and relationships
- [ ] Realistic sample data for testing
- [ ] Performance considerations (indexes)

### DevOps:
- [ ] All services containerized properly  
- [ ] Docker Compose orchestrates full stack
- [ ] Multi-stage builds for optimization
- [ ] Database persists data between restarts

## Styling Requirements

- Use a professional legal industry color scheme (navy, gold, gray tones)
- Clean, modern interface suitable for attorneys
- Responsive design that works on desktop and tablet
- You may use CSS modules, styled-components, or a UI library

## Bonus Points

- [ ] **GitHub Actions CI/CD** (see bonus assignment below)
- [ ] Unit tests for backend endpoints
- [ ] Frontend component tests
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Database migrations
- [ ] Environment-specific configurations
- [ ] Advanced error handling with user-friendly messages

## 🎯 Bonus Assignment: GitHub Actions

Create a GitHub Actions workflow that runs tests on every pull request:

1. **Create `.github/workflows/ci.yml`**
2. **Implement the following pipeline:**
   - Trigger on pull requests to main branch
   - Set up Go environment and run backend tests
   - Set up Node.js environment and run frontend tests
   - Build Docker images to verify they compile
   - Run basic integration tests (API endpoints respond correctly)

**Example workflow structure:**
```yaml
name: CI
on:
  pull_request:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        # Configure test database
    steps:
      # Checkout, setup environments, run tests
```

**This bonus demonstrates:**
- CI/CD pipeline knowledge
- Testing strategy
- GitHub Actions experience
- DevOps automation skills

## Time Estimate

**Core Requirements**: 4-6 hours  
**With Bonus Assignment**: 6-8 hours

## Evaluation Criteria

1. **Functionality** (25%) - All requirements working correctly
2. **Code Quality** (20%) - Clean, readable, well-structured code
3. **Database Design** (15%) - Appropriate schema and sample data
4. **TypeScript Usage** (15%) - Proper typing throughout frontend
5. **Docker Setup** (10%) - Proper containerization and orchestration
6. **UI/UX** (10%) - Professional appearance and user experience
7. **Error Handling** (5%) - Graceful error handling throughout

## Submission

1. Ensure your code is properly committed to Git
2. Test that `docker-compose up --build` works from a fresh clone
3. Include any setup instructions or assumptions in your README
4. Document your database schema design decisions

Good luck! 🚀