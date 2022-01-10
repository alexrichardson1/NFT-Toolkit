"""
Test API - tests flask functionality
"""
import os
import sys
import tempfile
import json
import pytest
# If running locally change to sys.path.insert(1, 'api')
sys.path.insert(1, 'ml/api')
from routes import create_app  # noqa # pylint:disable=import-error, wrong-import-position


@pytest.fixture(name="client_app")
def client():
    """
    Client App
    - Creates a flask application
    return:
        app - returns flask test app
    """
    db_fd, db_path = tempfile.mkstemp()
    app = create_app({'TESTING': True, 'DATABASE': db_path})

    with app.test_client() as cli:
        yield cli

    os.close(db_fd)
    os.unlink(db_path)


class TestRoutes:
    """
    Test the routing for ML API
    """

    @staticmethod
    def test_home(client_app):
        """
        Testing the flask app has been created
        """

        res = client_app.get('/')
        print("Home Page Status", res.status)
        print("Status 200?", res.status == "200 OK")

    @staticmethod
    def test_price_response(client_app):
        """
        Testing the price prediction gives a response
        """

        res = client_app.get('/api/recommendations/cyberpunks')
        print("Home Page Status", res.status)
        print("Status 200?", res.status == "200 OK")
        print("Response Content Type", res.content_type)
        assert res.status == "200 OK"


class TestPrice:
    """
    Testing price prediction skeleton
    """
    @staticmethod
    def test_price_recommendations(client_app):
        """
        Test that you get a price prediction value for an item within the range
        """
        res = client_app.get('/api/recommendations/cryptopunks')
        assert res.status == "200 OK"
        assert res.content_type == "application/json"
        data = json.loads(res.data)
        print("Response Data", data)
        assert "price" in data

    @staticmethod
    def test_similar_collections(client_app):
        """
        Test that you get a price prediction value for an item within the range
        """
        res = client_app.get('/api/recommendations/cryptopunks')
        assert res.status == "200 OK"
        assert res.content_type == "application/json"
        data = json.loads(res.data)
        print("Response Data", data)
        assert "collections" in data

    @staticmethod
    def test_hype_evaluation(client_app):
        """
        Test that you get a price prediction value for an item within the range
        """
        res = client_app.get('/api/recommendations/cryptopunks')
        assert res.status == "200 OK"
        assert res.content_type == "application/json"
        data = json.loads(res.data)
        print("Response Data", data)
        assert "hype" in data