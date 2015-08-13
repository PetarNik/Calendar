function createCalendar(selector, events) {

    var container = document.querySelector(selector);
    var dayBox = document.createElement('div');
    dayBox.className = 'dayBox';
    var titleBox = document.createElement('div');
    titleBox.className = 'titleBox';
    var titleText = document.createElement('h4');
    titleText.className = 'title-text';
    var content = document.createElement('div');
    content.className = 'content';


    titleBox.appendChild(titleText);
    dayBox.appendChild(titleBox);
    dayBox.appendChild(content);


    var eventCount = events.length;
    var monthDays = 30;
    var dFrag = document.createDocumentFragment();
    var weekDays = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']



    //style
    container.style.width = 7 * 170 + 'px';
    dayBox.style.width = '150px';
    dayBox.style.height = '150px';
    dayBox.style.border = '1px solid black';
    dayBox.style.display = 'inline-block';

    titleText.style.width = '150px';
    titleText.style.height = '20px';
    titleText.style.border = '1px solid black';
    titleText.style.margin = '0px';
    content.style.width = '150px';
    content.style.height = '128px';
    content.innerHTML = '&nbsp';
    



    function createDayBoxes() {
        var boxList = [];
        for (var i = 0; i < monthDays; i++) {
            boxList.push(dayBox.cloneNode(true));
        }
        return boxList;
    }

    var boxList = createDayBoxes()

    var currentSelection = null;
    function clickEvent(ev) {
        var titleBox = this.querySelector('.titleBox');
        if (currentSelection) {
            currentSelection.querySelector('.titleBox').style.background = '';
        }

        if (currentSelection == this) {
            titleBox.style.background = '';
            currentSelection = null;
        }
        else {
            titleBox.style.background = 'yellow';
            currentSelection = this
        }
    }

    function mouseover() {
        var titleBox = this.querySelector('.title-text');
        titleBox.style.background = 'orange';
    }

    function mouseout() {
        var titleBox = this.querySelector('.title-text');
            titleBox.style.background = '';  
    }


    function dayBoxContent(event) {
        for (var i = 0; i < monthDays; i++) {
            var box = boxList[i];
            var dayIndex = i % 7;
            var day = weekDays[dayIndex]
            
            box.querySelector('h4').innerHTML = day + ' ' + (i + 1) + ' June 2014';
            box.addEventListener('click', clickEvent, false);
            box.addEventListener('mouseover', mouseover, false);
            box.addEventListener('mouseout', mouseout, false);
            dFrag.appendChild(box);
        }

    }

    function createcontent() {
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            var date = event.date;
            boxList[date].querySelector('.content').innerHTML = event.title + ' ' + event.hour;
        }
       
    }
    
    createcontent();
    dayBoxContent();
    container.appendChild(dFrag);
    
    
    console.log(container);
}