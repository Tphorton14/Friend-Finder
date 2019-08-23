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
    };

    console.log(userData);

    $.post('/api/friends', userData, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Submission success!")
        }


    });




// $.ajax({
//     url: "/api/friends",
//     method: "POST",
//     mimeType: 'application/json',
//     data: userData
// }).then(function (data) {
//     console.log(userData);
 
//     $("#match-name").text(data.name);
//     $("#match-img").attr("src", data.photo)
//     $("#results-modal").modal("toggle");
// });

});