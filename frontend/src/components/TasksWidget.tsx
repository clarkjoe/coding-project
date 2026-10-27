//import { useState, useEffect } from 'react'
import './TasksWidget.css'
// TODO: Import your API service and types
// import { getTasks } from '../services/api'
// import { Task } from '../types'

const TasksWidget = () => {
  // TODO: Add state management for tasks, loading, and errors
  // const [tasks, setTasks] = useState<Task[]>([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<string | null>(null)

  // TODO: Add useEffect to fetch tasks from API
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const tasksData = await getTasks()
  //       setTasks(tasksData)
  //     } catch (err) {
  //       setError('Failed to load tasks')
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchTasks()
  // }, [])

  return (
    <div className="tasks-widget">
      <div className="widget-header">
        <h2>Quick Look - Pending Tasks</h2>
      </div>
      
      <div className="widget-content">
        {/* TODO: Add loading state */}
        {/* TODO: Add error state */}
        {/* TODO: Map through tasks and display them */}
        
        <div className="placeholder-content">
          <p>TODO: Implement tasks display with:</p>
          <ul>
            <li>Task title and description</li>
            <li>Due date formatting</li>
            <li>Priority indicators (high/medium/low)</li>
            <li>Loading and error states</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TasksWidget