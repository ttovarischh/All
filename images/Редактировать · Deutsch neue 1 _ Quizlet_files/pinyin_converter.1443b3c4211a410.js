(window.QJP=window.QJP||[]).push([["pinyin_converter"],{jGfb:function(n,i,a){var e,u,o;a("JfAA"),a("4mDm"),a("3bBZ"),u=[i,a("cW0E")],void 0===(o="function"==typeof(e=function(n,i){"use strict";var a=i.kotlin.text.takeLast_6ic1pp$,e=i.kotlin.text.toInt_pdl1vz$,u=i.kotlin.text.take_6ic1pp$,o=i.kotlin.text.replace_r2fvfm$,t=i.kotlin.text.contains_li3zpu$,g=i.ensureNotNull,h=i.kotlin.collections.getValue_t9ocha$,l=i.kotlin.text.replace_680rmw$,r=i.kotlin.text.RegexOption,c=i.kotlin.text.Regex_init_sb3q2$,s=i.kotlin.text.Regex_init_61zpoe$,p=i.kotlin.to_ujzrz7$,z=i.kotlin.collections.mapOf_qfcya0$,d=i.Kind.OBJECT,k=i.kotlin.collections.mapCapacity_za3lpa$,_=i.kotlin.ranges.coerceAtLeast_dqglrj$,x=i.kotlin.collections.LinkedHashMap_init_bwtc7$,f=i.kotlin.text.StringBuilder_init_za3lpa$;function m(){v=this,this.pinyinRegex_0=c("(shuang|chuang|zhuang|xiang|qiong|shuai|niang|guang|sheng|kuang|shang|jiong|huang|jiang|shuan|xiong|zhang|zheng|zhong|zhuai|zhuan|qiang|chang|liang|chuan|cheng|chong|chuai|hang|peng|chuo|piao|pian|chua|ping|yang|pang|chui|chun|chen|chan|chou|chao|chai|zhun|mang|meng|weng|shai|shei|miao|zhui|mian|yong|ming|wang|zhuo|zhua|shao|yuan|bing|zhen|fang|feng|zhan|zhou|zhao|zhei|zhai|rang|suan|reng|song|seng|dang|deng|dong|xuan|sang|rong|duan|cuan|cong|ceng|cang|diao|ruan|dian|ding|shou|xing|zuan|jiao|zong|zeng|zang|jian|tang|teng|tong|bian|biao|shan|tuan|huan|xian|huai|tiao|tian|hong|xiao|heng|ying|jing|shen|beng|kuan|kuai|nang|neng|nong|juan|kong|nuan|keng|kang|shua|niao|guan|nian|ting|shuo|guai|ning|quan|qiao|shui|gong|geng|gang|qian|bang|lang|leng|long|qing|ling|luan|shun|lian|liao|zhi|lia|liu|qin|lun|lin|luo|lan|lou|qiu|gai|gei|gao|gou|gan|gen|lao|lei|lai|que|gua|guo|nin|gui|niu|nie|gun|qie|qia|jun|kai|kei|kao|kou|kan|ken|qun|nun|nuo|xia|kua|kuo|nen|kui|nan|nou|kun|jue|nao|nei|hai|hei|hao|hou|han|hen|nai|rou|xiu|jin|hua|huo|tie|hui|tun|tui|hun|tuo|tan|jiu|zai|zei|zao|zou|zan|zen|eng|tou|tao|tei|tai|zuo|zui|xin|zun|jie|jia|run|diu|cai|cao|cou|can|cen|die|dia|xue|rui|cuo|cui|dun|cun|cin|ruo|rua|dui|sai|sao|sou|san|sen|duo|den|dan|dou|suo|sui|dao|sun|dei|zha|zhe|dai|xun|ang|ong|wai|fen|fan|fou|fei|zhu|wei|wan|min|miu|mie|wen|men|lie|chi|cha|che|man|mou|mao|mei|mai|yao|you|yan|chu|pin|pie|yin|pen|pan|pou|pao|shi|sha|she|pei|pai|yue|bin|bie|yun|nüe|lve|shu|ben|ban|bao|bei|bai|lüe|nve|ren|ran|rao|xie|re|ri|si|su|se|ru|sa|cu|ce|ca|ji|ci|zi|zu|ze|za|hu|he|ha|ju|ku|ke|qi|ka|gu|ge|ga|li|lu|le|qu|la|ni|xi|nu|ne|na|ti|tu|te|ta|xu|di|du|de|bo|lv|ba|ai|ei|ao|ou|an|en|er|da|wu|wa|wo|fu|fo|fa|nv|mi|mu|yi|ya|ye|me|mo|ma|pi|pu|po|yu|pa|bi|nü|bu|lü|e|o|a)r?[1-5]",r.IGNORE_CASE),this.asteriskRegex_0=s(".\\*"),this.vowels_0=z([p("a*",0),p("e*",1),p("i*",2),p("o*",3),p("u*",4),p("ü*",5),p("A*",6),p("E*",7),p("I*",8),p("O*",9),p("U*",10),p("Ü*",11)]),this.pinyin_0=z([p(1,["ā","ē","ī","ō","ū","ǖ","Ā","Ē","Ī","Ō","Ū","Ǖ"]),p(2,["á","é","í","ó","ú","ǘ","Á","É","Í","Ó","Ú","Ǘ"]),p(3,["ǎ","ě","ǐ","ǒ","ǔ","ǚ","Ǎ","Ě","Ǐ","Ǒ","Ǔ","Ǚ"]),p(4,["à","è","ì","ò","ù","ǜ","À","È","Ì","Ò","Ù","Ǜ"]),p(5,["a","e","i","o","u","ü","A","E","I","O","U","Ü"])]);var n,i=["a*i","a*o","e*i","ia*","ia*o","ie*","io*","iu*","A*I","A*O","E*I","IA*","IA*O","IE*","IO*","IU*","o*u","ua*","ua*i","ue*","ui*","uo*","üe*","O*U","UA*","UA*I","UE*","UI*","UO*","ÜE*","A*","E*","I*","O*","U*","Ü*","a*","e*","i*","o*","u*","ü*"],a=_(k(i.length),16),e=x(a);for(n=0;n!==i.length;++n){var u=i[n];e.put_xwzc9p$(l(u,"*",""),u)}this.accentMap_0=e}m.prototype.convert=function(n){var i,a=this.pinyinRegex_0;n:do{var e=a.find_905azu$(n);if(null==e){i=n.toString();break n}var u=0,o=n.length,t=f(o);do{var h=g(e);t.append_ezbsdh$(n,u,h.range.start),t.append_gw00v9$(this.getReplacement_0(h.value)),u=h.range.endInclusive+1|0,e=h.next()}while(u<o&&null!=e);u<o&&t.append_ezbsdh$(n,u,o),i=t.toString()}while(0);return i},m.prototype.getReplacement_0=function(n){var i,r=e(a(n,1)),c=o(o(u(n,n.length-1|0),118,252),86,220);for(i=this.accentMap_0.entries.iterator();i.hasNext();){var s=i.next(),p=s.key,z=s.value;if(t(c,p)){var d=g(this.asteriskRegex_0.find_905azu$(z)).value,k=h(this.vowels_0,d),_=h(this.pinyin_0,r)[k];return l(l(c,p,z),d,_)}}return n},m.$metadata$={kind:d,simpleName:"PinyinConverter",interfaces:[]};var v=null;function y(){return null===v&&new m,v}return Object.defineProperty(n,"PinyinConverter",{get:y}),n})?e.apply(i,u):e)||(n.exports=o)}}]);