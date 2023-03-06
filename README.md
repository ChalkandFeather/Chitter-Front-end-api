# Chitter API Frontend Challenge

Prog as of 05/03/2023
The funciton within the prog are not responding to the Api which requires further work to connect the external backend.
I used this challenge as an opportunity to embed some of the web-app concepts learned earlier in the week(and the course). As a result my focus was to improve my understanding of javascript- at my own pace- rather than complete this challenge.
On closer inspection, and with better understanding the view class along with it's tests require fleshing out. The ideas are there however not clearly defined. With some de/reconstruction this prog can updated to meet spec.

Model class: PeepModel
peepModel.js
peepModel.test.js

Seperate concerns

The model class holds the state/data and gives this data to the view.js

- Feel free to use Google, your notes, books, etc. but work on your own
- If you refer to the solution of another coach or student, please put a link to that in your README
- If you have a partial solution, **still check in a partial solution**
- You must submit a pull request to this repo with your code by 9am Monday morning

## Challenge:

As usual please start by forking this repo.

We are going to write a small Twitter clone that will allow the users to post messages to a public stream.

The scenario is similar to the [Chitter Challenge](https://github.com/makersacademy/chitter-challenge), except someone has already built a backend API for you and hosted it on Heroku.

Your task is to build a front-end single-page-app to interface with this API. You can do this in any framework you like, or in pure Javascript. [The API documentation is here.](https://github.com/makersacademy/chitter_api_backend)

Here are some interactions the API supports. Implement as many as you see fit.

- Creating Users
- Logging in
- Posting Peeps
- Viewing all Peeps _(I suggest you start here)_
- Viewing individual Peeps
- Deleting Peeps
- Liking Peeps
- Unliking Peeps

We are looking for well tested, easy to read, easy to change code. This is more important than the number of interactions you implement.

Note that others may be doing the same task at the same time, so the data may change as you are using it.

## Utilities you might find useful

- [The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for making requests.
- [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) for exploring the API.
