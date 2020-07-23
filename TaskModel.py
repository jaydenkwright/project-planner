from datetime import datetime
from config import db, marsh

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer)
    phaseId = db.Column(db.Integer)
    taskText = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Boolean())
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, userId, phaseId, taskText, completed):
        self.userId = userId
        self.projectId = projectId
        self.phaseNumber = phaseNumber
        self.taskText = taskText 
        self.completed = completed

class TaskSchema(marsh.Schema):
    class Meta:
        fields = ('id',
        'userId',
        'phaseId',
        'taskText',
        'completed',
        'date')

task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)
