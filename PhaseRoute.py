from flask import Flask, request, jsonify
from PhaseModel import Phase, phase_schema, phases_schema 
from config import db, app

# Create new phase
@app.route('/phase', methods=['POST'])
def addPhase():
    userId = request.json['userId']
    projectId = request.json['projectId']
    phaseNumber = request.json['phaseNumber']
    name = request.json['name']
    description = request.json['description']
    category = request.json['category']
    dueDate = request.json['dueDate']
    completed = request.json['completed']

    phase = Phase(userId, projectId, phaseNumber, name, description, category, dueDate, completed)
    db.session.add(phase)
    db.session.commit()

    return phase_schema.jsonify(phase)

# Get specific phase
@app.route('/phase/<id>', methods=['GET'])
def getPhase(id):
    phase = Phase.query.get(id)
    return phase_schema.jsonify(phase)

# Get all phases from certain user
@app.route('/phases/<userId>', methods=['GET'])
def getUserPhases(userId):
    phase = Phase.query.filter(Phase.userId == userId).all()
    return phases_schema.jsonify(phase)

@app.route('/phase/<id>', methods=['PUT'])
def updatePhase(id):
    phase = Phase.query.get(id)
    userId = request.json['userId']
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