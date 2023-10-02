let username;
let buttonState = 0;

const updateName = () => {
    username = document.getElementById("name-field").value;
    if (username == "") {
        return;
    }
    document.getElementById("greeting").innerHTML = "Hello, " + username + "!";
};

const updateColorVVIP1 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonVVIP1").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonVVIP1").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};

const updateColorVVIP2 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonVVIP2").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonVVIP2").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};

const updateColorVVIP3 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonVVIP3").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonVVIP3").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};

const updateColorT1 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT1").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT1").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT2 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT2").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT2").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT3 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT3").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT3").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT4 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT4").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT4").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT5 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT5").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT5").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT6 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT6").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT6").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT7 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT7").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT7").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT8 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT8").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT8").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT9 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT9").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT9").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorT10 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonT10").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonT10").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorB1 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonB1").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonB1").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorB2 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonB2").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonB2").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorB3 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonB3").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonB3").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorB4 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonB4").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonB4").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorB5 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonB5").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonB5").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorB6 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonB6").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonB6").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorB7 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonB7").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonB7").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorC1 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonC1").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonC1").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorC2 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonC2").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonC2").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorC3 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonC3").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonC3").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorC4 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonC4").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonC4").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};


const updateColorCU2 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU2").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU2").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU4 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU4").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU4").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU6 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU6").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU6").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU8 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU8").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU8").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU10 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU10").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU10").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU13 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU13").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU13").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU15 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU15").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU15").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU17 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU17").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU17").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU18 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU18").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU18").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU20 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU20").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU20").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU22 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU22").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU22").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU24 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU24").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU24").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU26 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU26").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU26").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU28 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU28").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU28").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCU30 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCU30").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCU30").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCUE2 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCUE2").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCUE2").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCUE3 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCUE3").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCUE3").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorCUE5 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonCUE5").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonCUE5").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};

// ------ TU ------

const updateColorTU1 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU1").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU1").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU3 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU3").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU3").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU5 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU5").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU5").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU7 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU7").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU7").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU9 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU9").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU9").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU11 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU11").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU11").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU14 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU14").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU14").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU16 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU16").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU16").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU19 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU19").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU19").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU21 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU21").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU21").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU23 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU23").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU23").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU25 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU25").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU25").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU27 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU27").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU27").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU29 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU29").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU29").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU31 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU31").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU31").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTU12 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTU12").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTU12").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTUE1 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTUE1").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTUE1").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};
const updateColorTUE4 = () => {
    let error = "";
    if (username != "Admin") {
        document.getElementById("errorText").style = "color:red;"
    }
    else {
        if (buttonState) {
            buttonState = 0;
            document.getElementById("toggle-buttonTUE4").classList.remove("checked");
        }
        else {
            buttonState = 1;
            document.getElementById("toggle-buttonTUE4").classList.add("checked");
        }
    }

    document.getElementById("errorText").innerHTML = error;
};

// Frontend (HTML and JavaScript)
document.querySelector('#submitButton').addEventListener('click', () => {
    const userInput = document.querySelector('#userInput').value;

    // Make a POST request to the backend API
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
    })
    .then(response => response.json())
    .then(data => {
        // Process the response data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Backend (Node.js with Express.js)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
    const userInput = req.body.userInput;
    // Process the userInput on the backend
    // ...

    // Send a response back to the frontend
    res.json({ message: 'Data received and processed on the backend.' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});




