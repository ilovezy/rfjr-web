<template>
  <div class="login-container">
    <h1 style='text-align: center;'>
      朗潤金融合约明细
    </h1>
    <div style="text-align: center;">
      <div class="spe-btn el-button el-button--primary el-button--large" @click="downLoadNewContrast">
        下载最新合约明细
      </div>
    </div>
    <div style='padding: 15px 50px;'>
      <table  class='el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition'>
   <col width="90" class="xl66" style='mso-width-source:userset;mso-width-alt:2633;'/>
   <col width="118.17" class="xl67" style='mso-width-source:userset;mso-width-alt:3457;'/>
   <col width="78.67" class="xl67" style='mso-width-source:userset;mso-width-alt:2301;'/>
   <col width="167.58" class="xl67" style='mso-width-source:userset;mso-width-alt:4902;'/>
   <col width="98.67" class="xl67" style='mso-width-source:userset;mso-width-alt:2886;'/>
   <col width="186.17" class="xl67" style='mso-width-source:userset;mso-width-alt:5446;'/>
   <col width="117.42" class="xl67" style='mso-width-source:userset;mso-width-alt:3435;'/>
   <col width="113.75" class="xl67" style='mso-width-source:userset;mso-width-alt:3620;'/>
   <col width="0" class="xl67" style='display:none;mso-width-source:userset;mso-width-alt:3917;'/>
   <col width="121.50" class="xl67" style='mso-width-source:userset;mso-width-alt:3554;'/>
   <col width="127.50" class="xl67" style='mso-width-source:userset;mso-width-alt:3730;'/>
   <col width="125" class="xl67" style='mso-width-source:userset;mso-width-alt:13311;'/>
   <col width="150" class="xl67" style='mso-width-source:userset;mso-width-alt:4388;'/>
   <col width="150" span="16371" class="xl67" style='mso-width-source:userset;mso-width-alt:2369;'/>
   <tr height="30" style='height:18.00pt;mso-height-source:userset;mso-height-alt:360;'>
    <td class="xl69 spe-text" height="30" style='height:18.00pt;' x:str>换算</td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl82"></td>
   </tr>
   <tr height="30" style='height:18.00pt;mso-height-source:userset;mso-height-alt:360;'>
    <td class="xl69" height="30" style='height:18.00pt;'></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl70"></td>
    <td class="xl82"></td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl69 spe-text" height="35" style='height:21.00pt;' x:str>类型</td>
    <td class="xl70" x:str>产品名称</td>
    <td class="xl70" x:str>代码</td>
    <td class="xl70" x:str>合约大小</td>
    <td class="xl70" x:str>手续费</td>
    <td class="xl70" x:str>最小波动</td>
    <td class="xl70" x:str>交易保证金</td>
    <td class="xl70" x:str>强平风险度</td>
    <td class="xl70" x:str><span style='display:none;'>强平保证金/手</span></td>
    <td class="xl70" x:str>隔夜保证金/手</td>
    <td class="xl70" x:str>隔周保证金/手</td>
    <td class="xl70" x:str>交易时间</td>
    <td class="xl75" x:str>强平时间</td>
   </tr>
   <tr height="35" class="xl65" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl69 spe-text" height="105" rowspan="3" style='height:63.00pt;' x:str>能源期货</td>
    <td class="xl71" x:str>原油</td>
    <td class="xl71" x:str>CL</td>
    <td class="xl71" x:str>1，000桶</td>
    <td class="xl71" rowspan="6" style='' x:str>34美金</td>
    <td class="xl71" x:str>0.01=10美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl72" rowspan="27" style='' x:str>风险率大于等于150%</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
    <td class="xl73" rowspan="6" style='' x:str>06：00-05:00（夏令时）<br/><br/>07:00-06：00（冬令时）</td>
    <td class="xl83" rowspan="6" style='' x:str>4:30（夏令时）<br/><br/>5:30（冬令时）</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>小原油</td>
    <td class="xl71" x:str>QM</td>
    <td class="xl71" x:str>500桶</td>
    <td class="xl71" x:str>0.025=12.50美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>天然气</td>
    <td class="xl71" x:str>NG</td>
    <td class="xl71" x:str>10,000百万英国热量</td>
    <td class="xl71" x:str>0.001=10美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl69 spe-text" height="105" rowspan="3" style='height:63.00pt;' x:str>金属期货</td>
    <td class="xl71" x:str>纽约金/美黄金</td>
    <td class="xl71" x:str>GC</td>
    <td class="xl71" x:str>100金衡盎司</td>
    <td class="xl71" x:str>0.1=10美金</td>
    <td class="xl71" x:str>450美金</td>
    <td class="xl71" x:str><span style='display:none;'>300美元</span></td>
    <td class="xl71" x:str>1500美金</td>
    <td class="xl71" x:str>2200美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>美白银</td>
    <td class="xl71" x:str>SI</td>
    <td class="xl71" x:str>5000金衡盎司</td>
    <td class="xl71" x:str>0.005=25美金</td>
    <td class="xl71" x:str>450美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1500美金</td>
    <td class="xl71" x:str>2200美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>美精铜</td>
    <td class="xl71" x:str>HG</td>
    <td class="xl71" x:str>25,000磅</td>
    <td class="xl71" x:str>0.0005=12.5美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="61.67" style='height:37.00pt;mso-height-source:userset;mso-height-alt:740;'>
    <td class="xl69 spe-text" height="425.25" rowspan="9" style='height:255.15pt;' x:str>指数期货</td>
    <td class="xl71" x:str>H股指数</td>
    <td class="xl71" x:str>HHI</td>
    <td class="xl71" x:str>50港币</td>
    <td class="xl71" x:str>200港币</td>
    <td class="xl71" x:str>1=50港币</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71"></td>
    <td class="xl71" x:str>不能隔夜</td>
    <td class="xl71" x:str>不能隔周</td>
    <td class="xl73" rowspan="4" style='' x:str>09:15-12:00；13:00-16:30<br/>17:15-03：00</td>
    <td class="xl71" rowspan="4" style='' x:str>16：15/2:30</td>
   </tr>
   <tr height="66.67" style='height:40.00pt;mso-height-source:userset;mso-height-alt:800;'>
    <td class="xl71" x:str>小H股</td>
    <td class="xl71" x:str>MCH</td>
    <td class="xl71" x:str>10港币</td>
    <td class="xl73" x:str>200港币</td>
    <td class="xl71" x:str>1=10港币</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>不能隔夜</td>
    <td class="xl71" x:str>不能隔周</td>
   </tr>
   <tr height="52.25" class="xl65" style='height:31.35pt;mso-height-source:userset;mso-height-alt:627;'>
    <td class="xl71" x:str>恒指</td>
    <td class="xl71" x:str>HSI</td>
    <td class="xl71" x:str>50港币</td>
    <td class="xl71" x:str>200港币</td>
    <td class="xl71" x:str>1=50港币</td>
    <td class="xl71" x:str>450美金</td>
    <td class="xl71" x:str><span style='display:none;'>300美元</span></td>
    <td class="xl71" x:str>不能隔夜</td>
    <td class="xl71" x:str>不能隔周</td>
   </tr>
   <tr height="61.67" style='height:37.00pt;mso-height-source:userset;mso-height-alt:740;'>
    <td class="xl71" x:str>小恒指</td>
    <td class="xl71" x:str>MHI</td>
    <td class="xl71" x:str>10港币</td>
    <td class="xl73" x:str>150港币</td>
    <td class="xl71" x:str>1=10港币</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>不能隔夜</td>
    <td class="xl71" x:str>不能隔周</td>
   </tr>
   <tr height="61.67" style='height:37.00pt;mso-height-source:userset;mso-height-alt:740;'>
    <td class="xl71" x:str>德指</td>
    <td class="xl71" x:str>DAX</td>
    <td class="xl71" x:str>25欧元</td>
    <td class="xl71" rowspan="3" style='' x:str>34美金</td>
    <td class="xl71" x:str>0.5=12.5欧元</td>
    <td class="xl71" x:str>600美金</td>
    <td class="xl71" x:str><span style='display:none;'>600美元</span></td>
    <td class="xl71" x:str>不能隔夜</td>
    <td class="xl71" x:str>不能隔周</td>
    <td class="xl73" x:str>14:00-04:00（夏令时）<br/>8:15-05:00（冬令时）</td>
    <td class="xl73" x:str>3：30（夏令时）<br/>4：30（冬令时）</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>小标普</td>
    <td class="xl71" x:str>ES</td>
    <td class="xl71" x:str>50美元</td>
    <td class="xl71" x:str>0.25=12.5美金</td>
    <td class="xl71" x:str>450美金</td>
    <td class="xl71" x:str><span style='display:none;'>300美元</span></td>
    <td class="xl71" x:num>2500</td>
    <td class="xl71" x:num>3000</td>
    <td class="xl85" rowspan="3" style='' x:str>06：00-05:00（夏令时）<br/><br/>07:00-06：00（冬令时）</td>
    <td class="xl85" rowspan="3" style='' x:str>4：30（夏令时）<br/>5：30（冬令时）</td>
   </tr>
   <tr height="33.33" style='height:20.00pt;mso-height-source:userset;mso-height-alt:400;'>
    <td class="xl71" x:str>小纳指</td>
    <td class="xl71" x:str>NQ</td>
    <td class="xl71" x:str>20美元</td>
    <td class="xl71" x:str>0.25=5美金</td>
    <td class="xl71" x:str>450美金</td>
    <td class="xl71" x:str><span style='display:none;'>300美元</span></td>
    <td class="xl71" x:num>2500</td>
    <td class="xl71" x:num>3000</td>
   </tr>
   <tr height="26" style='height:15.60pt;'>
    <td class="xl71" x:str>小道指</td>
    <td class="xl71" x:str>YM</td>
    <td class="xl71" x:str>25美元</td>
    <td class="xl71" x:str>34美金</td>
    <td class="xl74" x:str>1=5 美金</td>
    <td class="xl71" x:str>450美金</td>
    <td class="xl71"></td>
    <td class="xl71" x:num>2500</td>
    <td class="xl71" x:num>3000</td>
   </tr>
   <tr height="27.00" style='height:16.20pt;'>
    <td class="xl71" x:str>A50</td>
    <td class="xl71" x:str>CN</td>
    <td class="xl71" x:str>2.5美元</td>
    <td class="xl71" x:str>34美金</td>
    <td class="xl74" x:str>2.5=2.5 美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71"></td>
    <td class="xl71" x:str>不能隔夜</td>
    <td class="xl71" x:str>不能隔周</td>
    <td class="xl88" x:str><font class="font7"> </font><font class="font6">09:00-16:35;17：00-04:45</font></td>
    <td class="xl84" x:num="0.1875">4:30</td>
   </tr>
   <tr height="26" style='height:15.60pt;'>
    <td class="xl69 spe-text" height="227" rowspan="7" style='height:136.20pt;' x:str>外汇期货</td>
    <td class="xl75" x:str>瑞士法郎</td>
    <td class="xl71" x:str>6S</td>
    <td class="xl71" x:str>CHF 125,000</td>
    <td class="xl71" rowspan="12" style='' x:str>34美金</td>
    <td class="xl74" x:str>0.0001=12.5美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71"></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
    <td class="xl73" rowspan="7" style='' x:str>06：00-05:00（夏令时）<br/><br/>07:00-06：00（冬令时）</td>
    <td class="xl85" rowspan="7" style='' x:str>4:30（夏令时）<br/><br/>5:30（冬令时）</td>
   </tr>
   <tr height="26" style='height:15.60pt;'>
    <td class="xl75" x:str>新西兰元</td>
    <td class="xl71" x:str>6N</td>
    <td class="xl76" x:str>NZD 100,000</td>
    <td class="xl71" x:str>0.0001=10美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71"></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>欧元</td>
    <td class="xl71" x:str>6E</td>
    <td class="xl71" x:str>125,000欧元</td>
    <td class="xl71" x:str>0.00005=6.25美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>澳元</td>
    <td class="xl71" x:str>6A</td>
    <td class="xl71" x:str>100,000澳元</td>
    <td class="xl71" x:str>0.0001=10美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>英镑</td>
    <td class="xl71" x:str>6B</td>
    <td class="xl71" x:str>62,500英镑</td>
    <td class="xl71" x:str>0.0001=6.25美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>加元</td>
    <td class="xl71" x:str>6C</td>
    <td class="xl71" x:str>100,000加元</td>
    <td class="xl71" x:str>0.00005=5美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>日元</td>
    <td class="xl71" x:str>6J</td>
    <td class="xl71" x:str>12,500,000日元</td>
    <td class="xl71" x:str>0.0000005=6.25美金</td>
    <td class="xl71" x:str>450美金</td>
    <td class="xl71" x:str><span style='display:none;'>300美元</span></td>
    <td class="xl71" x:str>1500美金</td>
    <td class="xl71" x:str>2200美金</td>
   </tr>
   <tr height="36.67" style='height:22.00pt;mso-height-source:userset;mso-height-alt:440;'>
    <td class="xl69 spe-text" height="166" rowspan="5" style='height:99.60pt;' x:str>农产品期货</td>
    <td class="xl71" x:str>玉米</td>
    <td class="xl71" x:str>ZC</td>
    <td class="xl71" x:str>5,000蒲式耳</td>
    <td class="xl71" x:str>0.25=12.5美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
    <td class="xl85" rowspan="5" style='' x:str><span style='mso-spacerun:yes;'>&nbsp;</span>08:00 - 20:45；21:30 - 02:20（夏令时）<br/><br/><span style='mso-spacerun:yes;'>&nbsp;</span>09:00 - 21:45；22:30 - 03:20（冬令时）</td>
    <td class="xl85" rowspan="5" style='' x:str>2：10（夏令时）<br/><br/>3：10（冬令时）</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>豆油</td>
    <td class="xl71" x:str>ZL</td>
    <td class="xl71" x:str>60，000磅</td>
    <td class="xl71" x:str>0.01=6美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="33.33" style='height:20.00pt;mso-height-source:userset;mso-height-alt:400;'>
    <td class="xl71" x:str>豆粕</td>
    <td class="xl71" x:str>ZM</td>
    <td class="xl71" x:str>100美吨</td>
    <td class="xl71" x:str>10=10美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="35" style='height:21.00pt;mso-height-source:userset;mso-height-alt:420;'>
    <td class="xl71" x:str>大豆</td>
    <td class="xl71" x:str>ZS</td>
    <td class="xl77" x:str>5,000蒲式耳</td>
    <td class="xl71" x:str>0.25=12.5美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71" x:str><span style='display:none;'>200美元</span></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="26" style='height:15.60pt;'>
    <td class="xl75" x:str>小麦</td>
    <td class="xl71" x:str>ZW</td>
    <td class="xl71" x:str>5,000蒲式耳</td>
    <td class="xl74" x:str>0.25=12.5美金</td>
    <td class="xl71" x:str>300美金</td>
    <td class="xl71"></td>
    <td class="xl71" x:str>1200美金</td>
    <td class="xl71" x:str>1800美金</td>
   </tr>
   <tr height="24" style='height:14.40pt;'>
    <td class="xl78 spe-text" height="144.00" rowspan="6" style='height:86.40pt;' x:str>其他说明</td>
    <td class="xl79 spe-text" colspan="12" rowspan="6" style='' x:str>
      1、出入金固定汇率7.75（1美元=7.75人民币）<br>
      2、每月第一周星期五非农数据（夏令时：20点15分---20点45分）；（冬令时21点15分---21点45分）30分钟内外汇期货类产品禁止开仓，提前开仓的保证金需提高至1500美金/手才能持仓过非农，30分钟内德指禁止开仓，提前开仓的保证金需提高至2500美金/手才能持仓过非农（如遇美国节假日非农数据顺延至下一周星期五）<br>
      3、隔夜保证金相同的品种隔夜，如果隔夜保证金不足全部隔夜，系统会全部平仓。（例：原油和欧元各持仓1手，账户资金只够隔1手，系统会全部平仓）<br>
      4、如有调整，以公司公告为准
    </td>
   </tr>
   <tr height="24" style='height:14.40pt;'/>
   <tr height="24" style='height:14.40pt;'/>
   <tr height="24" style='height:14.40pt;'/>
   <tr height="24" style='height:14.40pt;'/>
   <tr height="24" style='height:14.40pt;'/>
  </table>
  </div></div>
</template>

<script>
  import AXIOS from '../../global/Fetch'
export default {
    name: 'login',
    data() {
      return {}
    },
    created() {
    },
    methods: {
      downLoadNewContrast() {
        AXIOS.post('/security/api/downloadUrl/contractDetail', {}).then(res => {
          location.href = res.value
        }).catch(() => {
        })
      }
    }
  }
</script>


<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .spe-text {
    color: #50adff;
  }
  tr td{
    font-size: 16px
  }
</style>
