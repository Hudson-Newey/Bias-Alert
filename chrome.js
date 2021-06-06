let find_indexes = (leaning_bias, to_return) => {
    var re = /,[A-Za-z.]+/g,
        str = leaning_bias;

    index_locations = []
    while ((match = re.exec(str)) != null) {
        index_locations.push(match.index);
    }

    for (let i = 0; i < index_locations.length - 1; i++) {
        if (leaning_bias.substring(index_locations[i] + 1, index_locations[i + 1]) == window.location.hostname) {
            return to_return;
        }
    }

    return false
}

let check_bias = (hostname) => {
    const obj = JSON.parse(bias_classifications);

    // find if the website contains left bias
    leaning_bias = "," + obj.left;
    bias_notification = find_indexes(leaning_bias, "Political Bias: Left");
    if (bias_notification != false) { return bias_notification; }

    // find if the website contains left leaning bias
    leaning_bias = "," + obj.leaning_left;
    bias_notification = find_indexes(leaning_bias, "Political Bias: Leaning Left");
    if (bias_notification != false) { return bias_notification; }

    // find if the website contains right leaning bias
    leaning_bias = "," + obj.leaning_right;
    bias_notification = find_indexes(leaning_bias, "Political Bias: Leaning Right");
    if (bias_notification != false) { return bias_notification; }

    // find if the website contains right bias
    leaning_bias = "," + obj.right;
    bias_notification = find_indexes(leaning_bias, "Political Bias: Right");
    if (bias_notification != false) { return bias_notification; }

    // find if the website is a extremist source
    leaning_bias = "," + obj.extreme;
    bias_notification = find_indexes(leaning_bias, "Political Radicalisation: Extremist");
    if (bias_notification != false) { return bias_notification; }

    // find if the website is a satirical source
    leaning_bias = "," + obj.satirical;
    bias_notification = find_indexes(leaning_bias, "Satirical Source");
    if (bias_notification != false) { return bias_notification; }

    return false
}

let website_leaning = check_bias(window.location.hostname);

if (website_leaning != false) {
    // replace {{LEANING}} with the news source leaning
    banner_source_updated = banner_source.replace("{{LEANING}}", website_leaning);

    // append the banner
    block_to_insert = document.createElement("div");
    block_to_insert.innerHTML = banner_source_updated;

    document.getElementsByTagName("html")[0].appendChild(block_to_insert);
}
