function myfunction(){
    let myjokes=[
        {
            "category": "Programming",
            "type": "single",
            "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 28,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 301,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 43,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 51,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 24,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "My parents raised me as an only child, which really annoyed my younger brother.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 235,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "How do you make holy water? You boil the hell out of it.",
            "flags": {
                "nsfw": false,
                "religious": true,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 202,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I was going to tell a dead baby joke. But I decided to abort.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 207,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 23,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 44,
            "safe": true,
            "lang": "en"
        }
    ]
    let index = Math.floor(Math.random() * (myjokes.length-1))
    console.log(index)
    joke.innerHTML=myjokes[index].joke;
}