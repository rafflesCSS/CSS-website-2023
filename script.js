track = document.getElementById("image-track");
image = document.getElementById("image");
popup = document.getElementById("pop-up");

// track.onclick = openpopup()

//toggle var

var list = [
    { title: 'Project 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas quas unde vitae sapiente veritatis eum! Fugit ipsam excepturi tempora dolorum id cupiditate. Fugiat numquam quae cum sapiente quis illum.', img: 'images/proj1.png' },
    { title: 'Project 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas quas unde vitae sapiente veritatis eum! Fugit ipsam excepturi tempora dolorum id cupiditate. Fugiat numquam quae cum sapiente quis illum.', img: 'images/proj2.png' },
    { title: 'Data Science', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas quas unde vitae sapiente veritatis eum! Fugit ipsam excepturi tempora dolorum id cupiditate. Fugiat numquam quae cum sapiente quis illum.', img: 'images/datascience.jpg' },
    { title: 'Web Development', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas quas unde vitae sapiente veritatis eum! Fugit ipsam excepturi tempora dolorum id cupiditate. Fugiat numquam quae cum sapiente quis illum.', img: 'images/webdev.webp' },
    { title: 'Cybersecurity', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas quas unde vitae sapiente veritatis eum! Fugit ipsam excepturi tempora dolorum id cupiditate. Fugiat numquam quae cum sapiente quis illum.', img: 'images/cybersecurity.jpg' },
    { title: 'Competitive Programming', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas quas unde vitae sapiente veritatis eum! Fugit ipsam excepturi tempora dolorum id cupiditate. Fugiat numquam quae cum sapiente quis illum.', img: 'images/competitiveprogramming.jpg' }
];
// setTimeout(() => {}, 5000);

function openpopup(clicked_id) {
    track.style.animation = "fade-out 1s forwards";
    setTimeout(() => {popup.style.display = "block"}, 1000);
    setTimeout(() => { popup.style.animation = "fade-in 2s forwards"  }, 1000);
    
    document.getElementById("content").innerHTML = list[clicked_id].content;
    document.getElementById("title").innerHTML = list[clicked_id].title;
    document.getElementById("myimg").src = list[clicked_id].img;
}

function closepopup() {
    popup.style.animation = "fade-out 1s forwards";
    setTimeout(() => {popup.style.display = "none"}, 1000);
    setTimeout(() => { track.style.animation = "fade-in 2s forwards"  }, 1000);

}



window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    // track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;


    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

   track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"});

    for(const image of track.getElementsByClassName("image")) {
        // image.style.objectPosition =`${nextPercentage + 100}% 50%`
        image.animate({
            objectPosition: `${nextPercentage + 100}% 50%`
        }, {duration: 1200, fill: "forwards"});
    }
 
}
var i = 0;
var txt = 'Welcome to CSS!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  setTimeout(() => { document.getElementById("about-content").style.animation = "fade-in 2s forwards"  }, 1200);
}


// Math.min(nextPercentage, 0);
// Math.max(nextPercentage, -70);
