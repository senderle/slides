---
title: Document Center
---

## Install Atom

Atom is a text editor. It's built by the people behind GitHub, which is the single most important company in software development right now, if you ask me. Atom is likely to be widely used for the next three decades, and it's free and open source. There are alternatives -- Learn Python the Hard Way recommends TextWrangler -- but I think that's an out-of-date recommendation.

* Download it here: https://atom.io/
* Unpack the zip file. 
* Drag the application (it should look like a green atom icon) into Applications.
* Open the Applications folder and double click on the Atom app icon.

Spend a few minutes getting to know what Atom can do. It's a text editor just like notepad, but it has a huge range of features that programmers need. Programming using notepad after using a full-featured text editor is maddening. 

First, hit command-shift-p. Scroll through the list of commands; don't worry about remembering anything.

Hit escape to leave. Hit command-shift-p again. Escape. Repeat several times -- develop some muscle memory. Get used to looking up keyboard shortcuts! Practice using a new one every week if you can. 

## Open Terminal

Open your Applications folder and look for the Utilities subfolder. There, you'll find an Application called Terminal. Open it. You'll see a white screen with a prompt that looks something like this: 

    you@yourcomputer $

If you type something, you should see it appear on the screen, like so:

    you@yourcomputer $ something

The first thing you should do with Terminal: make an error. Type

    fdsa 

and hit return. You'll get an error message. This is the absolute worst thing that will happen to you using any of the following commands. It has no effect. Nothing to worry about. Get used to seeing it. (The thing you should worry about is "rm" — but even that can't do enormous damage unless you try hard.) 

Now you should get used to navigating directory structure. This will be obvious in some ways and potentially alien in others. Type

    pwd 

and hit return. You'll probably see something roughly like this:

    /Users/yourusername

This is your "present working directory" (hence "pwd"). You could think of this as the command line equivalent of an open file explorer window. In a window like that, you'd see a list of files, but you have to do a bit more work here: type

    ls

and hit return. You'll see something that looks like this:

    Applications   Documents      Dropbox        Library        Music          Public 
    Desktop        Downloads      Movies         Pictures       VirtualBox VMs

This is just a list of all the files and directories<sup>`*`</sup> in the current folder. Since this is your present working directory, everything you type will assume that you are referring to files and folders listed here unless you tell it otherwise. 

<sup>`*`</sup><sub>Folders. I will not have the self-discipline to use one term or the other consistently, so just get used to assuming that "folder" and "directory" are synonyms.</sub>

So this means that if you want to "click" on one of these folders, you just have to use the name listed here, along with the

    cd

command (which stands for "change directory"). So type

    cd Desktop

and after hitting return, then type 

    pwd  # This is a comment. The command line will 
         # ignore everything after the first # symbol.
         # You don't actually have to type out these
         # comments, but I'll use them to add notes 
         # sometimes.

and you'll see that your present working directory has changed. 

Now suppose you want go back to the directory you were in. The command line gives you a shortcut: 

    cd ..  # Notice the space. "cd.." will throw an error.

That ".." stands for "the directory that contains the present working directory." So you're just saying "change directory to whatever directory contains the one I'm in." 

Now you're back in the previous directory. If you type

    ls

again, you'll see the same list as the one above. Now repeat the last four commands, with one difference — instead of typing

    cd Desktop

type

    cd Des[tab]  # The [tab] literally means the tab key

Unless you have another folder in there called something like "Desire_for_lobster" you'll find that the command line automatically fills out the "ktop" of "Desktop" for you. This is the single most important time-saver you will learn in the next six months. Use it religiously. It will save you tens of thousands of typos. 

OK. Next! You need a text file for this one. You can get one by typing or (to avoid URL typs) pasting the following line into the terminal. If it doesn't seem to work, just open notepad and save a plain text file with any old random text. (Just make sure you've saved it to your present working directory!)

    wget http://www.gutenberg.org/cache/epub/2276/pg2276.txt

Now type

    cat pg2[tab]

