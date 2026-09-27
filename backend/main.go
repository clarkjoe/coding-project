package main

import (
	"log"
	"net/http"
	
	// TODO: Add required imports for database, web framework, etc.
	// Example imports you might need:
	// "database/sql"
	// "github.com/gorilla/mux" 
	// _ "github.com/lib/pq"
)

// TODO: Define your data structures here
// Example:
// type Task struct {
//     ID          int       `json:"id"`
//     Title       string    `json:"title"`
//     Description string    `json:"description"`
//     Priority    string    `json:"priority"`
//     Status      string    `json:"status"`
//     DueDate     time.Time `json:"due_date"`
//     CreatedAt   time.Time `json:"created_at"`
//     UpdatedAt   time.Time `json:"updated_at"`
// }

// type Case struct {
//     ID           int       `json:"id"`
//     CaseNumber   string    `json:"case_number"`
//     ClientName   string    `json:"client_name"`
//     CaseType     string    `json:"case_type"`
//     Status       string    `json:"status"`
//     LastActivity string    `json:"last_activity"`
//     CreatedAt    time.Time `json:"created_at"`
//     UpdatedAt    time.Time `json:"updated_at"`
// }

func main() {
	// TODO: Set up database connection
	// Hint: Use environment variables for database configuration
	
	// TODO: Set up your web framework (e.g., Gorilla Mux, Gin, etc.)
	
	// TODO: Implement API endpoints:
	// - GET /api/tasks (return pending tasks)
	// - GET /api/cases (return recent case updates)  
	// - GET /health (health check)
	
	// TODO: Configure CORS for frontend communication
	
	// Start server
	port := "8080"
	log.Printf("Server starting on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

// TODO: Implement handler functions
// Example:
// func getTasksHandler(w http.ResponseWriter, r *http.Request) {
//     // Query database for pending tasks
//     // Return JSON response
// }

// func getCasesHandler(w http.ResponseWriter, r *http.Request) {
//     // Query database for recent cases
//     // Return JSON response  
// }

// func healthHandler(w http.ResponseWriter, r *http.Request) {
//     // Return health status
// }