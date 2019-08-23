// user hits submit

//capture user data logic



$("#submit").on("click", function (event) {
    event.preventDefault();

    const answers = [];
    let selects = $('select')

    for (let i = 0; i < 10; i++) {
        answers.push(selects[i].value)
    }

    console.log(answers)

    const userData = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        answers: [...answers]
    }
    console.log(userData);

    newArray = [];
    bestMatch = 0;
for (let j = 0; j < userData; J++){
match += (Math.abs(parseInt(userData[i].score[j]) - parseInt(userData[j])));
newArray.push(match);

}

for (let k = 0; k < newArray.length; k++){
    if(newArray[i] <= newArray[bestMatch]) {
        bestMatch = k;
    }
}
const bff = friends[bestMach];
res.json(bff);

friends.push(rep.body);


});



// compare user data to friends data and append to modal
    $.post('/api/friends', userData, friends, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Submission success!")
        };
    
        

});
