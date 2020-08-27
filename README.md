<img src="https://i.imgur.com/sX12DTc.png">

# Guide to Updating & Deleting Data

---

## Getting Started

1. Fork and clone this repo to your computer
2. Install necessary node modules with ```npm install```
3. Have this helpful RESTful routing guide handy [Link Here] (https://gist.github.com/jim-clark/17908763db7bd3c403e6)

---

## User Stories

### 1. As a User, I want to be able to delete a destination from a flight.

##### Step 1 - Identify the "Proper" Route

In this case, we want to delete an embedded subdocument (Destination) from a data model (Flight), so the proper route for deleting a destination would be:
``` "/destinations/:id" ```

##### Step 2 - Create the UI

Since all we are doing is deleting a destination, we don't need to create a new view to handle our request. Instead, we will just add a delete button next to each destination that is displayed

##### Step 3 - Define the Route


##### Step 4 - Code the Controller Action


##### Step 5 - Respond to the Client's HTTP Request (render or redirect)






---
### 2. As a User, I want to be able to delete a ticket from a flight.

##### Step 1 - Identify the "Proper" Route


##### Step 2 - Create the UI


##### Step 3 - Define the Route


##### Step 4 - Code the Controller Action


##### Step 5 - Respond to the Client's HTTP Request (render or redirect)






---
### 3. As a User, I want to be able to edit the details of a flight.

##### Step 1 - Identify the "Proper" Route


##### Step 2 - Create the UI


##### Step 3 - Define the Route


##### Step 4 - Code the Controller Action


##### Step 5 - Respond to the Client's HTTP Request (render or redirect)
