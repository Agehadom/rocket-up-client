# Rocket Up
Rocket Up is a self-evaluative training tool for players of Rocket League that wish to get better.

## Planning Story

The [Rocket Up Client] (https://agehadom.github.io/rocket-up-client/) and the [Rock Up API] (https://serene-bastion-18925.herokuapp.com/) were designed with a desire to consolidate the existing and future resources created by the Rocket League community. Typically, to get your hands on these resources, you have to dig through Youtube and follow specific players and community members that make these guides and training packs. Because of this, a lot of players will often find themselves struggling to learn how to train and what they should even be practicing.

The Rocket Up Client will give all creators and players *ONE* place where you can post, not only training packs but make full training guides as supplements for the packs.

## Technologies Used

- Javascript
- HTML / CSS / Bootstrap
- AJAX

## Entity Relationship Diagram

![User Training Relationship](https://i.imgur.com/E0AHH9n.png)

For the ERD, I originally had it so that all of the training resources would be sorted into regimens for players to, more or less, enroll in. But later, I decided that it would be a MUCH better idea to have an open(ish) database that contains the individual resource itself for versions 1 and 2 and later in version 3, refine this idea ala, any familiar fitness training application you may use that would help you visualize your process.

## Front End Design Concept

![Front End Final Concept](https://i.imgur.com/sJl2uct.jpg)

In the end, I would like to have a rather sleek page with a sidebar menu that would be toggled by the user to access the rest of the application. This way, you can maximize the amount of relevant content on the page and tuck user information, the area to search for more resources and other general application pages.

The user interaction area or, the largest part conceptualized in the image above would greet the user with 3 general regimens to quickly get started with your training and, in the event you don't need to work on any of those things; it would guide you through a small quiz and suggest what you should be practicing for your rank.
