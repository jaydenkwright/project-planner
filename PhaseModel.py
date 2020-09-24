from datetime import datetime
from sqlalchemy.orm import validates 
from config import db, marsh

class Phase(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.String())
    projectId = db.Column(db.Integer)
    phaseNumber = db.Column(db.Integer)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200))
    category = db.Column(db.String(100), nullable=False)
    dueDate = db.Column(db.DateTime)
    completed = db.Column(db.Boolean())
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, userId, projectId, phaseNumber, name, description, category, dueDate, completed):
        self.userId = userId
        self.projectId = projectId
        self.phaseNumber = phaseNumber
        self.name = name
        self.description = description
        self.category = category
        self.dueDate = dueDate
        self.completed = completed

    @validates('name')
    def nameValidation(self, key, name):
        if not name:
            return {"msg": "No name was provided"}, 401
        if len(name) > 100:
            return {"msg": "Max character limit exceeded"}, 401
        return name

    @validates('description')
    def descriptionValidation(self, key, description):
        if len(description) > 200:
            return {"msg": "Max character limit exceeded"}, 401
        return description
       
db.create_all()
print('created') 

class PhaseSchema(marsh.Schema):
    class Meta:
        fields = ('id',
        'userId',
        'projectId',
        'phaseNumber',
        'name',
        'description',
        'category',
        'dueDate',
        'completed',
        'date')

phase_schema = PhaseSchema()
phases_schema = PhaseSchema(many=True)