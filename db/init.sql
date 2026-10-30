-- Database initialization file for Attorney Dashboard
-- 
-- TODO: Create the database schema for the attorney dashboard
-- 
-- You need to create two tables based on the API requirements:
-- 1. tasks table - for managing attorney tasks
-- 2. cases table - for managing legal cases
-- 
-- Refer to the README.md for the required table schemas and field specifications
-- 
-- Don't forget to:
-- - Use appropriate data types for each field
-- - Set up proper primary keys and constraints  
-- - Add default values where specified
-- - Create indexes for better query performance
-- - Add sample data for testing your application
-- 
-- Example table structure (you need to implement this):
-- CREATE TABLE tasks (
--     -- Add your table structure here based on the Task interface in README.md
-- );
-- 
-- CREATE TABLE cases (
--     -- Add your table structure here based on the Case interface in README.md
-- );
-- 
-- Don't forget to add sample data:
-- INSERT INTO tasks (...) VALUES (...);
-- INSERT INTO cases (...) VALUES (...);
-- 
-- And create performance indexes:
-- CREATE INDEX ... ON tasks(...);
-- CREATE INDEX ... ON cases(...);


--Create tables
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL DEFAULT 'Unnamed Task',
    description TEXT NOT NULL DEFAULT '',
    priority VARCHAR(6) CHECK (priority IN ('low', 'medium', 'high')) NOT NULL DEFAULT 'low',
    status VARCHAR(11) CHECK (status IN ('pending', 'in_progress', 'completed')) NOT NULL DEFAULT 'pending',
    due_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cases (
    id SERIAL PRIMARY KEY,
    case_number INT UNIQUE NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    case_type VARCHAR(255) NOT NULL,
    status VARCHAR(11) CHECK (status IN ('pending', 'active', 'closed')) NOT NULL DEFAULT 'pending',
    last_activity TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--create indexes 
--relevant queries are for: 
--  GET /api/tasks (5 most recent pending) -> SELECT * FROM tasks WHERE status='pending' ORDER BY created_at DESC LIMIT 5
--  GET /api/cases (5 most recent updates) -> SELECT * FROM cases ORDER BY updated_at DESC LIMIT 5
CREATE INDEX idx_tasks_status_createdat ON tasks (status, created_at DESC);
CREATE INDEX idx_cases_updatedat ON cases (updated_at DESC NULLS LAST);

--insert dummy data
INSERT INTO tasks (title, description, priority, status, due_date, created_at, updated_at) VALUES
('Contract reviews with deadlines', 'Review outstanding contractual obligations, identify unfavorable clauses, and prepare recommended revisions for attorney approval.', 'high', 'in_progress', NOW() + INTERVAL '5 days', DEFAULT, DEFAULT),
('Court filing preparation', 'Finalize court documents, verify supporting evidence, and ensure all filing requirements are satisfied before submission.', 'high', 'completed', NOW() - INTERVAL '1 day', DEFAULT, NOW() - INTERVAL '2 days'),
('Client meeting scheduling', 'Coordinate availability with the client and opposing counsel to arrange an initial consultation and discuss case strategy.', 'high', 'pending', NOW() + INTERVAL '1 month', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days'),
('Document drafting', 'Draft preliminary legal documents for review and incorporate feedback from the supervising attorney.', 'low', 'pending', NOW() + INTERVAL '2 months', NOW() - INTERVAL '4 days', NOW() - INTERVAL '4 days'),
('Case research', 'Research applicable statutes, regulations, and relevant judicial precedents to support the legal arguments in the case.', 'medium', 'pending', NOW() + INTERVAL '3 months', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days');

INSERT INTO cases (case_number, client_name, case_type, status, last_activity, created_at, updated_at) VALUES
(1, 'John Smith', 'Personal Injury', 'pending', 'Initial client consultation completed; awaiting medical records and accident documentation to assess damages.', NOW() - INTERVAL '1 month', NOW() - INTERVAL '1 month'),
(2, 'Jane Doe', 'Personal Injury', 'active', 'Reviewed opposing counsel''s latest settlement proposal and prepared a response outlining the client''s position.', NOW() - INTERVAL '3 months', NOW() - INTERVAL '15 days'),
(3, 'Doug Booker', 'Criminal Defense', 'pending', 'Reviewed preliminary discovery materials and identified additional witness statements needed for case evaluation.', NOW() - INTERVAL '1 month', NOW() - INTERVAL '1 month'),
(4, 'Brett Jacobs', 'Custody', 'active', 'Received a revised custody proposal and discussed visitation arrangements and next steps with the client.', NOW() - INTERVAL '2 months', NOW() - INTERVAL '7 days'),
(5, 'Corporate Corporation', 'Corporate Law', 'closed', 'Final settlement and closure documents reviewed; outstanding obligations confirmed as satisfied and case marked closed.', NOW() - INTERVAL '1 month', NOW());