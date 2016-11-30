
	function getCookie(c_name) {
		var i, x, y, ARRcookies = document.cookie.split(";");
		for (i = 0; i < ARRcookies.length; i++) {
			x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
			y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
			x = x.replace(/^\s+|\s+$/g, "");
			if (x == c_name) {
				return unescape(y);
			}
		}
	}

	function setCookie(c_name, value, exdays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = c_name + "=" + c_value;
	}
	
	function verify_Html5FileApi_IsSupported()
	{
		if (window.File && window.FileReader && window.FileList && window.Blob) 
			return true;
		else
			return false;
	}
	
	function verify_FileSelection_IsValid(inputFile)
	{
		if (!inputFile) 
		{
			alert(ui.translations['error_file_not_found']);
		}
		else if (!inputFile.files) 
		{
			alert(ui.translations['error_browser_not_supported']);
		}
		else if (!inputFile.files[0]) 
		{
			alert(ui.translations['ask_select_file']);
		}
		else 
		{
			return true;
		}
							
		return false;
	}
	
	function hideOverlay(overlayContentId) {
		var o = document.getElementById('overlay');
		o.style.visibility = 'hidden';
		$('#' + overlayContentId).css("display","none");
	}
		
	function showOverlay(overlayContentId) {
		var o = document.getElementById('overlay');
		o.style.visibility = 'visible';
		$('#' + overlayContentId).css("display","inline");
		$('#' + overlayContentId).center();
	}
	
	function progressBar_Show(divID)
	{
		$('#' + divID).append('<div id="progress_bar"><div class="percent" >0%</div></div>'); 
		$(".percent").css("width", "0%");
		$(".percent").text("0%");
		document.getElementById('progress_bar').className = 'loading';
	}
	
	function progressBar_Hide()
	{
		document.getElementById('progress_bar').className='';
		//setTimeout("$('#progress_bar').remove(); ", 1250);
		$('#progress_bar').remove();
	}
	
	function progressBar_update( nbOfPostSent, totalNbOfPost) 
	{
		var percentLoaded = Math.round((nbOfPostSent / totalNbOfPost) * 100);
		// Increase the progress bar length.
		if (percentLoaded < 100) {
			$(".percent").css("width", percentLoaded + "%");
			$(".percent").text(percentLoaded + "%");
		}
	}		
	
	function progressBar_Display100percent()
	{
		$(".percent").css("width", "100%");
		$(".percent").text("100%");
	}
	
	function fakeProgressBar_update( durationInMs, callbackAtTheEnd) 
	{
		var nbOfInterval = durationInMs / 100;
		
		progressBar_update( fakeProgressBar_update.counter, 100);
		fakeProgressBar_update.counter++;
			
		if(fakeProgressBar_update.counter < 101)
		{
			setTimeout( function(){
				fakeProgressBar_update(durationInMs, callbackAtTheEnd);
			}, nbOfInterval);
		}
		else
		{
			progressBar_Display100percent();
			
			if (callbackAtTheEnd) 
				callbackAtTheEnd();
				
			fakeProgressBar_Hide();
			setTimeout("hideOverlay();", 1500);
			fakeProgressBar_update.counter = 0;
		}
	}		
	fakeProgressBar_update.counter = 0;	
	
	function fakeProgressBar_Launch(divID, durationInMs, callbackAtTheEnd)
	{
		progressBar_Show(divID);
		
		fakeProgressBar_update( durationInMs, callbackAtTheEnd);
	}
		
	function fakeProgressBar_Hide()
	{
		progressBar_Hide(); 
	}
	
	function isFloat(val) {
	    if(!val || (typeof val != "string" || val.constructor != String)) {
		          return(false);
		             }
            var isNumber = !isNaN(new Number(val));
            if(isNumber) {
                     if(val.indexOf('.') != -1) {
                            return(true);
                      } else {
                                 return(false);
                       }
            } else {
                  return(false);
              }
	}

	function is_Int_Or_Float(value){ 

		if (value == "" )
			return false;

	  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
	       return true;
	   } else {
		   return isFloat(value)
	   } 
	}

	function is_int(value){ 

		if (value == "" )
			return false;

		if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
	       return true;
		} else { 
	      return false;
		} 
	}
	
	function is_int_positive(value){ 

		if (!is_int(value))
			return false;

		if(parseInt(value) < 0){
	       return false;
		} else { 
	      return true;
		} 
	}
	
	$(function() {
			
		$.fn.center = function() {
			this.css({
			'position': 'fixed',
			'left': '50%',
			'top': '50%'
			});
			this.css({
			'margin-left': -this.outerWidth() / 2 + 'px',
			'margin-top': -this.outerHeight() / 2 + 'px'
			});
			return this;
		}
	});