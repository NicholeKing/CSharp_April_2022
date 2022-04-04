# Week 1 Day 1

## Knowledge Check

<details>
<summary>What is a compiled language?</summary>

* A compiled language is a language which runs its code through a compiler before runtime. 
* A compiler turns all the code you wrote into machine-level code, reads that code, and checks it for errors all *before* you ever run your code!
* Code that is compiled tends to be a little slower when you first spin the project up, but after the build is completed subsequent runs of the project are much faster!
</details>

<details>
  <summary>Why is C# so awesome?</summary>
  
* It is type explicit, meaning you have to be specific about what data types you're using when you make a variable. This means we always know exactly what kind of data we're working with.
* And because C# is type explicit, it has more efficient memory usage because it only takes up the space it *knows* it needs rather than taking up the space it *thinks* it needs! This makes our project sizes smaller! 
* Working with a strongly typed language like C# ups your skills as a programmer because it makes you really think about what you're writing, why you're writing it, and what you expect back from it.
* Because as this course goes on you'll get to see all the things about C# Nichole says is so awesome and will make you say "Why can't the other languages I've learned do this thing so well?" 
</details>

<details>
<summary>Tell me about some similarities and differences you've noticed between the languages you know</summary>

* Console.WriteLine looks a lot like console.log and does the same thing
* For loops are super similar, we just need to use "int" instead of "var" for i
* Functions are much more explicit with declaratives like "public", "static", and "void", but it gives us much more context as to what's going on in a function at the start
* You know from the very beginning of a function what datatype it is going to return (ex: void, int, string)
* Returning void means to return nothing, which means no return statement is needed in our function
* String interpolation is similar between JS and C#, both use $ and {}'s
* The way to set up an array looks very different
* Arrays are set in how large they can be at the very beginning whereas in other languages you can modify an array after it is created
* Arrays use .Length instead of .length (capital L)
* C# in general uses PascalCase
* We need to use List to get functionality similar to arrays from other languages, but we are still limited in exactly what can go in to the list as far as datatypes are concerned
* You can't print an array or list outright, you need to use a foreach loop or some other method to print the values
</details>

## Installation notes

### Installing on Windows
Follow all posted directions in the platform. Ensure you have downloaded Dotnet 3.1

### Installing on Mac (NOT M1)
If your Mac does not use an M1 chip you can use the directions on the platform and install Dotnet 3.1

### Installing on Mac (With M1)
Follow this [link](https://dotnet.microsoft.com/en-us/download/dotnet/5.0) to install Dotnet 5.0 -- Dotnet 3 doesn't always work on an M1 Mac and Dotnet 5 has no differences in performance against 3.1

#### Do NOT install Dotnet 6! This version of Dotnet works VERY differently from how Dotnet 3 and 5 work and the platform directions will not match up with what Dotnet 6 needs.
To ensure you have the correct version of Dotnet, open your terminal and type `dotnet --version` to check which version you have. It should be something like dotnet 3.1.XXX or 5.0.XXX. If your version says it is Dotnet 6 contact your instructor asap to get the correct version installed.

## Debugging installation issues

### dotnet command not found
1. Completely shut down your terminal (make sure to right click and quit it from your dock if you're on a Mac to ensure it fully shuts down) - then open the terminal and try again - you need to restart your terminal after an installation to allow it to process the installation
2. Check that the path is set up correctly
3. Run through the installation steps again - sounds crazy but it works, maybe you missed a step and didn't notice or maybe it didn't take for some reason

### mysql command not found when running mysql -u root -p
Don't worry too much if this happens. Ensure you have access to mysql workbench and that your server is running and you're good to go. This is just a way to access mysql through the terminal but we won't be using it in class. 
