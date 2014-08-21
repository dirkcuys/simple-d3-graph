var names = ['Adam', 'Andrew', 'Angus', 'Brylie', 'Bob', 'Bryan', 'Bruce', 'Charles', 'Chris', 'Colin', 'Dirk', 'David', 'Drew', 'Emille', 'Evan', 'Ethan', 'Frank', 'Francois', 'Fred', 'Graig', 'Greg', 'Graham', 'Harry', 'Henry', 'Howard', 'Ignus', 'Ivan', 'Issiah', 'John', 'James', 'Jeff', 'Kevin', 'Kyle', 'Kim', 'Lennard', 'Leon', 'Lee', 'Mark', 'Mike', 'Manfred', 'Nathan', 'Nevin', 'Neil', 'Oscar', 'Oliver', 'Omar', 'Philip', 'Patrick', 'Peter', 'Quintin', 'Quepid', 'Qwaga', 'Richard', 'Randalph', 'Ricardo', 'Steven', 'Shane', 'Shaun', 'Travis', 'Trevor', 'Tony', 'Uhail', 'Ushaad', 'Umar', 'Vince', 'Viper', 'Van', 'William', 'Winston', 'Warren', 'Xavier', 'Xinadu', 'Xally', 'Yoris', 'Yoda', 'Yull', 'Zane', 'Zett', 'Zorba' ]

function randomName(){
    return names[Math.floor(Math.random()*names.length)];
};

function test_d3(link_count){
    if (parseInt(link_count) <= 0){
        return;
    }
    window.setTimeout(function(){
        D3Graph.addLink(randomName(), randomName());
        test_d3(--link_count);
    }, Math.random()*1000);
}

test_d3(50);
