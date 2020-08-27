<img src="https://i.imgur.com/sX12DTc.png">

# Guide to Updating & Deleting Data

---

## Getting Started

1. Fork and clone this repo to your computer ```git clone git@github.com:cogilvy/Delete-Update-Guide.git```
2. Install necessary node modules with ```npm install```
3. Have this helpful RESTful routing guide handy [Link Here](https://gist.github.com/jim-clark/17908763db7bd3c403e6)

---

## User Stories

### As a User, I want to be able to delete a destination from a flight.

##### Step 1 - Identify the "Proper" Route

In this case, we want to delete an embedded subdocument (Destination) from a data model (Flight), so the proper route for deleting a destination would be:
``` "/destinations/:id" ```

##### Step 2 - Create the UI

Since all we are doing is deleting a destination, we don't need to create a new view to handle our request. Instead, we will just add a delete button next to each destination that is displayed. Remember that a delete button will still need to be a form to handle the delete request.

Add this to our "flights/show" view:

```html
<td>
  <form action="/destinations/<%= dest._id %>?_method=DELETE" method="POST">
    <button class="red-button" type="submit">X</button>
  </form>
</td>
```

##### Step 3 - Define the Route

Now that we have added a delete button next to each destination of a flight, we need to actually define the route so that when the button is clicked and the form is submitted, the request can be routed to the correct controller action.

Add this to our "routes/destinations":

```js
router.delete('/destinations/:id', destinationsCtrl.delete);
```

##### Step 4 & 5 - Code the Controller Action & Respond to the Client's HTTP Request (Render/Redirect)

Now that our route is defined, we need to create the controller function that will be responsible for actually deleting the destination.

Add this to our "controllers/destinations":

```js
function deleteDest(req, res) {
    Flight.findOne({'destinations._id': req.params.id}, function(err, flight) {
        const destSubdoc = flight.destinations.id(req.params.id);
        destSubdoc.remove();
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        })
    })
}
```

Don't forget to add the deleteDest function to your module.exports! Your module.exports should look like this:

```js
module.exports = {
    create,
    delete: deleteDest
};
```

**We are done! Test out the functionality of the user story by adding/deleting destinations from any of the flights!**

---

### As a User, I want to be able to delete a ticket from a flight.

##### Step 1 - Identify the "Proper" Route

In this case, we want to delete an instance of a data model (Ticket), so the proper route for deleting a ticket would be:
``` "/tickets/:id" ```

##### Step 2 - Create the UI

Just like when deleting a destination, when deleting a ticket we don't need to create a new view to handle our request. Instead, we will just add a delete button next to each ticket that is displayed. Remember that a delete button will still need to be a form to handle the delete request.

Add this to our "flights/show" view:

```html
<td>
  <form action="/tickets/<%=ticket._id%>?_method=DELETE" method="POST">
    <button class ="small-button red-button" type="submit">X</button>
  </form>
</td>
```

##### Step 3 - Define the Route

Now that we have added a delete button next to each ticket of a flight, we need to actually define the route so that when the button is clicked and the form is submitted, the request can be routed to the correct controller action.

Add this to our "routes/tickets":

```js
router.delete('/tickets/:id', ticketsCtrl.delete);
```

##### Step 4 & 5 - Code the Controller Action & Respond to the Client's HTTP Request (Render/Redirect)

Now that our route is defined, we need to create the controller function that will be responsible for actually deleting the ticket.

Add this to our "controllers/tickets":

```js
function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/flights')
    })
}
```

Don't forget to add the deleteTicket function to your module.exports! Your module.exports should look like this:

```js
module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}
```

**We are done! Test out the functionality of the user story by adding/deleting tickets from any of the flights!**

---

### As a User, I want to be able to edit the details of a flight.

##### Step 1 - Identify the "Proper" Route

In this case, we are going to need to identify two routes to complete the task of editing a flight, one for a GET request to bring up the edit form, and another for a PUT request to update the flight when the form is submitted.

The GET route will be:
``` "/flights/:id/edit" ```

The PUT route will be:
``` "/flights/:id" ```

##### Step 2 - Create the UI

We will need to create two things to handle edit a flight: an edit link and a form to edit the flight.


We will add the edit link right next to the details link on our "flights/index" view.

First, find the line of code that looks like this:
```html
<td><a href="/flights/<%=flight._id%>">Details</a></td>
 ```
 
 And replace it with this:
```html
<td><a href="/flights/<%=flight._id%>">Details</a>&nbsp;|&nbsp;<a href="/flights/<%=flight._id%>/edit">Edit</a></td>
```

Next, we need to create a new file called "edit.ejs" inside of our "flights" views folder.

Copy this code into your edit.ejs file:

```html
<%- include('../partials/header') %>
<form action="/flights" method="POST">
    <label for="airline">Edit Airline:
        <select name="airline">
            <option <%= flight.airline === "American" ? "selected":"" %> value="American">American</option>
            <option <%= flight.airline === "Southwest" ? "selected":"" %> value="Southwest">Southwest</option>
            <option <%= flight.airline === "United" ? "selected":"" %> value="United">United</option>
        </select>
    </label>
    <label for="airport">Edit Airport
        <select name="airport">
            <option <%= flight.airport === "AUS" ? "selected":"" %>>AUS</option>
            <option <%= flight.airport === "DAL" ? "selected":"" %>>DAL</option>
            <option <%= flight.airport === "LAX" ? "selected":"" %>>LAX</option>
            <option <%= flight.airport === "SAN" ? "selected":"" %>>SAN</option>
            <option <%= flight.airport === "SEA" ? "selected":"" %>>SEA</option>
        </select>
    </label>
    <label for="flightNo">Edit Flight Number:
        <input type="number" name="flightNo" value="<%= flight.flightNo %>">
    </label>
    <label for="date">Edit Date:
        <input type="datetime-local" name="departs" value="<%= flightDeparts %>">
    </label>
    <button class="submit-button" type="submit">Accept Changes</button>
</form>
<%- include('../partials/footer') %>
```

##### Step 3 - Define the Route

Now that we have added an edit link next to each flight, we need to actually define the routes. Remember, we need two routes, a GET and a PUT.

Add this to our "routes/flights":

```js
router.get('/:id/edit', flightCtrl.edit);
router.put('/:id', flightCtrl.update);
```

##### Step 4 & 5 - Code the Controller Action & Respond to the Client's HTTP Request (Render/Redirect)

Now that our route is defined, we need to create the controller function that will be responsible for bringing up the edit form, and then updating the flight with the new information once the form is submitted.

Add this to our "controllers/flights":

```js
function edit(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (err) {
            res.redirect(`/flights/${req.params.id}`)
        }
        res.render('flights/edit', { flight, title: 'Edit Flight', flightDeparts: flight.departs.toISOString().slice(0, 16)})
    })
}

function update(req, res) {
    Flight.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, flight) {
        if (err) {
            res.render('flights/edit', { flight, title: 'Edit Flight', flightDeparts: flight.departs.toISOString().slice(0, 16) })
        }
        res.redirect(`flights`)
    })
}
```

Don't forget to add the edit & update functions to your module.exports! Your module.exports should look like this:

```js
module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight,
    edit,
    update
}
```


**We are all done! Now our application is able to delete destinations, delete tickets, and edit flights**

