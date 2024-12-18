= Final Project

== Project links

* https://youtu.be/nDeFmR36YOo[Video Walkthrough]
* https://shanepanter.com/cs208/grading-rubric.html[Grading Rubric]

== Overview

For your final project you will work on a team to develop a website for an
academic department at a fictional university. This project is fairly open ended
and is intended to allow you freedom to design something really cool while
getting experience working with a team in a remote environment. This is a
multi-week project with well defined checkpoints that must be turned in on
canvas.

TIP: This project will take an estimated 40 - 45 hours to complete. About 1 week
if you were working as a full time engineer.

== Software development in a Team

We will be using Agile development strategies to work on our project, so read
through the https://shanepanter.com/cs208/agile-development.html[agile
development] document before you continue. We will try and simulate as much of
the agile process in an academic setting as possible.

This assignment has been designed to be done 100% asynchronously, however some
things may be easier with a meeting over zoom or in a discussion group like
discord. It is up to each team to decide how they will collaborate over the
course of this project. Before you start please watch the canvas
https://vimeo.com/58553577[groups overview] video.  Navigate to your assigned
group in canvas to find the github classroom link to get access to your github
repo.

IMPORTANT: Although this project is done in teams all grades are **individual**.
I have configured this assignment so that if a team member drops the ball the
rest of the team does **NOT** have to complete their work.

=== Simulated standup meetings

It is not feasible to have a daily
https://en.wikipedia.org/wiki/Stand-up_meeting[stand up meeting] especially in
an online asynchronous course. Therefore we will have a few well defined group
discussion posts on canvas where you will detail your progress to the rest of
the team and simulate a stand up meeting. You are **required** to make regular
commits to this final project over the course of several weeks. Your commits
will be on a branch so you can commit code that is not 100% done.

WARNING: The simulated standup meetings and associated code can NOT be turned in
late. The point of these assignments is to interact with you fellow team
members, so turning in a late post or response defeats the whole purpose and
also robs your teammates of the opportunity to interact. Your grade is based on
you making forward progress and interacting with your team I don't expect your
code to be perfect at each checkpoint.

== User Story - Dev Requirements

The requirements for your final project are given in the form of a user
story and associated tasks. Each team member will implement the story listed
below. So if there 2 people on the team then your website should have **two**
unique majors listed, if there are 3 people then there should be three unique
majors.

=== Task 0 - Student details

Each team member must select which student they will be so I can keep all
the files straight when grading. You should have already figured out who
is who on your initial project meeting. Each student needs to fill out
ONE of the TODO items below and then push the updated README.md to github.

* student1 == Chandler Black
* student2 == Davina Causey
* student3 == TODO

=== Task 1 - Run the website

For this task all you need to do is make sure that you can run and debug
the website. Use the command below to install all the required tools and
run the website.

```bash
npm install
npm start
```

You should see output similar to what is shown below.

