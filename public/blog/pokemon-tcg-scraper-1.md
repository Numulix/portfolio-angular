# I Was Tired of Missing Pokemon Card Restocks, so I Built a Bot to Watch For Me

_(Written June 23, 2025)_

As a frontend developer specializing in Angular development, I spend most of my days building user interfaces. But like many developers, I have hobbies outside of code, and one of mine is collecting Pokemon TCG cards. Here in Serbia, the market is small, and desirable products sell out almost instantly. Checking multiple online stores every day was becoming a chore, and I was still missing out.

This frustration sparked an idea: _"What if I could build something to watch the stores for me?"_

This blog series will document my journey building that something: a fully-featured, deployable Discord bot that scrapes websites and sends real-time stock notifications. In this first part, I'll cover the initial concept, the architectural design, and the first major roadblock I hit on the way to a working prototype.

_(NOTE: If there are any scalpers reading this, f**k you and good riddance)_

## Defining the problem: The Minimum Viable Product (MVP)

Every good project starts with a clear goal. I didn't want to over-engineer it from the start. The goal for my MVP was simple and solved my immediate problem:

1. **Scrape data**: Periodically fetch product data from a list of specific Serbian online stores
2. **Compare state**: Compare the new list of products against a previously saved list
3. **Notify on change**: If a new product is found (or restocked), send a notification to a private Discord server for me and my friends

The plan was to have a script that could answer the simple question: _"Is there anything new in stock since the last time I checked?"_

## The inital architecture

Coming from a structured background with Angular, I believe in planning an application's architecture before writing code. Even for a personal project, this helps create a maintainable and scalable foundation. I sketched out a simple mind map to visualize the components.

![Mindmap](/blog/images/diagram.png)

My initial design, all in TypeScript, was based on a few core principles:

- **TypeScript**: This was my comfort zone. Its type safety helps prevent common errors and makes the code self-documenting.
- **Abstraction**: I designed an abstract `Scraper` class. This class would define a contract that every individual store scraper must follow. This ensures that no matter how different the websites are, the output data structure is always consistent.
- **Separation of concerns**: The logic for scraping was to be kept separate from the logic for comparing and saving data (the `Comparator` class), which was then separate from the notification logic (the Discord bot).

## The first roadblock: The modern web is built on JavaScript

With a solid plan, I wrote my first scraper using `axios` to fetch the HTML and `cheerio` to parse it. I ran the script against my first target website and checked the console. The result?

```html
<html lang="sr">
   <body style="overflow-y:scroll">
      <!-- IMPORTANT! -->
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
   </body>
</html>
```

The website was a **SPA** (Single Page Application). It sends back a nearly empty HTML shell, and all the product content is rendered dynamically with JavaScript in the user's browser. The previously mentioned libraries can't run JavaScript, so they only saw the empty shell.

This was my first major roadblock. The solution was to use a tool that could act like a real browser. I chose **Playwright**, a powerful headless browser automation library. Instead of just fetching raw HTML, Playwright launches a real Chromium browser instance in the background, waits for the page's JavaScript to fully load and render the content, and _then_ it gives me the final HTML. It's slower, but it works on virtually any modern website.

## The first notification

After refactoring the scraper to use Playwright, I ran the pipeline. I had it check the website, save an initial data file, and then I manually removed a piece of data from the JSON file (for testing) and I ran the script again.

A moment later, a notification popped up in my private bot testing server. It worked!

![First notification](/blog/images/first-notification.png)

This was the end of the first phase. I had a working, automated scraper bot that solved my core problem. It was still a simple script, and it wasn't user-friendly or configurable. But it was a success and a fantastic foundation to build upon.
