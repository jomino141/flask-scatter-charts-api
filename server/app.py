from flask import Flask
from charts import *


app = Flask(__name__)


# Define API's index route.
@app.route('/')
def index():
	return 'API for generating scatter ApexCharts.'


# Creates a JSON for a 2D scatter chart containing data points.
@app.route('/2d/<parameter1>/<parameter2>')
def create_2d_chart(parameter1, parameter2):
    return create_2d_scatter(int(parameter1), int(parameter2))


if __name__ == '__main__':
    app.run(debug=True)