function myFunction() {

    var checkBox = document.querySelector("#test");
    var text = document.querySelector(".food");


    if (checkBox.checked == true) {
        document.querySelector('.food-introduction').classList.add('hidden');
        document.querySelector('.food-introduction--hidden').classList.remove('hidden');
        
    } else {
        document.querySelector('.food-introduction').classList.remove('hidden');
        document.querySelector('.food-introduction--hidden').classList.add('hidden');
        
    }

    if (checkBox.checked == true) {
        document.querySelector('.cats-footer').classList.add('hidden');
        document.querySelector('.cats-footer--hidden').classList.remove('hidden');
    } else {
        document.querySelector('.cats-footer').classList.remove('hidden');
        document.querySelector('.cats-footer--hidden').classList.add('hidden');
    }

}
