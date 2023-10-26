let page = 0;
$(document).ready(function () {
    
    updateDisplay()
    $('#up').on('click', function () {
        
        if (page > 0) page--;
        updateDisplay();
        console.log(page);
    });

    $('#down').on('click', function () {
        if (page < 6) page++;
        updateDisplay();
        console.log(page);
    });
});


function updateDisplay() {
    
    $('#baner, #yellowFlowers, #imageText, #images3, #redFlowers, #palace, #gallery').hide();
    

    if (page === 0) {
        //document.getElementById('change').style.backgroundColor = "green";
        $('#baner').show();
    } else if (page === 1) {
        document.getElementById('change').style.backgroundColor = 'aqua';
        $('#baner').hide();
        $('#imageText').show();
        //$('#change').css('justify-content', 'center');
    } else if (page === 2) {
        window.scrollTo(0, -document.body.scrollHeight);
        document.getElementById('change').style.backgroundColor = 'rgb(222, 49, 99)';
        $('#imageText').hide();
        $('#yellowFlowers').show();
        $('#yellowFlowersImage').show();
        $('#zolteKwiatyA').show();
        $('#zolteKwiatyFrame').show();
        $('#sec').show();
        $('#text-container').show();
        //$('#change').css('justify-content', 'start');
    } else if (page === 3) {
        window.scrollTo(0, -document.body.scrollHeight);
        document.getElementById('change').style.backgroundColor = 'rgb(0, 10, 200)';
        $('#yellowFlowers').hide();
        $('#yellowFlowersImage').hide();
        $('#zolteKwiatyA').hide();
        $('#zolteKwiatyFrame').hide();
        $('#sec').hide();
        $('#text-container').hide();
        //document.getElementById('content').style.backgroundColor = "grey";
        //$('#change').css('justify-content', 'center');
        $('#images3').show();
        $('#kobietaMatka').show();
        $('#kobietaA').show();
        $('#kobietaRama').show();
        $('#morze').show();
        $('#morzeNoga').show();
        $('#morzeRamka').show();
        $('#morzeBezFaceta').show();
        $('#schody').show();
        $('#schodyOwal').show();
        //window.scrollTo(0, 0);
        //window.scrollTo(0, -document.body.scrollHeight);
        // Decline centering by resetting it to "flex-start" when page is 3
    }
    else if (page === 4) {
        //window.scrollTo(0, -document.body.scrollHeight);
        document.getElementById('change').style.backgroundColor = 'rgb(100, 10, 50)';
        $('#images3').hide();
        $('#kobietaMatka').hide();
        $('#kobietaA').hide();
        $('#kobietaRama').hide();
        $('#morze').hide();
        $('#morzeNoga').hide();
        $('#schody').hide();
        $('#redFlowers').show();
        $('#czerwoneKwiaty').show();
        //window.scrollTo(0, 0);
        //window.scrollTo(0, -document.body.scrollHeight);
        // Decline centering by resetting it to "flex-start" when page is 3
    }
    else if (page === 5) {
        //window.scrollTo(0, -document.body.scrollHeight);
        document.getElementById('change').style.backgroundColor = "orange";
        $('#redFlowers').hide();
        $('#czerwoneKwiaty').hide();
        $('#palace').show();
        $('#palac').show();
        $('#luwr').show();
        //window.scrollTo(0, 0);
        //window.scrollTo(0, -document.body.scrollHeight);
        // Decline centering by resetting it to "flex-start" when page is 3
    }
    else if (page === 6) {
        //window.scrollTo(0, -document.body.scrollHeight);
        document.getElementById('change').style.backgroundColor = "red";
        $('#palac').hide();
        $('#gallery').show();
        $('#displayed-image').show();
        $('.image').show();
        $('.image-container').show();
        //window.scrollTo(0, 0);
        //window.scrollTo(0, -document.body.scrollHeight);
        // Decline centering by resetting it to "flex-start" when page is 3
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");
    const viewer = document.getElementById("image-viewer");
    const displayedImage = document.getElementById("displayed-image");
    const displayedImageNumber = document.getElementById("displayed-image-number");
    let currentImage = null;
    images.forEach(image => {
        image.addEventListener("click", function () {
            const src = this.querySelector("img").getAttribute("src"); // Corrected line
            const imageNumber = this.getAttribute("data-image-number");
            if (currentImage) {
                // Remove the frame from the previously clicked image
                currentImage.classList.remove('frame');
            }
    
            // Add the frame to the clicked image
            image.classList.add('frame');
    
            // Set the clicked image as the current image
            currentImage = image;
            // Update the displayed image
            displayedImage.src = src;
            displayedImageNumber.innerText = imageNumber;

            // Update the thumbnail
            images.forEach(thumbnail => {
                thumbnail.classList.remove("selected");
            });
            this.classList.add("selected");
        });
    });
});


