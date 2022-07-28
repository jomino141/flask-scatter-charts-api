# Flask ApexCharts API
An API built with Flask to generate JSON's for 2D and 3D Scatter ApexCharts. 

## Usage
This API requires an array including multiple elements that follow this structure:
```
[[value1, value2, value3, value4, value5],[value6, value7, value8]]
```
The purpose of the API is to generate a scatter chart based on 2 or 3 out of the first 5 values.

An example for the usage within a React frontend is provided in the client directory. 

The charts are intended to work within a React App. Although not guaranteed, they should also work with other frameworks.

## ApexCharts
For further information on ApexCharts check out their website:
```
https://apexcharts.com/
```

## Set up the project on your local machine
### 1. Clone the project
Clone the project to your machine. Make sure Python3 and pip are already installed on your system.
### 2. Install requirements
Navigate into the server directory and install all requirements with the following command:
```
pip3 install -r requirements.txt
```
### 3. Run the API server
Run the API server like the following:
```
python3 app.py
```
### 4. Set up the frontend
Navigate into the client directory and install all necessary packages with the following command:
```
npm install
```
### 5. Run the frontend
Run the frontend like the following:
```
npm start
```
