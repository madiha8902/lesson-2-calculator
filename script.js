function gethistroy() {
    return document.getElementById("history-value").innerText
}
function printhistroy(num) {
    document.getElementById("hirstory-value").innerText = num
}
function getoutput() {
    return document.getElementById("output-value").innerText
}
function printoutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num
    }
    else {
        document.getElementById("output-value").innerText = getformatednumber(num)
    }
}
function getformatednumber(num){
    if (num=="-"){
        return ""
    }
    var n= Number(num)
    var value=n.toLocaleString("en")
    return value
}