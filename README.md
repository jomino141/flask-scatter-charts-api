# Scatter ApexCharts API
An API to generate JSON's for Scatter ApexCharts.

## Usage
This API requires an array including multiple elements that follow this structure:
```
[[value1, value2, value3, value4, value5],[value6, value7, value8]]
```
The purpose of the API is to generate a scatter chart based on 2 or 3 out of the first 5 values.

The charts are intended to work within a React App. Although not guaranteed, they should also work with other frameworks.

## ApexCharts
For further information on ApexCharts check out their website:
```
https://apexcharts.com/
```

## Set up the project on your local machine
### 1. Clone the project
Clone the project to your machine. Make sure Python3 and pip are already installed on your system.
### 2. Create a virtual environment
Install the virtual environment tool with the following command:
```
pip3 install virtualenv
```
Navigate into the project folder and create a virtual environment like the following:
```
virtualenv <name>
```
Activate the virtual environment with the following command:
```
. <name>/bin/activate
```
When you are done working, deactivate it like the following:
```
deactivate
```
### 3. Install requirements
Install all requirements with the following command:
```
pip3 install -r requirements.txt
```
### 4. Run the app
Run the app like the following:
```
python3 app.py
```
