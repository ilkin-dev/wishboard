# Project Title
**Wish Board**

## Overview

**WishBoard** is a web-based platform that allows users to create, share, and track wishlists and goals collaboratively. Users can add personal goals (like "Learn guitar," "Modify," or "Complete a coding bootcamp"), and friends or community members can contribute by sharing tips, resources, or even helping fulfill certain wishes. This project brings a social and interactive twist to traditional goal-tracking by encouraging others to participate in each other’s dreams and ambitions.

### Problem

Most goal-tracking apps are solo experiences, where users add personal goals and track them individually. However, achieving big life goals or fulfilling wishes often requires encouragement, resources, and collaboration from friends, family, or even strangers. WishBoard makes goal-setting a social experience, helping people achieve their dreams faster through collaboration and shared experiences.

### User Profile

- Goal-Oriented Individuals:
    - Want to set personal goals and receive advice, tips, or support from others to achieve them.
- Friends and Family:
    - Looking for a way to help loved ones achieve their dreams by contributing knowledge, experience, or tangible support.
- Communities and Interest Groups:
    - Can form around shared interests (e.g., travel, fitness, learning new skills) and help each other reach milestones.

### Features

- Create a Wishlist or Goal Board
    - Users can create personal wishlists or goal boards where they list their dreams, ambitions, or items they want to achieve.
    - Each item on the board has details such as description, deadline, resources needed, and progress status (e.g., "Learning Japanese - 40% complete").

 - Collaborative Input from Friends and Community:
    - Friends, family, or community members can view a shared board and contribute by adding comments, links to resources, or offering help.
    - For example, if a user’s goal is "Learn photography," friends might suggest online courses or offer to lend a camera.

- Interactive Progress Tracking:
    - Users can update their goals as they make progress. Progress bars or percentage trackers visually show how far along a user is toward achieving a goal.
    - Interactive check-ins with collaborators allow users to document milestones or share updates.

- Inspire Others:
    - Users can browse public wishboards and find inspiration from others’ goals. Public goals can also be "followed" for encouragement and accountability.
    - Users can contribute to other wishboards by leaving suggestions, donating towards a wish (e.g., contributing money for a dream trip), or sharing expertise.
      
## Implementation

### Tech Stack

- Frontend
    - React
    - JavaScript
    - MySQL
    - Express
    - Client libraries:
        - react
        - react-router
        - axios
    - Server libraries:
        - knex
        - express
        - JWT for user authentication
        - bcrypt for password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page
- Create Board Page
- Collaborate Page
- Dashboard Page
- Login/Register Page

#### User Authentication Endpoints:

**POST /users/register**

- Register a new user

Parameters:
- email: User-provided email as a string
- password: User-provided password as a string
- name (optional): User-provided name as a string


Response:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**POST /users/login**

- Log in an existing user

Parameters:
- email: User-provided email as a string
- password: User-provided password as a string

Response:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Wishboard Endpoints:

**POST /wishboards/create**

- Create a new wishboard

Parameters:
- title : string
- description: string
- deadline: string (optional)
- isPublic: boolean

Response:
```
{
  "wishboardId": 1,
  "status": "Wishboard created successfully"
}
```

**GET /wishboards/:id**

- Fetch details of a specific wishboard

Parameters:
- id: Wishboard ID

Response:
```
{
  "wishboardId": 1,
  "title": "Visit Japan",
  "description": "Planning a dream trip to Japan in 2025",
  "progress": 40,
  "goals": [
    {
      "goalId": 1,
      "title": "Save $1000",
      "progress": 20,
      "deadline": "2024-12-31"
    },
    ...
  ]
}
```

**GET /wishboards/:userId**

- Fetch all wishboards created by a user.

Parameters:

