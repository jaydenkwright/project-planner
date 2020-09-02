from flask import Flask, request, jsonify
from PhaseModel import Phase, phase_schema, phases_schema
from verify import verify
from config import db, app

# Create new phase
@app.route('/phase/add', methods=['POST'])
@verify
def addPhase(user):
    try:
        userId = user.userId
        projectId = request.json['projectId']
        phaseNumber = request.json['phaseNumber']
        name = request.json['name']
        description = request.json['description']
        category = request.json['category']
        dueDate = request.json['dueDate']
        completed = False

        phase = Phase(userId, projectId, phaseNumber, name, description, category, dueDate, completed)
        db.session.add(phase)
        db.session.commit()

        return phase_schema.jsonify(phase)
    except:
        raise AssertionError('Something went wrong')

# Get specific phase
@app.route('/phase/<id>', methods=['GET'])
def getPhase(id):
    try:
        phase = Phase.query.get(id)
        return phase_schema.jsonify(phase)
    except:
        raise AssertionError('Something went wrong')

# Get all phases from certain project
@app.route('/phases/<projectId>', methods=['GET'])
@verify
def getUserPhases(user, projectId):
    try:
        phase = Phase.query.filter(Phase.projectId == projectId).all()
        return phases_schema.jsonify(phase)
    except:
        raise AssertionError('Something went wrong')

@app.route('/phase/update/<id>', methods=['PUT'])
@verify
def updatePhase(user, id):
    try:
        phase = Phase.query.get(id)
        userId = user.userId
        projectId = request.json['projectId']
        phaseNumber = request.json['phaseNumber']
        name = request.json['name']
        description = request.json['description']
        category = request.json['category']
        dueDate = request.json['dueDate']
        completed = request.json['completed']

        phase.userId = userId
        phase.projectId = projectId
        phase.phaseNumber = phaseNumber
        phase.name = name
        phase.description = description
        phase.category = category
        phase.dueDate = dueDate
        phase.completed = completed

        db.session.commit()
        return phase_schema.jsonify(phase)
    except:
        raise AssertionError('Something went wrong')

@app.route('/phase/delete/<id>', methods=['DELETE'])
@verify
def deletePhase(user, id):
    try:
        phase = Phase.query.get(id)
        db.session.delete(phase)
        db.session.commit()

        return phase_schema.jsonify(phase)
    except:
        raise AssertionError('Something went wrong')