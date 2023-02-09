function validate() {
    let first_name = document.getElementById("f_name").value;
    let last_name = document.getElementById("l_name").value;
    let email = document.getElementById("email").value;
    let package = document.getElementById("pack").value;
    let arr_date = document.getElementById("a_date").value;
    let n_persons = document.getElementById("person").value;
    let avails1 = document.getElementById("check1").value;
    let avails2 = document.getElementById("check2").value;

    let checkmail =
        /^[a-z 0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z 0-9-]+(?:\.[a-z 0-9-]+)*$/;

    if (first_name == "") {
        alert("Please enter first name");
        return false;
    } else if (last_name == "" || last_name == null) {
        alert("Please enter last name");
        return false;
    } else if (!checkmail.test(email)) {
        // alert("enter valid mail id in the format abc123@gmail.com");
        document.getElementById("m_mail").innerHTML = "Enter mail id";
        return false;
    } else if (package == "Select") {
        alert("Select your package");
        return false;
    } else if (arr_date == "") {
        alert("Please enter arrival date");
        return false;
    } else if (n_persons == "") {
        alert("Enter no of persons");
        return false;
    } else if (
        document.getElementById("ag").checked == false &&
        document.getElementById("dg").checked == false
    ) {
        alert("select availability");
        return false;
    } else if (
        document.getElementById("check1").checked == false &&
        document.getElementById("check2").checked == false
    ) {
        alert("select terms & conditions");
        return false;
    } else {
        return true;
    }
}
