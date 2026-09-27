# Setup Instructions

## Prerequisites

- Docker and Docker Compose installed
- Git

## Quick Start

1. **Clone and navigate to the project:**
   ```bash
   git clone <repository-url>
   cd attorney-dashboard
   ```

2. **Start the development environment:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - Database: localhost:5432

## Development Workflow

### Backend Development (Go)
- Main file: `backend/main.go`
- Add dependencies to `backend/go.mod`
- Run `go mod tidy` to update dependencies
- API endpoints should be prefixed with `/api`

### Frontend Development (React + TypeScript)
- Main app: `frontend/src/App.tsx`
- Components: `frontend/src/components/`
- API calls: `frontend/src/services/api.ts`
- Types: `frontend/src/types/index.ts`

### Database
- Schema: `db/init.sql`
- Add sample data in the same file
- Tables: `tasks` and `cases`

## Docker Services

- **frontend**: React app served by Nginx (port 3000)
- **backend**: Go API server (port 8080)
- **db**: PostgreSQL database (port 5432)

## Environment Variables

The following environment variables are configured in docker-compose.yml:

- `DB_HOST=db`
- `DB_PORT=5432`
- `DB_USER=attorney`
- `DB_PASSWORD=password`
- `DB_NAME=attorney_db`

## Troubleshooting

- If containers fail to start, check Docker logs: `docker-compose logs`
- To rebuild from scratch: `docker-compose down && docker-compose up --build`
- To access the database: `docker-compose exec db psql -U attorney attorney_db`

## Submission

Ensure your solution:
1. Starts successfully with `docker-compose up --build`
2. Shows the attorney dashboard at http://localhost:3000
3. API endpoints return proper JSON responses
4. All acceptance criteria are met