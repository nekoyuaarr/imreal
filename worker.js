self.addEventListener('message', function(e) {
    while(1) {
      const url=document.GetElementById("url").value;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    callback(xmlHttp.responseText);
            }
        document.write("999");
            xmlHttp.open("GET",url, true);
            xmlHttp.send(null);
    }
}, false);
