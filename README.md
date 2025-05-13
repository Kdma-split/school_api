# school_api
A minimalistic API for adding schools with a valid address, name and location (latitude and longitude) to the MySQL database and fetch the schools based on the distance passed as a query parameter


### Before using the server run the API:

# Make the ".env" file:   [keep the env file at the root level]
format to be followed:


DB_HOSTNAME = <hostname eg. localhost>
DB_USERNAME = <username>
DB_PASSWORD = <password>
DB_NAME = <name of the database>

PORT = 3900

# First install all the list of packages:
npm init -y

npm install

### Run the server:
npm run start
