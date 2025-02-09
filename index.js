//#region - The elements are collected first
//#region - Items related to the blogview window
var articleStorageMains = document.getElementsByClassName("articlestoragemains");
var aside = document.getElementsByTagName("aside")[0];
var asidelist = document.getElementById("asidelist");
var blogPreviewWindow = document.getElementById("blogPreviewWindow");
var templatearticle = document.getElementsByClassName("articlestoragemains")[0];
var li = document.createElement("li");
var editBtns = document.getElementsByClassName("editBtns");
var deleteBtns = document.getElementsByClassName("deleteBtns");
//#endregion



//#region - Items related to edit blog window
var createNewPost = document.getElementById("createNewPostBtn");
var clearBtn = document.getElementById("clearBtn");
var blogTitleInput = document.getElementById("blogTitleInput");
var blogContentInput = document.getElementById("blogContentInput");
var edititems = document.getElementById("edititems");
var formattingtips = document.getElementById("formattingtips");
var bold = document.getElementById("bold");
var italics = document.getElementById("italics");
var underline = document.getElementById("underline");
var clearformatting = document.getElementById("clearformatting");
var selectedinputbox;
var inputselectionstart;
var inputselectionend;
//#endregion



//#region - Elements from the confirmation boxes
var delbox = document.getElementById("deleteconfirmationbox");
var delinnerbox = document.getElementById("deleteinnerbox");
var delclose= document.getElementById("delclosebutton");
var delyes= document.getElementById("delyes");
var delno= document.getElementById("delno");
var clearbox = document.getElementById("clearconfirmationbox");
var clearinnerbox =document.getElementById("clearinnerbox");
var clearclose= document.getElementById("clearclosebutton");
var clearyes= document.getElementById("clearyes");
var clearno= document.getElementById("clearno");
var filterscreen = document.getElementById("filterscreen");
var formattinginformationbox = document.getElementById("formattinginformationbox");
var formatinfoclosebutton = document.getElementById("formatinfoclosebutton");
var formatinfoinnerbox = document.getElementById("formatinfoinnerbox");
//#endregion



//#region - Items related to runtime logic for the articles
var editmode = false;
var selectedarticlenoeditid;
var selectedarticleno;
var paraelement;
//#endregion



//#region - Elements for the navigation pages
var main = document.getElementsByTagName("main")[0];
var mainarticlescontiner = document.getElementById("mainarticlescontiner");
var blogspage = document.getElementById("blogspage");
var contactpage = document.getElementById("contactpage");
var contactpagemaincontainer = document.getElementById("contactpagemaincontainer");
//#endregion



//#region - Elements for the page numbers
var pagenocontainer = document.getElementById("pagenocontainer");
var ipp = document.getElementById("ipp");
var itemsperpage = ipp.value;
var selectedpage;
var pagenoliner = document.getElementById("pagenoliner");
var jump2first = document.getElementById("jump2first");
var jump2last = document.getElementById("jump2last");
var gotoprevpage = document.getElementById("gotoprevpage");
var gotonextpage = document.getElementById("gotonextpage");
var ellipsiscontainer = document.getElementById("ellipsiscontainer");
var pagenos = document.getElementsByClassName("pagenos");
var pagearr = [];
//#endregion



//#region - Elements for the selected article display page
var articlesdisplaypage = document.getElementById("articlesdisplaypage");
var articleindisplaypageheading = document.getElementById("articleindisplaypageheading");
var articleindisplaypagecontent = document.getElementById("articleindisplaypagecontent");
//#endregion



//#region - Elements related to the search display page
var searchdisplaypage = document.getElementById("searchdisplaypage");
var searchpageheading = document.getElementById("searchpageheading");
var searchresultscontainer = document.getElementById("searchresultscontainer");
var searchbarcontainer = document.getElementById("searchbarcontainer");
var searchbarform = document.getElementById("searchbarform");
var searchbar = document.getElementById("searchbar");
var searchsubmitbtn = document.getElementById("searchsubmitbtn");
//#endregion



//#region - Elements related to the hover search continer
var searchhovercontainer = document.getElementById("searchhovercontainer");
//#endregion



