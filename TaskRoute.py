from flask import Flask, request, jsonify
from TaskModel import Task, task_schema, tasks_schema 
from config import db, app

# Create new task
@app.route('/task/add', methods=['POST'])
def addTask():
    userId = request.json['userId']
    phaseId = request.json['phaseId']
    taskText = request.json['taskText']
    completed = request.json['completed']

    task = Task(userId, phaseId, taskText, completed)
    db.session.add(task)
    db.session.commit()

    return task_schema.jsonify(task)

# Get specific task
@app.route('/task/<id>', methods=['GET'])
def getTask(id):
    task = Task.query.get(id)
    return task_schema.jsonify(task)

# Get all tasks from certain phase
@app.route('/tasks/<phaseId>', methods=['GET'])
def getTasks(phaseId):
    task = Task.query.filter(Task.phaseId == phaseId).all()
    return tasks_schema.jsonify(task)

# Update task
@app.route('/task/update/<id>', methods=['PUT'])
def updateTask(id):
    task = Task.query.get(id)
    userId = request.json['userId']
    phaseId = request.json['phaseId']
    taskText = request.json['taskText']
    completed = request.json['completed']

    task.userId = userId
    task.phaseId = phaseId
    task.taskText = taskText
    task.completed = completed

    db.session.commit()
    return task_schema.jsonify(task)

# Delete tasks
@app.route('/task/delete/<id>', methods=['DELETE'])
def deleteTask(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()

    return task_schema.jsonify(task)