- userId: number (user's ID)

Response:
```
[
  {
    "wishboardId": 1,
    "title": "Visit Japan",
    "progress": 40
  },
  {
    "wishboardId": 2,
    "title": "Learn Guitar",
    "progress": 10
  }
]
```

**PUT /wishboards/:id/update**

- Update wishboard details or progress.

Parameters:

- title: string (optional)
- description: string (optional)
- progress: number (optional)
- deadline: string (optional)

Response:
```
{
  "status": "Wishboard updated successfully"
}
```

**DELETE /wishboards/:id**

- Delete a wishboard with id

Parameters:
- id: number (wishboard ID)

Response:
```
{
  "status": "Wishboard deleted"
}
```

### Goal Endpoints

**POST /wishboards/:id/goals/create**

- Add a new goal to a specific wishboard

Parameters

- wishboardId: number
- title: string
- description: string (optional)
- deadline: string (optional)

Response:
```
{
  "goalId": 1,
  "status": "Goal added successfully"
}
```

**PUT /wishboards/:id/goals/update**

- Update a goal's progress or details.

Parameters

- goalId: number
- title: string (optional)
- description: string (optional)
- progress: number
- deadline: string (optional)

Response:
```
{
  "status": "Goal updated"
}
```

**DELETE  /wishboards/:id/goals/:goalId**

- Delete a goal from a wishboard.

Parameters

- goalId: number

Response:
```
{
  "status": "Goal deleted"
}
```

### Collaboration Endpoints

**POST /wishboards/:id/contribute

- Add a suggestion, resource, or comment to a specific wishboard.

Parameters

- wishboardId: number
- contributionText: string

Response:
```
{
  "status": "Contribution added"
}
```

**GET /wishboards/:id/contributions**

- Fetch all contributions made to a specific wishboard.

Parameters

- wishboardId: number

Response:
```
[
  {
    "contributionId": 1,
    "contributor": "John Doe",
    "type": "suggestion",
    "text": "Check out this article on saving money for travel"
  },
  ...
]
```

### Explore and Public Boards Endpoints

**GET /wishboards/explore**

- Fetch all public wishboards.

Response:

```
[
  {
    "wishboardId": 1,
    "title": "Visit Japan",
    "description": "Planning a dream trip to Japan in 2025",
    "progress": 40
  },
  ...
]
```

### Notification and Reminder Endpoints

**GET /notifications**

- Fetch user notifications for progress updates, contributions, or deadlines.

Response:

```
[
  {
    "notificationId": 1,
    "message": "Your goal 'Save $1000' is 50% complete!"
  },
  ...
]

```

### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged-in user to show the appropriate UI (e.g., displaying personal wishboards, collaborations features) based on mockups

### Roadmap

- Create client
    - react project structure with routes and basic boilerplate pages for the core functionality.

- Create server
    - express project with API routes for wishboard and goal management, starting with placeholder responses.

- Create migrations
    - design the database structure and create migrations for users, wishboards, goals, and contributions.

- Create Seeds:
    - create seeds with sample wishboards and goals for development and testing purposes

- Deploy client and server projects so all commits will be reflected in production

### Features
- Feature: Wishboard Creation
    - Create a form that allows users to create new wishboards with details like title, description, and optional deadlines.
    - Store the wishboard data in the database and display it on the user's dashboard.
    - API Endpoint: POST /wishboards/create

- Feature: View Wishboard
    - Implement the page that shows the details of a specific wishboard, including its goals, progress, and contributions.
    - API Endpoint: GET /wishboards/:id

- Feature: Collaborate on Wishboards
    - Add the functionality for friends and community members to contribute suggestions and resources to another user's wishboard.
    - API Endpoint: POST /wishboards/:id/contribute

- Feature: Home page

- Feature: List Wishboards
    - Display all of a user’s wishboards on the dashboard. Allow users to update their progress or delete wishboards.
    - API Endpoint: GET /wishboards/user/:userId

- Feature: Explore Public Wishboards
    - Implement an explore page where users can browse public wishboards, filter by category, and contribute.
    - API Endpoint: GET /wishboards/explore

- Feature: Authentication
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

### Nice-to-haves

- Integration with Google Calendar
    - Allow users to set reminders for goal deadlines, syncing them with Google Calendar or similar tools.
- Forgot password functionality
- Advanced User Profiles
    - Allow users to add more details to their profiles, such as bio, profile photo, personal achievements, and favorite goals.
- Gift Pooling for Goals
    - Users can enable a feature where friends or family can contribute financially or with resources toward completing a wishboard item.
- Unit and Integration Tests
