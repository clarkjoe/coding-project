import { useState, useEffect } from 'react'
import './TasksWidget.css'
// TODO: Import your API service and types
import { getTasks } from '../services/api'
import { Task } from '../types'
import { ClipLoader } from 'react-spinners'

const TasksWidget = () => {
  // TODO: Add state management for tasks, loading, and errors
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState<string | null>(null)

  // TODO: Add useEffect to fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks()
        setTasks(tasksData)
      } catch (err) {
        setIsError('Failed to load tasks')
      } finally {
        setIsLoading(false)
      }
    }
    fetchTasks()
  }, [])

  return (
    <div className="tasks-widget">
      <div className="widget-header">
        <h2>Quick Look - Pending Tasks</h2>
      </div>
      
      <div className="widget-content">
        {isLoading ? 
          <ClipLoader loading={isLoading}/>
        : isError ? 
          <h1>{'<Error loading tasks>'}</h1>
        : tasks.map((task) => {
          return (
            <div className='task' key={task.id}>
              <div className="widget-header">
                <h2>{task.title}</h2>
              </div>
              <div className={`priority-bar ${task.priority}`}></div>
              <div className="widget-content">
                <div className="task-details">
                  <p><b>Status:</b> {task.status}</p>
                  <p><b>Due:</b> {new Date(task.due_date).toLocaleString('en-US', {dateStyle: "long", timeStyle: "short"})}</p>
                </div>
                <p>{task.description}</p>
                <br/>
                <p><i>Last updated on {new Date(task.updated_at).toLocaleString('en-US', {dateStyle: "long", timeStyle: "short"})}</i></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default TasksWidget

{/* <div className="placeholder-content">
  <p>TODO: Implement tasks display with:</p>
  <ul>
    <li>Task title and description</li>
    <li>Due date formatting</li>
    <li>Priority indicators (high/medium/low)</li>
    <li>Loading and error states</li>
  </ul>
</div> */}