function introAlert(msg, gfg) {
    var confirmBox = $("#container");
    
    confirmBox.find(".message").text(msg);
    
    confirmBox.find(".yes").unbind().click(function() {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(gfg);
    confirmBox.show();
}
window.addEventListener('load', function() {
    introAlert("Welcome to my QAP1 website! I chose to showcase 'La Voiture Noire' by Bugatti. I only got my licence last year and know very little about cars, so my original plan was to make a site about the Batmobile. A little bit of research quickly directed me to this one-of-a-kind build by Bugatti. You will find a link to the resource page in this website's nav bar. I hope you enjoy this and I look forward to receiving constructive feedback. Don't forget to click the bat in the nav bar!", function() {
        console.log("Alert confirmed");
    });
});

// Function to calculate the time to pay off the car
const payTime = (biPay) => 16308822.56 / biPay;

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    // Attach event listener to the calculate button
    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', () => {
        console.log('Calculate button clicked');
        
        // Get the bi-weekly payment input value
        const biPayInput = document.getElementById('payment');
        const biPay = parseFloat(biPayInput.value);
        const resultParagraph = document.getElementById('result');

        // Check if the input is a valid number and greater than 0
        if (!isNaN(biPay) && biPay > 0) {
            const time = payTime(biPay);
            const payYears = time / 104;
            resultParagraph.textContent = `It will take approximately ${time.toFixed(0)} bi-weekly payments (${payYears.toFixed(0)} years) to pay off La Voiture Noire.`;
        } else {
            resultParagraph.textContent = 'Please enter a valid number greater than 0.';
        }
    });
});