When you hit return, the terminal will spew thousands of lines of text — the entire contents of the file you just downloaded. The command "cat" stands for "concatenate" — which is a bit confusing because it's unclear what's being concatenated. The idea is that your terminal is a pseudo-file and the "cat" command has just concatenated your terminal and the text file. OK, if that still doesn't make sense, don't worry about it — just remember that "cat" spits out the entire contents of a file to the terminal. If the file isn't made of text, it will look like crazy noise, and terminal might get confused… so don't do that right now.

So sometimes you probably don't want to see an entire file — you'd rather page through it. For that, use

    more pg2[tab]

This allows you to look at just the beginning of the file and then page through it with spacebar. Old versions of more didn't allow you to go back though — once you paged forward, there was no going back. So they wrote a new version and called it "less":

    less pg2[tab]

While writing this, I discovered that "more" is "less" on Macs now. But project yourself back thirty years, during the age of more. Note the double-pun — yes, "less is more," but ALSO, if paging backwards is the opposite of paging forwards, and if "more" allows you to page forwards, then the thing that allows you to page backwards must be "less." 

I go into these details mostly for mnemonic reasons, but also because I think this stuff is amusing. 

One last thing: options. If you want to change the way a program behaves, often there are options that will allow you to do so. For example, if you want to see a lot of information about the files in your present working directory, you can ask for a —long listing:

    ls —long

That can be shortened to 

    ls -l

You only need to know one more command for now: type

    python

##  Get to know the Python REPL.

"REPL" stands for "read evaluate print loop." You can pronounce it "repple." It takes a line of syntactically correct python, evaluates it, and prints whatever the result is. So for example, if you want to find out what 

    4 + 4

is, you just type that into the prompt and you'll get the answer

    8