// #endregion - The end region for the whole of elements collection


//#region - Functions related to text formating options are below

bold.addEventListener("click", (e)=>{
    e.preventDefault();
    handlebold(e);
});

italics.addEventListener("click", (e)=>{
    e.preventDefault();
    handleitalics(e);
});

underline.addEventListener("click", (e)=>{
    e.preventDefault();
    handleunderline(e);
});

formattingtips.addEventListener("click", (e)=>{
    e.preventDefault();
    infoboxon();
});

clearformatting.addEventListener("click", (e)=>{
    e.preventDefault();
    var tempelemc = document.createElement('p');
    tempelemc.innerHTML = DOMPurify.sanitize(blogContentInput.value);
    blogContentInput.value = tempelemc.textContent;

    var tempelemh = document.createElement('p');
    tempelemh.innerHTML = DOMPurify.sanitize(blogTitleInput.value);
    blogTitleInput.value = tempelemh.textContent;
});

function handlebold(e){
    
    // console.log("bold was clicked!");

    // console.log("start index: " + inputselectionstart + " end index: " + inputselectionend);
    if(inputselectionstart != inputselectionend){
        console.log(selectedinputbox);
        if(selectedinputbox === "blogContentInput"){
            var textvalue = DOMPurify.sanitize(blogContentInput.value);
            var text1 = textvalue.slice(0, inputselectionstart);
            // console.log(text1);
            var text2 = textvalue.slice(inputselectionstart, inputselectionend);
            // console.log(text2);
            var text3 = textvalue.slice(inputselectionend, textvalue.length);
            // console.log(text3);
            var newtext = text1 + "<b>" + text2 + "</b>" + text3;
            blogContentInput.focus();
            // blogContentInput.setSelectionRange(inputselectionstart, inputselectionend);
            blogContentInput.value = newtext;
            inputselectionstart = 0;
            inputselectionend = 0;
        }
        if(selectedinputbox === "blogTitleInput"){
            var textvalue = DOMPurify.sanitize(blogTitleInput.value);
            var text1 = textvalue.slice(0, inputselectionstart);
            // console.log(text1);
            var text2 = textvalue.slice(inputselectionstart, inputselectionend);
            // console.log(text2);
            var text3 = textvalue.slice(inputselectionend, textvalue.length);
            // console.log(text3);
            var newtext = text1 + "<b>" + text2 + "</b>" + text3;
            blogTitleInput.focus();
            // blogContentInput.setSelectionRange(inputselectionstart, inputselectionend);
            blogTitleInput.value = newtext;
            inputselectionstart = 0;
            inputselectionend = 0;
        }

    bold.removeEventListener("click", handlebold);
    }
}

function handleitalics(e){

    // console.log("italics was clicked!");
    if(inputselectionstart != inputselectionend){
        if(selectedinputbox === "blogContentInput"){
            var textvalue = DOMPurify.sanitize(blogContentInput.value);
            var text1 = textvalue.slice(0, inputselectionstart);
            var text2 = textvalue.slice(inputselectionstart, inputselectionend);
            var text3 = textvalue.slice(inputselectionend, textvalue.length);
            var newtext = text1 + "<i>" + text2 + "</i>" + text3;
            blogContentInput.focus();
            blogContentInput.value = newtext;
            inputselectionstart = 0;
            inputselectionend = 0;
        }
        if(selectedinputbox === "blogTitleInput"){
            var textvalue = DOMPurify.sanitize(blogTitleInput.value);
            var text1 = textvalue.slice(0, inputselectionstart);
            var text2 = textvalue.slice(inputselectionstart, inputselectionend);
            var text3 = textvalue.slice(inputselectionend, textvalue.length);
            var newtext = text1 + "<i>" + text2 + "</i>" + text3;
            blogTitleInput.focus();
            blogTitleInput.value = newtext;
            inputselectionstart = 0;
            inputselectionend = 0;
        }

    italics.removeEventListener("click", handleitalics);
    }
}