```bash
$ npm start

> web-dev@0.0.1 start
> nodemon src/server.js

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/server.js`
Listening on port 3000...
```

You can now open up a browser and input [localhost:3000](http://localhost:3000)
to see the website running. Assuming everything worked correctly you can proceed
to the next task.


== User Story - University Major

As a student I want to see a fancy landing page for my favorite major. The
landing page will have information about the major and should help entice
students to select the major to study.

=== Task 0 - Create a Branch

Branches are the bread 🍞 and butter 🧈 of working in a team! They allow
everyone to work on their own part of the project without interfering anyone
else. Working on a branch is part of your grade and will be checked at regular
intervals and at the end of the project. Your branch name should be the first
part of your BSU email address. For example if your email is
janedoe123@u.boisestate.edu then you will need to create a branch named
**janedoe123** to do all your work on.

* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches[About Branches]
* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests[Creating a branch]

=== Task 1 - Index page

Create a the index page for a University major. You must use templates for this
project! If you want to use a different template engine that was detailed in the
book you must get permission from the instructor AND your other team members
before you make any changes to the default project structure.

Your index page must meet the following requirements:

* Use an appropriate title for the web page `<title>`.
* The first tag in the `<body>` should be a `<h1>` tag with your name.
* Use `<h2>` tags containing the major name followed by 3 sections, each
using `<section>` tags.
* The 1st section should contain a heading in `<h2>` tags entitled "Location". A
single paragraph should briefly describe the Universities location. Locations
could be anywhere including Saturn. 🪐
* The 2nd section should contain a heading in `<h2>` tags entitled "About".
Create at least 3 subsections that each use `<section>` tags with `<h3>`
headings. Each subsection should have a single paragraph describing something
about the Major.
* The 3rd section should contain a heading in `<h2>` tags entitled "Things To
Do". Create an unordered list of things that someone can do with their major.
* Add in at least 2 images showing how cool your major or university is.
* Display a maximum of 5 randomly selected comments from your database in a `<ul>`
** If there are 0 comments then you will display nothing. Do not hard code comments.
** The first time the page loads there should be 0 comments because your
database will be empty.

=== Task 2 - Comments page

You must add in a **new** page that is linked from your index page what will
allow people to add, delete, and update comments on your site.
Teams are allowed to share backend code for this task if they wish. However,
sharing is not required and each member of the team can write their own
interaction code independently.

Add the ability for users to add comments. You will need to add the following
features to your web page:

* Store the comments in a database (you can use an in memory database)
* Each Major should have their own table
* Display all the comments currently in the system
* Allow a user to add a new comment
* Allow a user to delete a comment
* Allow a user to edit/update a comment

You may need to add in additional pages for editing or you can use javascript
in the browser to make your page interactive!

=== Task 3 - Write CSS

Add in at least 10 CSS rules and 2 CSS classes to make your website look fancy.
You can as be creative as you want. You can go for a modern profession look or
design like they did back in
https://www.howtogeek.com/692445/remembering-geocities-the-1990s-precursor-to-social-media/[1999]. While you can share some common elements between each team member you
are expected to write your **own** CSS to make your page look unique. You can't
just copy and paste the same CSS between everyone on the team.

NOTE: You can not use inline CSS for this project or use third party CSS
frameworks. All CSS must be written by your (or your team)!

== User Story - Final Merge

As a student I want to merge all my code into the team repository. **ALL** code
must be merged onto the main branch for grading. One of the easiest ways to
merge your code is to use a pull request.

* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests[About pull request].
* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests[Comparing Branches]
* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request[Create a pull request]

=== Task 1 - Push final code

Before you start merging you must push all your code to your personal branch
and ensure that your webpage is 100% functional on your branch.

=== Task 2 - Merging Madness

When you are still new to using Git in a team environment probably the best
way to merge code is to meet in person (or over zoom/discord) and merge code
together. This way you can work through any issues and help each other out
in real time eliminating frustrating merge conflicts. If the team is able to
merge in an asynchronous manner then there is no need to meet.

* Setup a time to meet either in person or remotely (optional)
* Merge all team members code into the github repository
* Ensure that the website runs and functions correctly after the merge

You may have to deal with some difficult merge conflicts, unfortunately 🤷 that
is just part of developing in a team. Getting good at resolving merge conflicts
just takes practice. Because of the infinite number of permutations possible I
can't give you a solution to every possible scenario that you may encounter. I
recommend you read the following help docs linked below for pointers on how to
merge code with minimal conflicts.

* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts[About merge conflicts]
* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github[Addressing merge conflicts on Github]
* https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line[Addressing merge conflicts on the command line]

IMPORTANT: If one team member breaks the project on the main branch then they
will received the grade deduction NOT the whole team. **EVERY** team member is
responsible for ensuring that the project works correctly after they have merged
their contributions. Breaking the main branch for the rest of the team will
result in at least a 30% deduction on your final grade. So after you have merged
**your** code check to make sure everything still works!

== Final project Acceptance Criteria

* You have created a new page to represent a fictional major with the required
information.
* You have at least 10 CSS rules
* You use at least 2 CSS classes
* Each major has at least 2 pages (if not more).
* You can create, update, and delete comments on your page.
* All **YOUR** code has been pushed to your personal branch.
* Your personal branch has been merged into main (or master) branch.
* All your JavaScript code is properly documented.
* All your HTML is nicely formatted
* All your CSS is nicely formatted
* Your website runs without error on the main (or master) branch

== Final Project Demo

Every team member will need to demo **their** contributions to the project.
Please log into canvas to access the final project demo assignment.

* Show the application running.
* Show yourself adding/editing/deleting comments
* Talk about what inspired your design, and what makes it unique
* Each student needs to submit their own demo


== Retrospective

Once you have completed all the tasks open your Retrospective.md and complete
each section that has a TODO label. Reference the grading rubric for
details on how this will be graded.
