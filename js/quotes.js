const quotes=[
    {quote:"The past can hurt, but the way I see it, you can either run from it or learn from it.",
    whoTell:"Lion King",
},
{quote:"Today's special moments are tomorrow's memories.",
    whoTell:"Aladdin",
},
{quote:"It's not until you lose everything that you can truly appreciate everything.",
    whoTell:"Beauty and the beast",
},
{quote:" Life is a journey to be experienced, not a problem to be solved.",
    whoTell:"Winnie the Pooh",
},
{quote:"If you focus on what you left behind, you will never see what lies ahead.",
    whoTell:"Ratatouille",
},
{quote:"You control your destiny. You don't need magic to do it.",
    whoTell:"Brave",
},
{quote:"The very things that hold you down are going to lift you up.",
    whoTell:"Dumbo",
},
{quote:"Our fate lives within us, you only have to be brave enough to see it.",
    whoTell:"Brave",
},
]
const quote=document.querySelector(".quotes span:first-child");
const whoTell=document.querySelector(".quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
whoTell.innerText = todaysQuote.whoTell;