function handleunderline(e){

    // console.log("bold was clicked!");
    if(inputselectionstart != inputselectionend){
        if(selectedinputbox === "blogContentInput"){
            var textvalue = DOMPurify.sanitize(blogContentInput.value);
            var text1 = textvalue.slice(0, inputselectionstart);
            var text2 = textvalue.slice(inputselectionstart, inputselectionend);
            var text3 = textvalue.slice(inputselectionend, textvalue.length);
            var newtext = text1 + "<u>" + text2 + "</u>" + text3;
            blogContentInput.focus();
            blogContentInput.value = newtext;
            inputselectionstart = 0;
            inputselectionend = 0;
        }
        if(selectedinputbox === "blogTitleInput"){
            var textvalue = DOMPurify.sanitize(blogTitleInput.value);
            var text1 = textvalue.slice(0, inputselectionstart);
            var text2 = textvalue.slice(inputselectionstart, inputselectionend);
            var text3 = textvalue.slice(inputselectionend, textvalue.length);
            var newtext = text1 + "<u>" + text2 + "</u>" + text3;
            blogTitleInput.focus();
            blogTitleInput.value = newtext;
            inputselectionstart = 0;
            inputselectionend = 0;
        }

    underline.removeEventListener("click", handleunderline);
    }
}


function selecttext(e) {
    inputselectionstart = e.target.selectionStart;
    inputselectionend = e.target.selectionEnd;
    selectedinputbox = e.target.id;
    selectedtext = e.target.value.substring(inputselectionstart, inputselectionend);
    // console.log("Text listener returned: " + selectedtext);
    // bold.addEventListener("click", handlebold);
    // italics.addEventListener("click", handleitalics);
    // underline.addEventListener("click", handleunderline);
}
   
    


function addtextlisten(){
    blogContentInput.addEventListener("select", selecttext);
}

function removetextlisten(){
    blogContentInput.removeEventListener("select", selecttext);
}

blogContentInput.addEventListener("focus", addtextlisten);
blogContentInput.addEventListener("blur", removetextlisten);


function addheadinglisten(){
    blogTitleInput.addEventListener("select", selecttext);
}

function removeheadinglisten(){
    blogTitleInput.removeEventListener("select", selecttext);
}

blogTitleInput.addEventListener("focus", addheadinglisten);
blogTitleInput.addEventListener("blur", removeheadinglisten);
//#endregion



//#region - The main page display logic is below

function displayblogs() {
    main.style.justifyContent= "flex-start";
    mainarticlescontiner.style.display = "flex";
    contactpagemaincontainer.style.display = "none";
    articlesdisplaypage.style.display = "none";
    searchdisplaypage.style.display = "none";
    resetarticlepage();
}

function displaycontact() {

    mainarticlescontiner.style.display = "none";
    articlesdisplaypage.style.display = "none";
    main.style.justifyContent= "flex-start";
    contactpagemaincontainer.style.display = "flex";
    searchdisplaypage.style.display = "none";

}

blogspage.addEventListener("click", displayblogs);
contactpage.addEventListener("click", displaycontact);
//#endregion



//#region - The confirmation box handling logic is below

function disableUI() {
    main.classList.add("disableuserinteractions");
    filterscreen.style.display="block";
}

function enableUI() {
    main.classList.remove("disableuserinteractions");
    filterscreen.style.display="none";
}

function delboxon() {
    delbox.style.display = "block";
    disableUI();
}

function delboxoff() {
    delbox.style.display = "none";
    enableUI();
}


function confirmdel() {
    return new Promise((resolve, reject) => {
        delyes.addEventListener("click", handleYes);
        delno.addEventListener("click", handleNo);
        delclose.addEventListener("click", handleNo);
        document.body.addEventListener("click", handlebody);

        function handleYes() {
            cleanup();
            // console.log("Yes was clicked on delbox");
            resolve(true);
        }

        function handlebody() {
            if ((delbox.style.display === "block") && (event.target != delbox) && (event.target != delinnerbox) && (event.target.className != "deleteBtns")) {
                cleanup();
                // console.log("body NO was activated from delbox");
                reject(true);
           }
        }

        function handleNo() {
            cleanup();
            // console.log("handleNO was activated from delbox");
            reject(true);
        }

        function cleanup() {
            delyes.removeEventListener("click", handleYes);
            delno.removeEventListener("click", handleNo);
            delclose.removeEventListener("click", handleNo);
            document.body.removeEventListener("click", handlebody);
            delboxoff();
        }
    })
}

