let globalCount = 0;
let globalMultiplier = 1;

const mainClicked = () => {
    globalCount++ * globalMultiplier;
    console.log(globalCount);   
}

const progressBarLogic = () => {
    let progressHandler = [];
    let N = 0;
    if (mainClicked()) {
        if (progressHandler.length <= 8) { 
        progressHandler.push(N++);
        } else if (progressHandler.length === 9) {
            progressHandler = [];
            N = 0;
        }
    }
}