function collectUserInfo() {

    let userInfo = {};

    userInfo.fullName = prompt(" (Jeric Ayson):");

    userInfo.age = parseInt(prompt("20:"), 10);

    userInfo.favoriteNumber = parseInt(prompt("23:"), 10);

    userInfo.favoriteColor = prompt("Black:");

    console.log("User Information Collected:", userInfo);

    return userInfo;
}

collectUserInfo();
