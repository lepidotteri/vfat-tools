$(function() {
    main()
});

const main = async() => {

    let tableData = {
        "title":"Front Page",
        "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
        "rows": [
            ["Harvester DAO               ",`<a href="polygon/harvester"             >Various</a>`,"🌾     ","https://harvester.app/farms"],
        ]
    }

    let table = new AsciiTable().fromJSON(tableData);
    document.getElementById('log').innerHTML += table + '<br />';
    hideLoading();
}
