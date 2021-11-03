const players = [
    {
        id: 0,
        fullName: "Stephen Curry",
        jerseyNumber: 30,
        team: "Golden State Warriors",
        position: "Point Guard",
        shoots: "Right-Handed",
        img: "curry-bio",
        nickname: ["Chef Curry", " Steph", " Baby-Faced Assassin"],
        quote: "He’s a lot like Wilt and Shaq and Jordan, Iverson. They changed things. They changed how the game is perceived and played. -Reggie Miller",
        stats: {
            Summary: "Career",
            G: "768",
            PTS: "24.2",
            TRB: "4.6",
            AST: "6.5",
            "FG%": "47.6",
            "FG3%": "43.3",
            "FT%": "90.8",
            "eFG%": "58.3",
            PER: "24.0",
            WS: "113.2"
        },
        accolades: {
            "Rookie of the Year": 0,
            "All Stars": 7,
            "Scoring Champ": 3,
            "Steal Champ": 1,
            "All-NBA": 7,
            "NBA-Finals MVP": 0,
            MVP: 3,
            "NBA Titles": 3
        }
    },

    {
        id: 1,
        fullName: "Lebron James",
        jerseyNumber: 23,
        team: "Los Angeles Lakers",
        position: "Small Forward",
        shoots: "Right-Handed",
        nickname: ["King James", " LBJ", " Chosen One"],
        quote: "LeBron James is one of the best players in the league - and one of the best players to ever play the game. -Giannis Antetokounmpo",
        stats: {
            Summary: "Career",
            G: "1315",
            PTS: "27.0",
            TRB: "7.4",
            AST: "7.4",
            "FG%": "47.6",
            "FG3%": "43.3",
            "FT%": "90.8",
            "eFG%": "58.3",
            PER: "24.0",
            WS: "113.2"
        },
        accolades: {
            "Rookie of the Year": 1,
            "All Stars": 7,
            "Scoring Champ": 2,
            "All Defensive": 6,
            "All-NBA": 7,
            "NBA-Finals MVP": 0,
            MVP: 3,
            "NBA Titles": 3
        }
    },

    {
        id: 2,
        fullName: "Michael Jordan",
        jerseyNumber: 23,
        team: "Chicago Bulls",
        position: "Shooting Guard",
        shoots: "Right-Handed",
        img: "",
        nickname: ["Air Jordan", " M.J.", " Mike"],
        quote: "If you look up the definition of greatness in the dictionary, it will say Michael Jordan. -Elgin Baylor",
        stats: {
            Summary: "Career",
            G: "1072",
            PTS: "30.1",
            TRB: "6.2",
            AST: "5.3",
            "FG%": "49.7",
            "FG3%": "32.7",
            "FT%": "83.5",
            "eFG%": "50.9",
            PER: "27.9",
            WS: "214.0"
        },
        accolades: {
            "Rookie of the Year": 1,
            "All Stars": 14,
            "Scoring Champ": 10,
            "All-Defensive": 9,
            "All-NBA": 11,
            "NBA-Finals MVP": 6,
            MVP: 5,
            "NBA Titles": 6
        }
    },

    {
        id: 3,
        fullName: "Kobe Bryant",
        jerseyNumber: 23,
        team: "Los Angeles Lakers",
        position: "Shooting Guard",
        shoots: "Right-Handed",
        img: "",
        nickname: ["Black Mamba", " KB24", " Vino"],
        quote: "If I was in my prime, who would I want to play one-on-one? Jordan asked in an interview with NBA 2K. That list is very long. I'd start off with Jerry West, Elgin Baylor, Kobe Bryant in his prime, LeBron [James] in his prime, D[wyane] Wade in his prime, [Car]Melo [Anthony], that's a good start. I don’t think I‘d lose, other than to Kobe Bryant because he steals all of my moves. -Michael Jordan",        
        stats: {
            Summary: "Career",
            G: "1346",
            PTS: "25.0",
            TRB: "5.2",
            AST: "4.7",
            "FG%": "44.7",
            "FG3%": "32.9",
            "FT%": "83.7",
            "eFG%": "48.2",
            PER: "22.9",
            WS: "179.7"
        },
        accolades: {
            "Rookie of the Year": 0,
            "All Stars": 18,
            "Scoring Champ": 2,
            "All-Defensive": 12,
            "All-NBA": 15,
            "NBA-Finals MVP": 2,
            MVP: 1,
            "NBA Titles": 5
        }
    },

    {
        id: 4,
        fullName: "Shaquille O'Neal",
        jerseyNumber: 32,
        team: "Los Angeles Lakers",
        position: "Center",
        shoots: "Right-Handed",
        img: "",
        nickname: ["Shaq", " Diesel", " Superman"],
        quote: "To me, Shaq was the most dominant. I would say Michael is probably the most unstoppable, but when you talk about dominant like we used to try to stop Shaq from running like that was kinda the gameplan. Don't let Shaq run. Don't even think about him getting the ball; just stop him from running. He gonna beat most of the players down the court. -Scottie Pippen",
        stats: {
            Summary: "Career",
            G: "1207",
            PTS: "23.7",
            TRB: "10.9",
            AST: "2.5",
            "FG%": "58.2",
            "FG3%": "4.5",
            "FT%": "52.7",
            "eFG%": "58.2",
            PER: "26.4",
            WS: "181.7"
        },
        accolades: {
            "Rookie of the Year": 1,
            "All Stars": 15,
            "Scoring Champ": 2,
            "All-Defensive": 3,
            "All-NBA": 14,
            "NBA-Finals MVP": 3,
            MVP: 1,
            "NBA Titles": 4
        }
    },

    {
        id: 5,
        fullName: "Kareem Abdul-Jabbar",
        jerseyNumber: 33,
        team: "Los Angeles Lakers",
        position: "Center",
        shoots: "Right-Handed",
        img: "",
        nickname: ["Lew", " Cap", " Murdock"],
        quote: "When I look at Kareem Abdul-Jabbar’s six championships, six or seven MVPs, scored the most points than anybody in the NBA, lost one game in college, lost one game in high school, and didn’t lose in grade school. To me, that’s the GOAT. -Danny Green",
        stats: {
            Summary: "Career",
            G: "1560",
            PTS: "24.6",
            TRB: "11.2",
            AST: "3.6",
            "FG%": "55.9",
            "FG3%": "5.6",
            "FT%": "72.1",
            "eFG%": "55.9",
            PER: "24.6",
            WS: "273.4"
        },
        accolades: {
            "Rookie of the Year": 1,
            "Block Champ": 4,
            "All Stars": 19,
            "Scoring Champ": 2,
            "All-Defensive": 11,
            "All-NBA": 15,
            "NBA-Finals MVP": 2,
            MVP: 6,
            "NBA Titles": 6
        }
    },

    {
        id: 6,
        fullName: "Hakeem Olajuwon",
        jerseyNumber: 34,
        team: "Houston Rockets",
        position: "Center",
        shoots: "Right-Handed",
        img: "",
        nickname: ["The Dream", " Little Moses"],
        quote: "He’s the only player in NBA history to win MVP, Defensive Player of the Year and Finals MVP in the same year. You look at all these players who accomplished so much. No one has ever accomplished that feat. -Paul Pierce",
        stats: {
            Summary: "Career",
            G: "1238",
            PTS: "21.8",
            TRB: "11.1",
            AST: "2.5",
            "FG%": "51.2",
            "FG3%": "20.2",
            "FT%": "71.2",
            "eFG%": "51.3",
            PER: "23.6",
            WS: "162.8"
        },
        accolades: {
            "Rookie of the Year": 0,
            "Block Champ": 3,
            "Defensive Player of the Year": 2,
            "All Stars": 12,
            "Scoring Champ": 0,
            "All-Defensive": 9,
            "All-NBA": 12,
            "NBA-Finals MVP": 2,
            MVP: 1,
            "NBA Titles": 2
        }
    },

    {
        id: 7,
        fullName: "Larry Bird",
        jerseyNumber: 33,
        team: "Boston Celtics",
        position: ["Small Forward", " Power Forward"],
        shoots: "Right-Handed",
        img: "",
        nickname: ["Larry Legend"],
        quote: "Larry Bird may have been the best I played against - he could do anything. This muscle here (he pointed to his brain) was his greatest. Shooting, rebounds, assists, steals - he was always positioned at the right place at the right time. And he was a great competitor, I have much respect for him. -Kareem Abdul-Jabbar",
        stats: {
            Summary: "Career",
            G: "897",
            PTS: "24.3",
            TRB: "10",
            AST: "6.3",
            "FG%": "49.6",
            "FG3%": "37.6",
            "FT%": "88.6",
            "eFG%": "51.4",
            PER: "23.5",
            WS: "145.8"
        },
        accolades: {
            "Rookie of the Year": 0,
            "Defensive Player of the Year": 2,
            "All Stars": 12,
            "Scoring Champ": 0,
            "All-Defensive": 3,
            "All-NBA": 10,
            "NBA-Finals MVP": 2,
            MVP: 3,
            "NBA Titles": 3
        }
    },

    {
        id: 8,
        fullName: "Magic Johnson",
        jerseyNumber: 32,
        team: "Los Angeles Lakers",
        position: ["Point Guard", " Shooting Guard", " Power Forward"],
        shoots: "Right-Handed",
        img: "",
        nickname: "Magic",
        quote: "I think the greatest player I've ever played against was Magic Johnson. Next, was Larry Bird. Then, Kareem Abdul-Jabbar. -John Salley",
        stats: {
            Summary: "Career",
            G: "906",
            PTS: "19.5",
            TRB: "7.2",
            AST: "11.2",
            "FG%": "52.0",
            "FG3%": "30.3",
            "FT%": "84.8",
            "eFG%": "53.3",
            PER: "24.1",
            WS: "155.8"
        },
        accolades: {
            "Rookie of the Year": 0,
            "Steal Champ": 2,
            "Assist Champ": 4,
            "All Stars": 12,
            "Scoring Champ": 0,
            "All-NBA": 10,
            "NBA-Finals MVP": 3,
            MVP: 3,
            "NBA Titles": 5
        }
    },

    {
        id: 9,
        fullName: "Wilt Chamberlain",
        jerseyNumber: 13,
        team: "Los Angeles Lakers",
        position: "Center",
        shoots: "Right-Handed",
        img: "",
        nickname: ["Wilt the Stilt", " The Big Dipper"],
        quote: "When I started to play with him, he helped make me a better player. We seemed to have a real good feel together, I think it translated into a confidence with him. All players are generally judged by the number of championships they won. Unfortunately, he only won two. His greatness as a basketball player can't be questioned. He was fun, we used to laugh at him a lot, some of the things that would happen. I once told him, no one roots for Goliath. -Jerry West",
        stats: {
            Summary: "Career",
            G: "1045",
            PTS: "30.1",
            TRB: "22.9",
            AST: "4.4",
            "FG%": "54.0",
            "FG3%": "n/a",
            "FT%": "51.1",
            "eFG%": "n/a",
            PER: "26.1",
            WS: "247.3"
        },
        accolades: {
            "Rookie of the Year": 1,
            "Total Rebound Champ": 11,
            "Assist Champ": 1,
            "All Stars": 13,
            "Scoring Champ": 7,
            "All-Defensiive": 2,
            "All-NBA": 10,
            "NBA-Finals MVP": 1,
            MVP: 4,
            "NBA Titles": 2
        }
    },



]

module.exports = players;