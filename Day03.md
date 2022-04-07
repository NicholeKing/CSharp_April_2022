# Week 1 Day 3

## Knowledge Check

<details>
<summary>What is inheritance in programming?</summary>

Inheritance is when a class is used as a base to create children classes that are identical in basic structure to the parent but with some of their own differences to differentiate it from the parent class.

We use inheritance when we have a series of attributes that many classes have in common in order to reduce how much code we have to write. 
</details>

## Inheritance

In order for us to use inheritance, we first need a base class from where we are going to inherit. 

```
    public class Character 
    {
        public string name;
        public int level;
        public int health;
        public int strength;
        public int intelligence;
        
        public Character(string n, int l, int h, int s, int i)
        {
            name = n;
            level = l;
            health = h;
            strength = s;
            intelligence = i;
        }
    }
```

Once that is established, setting up inheritance is as easy as: 
```
    public class Warrior : Character
```

Once that is done, we can start using the base class to build out the constructor for our child class.

```
    public Warrior(string n) : base(n, 6, 80, 8, 4) {}
```

Base refers to the base constructor from our parent class. We need a constructor in our parent class for us to create a "base" on which to build our new characters. 

Now in Program.cs, making a new child instance is as easy as:

```
    Warrior w1 = new Warrior("Thor");
```

Notice we don't need to specify anything but the name and all other fields are pre-filled for us! If we want to create something more diverse where we can add in our own data to the fields you will need to build out a constructor in the parent class that can fit what you need.

## Other Cool Features

### Interfaces
Interfaces allow us to add features to a subset of classes that apply to some, but not all, classes. For example, if we had classes where certain characters could cast magic, we could create an interface called ICastMagic to define the basic things all magic wielders need.

Start by making a file called ICastMagic.cs. Inside the file add:

```
    interface ICastMagic
    {
        int mana {get;set;}
        void castSpell();
    }
```

With these two features established, if we had, say, a sorceror class, we could add the interface to the class similarly to how we established our parent inheritance.

```
    public class Sorceror : Character, ICastMagic
```

Doing this will cause errors to show up on your screen telling you to implement the mana and castSpell features in your character. It will look something like this:

```
    public class Sorceror : Character, ICastMagic
    {
        public int mana {get;set;}
        public Sorceror(string n) : base(n, 7, 65, 4, 10) {}
        public void castSpell()
        {
            // Your castSpell logic here
        }
    }
```

Now any class that uses magic has a standard that must be followed!

### Abstract
Sometimes after making a parent class we will find that we don't need to use that parent class in our program. It exists only to act as a base for the rest of our classes. In this case, we can ensure that no one will create an instance of this class by setting it to abstract.

An abstract class is one in which it cannot be explicitly created. It can only be utilized using properties like inheritance. 

To make a class abstract, it is as easy as going to the file of the class you want to make abstract and adding this:

```
    public abstract class Character
```
Now if you have any instances in your Program.cs where you created a Characer instance, you will get an error telling you that you cannot make an instance of an abstract class. But this is good because it makes our code better!

### Method overriding
We can write methods into our base Character class that all child classes can use. However, we may find this limiting since not all classes behave the same way for the same action. When this happens, we will want to override the original method so we can get some nicer and more unique functions.

In your character class, you will want to add the virtual key word to the method you want to override
```
    public virtual void DealDamage(Character target)
```

And finally in your child class, you will add the override key word to the method you are overwriting

```
    public override void DealDamage(Character target)
```

And that's it! Now when you run DealDamage from your class you will run the method from within that class! 