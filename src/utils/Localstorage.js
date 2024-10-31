const employees=[
          {
            "employeeId": 1,
            "email": "employee1@example.com",
            "tasks": [
              {
                "taskId": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Project Report",
                "taskDescription": "Prepare the final report for the project and submit it by the end of the week.",
                "category": "Reporting"
              },
              {
                "taskId": 2,
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Meeting Preparation",
                "taskDescription": "Gather materials and prepare presentation for the client meeting.",
                "category": "Meetings"
              },
              {
                "taskId": 3,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Budget Review",
                "taskDescription": "Review the budget for Q4 and identify any discrepancies.",
                "category": "Finance"
              }
            ]
          },
          {
            "employeeId": 2,
            "email": "employee2@example.com",
            "tasks": [
              {
                "taskId": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Marketing Strategy",
                "taskDescription": "Revise the current marketing strategy based on recent data.",
                "category": "Marketing"
              },
              {
                "taskId": 2,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Conduct Market Research",
                "taskDescription": "Perform a detailed market analysis for upcoming products.",
                "category": "Research"
              },
              {
                "taskId": 3,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Feedback Survey",
                "taskDescription": "Analyze the results of the client feedback survey.",
                "category": "Feedback"
              }
            ]
          },
          {
            "employeeId": 3,
            "email": "employee3@example.com",
            "tasks": [
              {
                "taskId": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Develop Training Module",
                "taskDescription": "Create an online training module for new hires.",
                "category": "Training"
              },
              {
                "taskId": 2,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Organize Team Event",
                "taskDescription": "Plan a team-building event for next month.",
                "category": "Teamwork"
              },
              {
                "taskId": 3,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare Annual Budget",
                "taskDescription": "Compile the budget for the upcoming fiscal year.",
                "category": "Finance"
              }
            ]
          },
          {
            "employeeId": 4,
            "email": "employee4@example.com",
            "tasks": [
              {
                "taskId": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Setup Feedback System",
                "taskDescription": "Implement a system for collecting employee feedback.",
                "category": "HR"
              },
              {
                "taskId": 2,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Network Security Audit",
                "taskDescription": "Perform a security audit of the company's network.",
                "category": "IT"
              },
              {
                "taskId": 3,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Employee Training Session",
                "taskDescription": "Conduct a training session for new employees.",
                "category": "Training"
              }
            ]
          },
          {
            "employeeId": 5,
            "email": "employee5@example.com",
            "tasks": [
              {
                "taskId": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create User Manual",
                "taskDescription": "Develop a user manual for the new software tool.",
                "category": "Documentation"
              },
              {
                "taskId": 2,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Research Market Trends",
                "taskDescription": "Conduct research on current market trends in our industry.",
                "category": "Research"
              },
              {
                "taskId": 3,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize Quarterly Report",
                "taskDescription": "Complete and submit the quarterly report to management.",
                "category": "Reporting"
              }
            ]
          }
]   

const admin=[
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
]

export const setlocalstorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getlocalstorage=()=>{
    const employees=localStorage.getItem('employees')
    const admin=localStorage.getItem('admin')
    console.log(JSON.parse(admin));
    console.log(JSON.parse(employees));
    
}