function clearboxon() {
    clearbox.style.display = "block";
    disableUI();
}

function clearboxoff() {
    clearbox.style.display = "none";
    enableUI();
}

function infoboxon(){
    formattinginformationbox.style.display = "block";
    disableUI();
}

function infoboxoff(){
    formattinginformationbox.style.display = "none";
    enableUI();
}

formatinfoclosebutton.onclick = infoboxoff;

clearclose.onclick = clearboxoff;
clearyes.onclick = ()=> {
  
    clearboxoff();
    editModeOff();
    blogTitleInput.value = "";
    blogContentInput.value = "";
}

clearno.onclick = clearboxoff;

document.body.onclick = function(event) {

    if ((clearbox.style.display === "block") && (event.target != (clearinnerbox) && event.target != (clearbox)) && (event.target !=clearBtn)) {
         clearboxoff();
        //  console.log(event.target);
    }

    if ((formattinginformationbox.style.display === "block") && !(formattinginformationbox.contains(event.target)) && (event.target !=formattingtips)) {
        infoboxoff();
       //  console.log(event.target);
   }
}
//#endregion



//#region - The page number handling functions are below


ipp.onchange = ()=>{
    if(articleStorageMains.length > 1) {
    itemsperpage = ipp.value;
    pushpage();
    j2l();
    // console.log("ipp was changed");
    // console.log("ipp is now: " + itemsperpage);
    }
};


function deselectpages() {
    var pc1 = [...pagenoliner.getElementsByClassName("pagenos")];
    pc1.forEach((p) => p.classList.remove("selectedpage"));
}

function pagearticlesdisplay(pgn){
    
    // First blanks out all the articles

    articlescount = [...articleStorageMains];
    articlescount.forEach(a => a.style.display = "none");
    var currentitemsperpage = parseInt(ipp.value);
    
    // Need to display articles starting from
    // console.log("the value of ipp from pagearticlessisplay() is " + currentitemsperpage);
    var sindex = (pgn-1) * currentitemsperpage;
    var eindex = (sindex + currentitemsperpage );
  
    for (let a = (sindex+1); a <= (eindex); a++){
        if(articlescount[a]){
        // console.log("The current item no for this page is " + a);
        articlescount[a].style.display = "block";
        }
    }
}

jump2first.addEventListener("click", ()=>{
//   deselectpages() is only about the color of the text
    deselectpages();
    pagenoliner.children[0].classList.add("selectedpage");
// The function below has both clear article display and display correct article in it
    pagearticlesdisplay(1);
});

function j2l(){
    var lastpage = pagenoliner.getElementsByClassName("pagenos").length;
    deselectpages();
    pagenoliner.children[lastpage-1].classList.add("selectedpage");
    pagearticlesdisplay(lastpage);
}

jump2last.addEventListener("click", ()=>{
    j2l();
})

gotoprevpage.addEventListener("click", ()=>{
    
    
    var currentpage = parseInt(pagenoliner.getElementsByClassName("selectedpage")[0].id.substring(6));
    
    if (currentpage != 1){
    deselectpages();
    pagenoliner.children[currentpage-2].classList.add("selectedpage");
    
    pagearticlesdisplay((currentpage-1));
    };
});

gotonextpage.addEventListener("click", ()=>{
    
    
    var currentpage = parseInt(pagenoliner.getElementsByClassName("selectedpage")[0].id.substring(6));
    
    if (currentpage != pagenoliner.children.length){
    deselectpages();
    pagenoliner.children[currentpage].classList.add("selectedpage");
    
    pagearticlesdisplay((currentpage+1));
    };
});

function inductpage(newpage){
  
    pagenoliner.children[newpage-1].addEventListener("click", (e) => {
        selectedpage = e.target.id.substring(6);
        deselectpages();
        e.target.classList.add("selectedpage");
        pagearticlesdisplay(selectedpage);
        // console.log('page no '+selectedpage+' was clicked');
        
    });
    // j2l();
    
}



