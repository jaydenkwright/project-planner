from flask import Flask, request
import jwt
from UserModel import User, user_schema
from functools import wraps 
from config import app


def verify(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.cookies.get('token')
        if not token:
            raise AssertionError('User is not logged in')
    
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter(User.userId == data['userId']).first()
        except:
            raise AssertionError('User token is invalid')

        return f(current_user, *args, **kwargs)
    return decorated