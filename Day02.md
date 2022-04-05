# Week 1 Day 2

## Knowledge check

<details>
<summary>What is a class?</summary>

A class is a blueprint of an object you want to make over and over again with some pre-defined attributes and methods included. This allows us to write more succinct code that meets the needs of our project.
</details>

<details>
<summary>What is namespace and what does it do for us?</summary>

A namespace defines the "book cover" of your project, with every file that is within the namespace constituting a page in your book. As long as your files are pages within your namespace you are able to access them anywhere in your project.

This is handy as it keeps us from having to write import statements all over our code!
</details>

<details>
<summary>What is the difference between a public and private variable and when would you use a private variable?</summary>

A public variable is one that is accessible anywhere in any file that is within the same namespace. You can access or modify anything about a public variable.

A private variable is one that is only accessible within the file/class it was created in. It cannot be accessed or modified from another file.

You would create a private variable when you have a value (ex: a health attribute) that you do not want to have changed easily. This adds a layer of security to your code so that people cannot manipulate your objects in ways you did not intend. 
</details>

## Classes

### Creating a class
Make a file in your project called NameOfClass.cs

The start of your file will look something like this:
```
using System;

namespace YourNamespace
{
    public class NameOfClass
    {
        // Your code here
    }
}
```

### Fields
All classes are comprised of fields (also known as attributes) that make up the "what" of your object. These are the elements you would use to describe the thing. For example, if we were making a class of drinks, we may describe a drink by its name, color, whether it's carbonated, its calorie count, etc...

Add all your fields into your class

```
    public string name;
    public int calories;
    public bool isCarbonated;
```

Remember to include public at the start so that you can access these variables in other files (like your program.cs) unless you specifically plan to make a variable private.

#### A note on getters and setters

We briefly talked in class about creating a public and private version of a variable where the public variable "gets" the value of the private one for viewing purposes only. A getter is something that allows us read-only access to a variable, whereas a setter allows us to write over values. By default, all variables are able to be gotten and set, and by specifying a get or set we can further manipulate the accessibility of a variable. 

For example:
```
    // This value can only be accessed and modified from within 
    // the class and file it was created it
    private int calories;
    
    // This value can access the value in the private calories
    // however it cannot change the calories in any way
    // This field exists to give us read-only access to a private variable
    public int Calories { get{ return calories; } }
```

### Constructors

After establishing your fields, it's time to make the constructor. You only need one constructor, but you have the option to create other constructors based on your needs. In general, a constructor will contain an input for all fields that could vary when you create an instance of that class.

```
    public Drink(string n, bool isC, int cal)
    {
        name = n;
        isCarbonated = isC;
        calories = c;
    }
```

You do *not* need to add every field you created to the constructor, but if you planned to use default values for any fields make sure to include those in the constructor.

This is where having multiple constructors could come in handy.

```
    public Drink(string n, int cal)
    {
        name = n;
        isCarbonated = true;
        calories = c;
    }
```

### Methods

Methods allow us to create the functionality of a class. These are the things an instance can "do" when it is created. Examples include the ability to add sugar to a drink and increase the calorie count, to make a character lose health, or reset a game to its default state.

Methods are written after your fields and constructors.

```
    public void addSugar(int amount)
    {
        this.calories+=amount;
    }
    
    public bool checkIfFlat()
    {
        return this.isCarbonated;
    }
```

Set these methods to public if you plan to call them in another file. Some methods exist only to be used within the class though so keep that in mind when making your methods. 

### Creating an Instance

In your program.cs (or wherever you're making your instance) you can now call on your class like so:

```
    // Creates a new drink instance of coffee
    Drink d1 = new Drink("Coffee", false, 180);
    
    // Prints out the name of the drink
    Console.WriteLine(d1.name);
    
    // This would throw an error because calories is inaccessible due to being private
    Console.WriteLine(d1.calories);
    
    // But this WOULD work because it is a public variable
    Console.WriteLine(d1.Calories); // Note it is the public capital C version
    
    // This would add 100 calories to your drink
    d1.addSugar(100);
    
    Console.WriteLine(d1.Calories); // this should now be 100 calories higher
```

## Debugging

### [item] is inaccessible due to its protection level
You need to make the variable/class you're working with public

### are you missing a using directive or assembly?
Make sure you have all your imports (the using statements) at the top needed to use the thing that's causing the error. These using statements *must* be at the top of the page and nowhere else. 
