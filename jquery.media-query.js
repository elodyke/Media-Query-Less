less.env ='development';
(function(a){
    a.mediaquery=function(b){
        b||(b=[]);
        var d=d=a("head").append('<link rel="stylesheet/less" type="text/css" media="all" href="#">').children().last();
        var actual = {
            href: d.attr('href')
        }
        a(window).resize(function(){
            var old = {
                href: $("head link[type='text/css']:last").attr('href')
            }
            var e={
                width:a("body").outerWidth(),
                height:a("body").height()
            };
            a.each(b,function(f,c){
                if (e.width+17>=c.minWidth && e.width+17<=c.maxWidth) {
                    actual = c;
                }
            })
            if (actual.href!=old.href) {
                d.attr("href",actual.href);
                if (less.env == 'development') {
                    console.log('changing_stylesheet to ' + actual.href);
                }
                less.sheets.push($('link[href="'+actual.href+'"]')[0]);
                less.refresh();
                
            }
        });
        a(window).resize()

    }
})(jQuery);




/*

Less Modification by elod@moldva.hu

Media Query - jQuery Plugin

Copyright (c) 2011 Brothers Roloff
http://www.brothersroloff.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/