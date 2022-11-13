
			var img1 = null;
			var img2 = null;
			var zajak ;
			var zelka ;
			var finish ;
			var count ;
			var setting = null;

            function start(){
			   img1 = document.getElementById('zajak');
			   img2 = document.getElementById('zelka');
               img1.style.position= 'absolute'; 
               img1.style.left = '0px'; 
               img2.style.position= 'absolute'; 
               img2.style.left = '0px'; 
			   zajak = 0;
			   zelka = 0;
			   finish = 70;
			   count = 0;
               var button=document.getElementById("button");
               button.addEventListener("click",start1,false);
            }
			 function start1(){
				setTimeout(function(){document.getElementById("h3").innerHTML="Igrata zapocna";},500);
				gogo();
            }

			function gogo(){
				setting = setInterval(function(){ position();}, 1000);
			}

		function position()
         {  
			 if ( zelka != finish && zajak != finish ){
			 move_zelka();
             move_zajak();
             print();
        	 }

			 count += 1;
             if(zajak == zelka && zajak!=0 && zelka!=0)
             {
                window.alert("OUCH");
             }
			 if (zajak >= finish || zelka >= finish ){
		     if ( zelka >= zajak )
				
                window.alert("Pobednik e: ZELKATA");
             else
				
                window.alert("Pobednik e: ZAJAKOT\n Trkata traese "+count+"sekundi");
			 clearInterval(setting);
			}

		} 

		 function print()
		 {
		 for ( var i = 1; i <= finish; i++ )
         {	
            if ( i == zelka && i == zajak ){
			 img1.style.left = 10*i + 'px';
			 img2.style.left = 10*i + 'px';}
             else if ( i == zajak )
             img1.style.left = 10*i + 'px';
              else if ( i == zelka )
             img2.style.left = 10*i + 'px';
             else {}
         } 
		 }

		 function move_zajak()
		 {
			var x;
			x = Math.floor((Math.random()*10)+1);
			if ( x == 1 || x == 2 )
				zajak = zajak;
			else if ( x == 3 || x == 4 )
				zajak = zajak + 9; 
			else if (x == 5)
				zajak = zajak - 12;
			else if ( x >= 6 && x <= 8 )
				zajak = zajak + 1;
			else
				zajak = zajak - 2;	

			if ( zajak < 1 )
			zajak = 1;
			else if ( zajak > finish )
			zajak = finish;
		}

		function move_zelka()
		 {
			var x;
			x = Math.floor((Math.random()*10)+1);
			if ( x >=1 && x <= 5 )
				zelka = zelka + 3;
			else if ( x == 6 || x == 7 )
				zelka = zelka - 6;
			else
			    zelka = zelka + 1;

			if ( zelka < 1 )
			zelka = 1;
			else if ( zelka > finish )
			zelka = finish;
         } 

            window.addEventListener("load",start,false);