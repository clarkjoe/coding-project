package main

import (
	"database/sql"
	"log"
	"net/http"
	"time"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
	// TODO: Add required imports for database, web framework, etc.
	// Example imports you might need:
	// "database/sql"
	// "github.com/gorilla/mux"
	// _ "github.com/lib/pq"
)

var db *sql.DB

type Task struct {
    ID          int            `json:"id"`
    Title       string         `json:"title"`
    Description string         `json:"description"`
    Priority    string         `json:"priority"`
    Status      string         `json:"status"`
    DueDate     time.Time      `json:"due_date"`
    CreatedAt   time.Time      `json:"created_at"`
    UpdatedAt   time.Time      `json:"updated_at"`
}

type Case struct {
    ID           int            `json:"id"`
    CaseNumber   int            `json:"case_number"`
    ClientName   string         `json:"client_name"`
    CaseType     string         `json:"case_type"`
    Status       string         `json:"status"`
    LastActivity string         `json:"last_activity"`
    CreatedAt    time.Time      `json:"created_at"`
    UpdatedAt    time.Time      `json:"updated_at"`
}

func getTasksHandler(context *gin.Context) {
	rows, err := db.Query("SELECT * FROM tasks WHERE status='pending' ORDER BY due_date LIMIT 5")
	if err != nil {
		context.AbortWithStatusJSON(http.StatusInternalServerError, "GET tasks query failed")
		return
	}

	var tasks []Task
	for rows.Next() {
		var task Task
		if err = rows.Scan(&task.ID, &task.Title, &task.Description, &task.Priority, 
						   &task.Status, &task.DueDate, &task.CreatedAt, &task.UpdatedAt); err != nil {
			context.AbortWithStatusJSON(http.StatusInternalServerError, "Error processing task row")
			return
		}
		tasks = append(tasks, task)
	}
	if err = rows.Err(); err != nil {
		context.AbortWithStatusJSON(http.StatusInternalServerError, err)
		return
	}

	context.JSON(http.StatusOK, tasks)
}

func getCasesHandler(context *gin.Context) {
	rows, err := db.Query("SELECT * FROM cases ORDER BY updated_at DESC LIMIT 5")
	if err != nil {
		context.AbortWithStatusJSON(http.StatusInternalServerError, "GET cases query failed")
		return
	}

	var cases []Case
	for rows.Next() {
		var case_row Case
		if err = rows.Scan(&case_row.ID, &case_row.CaseNumber, &case_row.ClientName, &case_row.CaseType,
						   &case_row.Status, &case_row.LastActivity, &case_row.CreatedAt, &case_row.UpdatedAt); err != nil {
			context.AbortWithStatusJSON(http.StatusInternalServerError, "Error processing case row")
			return
		}
		cases = append(cases, case_row)
	}
	if err = rows.Err(); err != nil {
		context.AbortWithStatusJSON(http.StatusInternalServerError, err)
		return
	}

	context.JSON(http.StatusOK, cases)
}

func getHealthHandler(context *gin.Context) {
	err := db.Ping()
	if err != nil {
		context.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	context.Status(http.StatusOK)
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
		AllowOrigins: []string{"http://localhost:3000"},
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