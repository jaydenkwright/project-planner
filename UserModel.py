from datetime import datetime
from sqlalchemy.orm import validates 
from config import db, marsh

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.String(200), unique=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(200))

    def __init__(self, userId, firstName, lastName, email, password):
        self.userId = userId
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.password = password

    @validates('firstName')
    def firstNameValidation(self, key, firstName):
        if not firstName:
            raise AssertionError('First name was not provided')
        if len(firstName) > 50:
            raise AssertionError('Max character limit exceeded')
        return firstName

    @validates('lastName')
    def lastNameValidation(self, key, lastName):
        if not lastName:
            raise AssertionError('Last name was not provided')
        if len(lastName) > 50:
            raise AssertionError('Max character limit exceeded')
        return lastName

    @validates('email')
    def emailValidation(self, key, email):
        if not email:
            raise AssertionError('Email was not provided')
        if len(email) > 100:
            raise AssertionError('Max character limit exceeded') 

    @validates('password')
    def passwordValidation(self, key, password):
        if not password:
            raise AssertionError('Password was not provided')
        return password

class UserSchema(marsh.Schema):
    class Meta:
        fields = ('id',
        'userId',
        'firstName',
        'lastName',
        'email',
        'password')

user_schema = UserSchema()