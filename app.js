const SpeechToText = window.speechRecognition || window.webkitSpeechRecognition;



class speechRecognitionApi{
    constructor(options) {
        const SpeechToText = window.speechRecognition || window.webkitSpeechRecognition;
        this.speechApi = new SpeechToText();
        this.output = options.output ? options.output : document.createElement("div");
        this.speechApi.contiunous = true;
        this.speechApi.interinResult = false;
        this.speechApi.onresult = (event) => {
            var resultIndex = event.resultIndex;
            var transcript = event.results[resultIndex][0].transcript;
            this.output.textContent = transcript;
        }
    }
    init() {
        this.speechApi.start();
    }
    stop() {
        this.speechApi.stop();
    }
}
window.onload = function () {
    var speech = new speechRecognitionApi({
        output: document.querySelector("output");
    })

    document.querySelector("btn-start").addElementLister("click", () => {
        speech.init(),
    })
    document.querySelector("btn-end").addElementLister("click", () => {
        speech.stop(),
    })
}