
var picList = new Vue({
    el: "#topPic"
});

function timerStart() {
    nextPic();
}
const picCountV = 400;
let curCountV = 200;
const timeEach = 750;
var timer = setInterval(timerStart, 2000+timeEach);

document.getElementById("chromev8").addEventListener("mouseover", function(event) {
    clearInterval(timer);
    lastPicCaller.$el.style.opacity = '0.8';
    nextPicCaller.$el.style.opacity = '0.8';
})
document.getElementById("chromev8").addEventListener("mouseout", function(event) {
    timer = setInterval(timerStart, 2000 + timeEach);
    nextPicCaller.$el.style.opacity = '';
    lastPicCaller.$el.style.opacity = '';
})

var lastPic = function(event) {
    lastPicCaller.isDisabled= true;
    setTimeout(()=>{
        lastPicCaller.isDisabled= false;
    }, timeEach);
    picList.$el.style.transition = '';
    curCountV -= 100;
    picList.$el.style.right = curCountV + "%";
    if (curCountV === 0) {
        setTimeout(() => {
            picList.$el.style.transition = 'none';
            curCountV = picCountV - 100
            picList.$el.style.right = curCountV + "%";
            
        }, timeEach-200)
    }
}
var nextPic = function() {
    nextPicCaller.isDisabled= true;
    setTimeout(()=>{
        nextPicCaller.isDisabled= false;
    }, timeEach);
    picList.$el.style.transition = '';
    curCountV += 100;
    picList.$el.style.right = curCountV + "%";
    if (curCountV === picCountV) {
        setTimeout(() => {
            picList.$el.style.transition = 'none';
            curCountV = 100;
            picList.$el.style.right = curCountV + "%";
        }, timeEach-200)
    }
}
var lastPicCaller = new Vue({
    data: {
        isDisabled: false
    },
    methods: {
        lastPic
    }
}).$mount("#chromev8 .left");
var nextPicCaller = new Vue({
    data: {
        isDisabled: false
    },
    methods: {
        nextPic
    }
}).$mount("#chromev8 .right");
var msgShow = new Vue({
    data: {
        msg: "Getting Start With Vue.js"
    }
}).$mount("#chromev8 .top-title");