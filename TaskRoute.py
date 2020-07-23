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