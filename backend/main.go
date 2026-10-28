package main

import (
	"log"
	"database/sql"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"time"
	_ "github.com/lib/pq"
	
	// TODO: Add required imports for database, web framework, etc.
	// Example imports you might need:
	// "database/sql"
	// "github.com/gorilla/mux" 
	// _ "github.com/lib/pq"
)

var db *sql.DB

type Task struct {
    ID          int       `json:"id"`
    Title       string    `json:"title"`
    Description string    `json:"description"`
    Priority    string    `json:"priority"`
    Status      string    `json:"status"`
    DueDate     time.Time `json:"due_date"`
    CreatedAt   time.Time `json:"created_at"`
    UpdatedAt   time.Time `json:"updated_at"`
}

type Case struct {
    ID           int       `json:"id"`
    CaseNumber   string    `json:"case_number"`
    ClientName   string    `json:"client_name"`
    CaseType     string    `json:"case_type"`
    Status       string    `json:"status"`
    LastActivity string    `json:"last_activity"`
    CreatedAt    time.Time `json:"created_at"`
    UpdatedAt    time.Time `json:"updated_at"`
}

func getTasksHandler(context *gin.Context) {
	return
}

func getCasesHandler(context *gin.Context) {
	return
}

func getHealthHandler(context *gin.Context) {
	err := db.Ping()
	if err != nil {
		context.AbortWithStatus(401)
		return
	}
	context.Status(200)
}

func main() {
	// TODO: Set up database connection
	// Hint: Use environment variables for database configuration
	
	// TODO: Set up your web framework (e.g., Gorilla Mux, Gin, etc.)
	
	// TODO: Implement API endpoints:
	// - GET /api/tasks (return pending tasks)
	// - GET /api/cases (return recent case updates)  
	// - GET /health (health check)
	
	// TODO: Configure CORS for frontend communication
	//make a new router
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowMethods: []string{"GET", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type"},
	}))

	//connect to database
	var err error
	db, err = sql.Open("postgres",
		"host=postgres " +
		"port=5432 " +
		"user=postgres " +
		"password=password " +
		"dbname=attorney_dashboard " +
		"sslmode=disable",
	)
	if err != nil {
		log.Fatal("Could not open database")
		return
	}

	//add routes
	router.GET("/api/tasks", getTasksHandler)
	router.GET("/api/cases", getCasesHandler)
	router.GET("/api/health", getHealthHandler)

	//start server
	err = router.Run(":8080")
	if err != nil {
		log.Fatal("Router encountered an error while running")
		return
	}
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