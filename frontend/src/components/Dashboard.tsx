import './Dashboard.css'
// TODO: Import your widget components
import TasksWidget from './TasksWidget'
import CasesWidget from './CasesWidget'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Attorney Dashboard</h1>
        <p>Welcome back! Here's what's happening with your cases.</p>
      </div>
      
      <div className="dashboard-grid">
        <TasksWidget/>
        <CasesWidget/>
      </div>
    </div>
  )
}

export default Dashboard