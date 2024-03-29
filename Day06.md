# Week 2 Day 1

## Session

Session is a way in which we can store data to our browser in the form of a cookie. Session is often used to store little pieces of information that assist with the functionality of our website such as tracking who the currently logged in user is. 

The important thing to remember about session in C# is that it comes in two states: a getter state and a setter state. One is used for viewing the data in session and the other is for updating session. 

### Getting started with session

The first thing we have to do when using session is get it set up in our project. Go to your Startup.cs file and in the configure services section add:

```
    services.AddSession();
```

Then in the configure section add:

```
    app.UseSession();
```

Finally, over in your controller, add this using at the top of your file:

```
    using Microsoft.AspNetCore.Http;
```

With that, session is now ready for you to use!

### Creating a session

Creating a session in your controller requires knowing one thing in advance: what data type are you storing? You have two options: either you store a string or you store an integer.

#### Storing a string

```
    HttpContext.Session.SetString("KeyName", "Value");
```

"KeyName" here should be replaced with a descriptive name for what you're storing and "value" will be replaced with your value.

Then to access the string in session you would write:

```
    HttpContext.Session.GetString("KeyName);
```

You can store this in a ViewBag to pass to the front or in a variable to pass as a ViewModel or use it however you see fit. 

Setting up an integer session works the exact same way:

```
    HttpContext.Session.SetInt32("KeyName", 21);
```

A special note about when you go to get the integer though, it's data types isn't what you would expect:

```
    int? myValue = HttpContext.Session.GetInt32("KeyName");
```

This is because with session there is a possibility that the value in session could come back as null. C# doesn't like this, so it instead made a data type explicitly for dealing with the possibility of the value being null: int?

#### Special note: If you try to do mathematical operations like adding 1 to your session, you will need to cast the session back into being an integer before it will work by putting (int) in front of your session call.

From here you can begin storing and grabbing session as needed. If you want to clear session run this command in a route:

```
    HttpContext.Session.Clear();
```

If you want to check that a session exists, you can do so like this:

```
    if(HttpContext.Session.GetString("MyKey") == null)
    {
        // Do an action if nothing is in session yet
    } else {
        // Do some other action because we already have session
    }
```

Those are the basics of using session. From here practice calling and setting session until using it feels natural. 