function resetliner() {

    // A static collection is created to ensure that the loops refer to the original item at an index
    var pcs =  [...pagenoliner.getElementsByClassName("pagenos")];
    
    // console.log("before reset from resetliner: " + [...pagenoliner.children]);
    // All the pageno items inside pagenoliner are removeds
    pcs.forEach(p => p.remove());
    // console.log("after reset from resetliner: " , [...pagenoliner.children]);
}

function pushpage() {
    // pagearr is emptied first on each article creation
    pagearr = [];

        
    var tc = 1;
    for (let c = 0; c < (articleStorageMains.length-1); c++) {
        if ((c+1)%itemsperpage === 0) {
            pagearr.push(tc);
        
            tc++;
            
        }

    }

    if ((articleStorageMains.length-1)%itemsperpage >0) {
        pagearr.push(tc);
        
    }
    // console.log("before pageliner reset: ", [...pagenoliner.children]);
    resetliner();   
    // console.log("after pageliner reset: ", [...pagenoliner.children]);
    pagearr.forEach(popliner);
    pagearr.forEach(inductpage);
    j2l();
    // console.log("after pageliner pop: ", [...pagenoliner.children]);
    // console.log("The pages array is now: " + pagearr);
}

function popliner(pno){
 // Adding the corresponding elements to the pagenoliner
 
    var newdiv = document.createElement("div");
    newdiv.classList.add("pagenos");
    newdiv.id = (`pageno${pno}`);
    newdiv.innerHTML = pno;
    pagenoliner.appendChild(newdiv);

}
//#endregion



//#region - The main article display page functions are below

function displayarticlepage(){

    mainarticlescontiner.style.display = "none";
    contactpagemaincontainer.style.display = "none";
    searchdisplaypage.style.display = "none";
    articlesdisplaypage.style.display = "flex";
    main.style.justifyContent= "center";
    
}

function resetarticlepage(){
    articleindisplaypageheading.innerHTML = "";
    articleindisplaypagecontent.innerHTML = "";

}
//#endregion



//#region - Functions related to searchdisplay page are below

function displaysearch() {
    searchdisplaypage.style.display = "flex";
    mainarticlescontiner.style.display = "none";
    contactpagemaincontainer.style.display = "none";
    articlesdisplaypage.style.display = "none";
    resetarticlepage();
    
}

function resetsearchresults() {
    tempartarr = [];
    var searchcont = [...searchresultscontainer.children];
    // searchbar.input="";
    
    if (searchcont.length>=1) {
    searchcont.forEach(c => {
        if(c){
        c.remove() 
        }
    });
    }
    
}

function searchblogs() {

    var searchcont = [...searchresultscontainer.children];
    var userquery = DOMPurify.sanitize(searchbar.value);
    // console.log("The text " + userquery + " was entered in searchbar");

    // Template container to copy is below
    var searchh3 = document.createElement("h3");
    searchh3.className = "searchh3";
    var searchp = document.createElement("p");
    searchp.className =  "searchp";
    var searchart = document.createElement("article");
    searchart.className = "searchart";
    searchart.append(searchh3, searchp);
    searchp.innerHTML = userquery;
    var tempartarr = [];
    
        
        var compartstor = [...articleStorageMains];
        compartstor.splice(0,1);
        
        compartstor.forEach(a => {
        
            // First copy all the elements
            var tempart = searchart.cloneNode(true);
            tempart.querySelector("h3").textContent = a.querySelector("h2").textContent;
            tempart.querySelector("p").textContent = a.querySelector("p").textContent;
            var orginalartref = a.id;
            var tempartref = "tempart_id_" + a.id.substring(8);
            tempart.id = tempartref;
            tempartarr.push(tempart);
            })
            
        tempartarr.forEach(a => {


            if(a.textContent.includes(userquery) && userquery!= ""){
                var artref = a.id;
                var clonesearchart = a.cloneNode(true);
                clonesearchart.className = "searchstoragemains";
                // clonesearchart.id = "searchresult_" + searchresultscontainer.children.length;
                // clonesearchart.querySelector(".editHover").remove();
                clonesearchart.style.display = "block";
                var searchheading = clonesearchart.querySelector("h3");
                searchheading.addEventListener("click", (e) => {
                    // console.log("The orginal art id is " + artref);
                    articleindisplaypageheading.innerHTML = e.target.innerHTML;
                    articleindisplaypagecontent.innerHTML = clonesearchart.querySelector("p").innerHTML;
                    displayarticlepage();

                });
                searchresultscontainer.appendChild(clonesearchart);
            }


        });
        // console.log("length of search container is " + searchresultscontainer.children.length);
        if(searchresultscontainer.children.length === 0){
            var noresultp = document.createElement("p");
            noresultp.innerHTML = "There are no results to display...";
            noresultp.id = "noresultp";
            searchresultscontainer.appendChild(noresultp);

        }

}

