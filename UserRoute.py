from flask import Flask, request, jsonify
from UserModel import User, user_schema
from config import db, app
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

@app.route('/register', methods=['POST'])
def register():
    userId = str(uuid.uuid4())
    firstName = request.json['firstName']
    lastName = request.json['lastName']
    email = request.json['email']
    password = request.json['password']
    hashed_password = generate_password_hash(password, method='sha256')
    user = User(userId, firstName, lastName, email, hashed_password)
    db.session.add(user)
    db.session.commit()

    return {
        'message': 'User created'
    }

