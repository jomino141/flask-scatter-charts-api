import json


# Read array from local example JSON file.
with open('example.json', 'r') as file:
    example_data = json.load(file)


# Gets an array of all values of a single parameter.
def get_values(parameter):
    values = []

    for i in example_data:
	values.append(i[0][parameter])

	return values


# Creates an array of data points with all values of two parameters.
def create_data_points(parameter1, parameter2):
    values1 = get_values(parameter1)
    values2 = get_values(parameter2)

    data_points = []

    for i in range(len(values1)):
	data_point = [values1[i], values2[i]]

	data_points.append(data_point)

    return data_points


# Creates a JSON string for a 2D scatter chart containing data points.
def create_2d_scatter(parameter1, parameter2):
    data_points = create_data_points(parameter1, parameter2)

    json_string = {
	'series': [
	    {'name': 'SAMPLE', 
	    'data': data_points},
	],
	'options': {
	    'chart': {
		'height': 350, 
		'type': 'scatter', 
		'zoom': {
		    'enabled': True, 
		    'type': 'xy'
		}
	    },
	    'xaxis': {'tickAmount': 10,},
	    'yaxis': {'tickAmount': 7}
	}
    }

    return json_string
