// TODO: Implement API service functions

import { Task, Case } from "../types";

// Example API configuration:
const API_BASE_URL = 'http://localhost:8080/api'

// Example API functions:
export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`)
    if (!response.ok) {
      throw new Error('Failed to fetch tasks')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching tasks:', error)
    throw error
  }
}

export const getCases = async (): Promise<Case[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/cases`)
    if (!response.ok) {
      throw new Error('Failed to fetch cases')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching cases:', error)
    throw error
  }
}

// TODO: Add error handling, loading states, and proper TypeScript types