const trainA = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const trainB = ["j", "k", "l", "m", "n", "o", "p", "q", "r"];
const trainC = ["s", "t", "u", "v", "w", "x", "y", "z", "ia"];

async function checkAvailability() {
    let promise = await new Promise(function (resolve, reject) {
        const id = setInterval(function () {
            if (trainA.length < 5) {
                resolve(`train A is availabe`);
                window.location.href = "booking.html";
                clearInterval(id);
            }
            else if (trainB.length < 5) {
                resolve(`train B is availabe`);
                window.location.href = "booking.html";
                clearInterval(id);
            }
            else if (trainC.length < 5) {
                resolve(`train C is availabe`);
                window.location.href = "booking.html";
                clearInterval(id);
            }
        }, 1000)

    })
    return promise
}

function cancelTicket() {
    // *speed factor
    let speeds = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 10), Math.floor(Math.random() * 8)];

    const ids = ["A", "B", "C"];
    var f=0;

    [trainA, trainB, trainC].forEach(function (train, index) {
        setTimeout(function () {
            train.pop();
            visualize(train, ids[index])
            var name = document.getElementById("name").value;
            if (f=== 0) {
                train.push(name);
                visualize(train, ids[index])
                f = 1;
            }
        }, 1000 * speeds[index])
    })
}

function visualize(train, id) {
    const qContainer = document.getElementById(id);
    qContainer.innerHTML = "";
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = `Train ${id} Passengers - ${train.length}`;
    train.forEach(function (name) {
        const el = document.createElement("li");
        el.textContent = name;
        ul.append(el);
    });
    qContainer.append(li, ul);
}

visualize(trainA, "A");
visualize(trainB, "B");
visualize(trainC, "C");

var id = setInterval(cancelTicket, 1000);

checkAvailability()
    .then(function (res) {
        alert(res);
        // window.open("Booking.html")
    })
    .catch(function (err) {
        console.log(err);
    })



function bookTicket() {
    let speeds = [Math.floor(Math.random() * 1), Math.floor(Math.random() * 2), Math.floor(Math.random() * 3)];

    const ids = ["A", "B", "C"];

    [trainA, trainB, trainC].forEach(function (train, index) {
        setTimeout(function () {
            // train.push(train[Math.floor(Math.random() * (train.length - index))]);
            // train.push(seat);
            visualize(train, ids[index]);
        }, 1000 * speeds[index]);
    })

}

window.addEventListener("load", function () {
    var btn = document.getElementById('book');
    btn.addEventListener("click", bookTicket);
    // window.location.href = "tatkal.html";
})
