# 🧠 User Registration Flow with AWS Step Functions + Amplify (React)

This project is a simple **user registration system** built using:

- 🟡 AWS Step Functions (as the backend logic workflow)
- 🧬 AWS Lambda (individual functions for validation, storage, and notifications)
- 🧱 DynamoDB (to persist user data)
- 📬 Amazon SNS (to send welcome messages)
- ⚛️ React + AWS Amplify (as the frontend deployment stack)

> 🚀 Perfect for learning **serverless orchestration with a real frontend-to-backend flow**!

---

## ✨ Features

- ✅ React registration form with email & name
- 🔁 Triggers AWS Step Function on form submit
- 🔍 Validates and checks for duplicate email
- 🗃️ Stores valid users to DynamoDB
- 📩 Sends welcome message via SNS
- 🌐 Deployed with AWS Amplify

---

## 🧰 Technologies Used

| Layer        | Tech Stack                   |
|--------------|------------------------------|
| Frontend     | React, Amplify Hosting        |
| API Gateway  | Amazon API Gateway (REST)     |
| Orchestration| AWS Step Functions            |
| Backend      | AWS Lambda (Python) |
| Database     | Amazon DynamoDB               |
| Notification | Amazon SNS                    |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/state-machine.git
cd state-machine/user-registration-app

### Front-End Environment Variable
```sh
REACT_APP_API_URL=https://<your-api-gateway-url>
```

### Project Setup

```sh
npm install
```

# 🙌 Credits
- Built by imannuel jeremi
- Guided by AWS Docs