searchsubmitbtn.addEventListener("click", (e) =>{
    e.preventDefault();
    
    resetsearchresults()
    searchblogs();
    displaysearch();
})
//#endregion



//#region - Functions related to the hover search are below

function displayhoversearch(){
    
    searchhovercontainer.style.display = "block";
    
}

function hidehoversearch(e){
    // console.log("hidehoversearch was activated from " + e.relatedTarget);
    // Contains in conditional checks for condition in children as well
    if(!searchbar.contains(e.target) && !searchhovercontainer.contains(e.target)){
    searchhovercontainer.style.display = "none";
    };

    // if(!searchhovercontainer.contains(e.relatedTarget)){
    //     searchhovercontainer.style.display = "none";
    // }
}

searchbar.addEventListener("focus",displayhoversearch);


searchbar.addEventListener("input", (e)=>{
    var userinput = DOMPurify.sanitize(e.target.value);
    // console.log("'" + e.target.value + "'" + " entered into searchbar");

    var searchhovercontainerchildren = [...searchhovercontainer.children];
    searchhovercontainerchildren.forEach(c => {
        if(c){c.remove()}
    });

    // Template container to copy is below
    var searchhinbar = document.createElement("h3");
    searchhinbar.className = "searchhinbar";
    var searchpinbar = document.createElement("p");
    searchpinbar.className =  "searchpinbar";
    var searchartinbar = document.createElement("article");
    searchartinbar.className = "searchartinbar";
    searchartinbar.append(searchhinbar, searchpinbar);
    searchpinbar.innerHTML = userinput;
    var hovtempartarr = [];


    var hoverartstor = [...articleStorageMains];
    hoverartstor.splice(0,1);
       
        
        hoverartstor.forEach(a => {

            // First copy all the elements
            var hovtempart = searchartinbar.cloneNode(true);
            hovtempart.querySelector("h3").textContent = a.querySelector("h2").textContent;
            hovtempart.querySelector("p").textContent = a.querySelector("p").textContent;
            var orginalartref = a.id;
            var hovtempartref = "hovtempart_id_" + a.id.substring(8);
            hovtempart.id = hovtempartref;
            hovtempartarr.push(hovtempart);
            })



            hovtempartarr.forEach(a => {
            if(a.textContent.includes(userinput) && userinput!= ""){
                var hoverartref = a.id;
                var clonehovsearchart = a.cloneNode(true);
                // clonehovsearchart.className = "hoversearchstoragemains";
                // clonehovsearchart.id = "hoversearchresult_" + searchhovercontainer.children.length;
                // clonehovsearchart.querySelector(".editHover").remove();
                clonehovsearchart.style.display = "block";
                var hovsearchheading = clonehovsearchart.querySelector("h3");
                hovsearchheading.addEventListener("click", (e) => {
                    // console.log("heading on hoversearch was clicked");
                    articleindisplaypageheading.innerHTML = e.target.innerHTML;
                    articleindisplaypagecontent.innerHTML = clonehovsearchart.querySelector("p").innerHTML;
                    searchhovercontainer.style.display = "none";
                    displayarticlepage();

                });
                searchhovercontainer.appendChild(clonehovsearchart);
            }
        })
        // console.log("length of hover search container is " + searchhovercontainer.children.length);
        if(searchhovercontainer.children.length === 0){
            var noresultphov = document.createElement("p");
            noresultphov.innerHTML = "There are no results to display...";
            noresultphov.id = "hovernoresultp";
            searchhovercontainer.appendChild(noresultphov);

        }

})

