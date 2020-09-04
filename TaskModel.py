from datetime import datetime
from sqlalchemy.orm import validates 
from config import db, marsh

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.String())
    phaseId = db.Column(db.Integer)
    taskText = db.Column(db.String(200), nullable=False)
    stage = db.Column(db.String())
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, userId, phaseId, taskText, stage):
        self.userId = userId
        self.phaseId = phaseId
        self.taskText = taskText 
        self.stage = stage


    @validates('taskText')
    def textValidation(self, key, text):
        if not text:
            return {"msg": "No text was provided"}, 401
        if len(text) > 200:
            return {"msg": "Max character limit exceeded"}, 401 
        return text

class TaskSchema(marsh.Schema):
    class Meta:
        fields = ('id',
        'userId',
        'phaseId',
        'taskText',
        'stage',
        'date')

task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)