The whole exchange (starting after you typed "python") will look like this:

    Python 2.7.11 (default, Jan 22 2016, 16:30:50) 
    [GCC 4.2.1 Compatible Apple LLVM 6.0 (clang-600.0.57)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>> 4 + 4
    8

You can think of this as an input-output stream. You pass your input (syntactically valid Python) in, and it returns a representation of the output that would result. From now on, when I'm talking about the REPL, I'll just show you that "`>>>`" thing. You can assume I mean "type what comes after the `>>>` and expect the result to look like what follows." 

If you want to _save_ the output instead of printing it, you can give it a name, using "=":

    >>> eight = 4 + 4
    >>> eight
    8

You can do basic math.

    >>> 4 - 4
    0
    >>> 4 / 4
    1
    >>> 4 * 4
    16
    >>> 4 ** 4
    256

And of course you can always save the results to a variable name:

    >>> size_of_a_byte = 4 ** 4
    >>> size_of_a_byte
    256

In addition to manipulating numbers, you can manipulate strings:

    >>> 'you can put a string in single quotes'
    'you can put a string in single quotes'
    >>> "or you can use double quotes"
    'or you can use double quotes'
    >>> '"This allows nesting!"'
    '"This allows nesting!"'
    >>> 'just be consistent"
      File "<stdin>", line 1
        'just be consistent"
                           ^
    SyntaxError: EOL while scanning string literal

You can concatenate strings by "adding" them:

    >>> 'one' + 'one'
    'oneone'

That's useful. You can also multiply them:

    >>> 'one' * 10
    'oneoneoneoneoneoneoneoneoneone'

That's not usually so useful but it's worth having in your back pocket.

There's another set of things you can do with strings that involve "methods" -- we won't get into the details of what a "method" is just yet, but remember the name. 

    >>> 'these are some words separated by spaces'.split()
    ['these', 'are', 'some', 'words', 'separated', 'by', 'spaces']

The "split" method takes a string, splits it into chunks wherever it finds a blank space, and returns the chunks as part of a _list_. You can use it on a string saved to a variable in just the same way:

    >>> saved_string = 'a variable name works like a label attached to an object'
    >>> saved_string.split()
    ['a', 'variable', 'name', 'works', 'like', 'a', 'label', 'attached', 'to', 'an', 'object']

A list is just that -- a list. It can be a list of anything.

    >>> ['some', 'words', 'and', 5, 'too', ['and', 'an', 'inner', 'list']]
    ['some', 'words', 'and', 5, 'too', ['and', 'an', 'inner', 'list']]

Strings have lots of other methods. Lists have methods too:

    >>> saved_list_of_words = saved_string.split()
    >>> saved_list_of_words
    ['a', 'variable', 'name', 'works', 'like', 'a', 'label', 'attached', 'to', 'an', 'object']
    >>> saved_list_of_words.count('a')
    2

Here we've saved a list of words returned by "split" and asked Python to "count" the number of times the string 'a' appears in the list.

##  First Python Program

You now know almost enough to do something interesting. Let's make a program. For this, you want to exit the REPL by typing `exit()` (or hitting Control-d). Leave the terminal open because you'll want to switch back to it in a bit. 

Now open Atom. The first version of the program is going to be really stupid. It's traditional to begin with a "Hello World" program in these introductions, and we are nothing if not traditional. In Atom, type a line of code: 

    print('Hello World')

Now save it to your present working directory. Call it something like "hello.py" -- the name doesn't matter, but the ".py" at the end does. It's what Atom will use to guess that you're writing a Python program, at which point it will add lots of pretty colors that help you see what you're doing. 

Now go to the terminal and type

    python hello.py

You should see

    Hello World

And there you are -- you've written a program. 

##  Getting a command line argument

This program is boring. We want it to do something in response to some input. At this point, most introductions go into a lot of detail about how to ask for input on the command line. But in the real world, almost nobody ever writes a command line program that actually _asks_ for input. Instead, they write command line programs that accept _arguments_. An argument is just a thing that comes after the command that modifies it in some way or another. When you used `cat` above, you passed it an argument: the name of the text file you wanted to see. 

In Python, those arguments are avialable, but to get at them, we have to import a module. Don't worry too much about what that means for now -- just remember "module." It is pretty much what it sounds like -- it's a reusable program chunk that you can link up to other program chunks to build more complex programs. 

The module we need for this is the `sys` (short for "system") module. This module provides a lot of ways to dig into the guts of Python, but all we need for this is one part of the module, called `argv` (short for "argument vector").

Go back to Atom and insert a new line before the existing print line:

    import sys

This just brings the module in. The module is an object just like any other object now. You can refer to it by its name, `sys`. And like all objects, it has attributes and methods (i.e. those things that that are "attached" to objects with periods, as in `'this is a string'.split()`). `argv` is an attribute of the `sys` module, where an attribute is similar to a method, except it doesn't do anything -- it's just another object. (To be precise, in Python, methods are attributes, but not all attributes are methods; a method is an attribute that _does something_.) 

For now, we just want to know what `argv` even looks like, so we're just going to print it out. After the `import` line, insert this:

    print(sys.argv)

So the program should now look like this:

    import sys
    print(sys.argv)
    print('Hello World')

Save it. Go back to terminal. Type `python hello.py`. You should see this:

    ['hello.py']
    Hello World

See what `argv` is? It's just a list! It's conventional to include the name of the program itself in `argv` because sometimes that information is useful. That's all we get here, becuse we just ran the program without any arguments. What happens when we run it with more arguments?

    python hello.py supercalinevermind

The output:

    ['hello.py', 'supercalinevermind']
    Hello World

So this list just has whatever values are entered. For every argument, an item appears. It's as if you had called the `split` method on the argument string. (The % sign below just represents the command line prompt, and I'll use it the same way as `>>>` from now on.) 

    % python hello.py supercalinevermind and also this
    ['hello.py', 'supercalinevermind', 'and', 'also', 'this']
    Hello World

##  Your own version of cat

##  Strings — methods

##  Lists — methods

##  Objects: Counter

##  Counting words with Counter objects

##  How counter works: dictionaries

##  Using dictionaries to create a bigram counter
