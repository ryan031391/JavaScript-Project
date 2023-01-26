const myButton = document.querySelector(".my-button");

// var template = myTemplate();

// function myTemplate() {
//     return (
//         '<div class="modal"><h3>Instuction</h3><ul style="text-align: left;"><li>1.The blue one is the selected warrior(in action)</li><li>2.The soldier is melee, the mage is ranged</li><li>3.The dark blue area is your range of motion</li><li>4.toggle your mouse on the motion range will turn into green, the<br> selected warrior will move to the place if you click on the green area.</li><li>5. If the enemy is within attack range, you can toggle your mouse on the enemy, <br>the selected warrior will move to the green light spot and attack the enemy.</li></ul><button class="close-button">Collapse</button></div>'
//     )
// }

function onFooClick() {

    myButton.innerHTML = '<div class="modal"><h3>Instuction</h3><ul style="text-align: left;"><li>1.The blue one is the selected warrior(in action)</li><li>2.The soldier is melee, the mage is ranged</li><li>3.The dark blue area is your range of motion</li><li>4.toggle your mouse on the motion range will turn into green, the<br> selected warrior will move to the place if you click on the green area.</li><li>5. If the enemy is within attack range, you can toggle your mouse on the enemy, <br>the selected warrior will move to the green light spot and attack the enemy.</li></ul><button class="close-button">Collapse</button></div>';

    const closeButton = document.querySelector(".close-button");
    const modal = document.querySelector(".modal");
    function onCloseClick() {
        // modal.innerHTML = '';
        modal.remove;
        // myButton.innerHTML = '<button class="my-button" style="position: absolute;">Instruction</button>'
    }

    closeButton.onclick = onCloseClick;
}


myButton.onclick = onFooClick;

