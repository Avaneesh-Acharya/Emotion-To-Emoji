//https://teachablemachine.withgoogle.com/models/WmWyqPIwU/
prediction1 = ""
prediction2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90,
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_img" src= "' + data_uri + '">'
    })
}
console.log("ml5version ", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WmWyqPIwU/model.json", modelLoaded)
function modelLoaded() {
    console.log("Model_loaded")
}
function speak() {
    s = window.speechSynthesis;
    data_1 = "The First Prediction is " + prediction1
    data_2 = "The Second Prediction is " + prediction2
    u = new SpeechSynthesisUtterance(data_1 + data_2)
    s.speak(u)
}
function check() {
    img = document.getElementById("capture_img")
    classifier.classify(img, got_result)
}
function got_result(error, result) {
    if (error) {
        console.error(error)
    }
    else (console.log(result)) 
        document.getElementById("result_emotion_name").innerHTML=result[0].label
        document.getElementById("result_emotion_name2").innerHTML=result[1].label
        prediction1=result[0].label
        prediction2=result[1].label
        if (result[0].label=="Neutral") {
            document.getElementById("update_emoji").innerHTML="&#x1F610;"
        }
        if (result[0].label=="Smile") {
            document.getElementById("update_emoji").innerHTML="&#x1F600;"
        }
        if (result[0].label=="Scared Face") {
            document.getElementById("update_emoji").innerHTML="&#x1F631;"
        }
        if (result[0].label=="Winking") {
            document.getElementById("update_emoji").innerHTML="&#x1F609"
        }
        if (result[0].label=="Angry") {
            document.getElementById("update_emoji").innerHTML="&#x1F621;"
        }
        if (result[0].label=="Sleepy") {
            document.getElementById("update_emoji").innerHTML="&#x1F62A;"
        }
        if (result[1].label=="Neutral") {
            document.getElementById("update_emoji2").innerHTML="&#x1F610;"
        }
        if (result[1].label=="Smile") {
            document.getElementById("update_emoji2").innerHTML="&#x1F600;"
        }
        if (result[1].label=="Scared Face") {
            document.getElementById("update_emoji2").innerHTML="&#x1F631;"
        }
        if (result[1].label=="Winking") {
            document.getElementById("update_emoji2").innerHTML="&#x1F609"
        }
        if (result[1].label=="Angry") {
            document.getElementById("update_emoji2").innerHTML="&#x1F621;"
        }
        if (result[1].label=="Sleepy") {
            document.getElementById("update_emoji2").innerHTML="&#x1F62A;"
        }
        speak()
    }

