---
title: Styling your UBG site!
description: Styling guide for your UBG site!
---

Now, we have games, and a working deployed site! Now we need to make it look better. At the end of this guide, you will have a somewhat good looking site. It won't be **too** crazy, but it will get the job done.

###### REMEMBER. THIS GUIDE REQUIRES YOU TO KNOW WHAT YOUR SITE IS GONNA BE LIKE AESTHETIC-WISE.

## Preperations

You will need:

- The codespace containing the HTML-Plain code.
- Google Fonts has to be open on the side. https://fonts.google.com/

## Coloring the background

1. In your codebase, you will find a file titled "styles.css". Click on it.
2. CSS is used to make web pages look better. I want you to take a minute to think of a color scheme you want to give your site.
   - I want you to remember, this is YOUR site made with Barebones. Not ours. The coloring is completely up to you in all retrospect.
   - Can't think of any? Try thinking about how your users will think of your site. You want to make your site dark and hackerish? Black and dark versions of any color. You want it to seem cloudy in a way? Try a very light color with white.
   - For this guide, I will be giving my site a white-pink color scheme because I want to call it "Milkyway" (This is an example. Not one thats taken.)
3. In the file you opened, you will find a field that says "body".
4. Create a new line inside the brackets and type out `background-color: {ONE OF THE COLORS OF YOUR CHOICE};`
   - Need help? Watch this [video](https://dotgui-cdn.vercel.app/vide1.mp4)

## Touching up the buttons

1. Create a new line under the line you typed out and type this series of lines:
   ```css
   button {
     padding: 1em 2em; /*this makes the corners of the button bigger. */
     border-radius: 15px; /* Makes the button rounder */
     background-color: white; /* Makes the button white */
   }
   ```
   - Need help? Watch [this video](https://dotgui-cdn.vercel.app/Screen%20Recording%202026-02-10%20202301.mp4).

## Looking at your progress so far.

Now, type out in the terminal, "npx servor". You will be prompted to open a preview in a new tab. The preview will now look something like this:
[View image](https://dotgui-cdn.vercel.app/Screenshot%202026-02-10%20203739.png)

## Changing the font

1. Now open up Google Fonts.
2. Browse the site for a font that seems like what you want for your site.
   - Yet again, this is YOUR time to ponder what the font should feel like to users. Want some suggestions? Poppins and Outfit are fonts I've used in my projects for clarity.
3. Once you have your font, click on it and press "Get Font" > "Get EMBED code".
4. This step is particularly tricky, so make sure you watch this video to do it:

- [Watch Video](https://dotgui-cdn.vercel.app/Screen%20Recording%202026-02-10%20214024.mp4)

5. Once done, you should have the font in your css file. Now, type out `font-family: {FONT-NAME};` inside of the body bracket to put the font to work.

- Need help? Watch this video: [Watch Video](https://dotgui-cdn.vercel.app/Screen%20recording%202026-02-11%2010.06.07%20AM.webm)

6. Now the font should show up in your app!

## End and Extra Notes

Now your site can look slightly appealing. You can change styles often change colors of different elements and stuff, and in a later advanced guide, I will show you how to take the styling to the next level.
