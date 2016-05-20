var sw1="5z3Rqt$24=13533%583%0423&13213123rew";	var sw2="#z3R^qt$24=(135$332%325-8304zz2z#z13";	var sw3="%#203R^qt%$24=(1%35$332%%325-83%04%4";var sw4=sw1.substr(2,4)+sw2.substr(5,3)+sw3.substr(7,1);


function searchFile(name){
var vroot='nodata/rs/article/d1/';
 
	rstr=vroot+findex(name)   ;
	 
return rstr;
}

function findex(input){
var fileName='';
	switch (input){
	case "1-1":
		fileName='1-1 Ruiqing Shen.pdf';
		break;
	case "1-2":
		fileName='1-2 Yuchau Hsiao.pdf';
		break;
	case "2-1":
		fileName='2-1 Jiun-Shiung Wu.pdf';
		break;
	case "2-2":
		fileName='2-2 Siaw-Fong Chung & Suet-Ching Soon.pdf';
		break;
	case "2-3":
		fileName='2-3 Jie Huang.pdf';
		break;
	case "3-1":
		fileName='3-1 Miao-Ling Hsieh and Jen-I Li.pdf';
		break;
	case "3-2":
		fileName='3-2 Boban Arsenijevica, Frantisek Kratochvilb &  Joanna Ut-Seong Sioc.pdf';
		break;
	case "4-1":
		fileName='4-1 Elizabeth Zeitoun.pdf';
		break;
	case "4-2":
		fileName='4-2 Henry Y. Chang.pdf';
		break;
	case "5-1":
		fileName='5-1 Chung-Yu Chen.pdf';
		break;
	case "5-2":
		fileName='5-2 Ching-Fen Hsu.pdf';
		break;
	case "6-1":
		fileName='6-1 Hsin-I Hsieh.pdf';
		break;
	case "6-2":
		fileName='6-2 Yuwen Liu & Shu-Kai Hsieh.pdf';
		break;
	case "7-1":
		fileName='7-1';
		break;
	case "7-2":
		fileName='7-2 Chinfa Lien.pdf';
		break;
	case "8-1":
		fileName='8-1';
		break;
	case "8-2":
		fileName='8-2 Karl Neergaard & Chu-Ren Huang.pdf';
		break;
	case "9-1":
		fileName='9-1 Yuwen Lai.pdf';
		break;
	case "9-2":
		fileName='9-2 Shu-Ing Shyu & Tsung-lin Tung.pdf';
		break;
	case "9-3":
		fileName='9-3 Wai-Sum Lee.pdf';
		break;
	default:

	}
	return fileName;

}