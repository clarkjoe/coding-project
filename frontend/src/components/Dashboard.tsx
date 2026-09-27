import './Dashboard.css'
// TODO: Import your widget components
// import TasksWidget from './TasksWidget'
// import CasesWidget from './CasesWidget'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Attorney Dashboard</h1>
        <p>Welcome back! Here's what's happening with your cases.</p>
      </div>
      
      <div className="dashboard-grid">
        {/* TODO: Add TasksWidget component */}
        <div className="widget-placeholder">
          <h3>TODO: Tasks Widget</h3>
          <p>Display pending tasks here</p>
        </div>
        
        {/* TODO: Add CasesWidget component */}
        <div className="widget-placeholder">
          <h3>TODO: Cases Widget</h3>
          <p>Display recent case updates here</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard