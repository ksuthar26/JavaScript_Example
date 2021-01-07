try {
    var result = Sum(10, 20); // Sum is not defined yet
}
catch (ex) {
    document.getElementById("errorMessage").innerHTML = ex;
}
finally {
    document.getElementById("message").innerHTML = "finally block executed";
}

///////////////////////////////

try {
    throw "Error occurred";
}
catch (ex) {
    alert(ex);
}


////////////////////////////////


try {
    throw {
        number: 101,
        message: "Error occurred"
    };
}
catch (ex) {
    alert(ex.number + "- " + ex.message);
}