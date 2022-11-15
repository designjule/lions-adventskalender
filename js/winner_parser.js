function readWinners() {
    readTextFile('./resources/sponsorenliste_2022.csv');
}


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if (rawFile.readyState === 4)
        {
            if (rawFile.status === 200 || rawFile.status == 0)
            {
                var rawText = rawFile.responseText;
                console.log(rawText);
                var lines = rawText.split(/\r\n|\n\r|\n|\r/);
                var i = 0;
                while (i < lines.length) {
                    // search next win section
                    while(lines[i].split(';').length < 2){
                        i++;
                    }
                    var cols = lines[i].split(';');
                    for(var j = 0; j < cols.length; j++) {
                        console.log(cols[j]);
                    }
                    i++;
                }
            } else {
                console.log('ERROR reading csv');
            }
        }
    }
    rawFile.send(null);
}