1. Record your reasons for implementing the solution the way you did, struggles you faced and problems you overcame.

**reasoning**:
-At the beginning of the function, I added a query to DynamoDB, to check if the person had previously called, because if their info was already in the system, it would be unnecessary to run through the entire function again, so I would just return the existing vanity numbers from the DB.
-My definition of 'Best Vanity Numbers' is as follows:
-least amount of unique characters
-highest in alphabetical order
-my reasoning for using the above criteria was the less unique characters in the number, the easier it should be to remember, and I prefer the groupings to be closer to the beginning of the alphabet.

**struggles/problems overcame**:
-There were a few technologies I was either entirely unfamiliar with, or less confident
-I had zero experience with Amazon Connect, and was not extremely well versed with Cloudformation or DynamoDB, so I decided to begin working on these areas. I did this so I could get a better idea of how long these unknown/lesser known tasks would take me, to maximize my time management for the entire project.


2. What shortcuts did you take that would be a bad practice in production?

I tried to refrain from using any real shortcuts, although I do recognize there are always improvements that can be made.


3. What would you have done with more time? We know you have a life. :-)

With more time, I would have built out the website, and had it return the 5 most recent callers vanity numbers.
