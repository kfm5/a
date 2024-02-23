function changeTheme() {
    switch (document.getElementById("themeDino").value) {
        case "default":
            location.href = location.href.replace(/\/[^\/]*$/, '/');
            break;
        case "hurdling":
            location.href = location.href.replace(/\/[^\/]*$/, '/1_hurdling');
            break;
        case "gymnastics":
            location.href = location.href.replace(/\/[^\/]*$/, '/2_gymnastics');
            break;
        case "surfing":
            location.href = location.href.replace(/\/[^\/]*$/, '/3_surfing');
            break;
        case "swimming":
            location.href = location.href.replace(/\/[^\/]*$/, '/4_swimming');
            break;
        case "equestrian":
            location.href = location.href.replace(/\/[^\/]*$/, '/5_equestrian');
            break;
    }
}
