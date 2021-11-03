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
        jerseyNumber: 33,
        team: "Houston Rockets",
        position: "Center",
        shoots: "Right-Handed",
        img: "",
        nickname: ["The Dream", " Little Moses"],
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


]

module.exports = players;