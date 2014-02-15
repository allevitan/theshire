window.onload = function(){
    backgroundify();
};

window.onresize = function(){
    backgroundify();
};


function backgroundify(){
    var body = document.body;
    var html = document.documentElement;
    var docheight = Math.max( body.scrollHeight, body.offsetHeight, 
			      html.clientHeight, html.scrollHeight,
			      html.offsetHeight );
    var match; var bmatch; var flow; var bflow;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var background = document.getElementById('background');
    var bwidth = background.width
    var bheight = background.height;
    var scrollOnHeight = true;
    var maxbuff = (width * bheight/bwidth - height);
    var center = maxbuff / 2;
    if (width/height >= bwidth/bheight){
	background.style.width = width;
	background.style.height = 'auto';
    } else {
	background.style.height = height;
	background.style.width = 'auto';
	scrollOnHeight = false;
	maxbuff = (height * bwidth/bheight - width);
	center = maxbuff / 2;
    }
    console.log(maxbuff);
    var scrollbuff = docheight - height;
    var scrollstart = 0;
    var scrollconst = maxbuff / scrollbuff;
    if (scrollbuff / 2 < maxbuff){
	scrollstart = -(center - scrollbuff / 4);
	scrollconst = 0.5;
    }
    var scrolled = document.body.scrollTop;
    if (scrollOnHeight){
	background.style.top = scrollstart - scrolled * scrollconst;
	background.style.left = 0;
    } else {
	background.style.left = scrollstart - scrolled * scrollconst;
	background.style.top = 0;
    }
    console.log(scrollstart,scrollconst);

    window.onscroll = function(){
	var scrolled = document.body.scrollTop;
	if (scrollOnHeight){
	    background.style.top = scrollstart - scrolled * scrollconst;
	} else {
	    background.style.left = scrollstart - scrolled * scrollconst;
	}
	console.log(scrollstart + scrolled * scrollconst);
    }

};


