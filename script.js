const div = document.querySelector(".inner-html-content"),
  button = document.querySelector(".button");
function createSiteFromHTML() {
  button.parentNode.removeChild(button),
    (div.innerHTML = `
  <p class="pr">Button can't be used again :P</p>

  <style>
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Mono:wght@200&display=swap");
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap');
      .hello-everyone {
        font-family: "Open Sans", sans-serif;
        font-family: "Roboto Mono", monospace;
      }

      button {
        display: flex;
        justify-content: center;
      }

      #container {
        margin: 27px;
        box-shadow: 10px 10px 34px 5px rgba(0,0,0,0.54);
        -webkit-box-shadow: 10px 10px 34px 5px rgba(0,0,0,0.54);
        -moz-box-shadow: 10px 10px 34px 5px rgba(0,0,0,0.54);
        background-color: rgb(50, 50, 50);
        border: 5px solid;
        border-radius: 5px;
      }

      .about {
        display: flex;
        justify-content: center;
      }

      p, h1, h2, h3, h4, h5, h6 {
        color: white;
        display: flex;
        justify-content: center;
        font-family: 'Nunito Sans', sans-serif;
        word-wrap: break-word;
      }

      body {
        background-color: rgb(80, 80, 80);
      }

      hr {
        width: 100px;
      }

      button {
        border-radius: 5px;
        width: 300px;
        border: 2px solid;
        margin: 10px;
      }

      .buttons {
        display: flex;
        justify-content: center
      }

      button:hover {
        background-color: black;
        color: white;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
    }
  
    </style>
  <p style="display: flex; justify-content: center;" class="pr"">
      Hello. I'm Pedro, or mini cat. I'm a software engineer from Brazil, and I
      want to be the best.
      
    </p>
    <p>ミニ猫、その名前で呼んでね！ :)</p>
    <div id="container">
    <h1 class="pr">-- SELECT THEME --</h1>
    <hr>
    <div class="buttons">
    <button class="day" onclick="{alternateThemeToDay()}">
      Day
    </button>
    <button class="night" onclick="{alternateThemeToNight()}">
      Night
    </button>
  
    </div>
    </div>
    <h2>-- THEME SELECTED --</h2>
    <p class="select">Theme selected: none</p>
    <div id="container" style="border: 5px solid; border-radius: 5px">
      <h1 class="about">-- ABOUT ME --</h1>
      <hr>
      <p style="
        width: 1100px;
        height: 250px;
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        First of all, I don't work yet, because I'm not old enough. I'm 12 years
        old and I do this because it's my dream to work in the United States and
        be a great programmer. And I'm trying to do this through an online
        course, and that's why I'm creating this portfolio. So I can test my
        knowledge. It's not very good, I think, but it's what I can do, and tell
        me, this system of clicking a button and popping up a website was cool,
        wasn't it? I live in Brazil, SP. I live with my parents, 2 brothers and
        that's it. I still go to school, I think that’s pretty clear, right? I
        really like mathematics and I study it. And why is that? Well, I saw a
        video of a guy making a cube rotate in the terminal. Not one guy, two.
        And I loved it! I saw that I needed mathematics for that and I simply
        started studying, but not because I "need" it to program. But for the
        fact that she seems nice. I think that's all I have to say about myself.
      </p>
    </div>

    <div id="container" style="border: 5px solid; border-radius: 5px;">
      <h1>-- WORKS --</h1>
      <hr>
      <h3>-- Yett --</h3>
      <p style="width: 1100px;
      height: 350px;
      margin: 50px;
      display: flex;
      justify-content: center;
      align-items: center;">Yett was created by a group of friends who wanted to have fun. The objective was to get the most money by betting on it, but it was clearly not real money, it was fake money from the game itself. The game itself could only be run via the terminal and was made with Python. In the beginning, it had several bugs and so on. However, as time passed, I improved it and even renamed it. I don't remember what I called him, but he was fun and so on. We had managed to accumulate Ytt$8 million in total (Ytt$ was the game's currency.). I even remember that when we lost, we cut the balance by 50%, so imagine, you get Ytt$50 and in the end, you only redeem 25.

      The game worked as follows, we entered the name, and the balance in Ytt$, after that, we had the option to choose different games, I liked AutoBot 1 more, yes, there was 2 too, but I didn't I liked him, he was very easy to lose money, and unlike the others, he cut the balance by 75%, but the gain was immense (it was the value x 3).
      Continuing, AutoBot 1 was the best, in my opinion, as it was easy to win, but the gain was little (value + 25). There were also card draws, which were designed to give more money and a chance for the player to win, it was accompanied by a code, and when placed in "Enter a code: ",
       it activated a 10% more chance of winning. Greatly increasing the chances of winning. There was also Hacker mode, which "hacked" accounts and took money from them, thus transferring the money to the player's current balance. The game was simply a waiting time, and when it ended, money would add to the value of the player's balance. I think this was one of the projects I most enjoyed doing, even though it was simple and basic.</p>
       <h3>-- The tower --</h3>
       <p style="
        width: 1100px;
        height: 250px;
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
       ">
        The tower hasn't been released yet, but it's close, I think the game will be released in early 2024. It's a Roblox game where I've been working a lot, including my brother and I are into it. He makes the blocks and I program and make all the game logic. The game is very simple but challenging. The game starts with the player stuck on a normal floor, he just has to go towards a block and he will go to the next floor. However, as you pass the level, the floors become dark and scary, the objective of the game is to reach the end, however, if you die, you return everything. This was the point that made my brother and I have the courage to create, because that day we were so lazy in the world, we didn't even want to pick up a cell phone or a computer, or even get up from the couch. The game is already being ready and as time passes, we intend to create more levels with more scares and terror. A spoiler is that phase 5 was the coolest to create, for me. It takes place in an abandoned hospital, full of corpses, etc.
        When the game launches, I will update the website and make the link available to you, ok?
        Until then! :)
       </p>
       <h3>-- JS in Python --</H3>
       <p style="
        width: 1100px;
        height: 250px;
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
       ">
        Yes, I tried to recreate the JS in Python. It was very difficult, the project was already finished and is there, stopped.
        I don't touch it anymore because it's already finished and I know that no one, absolutely no one will use it, as we already have the incredible and magnificent normal JS.
        You might be asking yourself, "since you know no one will use it, why did you create it?"
        It's simple, I had nothing to do.
        I don't even know if I still have the project code, if I find it, I promise to bring you a file so you can see how it turned out. I even added new commands! like this: SleepAndWakeUp(time, action).
        It makes the code lock into the function, and when time runs out, it does something. Remembering that you must define a function in Arrow function to be able to use it.
        I think that's what I have to tell you about JS in Py, see you later! <3
       </p>
       <h3>-- Py in JS --</h3>
       <p style="
        width: 1100px;
        height: 250px;
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
       ">
        JS in Py is no longer enough, I have to make Py in JS. hahahaha..
        Well, the process was simple, much simpler than creating JS in Py. I know how to master JS much more than Py, so it was simple, the process lasted 1 day and a half, the Sleep(time, action) function was added to this code too, I had to do a calculation here, another there, but nothing else. I really enjoyed doing this project, because I felt challenged to do it, and seeing that I succeeded was like a victory for me. I don't think there was any command missing.
        Clearly, the code syntax has changed, otherwise it would be IMPOSSIBLE to create. Like the "if", he had to add parentheses, like JS. The {} were also added and a lot of things changed. But I don't think it would interfere with a programmer aware that JS doesn't have a Syntax as simple as Py's.
        As I write this, I'm reminded that the project isn't finished, I guess.
        It had some errors, as several commands had the same name, so I had to leave it that way.
        Well, I think that's it for now. Until later! <3
       </p>
       <h3>-- PORTFOLIO --</h3>
       <p style="
       width: 1100px;
        height: 250px;
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
       ">
       Well, if you're seeing this, you know I made a portfolio, so here it is! :).

       It was created because I, mini cat, didn't do such a huge project, so I decided to create it.
       It's not ready yet, but it's already good, I think.
       Still, I want to improve it much more! So if it's really, REALLY good, it's because I improved it a lot! haha.
       
       Well, if it has updates, I'll put it in this container here! :)
       
       
       See you later! :)
       </p>

       <h3>-- RADIUS CSS --</h3>
       <p style="
       width: 1100px;
        height: 250px;
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
       ">
       Radius css was created to make websites more modern and beautiful to look at. Putting a border-radius on several things and adding several more beautiful things to the site. If you want to see it, I'll leave its link on the codes page.
       </p>
       <p>That's all of my works :/</p>
       <p>More coming soon! :)</p>
    </div>
    <div id="container">
      <h1>-- CODES --</h1>
      <hr>
      <p>
      I will make some of the codes I mentioned above available, like Yett's, but I think it will just be him...
      I don't know if I'll find the others. :/
      <p>
      <h3><a href="./yett-code.html" style="color: white;">Yett code here! :)</a></h3>
      <h3><a href="https://github.com/Minikaatgmak/radius-css" style="color: white;">Radius css here! :)</a></h3>
      <h3><a href="https://github.com/Minikaatgmak/Minicat-portfolio.git" style="color: white;">Source code here! :)</a></h3>
    </div>
    <div id="container">
      <h1>-- HOW I BUILD THIS SITE? --</h1>
      <p style="
      width: 1100px;
      height: 250px;
      margin: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      ">
      Firstly, I didn't create this website with the idea that it would become a big website, after all, it's just another project of mine. Second, I thought I'd make this site while taking out the trash.

And well, it's easy to do, the bad thing is that it took me 3 hours and some blah blah.
First, add a button that when clicked, makes the website appear itself, after configuring the button, adjust the website and do as you want. One example is that I made it based on a Devaslife Portfolio, I haven't been following him for long, but he helped me get more inspired in programming, he helped me configure neovim! hahahaha..
I know, this isn't funny. Well, continuing, I made this website because I had never done it or thought about making a portfolio in my life. Over time, I will improve it. So if anyone is seeing this and really wants something more, send me an email and I'll add it here! :) (pedro.e.santoro@gamil.com)

As I wrote this, I thought about adding a comments page, but how? lol.. I think I know, I just need to know how to add the value of a variable available for everyone to see. Like a comment, you know?

Well, if you see this site already with a comments tab, it's because I had the courage to research and add a tab.

See you later! <3
      </p>

      <a style="color: white; width: 1100px;
      height: 250px;
      margin: 50px;
      display: flex;
      justify-content: center;
      align-items: center;" href="https://www.craftz.dog/">Devaslife/takuya portfolio</a>
    </div>

    <div id="container">
      <h1>-- SOURCE --</h1>
      <p>
      I will leave the source of this entire site right here. It will take you to a git page. And then, there will be the code! :)
      </p>
    </div>
  `);
}

function alternateThemeToNight() {
  const divAlternate = document.querySelector(".themeAlternate");
  const select = document.querySelector(".select");
  select.innerHTML = `theme selected: night theme`;
  divAlternate.innerHTML = `
  <style>
    body {
      background-color: rgb(80, 80, 80);
    }
  </style>
  `;
}

function alternateThemeToDay() {
  const divAlternate = document.querySelector(".themeAlternate");
  const select = document.querySelector(".select");
  select.innerHTML = `theme selected: day theme`;
  divAlternate.innerHTML = `
  <style>
    body {
      background-color: rgb(117, 117, 117);
    }

    .select {
      color: black;
    }

    .pr {
      color: black;
    }
  </style>
  `;
}
