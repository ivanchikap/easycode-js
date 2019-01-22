const dropDowns = document.querySelectorAll('.dropdown-item');

for (let dropDown of dropDowns) {
    dropDown.addEventListener('click', function() {
        // console.log(dropDown.target);
        dropDown.children[1].classList.toggle('d-none');
    });
}