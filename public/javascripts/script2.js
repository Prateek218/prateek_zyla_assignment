const Http = new XMLHttpRequest();
const url='http://localhost:3000/getData?task=task2';
Http.open("GET", url);
var selectedArray = [];

Http.onreadystatechange=(e)=>{
  if (Http.readyState == 4 && Http.status == 200){
    const content = " Within the text of most pages, there are usually a large number of hypertext links to other pages within the wiki. This form of non-linear navigation is more native to a wiki than structured/formalized navigation schemes. Users can also create any number of index or table-of-contents pages, with hierarchical categorization or whatever form of organization they like. These may be challenging to maintain by hand, as multiple authors and users may create and delete pages in an ad hoc, unorganized manner. Wikis can provide one or more ways to categorize or tag pages to support the maintenance of such index pages. Some wikis, including the original, have a backlink feature, which displays all pages that link to a given page. It is also typically possible in a wiki to create links to pages that do not yet exist, as a way to invite others to share what they know about a subject new to the wiki. Wiki users can typically tag pages with categories or keywords, to make it easier for other users to find the article. For example, a user creating a new article on cold weather cycling might tag this page under the categories of commuting, winter sports and bicycling. This would make it easier for other users to find the article. In May 2012 the Indian army started testing the preparedness level of its units and to validate new age technology, battle concepts, organizational structures and networked operations. The Western Army Command conducted its summer training exercises in Punjab and Jammu and Kashmir. Code named Exercise Rudra Akrosh, the war games were aimed at validating the operational and transformational effectiveness of various formations under the Western Army Command. The exercise which entered its culmination phase was also witnessed by Western Army Commander Lt General S R Ghosh. It included various summer training manoeuvres where approximately 20,000 troops tested battle skills with state-of-the-art weapons systems in complete integration with the fighter and transport aircraft provided by the Indian Air Force. Besides interacting with the soldiers and officers co-ordinating the war games, Lt Gen Ghosh witnessed various battle manoeuvres by infantry troops, mechanised infantry, tanks, artillery, Heli-borne troops and surveillance equipment. Unmanned Aerial Vehicles (UAVs) and attack helicopters were also co-opted in the operational scenario. Recently, the Jaipur-based South Western Command—also known as Sapta Shakti command—conducted its summer war games with more than 50,000 troops, latest weaponry and air assets.";
    const contentSplits = content.match(/([ \.\,\-]*)(\w+)([ \.\,\-]*)/g);
    const container = document.getElementById("container");
    var jsonres = JSON.parse(Http.response);
    var x = JSON.parse("[" + jsonres.data + "]");

    let selectedItem = null;
    contentSplits.map((tokenMapping, idt) => {
      const [_, before, token, after] = tokenMapping.match(/([ \.\,\-]*)(\w+)([ \.\,\-]*)/);
      
      const tokenWrapping = document.createElement("span"),
            position = idt;
      
      if (before !== "") {
        container.appendChild(document.createTextNode(before));    
      }
      
      tokenWrapping.appendChild(document.createTextNode(token));
      
      tokenWrapping.addEventListener("click", () => {
        // if (selectedItem) {
        //   selectedItem.classList.remove("selected");
        // }
        var available = false;
        for (var i in selectedArray){
            if(selectedArray[i]==position){
                available = true;
                selectedArray.splice(i, 1);
                // alert(selectedArray);
                break;
            }
        }
        if(!available){
          selectedArray.push(position);
          sendData(selectedArray);
          selectedItem = tokenWrapping;
          selectedItem.classList.add("selected");
        }else{
          selectedItem = tokenWrapping;
          selectedItem.classList.add("deselected");
          sendData(selectedArray);
        }
        
        // store(selectedItem, position);
      });
      for(var i in x){
        var storedPos;
        if(parseInt(x[i]) == 0){
          storedPos = 0;
        }else{
          storedPos = parseInt(x[i]) || null;
        }
        if (storedPos === position) {
            selectedArray.push(x[i]);
            tokenWrapping.classList.add("selected");
            selectedItem = tokenWrapping;
          }
      }
      

      container.appendChild(tokenWrapping);
      if (after != "") {
        container.appendChild(document.createTextNode(after));
      }
    });
        // alert(Http.responseText);
      }
}
Http.send();

function sendData(selectedArray){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open("POST", "http://localhost:3000/task1", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("position="+selectedArray+"&task=task2");
}
