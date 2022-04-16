function excelClipBoardToMarkdown(clipBoardText){
    if ( clipBoardText == '' || clipBoardText == null ) return '';
    let cr = clipBoardText.split('\r\n');
    var ret = '', fil = '', hli = '';
    for (var i=0; i<cr.length; i++ ){
        if ( i == cr.length -1 && cr[i] == '' )break;
        fil = cr[i].split('\t');
        for(var n=0;n<fil.length; n++ ){
            var d = fil[n].toString();
            d=d.replace(/\n/g,'<br>').replace(/^\"|\"$/g,'');
            ret += '|'+d;
            if ( i== 0 ) hli += '|' + '-'.repeat( d.length > 3 ? d.length : 3 );
        }
        ret +="|\n" ;
        if (i==0){
            hli += "|\n";
            ret += hli;
        }
    }
    return ret;
}
