import { useState, useEffect } from 'react'
import './CasesWidget.css'
// TODO: Import your API service and types
// import { getCases } from '../services/api'
// import { Case } from '../types'

const CasesWidget = () => {
  // TODO: Add state management for cases, loading, and errors
  // const [cases, setCases] = useState<Case[]>([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<string | null>(null)

  // TODO: Add useEffect to fetch cases from API
  // useEffect(() => {
  //   const fetchCases = async () => {
  //     try {
  //       const casesData = await getCases()
  //       setCases(casesData)
  //     } catch (err) {
  //       setError('Failed to load cases')
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchCases()
  // }, [])

  return (
    <div className="cases-widget">
      <div className="widget-header">
        <h2>Latest Changes - Recent Cases</h2>
      </div>
      
      <div className="widget-content">
        {/* TODO: Add loading state */}
        {/* TODO: Add error state */}
        {/* TODO: Map through cases and display them */}
        
        <div className="placeholder-content">
          <p>TODO: Implement cases display with:</p>
          <ul>
            <li>Case number and client name</li>
            <li>Case type and status badges</li>
            <li>Last activity/update information</li>
            <li>Loading and error states</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CasesWidget