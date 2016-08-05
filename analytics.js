
     //email js
     function unScramble(eMail1,eMail2,linkText,subjectText,statusText){
     var a,b,c,d,e;a=eMail1;c=linkText;b=eMail2.substring(0,eMail2.length-5);
     if(subjectText!=""){d="?subject="+escape(subjectText);}else{d="";}
     if(statusText!=""){e=" onMouseOver=\"top.status=\'"+statusText+ 
     "\'\;return true\;\" onMouseOut=\"top.status=\'\'\;return true\;\"";}else{e="";}
     document.write("<A HREF=\"mai"+"lto:"+a+"@"+b+d+"\""+e+">"+c+"</A>");}
 
     //js for analytics
     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
     })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
     ga('create', 'UA-67982536-1', 'auto');
     ga('send', 'pageview');