document.addEventListener("mousedown",hidehoversearch);
// searchbar.addEventListener("blur", hidehoversearch);
//#endregion



//#region - Posts creation function below

function editModeOn() {
    editmode = true;
    createNewPost.innerHTML = "Update Post";
}

function editModeOff() {
    editmode = false;
    createNewPost.innerHTML = "Create New Post";
}

function normalCreateNewPost() {
    if((blogTitleInput.value != "" || blogContentInput.value != "") && editmode == false) {

        var templateclone = templatearticle.cloneNode(true);
        var liclone = li.cloneNode(true);
        // The latestarticleCount value will be static as the length property value is extracted from the Live HTML collection below
        var latestarticleCount = articleStorageMains.length;

        
        templateclone.id = "article_" + latestarticleCount;
        liclone.id = "asideitem_" + latestarticleCount;
        liclone.classList.add("asideitems");
        // Need to grab the inputs from the #blogTitleInput and #blogContentInput and put these into the articles
        if(blogTitleInput.value == "") {
        templateclone.querySelector("h2").innerHTML = "Blog Post # " + latestarticleCount;
        liclone.innerHTML = "Blog Post # " + latestarticleCount;
        }
        else{
        templateclone.querySelector("h2").innerHTML = DOMPurify.sanitize(blogTitleInput.value);
        liclone.innerHTML = DOMPurify.sanitize(blogTitleInput.value);
        }
        templateclone.querySelector("p").innerHTML = DOMPurify.sanitize(blogContentInput.value);
        templateclone.querySelector(".editHover").id = "editHover_" + latestarticleCount;
        templateclone.querySelector(".editBtns").id = "editBtns_" + latestarticleCount;
        templateclone.querySelector(".deleteBtns").id = "deleteBtns_" + latestarticleCount;
        
        // The click event to redirect to article pages are below

        // var latestartind = articleStorageMains.length-1;
        // var latestasidein = latestartind -1;
        // var latestartheading = articleStorageMains[latestartind].getElementsByClassName("articleHeading")[0];
        // latestartheading.addEventListener("click", () =>{
        //     console.log("article no " + latestartind + " was clicked");
        // })
        
        templateclone.querySelector("h2").addEventListener("click", (e) =>{
            
            articleindisplaypageheading.innerHTML = e.target.innerHTML;
            articleindisplaypagecontent.innerHTML = templateclone.querySelector("p").innerHTML;
            displayarticlepage();
        })


        
        
        
        
        blogPreviewWindow.appendChild(templateclone);
        asidelist.appendChild(liclone);

        
        

        blogTitleInput.value="";
        blogContentInput.value="";


        
        // console.log(templateclone.id + " was created");
        // The latestarticleCount value is not updated automatically in this iteration after appendChild is used after variable declaration
        
        // starting with the index 1 here because the original template article is present in DOM, but is hidden from view
        pushpage();
    // End of the blank value check below
    }
// End of the normalCreateNewPost function below
}

function updatePost() {
  
    if (editmode == true){
    
    if(blogTitleInput.value == ""){
    blogPreviewWindow.querySelector("#article_"+selectedarticleno).querySelector("h2").innerHTML = "Blog Post # " + selectedarticleno;
    asidelist.querySelector("#asideitem_" + selectedarticleno).innerHTML = "Blog Post # " + selectedarticleno;
    }
    else {
    blogPreviewWindow.querySelector("#article_"+selectedarticleno).querySelector("h2").innerHTML = DOMPurify.sanitize(blogTitleInput.value);
    asidelist.querySelector("#asideitem_" + selectedarticleno).innerHTML = DOMPurify.sanitize(blogTitleInput.value);
    }
    blogPreviewWindow.querySelector("#article_"+selectedarticleno).querySelector("p").innerHTML =  DOMPurify.sanitize(blogContentInput.value);
    blogTitleInput.value="";
    blogContentInput.value="";
    editModeOff();
    }
}

