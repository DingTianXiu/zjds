var by = function(name){
  return function(o,p){
    var  a, b;
    if (typeof o === "object"  && typeof p === "object"  && o && p) {
      a= o[name];
      b= p[name];
      if(a === b) {
        return 0;
      }
      if (typeof a === typeof  b) {
        return  a > b ? -1 : 1;
      }
      return typeof  a > typeof b ? -1 : 1;
    }
    else
    {
      throw  ("error");
    }
  }
}//根据对象的指定值,排序json
var sjjson={
    's2009':{"swbmsr":"250539890000","sssr":"159678240000","fssr":"90861650000","sbjjsr":"72647710000",
      "gesds":"30294630000", "qysds":"27194190000","qs":"108012340.97","yys":"66361610000",
      "zys":"667470000","tdsys":"7214670000","cjs":"12174280000","yhs":"2894590000","tdzzs":"4893680000",
      "fcs":"6862890000","ccs":"1111130000","yys1":"9080000","gdzys":"0","ddzctjs":"0","qt":"0","bsj":""},
    's2010':{"swbmsr":"333287360889.54","sssr":"223826436070.4","fssr":"109460924819.14","sbjjsr":"86464895561.6",
      "gesds":"37635986761.5", "qysds":"31411335094.82","qs":"22793749375.87","yys":"81667784964.08",
      "zys":"635496211.59","tdsys":"6754318347.17","cjs":"14991866453.76","yhs":"4037329137.37","tdzzs":"10669496534.23",
      "fcs":"7196532677.52","ccs":"1619785828.54","yys1":"6679523.92","gdzys":"4406040426.19","ddzctjs":"34733.84","qt":"0","bsj":""},
    's2011':{"swbmsr":"412236089338.63","sssr":"268879726397.75","fssr":"143356362940.88","sbjjsr":"114437870675.5",
      "gesds":"46335433406.12", "qysds":"40869615982.58","qs":"23417103299.87","yys": "91570922072.33",
      "zys":"849658272.9","tdsys":"8549932615.98","cjs":"20968568268.41","yhs":"4536471991.14","tdzzs":"14804854445.16",
      "fcs":"9919444764.38","ccs":"1913374872.43","yys1":"6565347.68","gdzys":"5137517940.88","ddzctjs":"0","qt":"263117.89","bsj":""},
    's2012':{"swbmsr":"464395987675.28","sssr":"292377839960.03","fssr":"172018147715.25","sbjjsr":"141244175955.41",
      "gesds":"44714604445.67", "qysds":"46271162236.68","qs":"19272160633.26","yys": "106349154542.23",
      "zys":"840632770.33","tdsys":"10539872915.5","cjs":"22769862625.3","yhs":"4623524842.49","tdzzs":"14972975198.81",
      "fcs":"12693544403.69","ccs":"2848763273.45","yys1":"9045868.07","gdzys":"6472536204.55","ddzctjs":"0","qt":"0","bsj":""},
    's2013':{"swbmsr":"501989643322.49","sssr":"306701742424.95","fssr":"195737930897.54","sbjjsr":"163593975289.27",
      "gesds":"37635986761.5", "qysds":"44222721896.93","qs": "25420295232.35","yys":"106714655599.53",
      "zys":"922897004.06","tdsys":"10244882001.29","cjs":"24138677788.37","yhs":"5254002911.66","tdzzs":"18653318104.34",
      "fcs":"13410835453.52","ccs":"3385725310.58","yys1":"9465623.84","gdzys":"5870060530.32","ddzctjs":"24331.6","qt":"0","bsj":""},
    's2014':{"swbmsr":"565040758264.88","sssr":"332951406699.56","fssr":"232089351565.32","sbjjsr":"197640855710.24",
      "gesds":"54383303903.51", "qysds": "52005365610.39","qs":"26709150427.51","yys":"108630211982.03",
      "zys":"930176185.43","tdsys":"12104243744.4","cjs":"25424802184.29","yhs":"6176915485.14","tdzzs":"20572195802.33",
      "fcs":"15842920830.92", "ccs":"3845796841.95","yys1":"2293620.56","gdzys":"6324030081.1","ddzctjs":"0","qt":"0","bsj":""},
    's2015':{"swbmsr":"617189729892.61","sssr":"354558024653.14","fssr":"262631705239.47","sbjjsr":"225575319808.64",
      "gesds":"65307064268.53", "qysds":"50187341480.91","qs":"23837122150.29","yys": "117788246689.45",
      "zys":"1139599865.66","tdsys":"13180548063.45","cjs":"27599018959.48","yhs":"6872862099.17","tdzzs":"20611246442.72",
      "fcs":"17665093251.9","ccs":"4202603376.93","yys1":"1310898.07","gdzys":"6165967106.58","ddzctjs":"0","qt":"0","bsj":""},
  }//公共历史数据
