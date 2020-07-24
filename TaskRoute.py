from flask import Flask, request, jsonify
from TaskModel import Task, task_schema, tasks_schema 
from verify import verify
from config import db, app

# Create new task
@app.route('/task/add', methods=['POST'])
@verify
def addTask(user):
    try:
        userId = user.userId
        phaseId = request.json['phaseId']
        taskText = request.json['taskText']
        completed = False

        task = Task(userId, phaseId, taskText, completed)
        db.session.add(task)
        db.session.commit()

        return task_schema.jsonify(task)
    except AssertionError as exception_message: 
        return jsonify(msg='Error: {}. '.format(exception_message)), 400


# Get specific task
@app.route('/task/<id>', methods=['GET'])
def getTask(id):
    task = Task.query.get(id)
    return task_schema.jsonify(task)

# Get all tasks from certain phase
@app.route('/tasks/<phaseId>', methods=['GET'])
@verify
def getTasks(user, phaseId):
    task = Task.query.filter(Task.phaseId == phaseId).all()
    return tasks_schema.jsonify(task)

# Update task
@app.route('/task/update/<id>', methods=['PUT'])
@verify
def updateTask(user, id):
    task = Task.query.get(id)
    userId = user.userId
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
@verify
def deleteTask(user, id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()

    return task_schema.jsonify(task)