createNewPost.addEventListener("click", (e) => {
    
    
    e.preventDefault();
    
    normalCreateNewPost();
    // The latestarticleCount will be 1 more that the total number of articles visible to the user

    // The latestarticleCount var below is stored as a primitive static number, which doesn't update with the DOM
    var latestarticleCount = articleStorageMains.length;
    
    // The event listeners added on each article needs to be removed on article delete as well
    editBtns[latestarticleCount-1].addEventListener("click", (e) =>{
        
        // Need to collect the index of the object from the 'e'

        // console.log("Edit article no." + (latestarticleCount -1) + " was clicked");
    

        editModeOn();
        // e.target selects the node element corresponding to the object from which the event was triggered
        selectedarticlenoeditid = e.target.id;
        selectedarticleno = selectedarticlenoeditid.substring(9);
        var titleedit = blogPreviewWindow.querySelector("#article_"+selectedarticleno).querySelector("h2").innerHTML
        var textedit = blogPreviewWindow.querySelector("#article_"+selectedarticleno).querySelector("p").innerHTML
        
        blogTitleInput.value = titleedit;
        blogContentInput.value = textedit;

        // After the input textboxes are populated with existing content, the user is able to modify content as necessary

        // Ensure that the text is amended to the same articleno after editing it in the input fields

        createNewPost.addEventListener("click", () =>{

        //    Here the edit clicked may not necessarily be from the last article item
        
        updatePost();

        })
    })
    deleteBtns[latestarticleCount-1].addEventListener("click", (e) =>{

        e.preventDefault();
        var selectedarticle = e.target.parentNode.parentNode;
        // console.log("Delete original article_" + (latestarticleCount -1 ) + " was clicked");
        // console.log("Delete was clicked on " + selectedarticle.id);

        // if ( confirm("Are you sure you want to delete this blog?") == true) {
        delboxon();
        var vconfirmdel = confirmdel();
        vconfirmdel.then(x => {
            // console.log("OK was clicked on original" + (latestarticleCount -1 ));
            // console.log("OK was clicked on latest" + selectedarticle.id);
            var selectedarticleidno = selectedarticle.id.substring(8);
            // The asideitems below will not be dynamically name adjusted as queryselectorall method is used
            var asideitems = document.querySelectorAll(".asideitems");
            var selectedasideitem = asidelist.querySelector("#asideitem_" + selectedarticleidno);
            // if the vconfirmdel is invoked multiple times from the same selectedarticle target, subsequent articles are not removed
            // console.log("The number of articles before deletion: " + articleStorageMains.length -1);
            selectedarticle.remove();
            selectedasideitem.remove();
            // console.log("article " + selectedarticleidno + " was removed");

            // Now need to offset the id nos of elements below the deleted element by -1
            var countafterdel = (articleStorageMains.length -1);
            // console.log("No of articles now is " + countafterdel);
            for (let i=selectedarticleidno; i <= countafterdel; i++) {

                articleStorageMains[i].id = "article_" + i;
                asideitems[i].id = "asideitem_" + i;

                articleStorageMains[i].querySelector(".editHover").id = "editHover_" + i;
                articleStorageMains[i].querySelector(".editBtns").id = "editBtns_" + i;
                articleStorageMains[i].querySelector(".deleteBtns").id = "deleteBtns_" + i;
                
                if( (articleStorageMains[i].querySelector("h2").innerHTML.indexOf("Blog Post # ") == 0) )

                {
                    articleStorageMains[i].querySelector("h2").innerHTML = "Blog Post # " + i;
                    // asideitems[i].innerHTML = "Blog Post # " + i;
                
                }
                
                try {
                    if( (asideitems[i] && asideitems[i].innerHTML.indexOf("Blog Post # ") === 0))

                    {
                        asideitems[i].innerHTML = "Blog Post # " + i;
                        // console.log(asideitems[i]);
                    } 
                    

                } catch(error) {
                    console.error(`Error at index: ${i}`, error);
                }

            } 
            pushpage();
            j2l();

        }).catch(y => console.log("catch: No was activated on delbox"));
    })

})

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if ((blogTitleInput.value != "") || (blogContentInput.value != "")) {
        clearboxon();
        // The rest of the clearbox logic from the clearyes.onclick function
    }
})
//#endregion

