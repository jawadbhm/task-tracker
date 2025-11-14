# Task Tracker API

A simple Python Flask API that lets you create, view, update, and delete tasks.  
This project is part of my portfolio as I practice backend development, clean structure, and working with local JSON storage.

## 🚀 What the API does
- Create new tasks  
- View all tasks  
- View a single task  
- Update an existing task  
- Delete a task  

Each task includes: **id**, **title**, **description**, **completed** (true/false).  
All tasks are stored locally in **tasks.json**.

## ▶️ How to run the project
1. Install dependencies:  
   pip install -r requirements.txt  
2. Start the API:  
   python app.py  
3. The server will run at:  
   http://localhost:5000

## 📡 API Endpoints
GET /tasks – return all tasks  
POST /tasks – create a new task  
GET /tasks/<id> – get one task  
PUT /tasks/<id> – update a task  
DELETE /tasks/<id> – delete a task  

## 🧪 Example request bodies
POST:  
{  
  "title": "Buy groceries",  
  "description": "Milk, eggs, bread"  
}  

PUT:  
{  
  "title": "Updated task",  
  "description": "Updated details",  
  "completed": true  
}

## 🗂 Project structure
app.py  
models.py  
tasks.json  
tests/  
requirements.txt  
README.md  

## 🌱 Why I built this
I created this project to practice:
- Building a small REST API  
- Using Flask  
- Storing data in JSON  
- Structuring a backend project  
- Writing simple documentation  

## 🚧 Future improvements
- Add due dates or priority  
- Add filtering options  
- Add authentication  
- Replace JSON with a database  
- Add a simple frontend  

## 🤝 Contributions
Feel free to open issues or submit pull requests.
