function reverse(str) {
    if (str === "") {
        return "";
    } else {
        let newStr = reverse(str.substr(1)) + str.charAt(0);
        return newStr;
    }
}

reverse('Hello')