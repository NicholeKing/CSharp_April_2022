# Week 1 Day 4

## Knowledge Check

<details>
<summary>Describe the request-response cycle</summary>

When a user goes on the internet they make a request for a web page. That request is sent off to a server that will run logic on what needs to be done for that page (ex: if any data needs to be pulled from the database or any security checks need to be done) and the server packages the information it needs into a bundle of html, css, and javascript which it sends as a response back to the user. The user receives the response as the web page they were looking for. 
</details>

<details>
<summary>What does MVC stand for and what does each piece mean?</summary>

M - Models - these are the class templates from which we will create objects that can go into our database or streamline our data flow. An example of a model in a website would be a User model comprised of fields like Name, Email, and Password.

V - Views - These are the html files we will literally be viewing on our webpages. Another name for this section would be our frontend.

C - Controllers - These "control" the logic of our website, handling things like routing logic, post requests, and database querying. Another name for this section would be our backend.
</details>

## Building our first website

Building a website in C# with ASP.Net Core is as easy as going into your terminal and typing:

```
    dotnet new web --no-https -o ProjectName
```

And then cd-ing into the project and typing

```
    dotnet run
```

Now go to localhost 5000 and see your very first website!

Of course if we want something a little more robust we have a bit of work to do.

### Implementing MVC into our project
A basic web application will not have MVC as a feature by default, so we need to bring it in ourselves. **Note: We are only doing this method for one day! All following days we are building a full MVC project and can skip these steps!**

#### Step 1: Bringing MVC in

Go to your Startup.cs file and in the section for ConfigureServices add this line:
```
    services.AddMvc(options => options.EnableEndpointRouting = false);
```

Then below in Configure, add this line above app.UseRouting():

```
    app.UseMvc();
```

MVC is now enabled in your project!

#### Step 2: Making the Controller

Now that we have MVC in our project, we need to bring in the C...the Controller. Start by making a folder in your project called `Controllers` (it **must** be called Controllers) and inside the Controllers folder make a file named `HomeController.cs`. 

To make your first page, your Controller will look something like this:

```
    using System;
    // We need to import MVC to use its features
    using Microsoft.AspNetCore.Mvc;

    // This tag tells our project this is a controller
    namespace ProjectName.Controllers
    {
        // Remember inheritance and what it does for us?
        public class HomeController : Controller
        {
            // What type of route are we working with?
            [HttpGet]
            // We tell it what the name of the route is
            // If I leave route with empty ""s then I am referring to the front page
            [Route("")]
            public string Index()
            {
                return "Hello from the controller!";
            }
        }
    }
```

Save and `dotnet run` your project. Go to localhost 5000 and see on your front page you now have "Hello from the controller" on the screen. Congrats! You made your first web page!

#### Step 3: Views

To add more intrigue to our websites, we're going to want to start rendering some Views. This means bringing html (or, in our case, cshtml files) into our project.

Start by making a new folder and naming it `Views` (again, it **must** be named this!)

In the Views folder, make another folder called `Home`, we call it Home because that is the name we gave to our Controller earlier. 

Now in the Home folder, make a file called `Index.cshtml`.

Add whatever html you would like to your web page. It's just html which you should feel familiar with at this point. 

Back in your HomeController file, it's time to tell our page to render a View instead of just a string. Update your first route like so:

```
    // Notice the change from string to ViewResult
    public ViewResult Index()
    {
        // Index in this case refers to the name of the cshtml file you want to render
        return View("Index");
    }
```

Run your project again (use `dotnet watch run` to restart the server every time you save if this is already getting tedious) and see your web page in action! It's as easy as that to start getting a website to appear! 

From here, you can start building out more!

## Different routes and return types

### Redirect

Sometimes we want to redirect to another page rather than view the page. In this case, we need a different return statement:

```
    // We can shorthand the get and the route into one line
    [HttpGet("redirect")]
    public RedirectToActionResult Redirect()
    {
        return RedirectToAction("Index"); // This would send us back to the Index action
    }
```

### IActionResult

We've seen ViewResult and RedirectToActionResult now, and these are perfectly fine to use, however if we want something a little more generic and flexible, we can use IActionResult as our return type to let us return anything we want.

```
    [HttpGet("Example")]
    public IActionResult Example()
    {
        return View("Example");
    }
```

There are other routes and return types beyond these, but are some basic ones we can expect to use a lot.

## Handling forms
Handling forms isn't very different from how we use them in other languages. For starters, we need a get route and a cshtml file with a form in it. Your controller file will look something like this:

```
    [HttpGet("form")]
    public IActionResult Form()
    {
        return View("Form");
    }
```

And subsequently you will need a Form.cshtml with some kind of form inside.

```
    <form action="postForm" method="post">
        <div class="form-group">
            <label>Name</label>
            <input type="text" name="Name" class="form-control">
        </div>
        <div class="form-group">
            <label>Favorite color</label>
            <input type="text" name="FavColor" class="form-control">
        </div>
        <div class="form-group">
            <label>Favorite Number</label>
            <input type="number" name="FavNumber" class="form-control">
        </div>
        <div class="form-group">
            <input type="submit" value="Submit" class="btn btn-primary">
        </div>
    </form>
```

If you check this page now and click submit, you will be taken to an error page telling you the route localhost:5000/postForm could not be found. Logically, this means we have to make it!

In our controller, let's add a route for handling our post request:

```
    [HttpPost("postForm")]
    public IActionResult postForm()
    {
        return RedirectToAction("Index");
    }
```

We know it's bad to render on a post request, so let's send ourselves back to the index page after we're done. If you test it now, we safely make it to the index page, but where did our data go? We are missing one last step, which is that the data from our form needs to be passed as parameters into our post request. We'll update the controller like so:
```
    [HttpPost("postForm")]
    public IActionResult postForm(string Name, string FavColor, int FavNumber)
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Fav Color: {FavColor}");
        Console.WriteLine($"Fav Number: {FavNumber}");
        return RedirectToAction("Index");
    }
```
The names I passed in are not arbitrary. If you look back at the form, these are the names I used in my inputs. These names must match up for this to work. Now that we have the data, the Console.WriteLines will show us what we get when we actually type something into our forms and submit it. 

Congrats! You've passed form data along! Unfortunately we don't have a way to store the data for now, but we'll get to that later. For now if you really want to render the data you can pass the data into ViewBags and return a View of a Success page, but for now just focus on understanding how the data got from the form to our backend. This is going to be the most important part going forward. 