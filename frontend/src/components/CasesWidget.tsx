import { useState, useEffect } from 'react'
import './CasesWidget.css'
// TODO: Import your API service and types
import { getCases } from '../services/api'
import { Case } from '../types'

const CasesWidget = () => {
  // TODO: Add state management for cases, loading, and errors
  const [cases, setCases] = useState<Case[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState<string | null>(null)

  // TODO: Add useEffect to fetch cases from API
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const casesData = await getCases()
        setCases(casesData)
      } catch (err) {
        setIsError('Failed to load cases')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCases()
  }, [])

  return (
    <div className="cases-widget">
      <div className="widget-header">
        <h2>Latest Changes - Recent Cases</h2>
      </div>
      
      
      <div className="widget-content">
        {isLoading ? 
          <p>loading</p>
        : isError ? 
          <h1>{'<Error loading cases>'}</h1>
        : cases.map((caseData) => {
          return (
            <div className='case' key={caseData.id}>
              <div className="widget-header">
                <h2>{caseData.client_name}</h2>
              </div>
              <div className="widget-content">
                <div className="case-details">
                  <p><b>Status:</b> {caseData.status}</p>
                  <p><b>Case Number:</b> {caseData.case_number}</p>
                </div>
                <p>{caseData.last_activity}</p>
                <br/>
                <p><i>Last updated on {new Date(caseData.updated_at).toLocaleString('en-US', {dateStyle: "long", timeStyle: "short"})}</i></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default CasesWidget