# TaskFlow — AI-Assisted React Application

## 1. Project Overview
TaskFlow is a responsive task-management dashboard built independently with React. It lets users create, edit, delete, search, filter, and update the status of tasks. Tasks are persisted with browser localStorage so the data survives page refreshes.

## 2. Technologies
- React
- JavaScript
- Vite
- CSS
- Lucide React icons
- Browser localStorage

## 3. Features
- Dashboard summary cards
- Add and edit task modal
- Task title and description
- Status: To Do, In Progress, Completed
- Priority: Low, Medium, High
- Due date
- Search
- Status and priority filters
- Delete tasks
- Click status icon to cycle status
- Form validation
- Responsive layout
- localStorage persistence

## 4. AI Development Prompts

### Prompt 1 — Planning
Act as a senior frontend developer. Help me plan a React task-management dashboard called TaskFlow. Define the core features, components, data model, and a simple folder structure. Keep the scope realistic for a portfolio project.

### Prompt 2 — Application structure
Create a React/Vite structure for TaskFlow with components for a sidebar, dashboard header, summary cards, filters, task cards, and an add/edit task modal. Keep components simple and reusable.

### Prompt 3 — Dashboard UI
Design a clean responsive task-management dashboard using React and CSS. Include four summary cards, a search field, status and priority filters, and a responsive task-card grid.

### Prompt 4 — Task form
Create a React add/edit task form with title, description, status, priority, and due date. Add client-side validation for required title and due date fields.

### Prompt 5 — State management
Add React state management for creating, editing, deleting, searching, filtering, and changing task status. Keep the implementation understandable for a beginner/intermediate React developer.

### Prompt 6 — Persistence
Add localStorage persistence so tasks remain available after refreshing the browser. Handle an empty localStorage value safely.

### Prompt 7 — Debugging
Review the current TaskFlow implementation for bugs, especially around form submission, editing, filtering, and localStorage. Identify problems before proposing corrections.

### Prompt 8 — Responsive UI
Review the TaskFlow layout for mobile and tablet responsiveness. Suggest focused CSS changes without changing application behavior.

### Prompt 9 — Refactoring
Review the TaskFlow code for duplicated logic, unclear naming, and unnecessary complexity. Suggest small refactors that preserve existing behavior.

### Prompt 10 — Final review
Review TaskFlow against these requirements: create, edit, delete, search, filter, status updates, validation, persistence, and responsive layout. Identify anything missing or unreliable.

## 5. How AI Assisted
AI was used as a development assistant for planning, component ideas, initial implementation, debugging suggestions, UI refinement, validation, and refactoring. The generated suggestions were reviewed and tested rather than accepted blindly. Final decisions about the feature scope, visual hierarchy, interactions, and implementation were made during review.

## 6. Manual Improvements / Corrections

### A. Simplified the scope
AI suggestions can easily expand a project with unnecessary features. I kept TaskFlow focused on the core task-management workflow instead of adding authentication, a backend, teams, notifications, or other features that were not required.

### B. Added localStorage persistence
The application stores the task list in localStorage and restores it when the application starts. This makes the application useful across refreshes without requiring a backend.

### C. Added validation
The final form checks that a task title and due date are provided. Invalid submission is stopped and a visible error is shown.

### D. Improved responsive behavior
The layout changes from three task columns to two and then one column at smaller screen widths. The sidebar is hidden on smaller screens to preserve usable space.

### E. Reviewed destructive actions
Delete and edit actions are separated visually from the main task content, and each action has an accessible label.

### F. Refined UI decisions
The final UI uses consistent cards, spacing, typography, status/priority pills, and a clear primary action. These choices were reviewed instead of treating AI-generated styling as final.

## 7. AI-Assisted Development Reflection
AI reduced the time needed to explore implementation options and helped identify likely bugs and refactoring opportunities. The main limitation was that AI suggestions sometimes introduced unnecessary complexity or made assumptions about the desired UI. Reviewing and testing the generated code was therefore an important part of the process.

## 8. Final Review Checklist
- [x] Create task
- [x] Edit task
- [x] Delete task
- [x] Search tasks
- [x] Filter by status
- [x] Filter by priority
- [x] Update task status
- [x] Validate required fields
- [x] Persist tasks with localStorage
- [x] Responsive layout
