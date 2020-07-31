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
        stage = "todo"

        task = Task(userId, phaseId, taskText, stage)
        db.session.add(task)
        db.session.commit()

        return task_schema.jsonify(task)
    except:
        raise AssertionError('Something went wrong')
        


# Get specific task
@app.route('/task/<id>', methods=['GET'])
def getTask(id):
    try:
        task = Task.query.get(id)
        return task_schema.jsonify(task)
    except:
        raise AssertionError('Something went wrong')

# Get all tasks from certain phase
@app.route('/tasks/<phaseId>', methods=['GET'])
@verify
def getTasks(user, phaseId):
    try:
        task = Task.query.filter(Task.phaseId == phaseId).all()
        return tasks_schema.jsonify(task)
    except:
        raise AssertionError('Something went wrong')

# Update task
@app.route('/task/update/<id>', methods=['PUT'])
@verify
def updateTask(user, id):
    try:
        task = Task.query.get(id)
        userId = user.userId
        phaseId = request.json['phaseId']
        taskText = request.json['taskText']
        stage = request.json['stage']

        task.userId = userId
        task.phaseId = phaseId
        task.taskText = taskText
        task.stage = stage

        db.session.commit()
        return task_schema.jsonify(task)
    except:
        raise AssertionError('Something went wrong')

# Delete tasks
@app.route('/task/delete/<id>', methods=['DELETE'])
@verify
def deleteTask(user, id):
    try:
        task = Task.query.get(id)
        db.session.delete(task)
        db.session.commit()

        return task_schema.jsonify(task)
    except:
        raise AssertionError('Something went wrong')
