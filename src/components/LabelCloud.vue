<template>
    <div>
        <div class="col-12 p-0">
            <svg viewBox="0 0 1400 500" xmlns="http://www.w3.org/2000/svg">
                <a href="#" v-on:click="onWordClicked('lakeside', $event)">
                    <text x="60" y="249" font-size="256" fill="rgb(34, 168, 132)">lakeside</text>
                </a><a href="#" v-on:click="onWordClicked('stage', $event)">
                <text x="135" y="394" font-size="218" fill="rgb(99, 203, 95)">stage</text>
            </a><a href="#" v-on:click="onWordClicked('seashore', $event)">
                <text x="676" y="428" font-size="165" fill="rgb(31, 151, 139)">seashore</text>
            </a><a href="#" v-on:click="onWordClicked('restaurant', $event)">
                <text x="847" y="77" font-size="117" fill="rgb(216, 226, 25)">restaurant</text>
            </a><a href="#" v-on:click="onWordClicked('groom', $event)">
                <text x="1036" y="187" font-size="116" fill="rgb(78, 195, 107)">groom</text>
            </a><a href="#" v-on:click="onWordClicked('alp', $event)">
                <text x="1190" y="293" font-size="114" fill="rgb(189, 223, 38)">alp</text>
            </a><a href="#" v-on:click="onWordClicked('cinema', $event)">
                <text x="7" y="476" font-size="111" fill="rgb(162, 218, 55)">cinema</text>
            </a><a href="#" v-on:click="onWordClicked('valley', $event)">
                <text x="418" y="72" font-size="96" fill="rgb(52, 182, 121)">valley</text>
            </a><a href="#" v-on:click="onWordClicked('granny smith', $event)">
                <text x="668" y="308" font-size="63" fill="rgb(72, 31, 112)">granny smith</text>
            </a><a href="#" v-on:click="onWordClicked('bell cote', $event)">
                <text x="671" y="477" font-size="61" fill="rgb(35, 137, 142)">bell cote</text>
            </a><a href="#" v-on:click="onWordClicked('cliff', $event)">
                <text x="1046" y="272" font-size="59" fill="rgb(31, 158, 137)">cliff</text>
            </a><a href="#" v-on:click="onWordClicked('unicycle', $event)">
                <text x="983" y="474" font-size="59" fill="rgb(248, 230, 33)">unicycle</text>
            </a><a href="#" v-on:click="onWordClicked('promontory', $event)">
                <text x="44" y="67" font-size="57" transform="rotate(-90, 44, 67) translate(-296, 0)"
                      fill="rgb(31, 148, 140)">promontory
                </text>
            </a><a href="#" v-on:click="onWordClicked('palace', $event)">
                <text x="109" y="74" font-size="55" fill="rgb(241, 229, 29)">palace</text>
            </a><a href="#" v-on:click="onWordClicked('sandbar', $event)">
                <text x="405" y="482" font-size="55" fill="rgb(223, 227, 24)">sandbar</text>
            </a><a href="#" v-on:click="onWordClicked('pier', $event)">
                <text x="1095" y="311" font-size="54" fill="rgb(34, 167, 133)">pier</text>
            </a><a href="#" v-on:click="onWordClicked('boathouse', $event)">
                <text x="1385" y="237" font-size="52" transform="rotate(-90, 1385, 237) translate(-247, 0)"
                      fill="rgb(52, 182, 121)">boathouse
                </text>
            </a><a href="#" v-on:click="onWordClicked('library', $event)">
                <text x="668" y="38" font-size="50" fill="rgb(68, 58, 131)">library</text>
            </a><a href="#" v-on:click="onWordClicked('limousine', $event)">
                <text x="1185" y="114" font-size="49" fill="rgb(72, 29, 111)">limousine</text>
            </a><a href="#" v-on:click="onWordClicked('monastery', $event)">
                <text x="974" y="104" font-size="41" fill="rgb(70, 50, 126)">monastery</text>
            </a><a href="#" v-on:click="onWordClicked('church', $event)">
                <text x="548" y="427" font-size="41" fill="rgb(49, 103, 142)">church</text>
            </a><a href="#" v-on:click="onWordClicked('fountain', $event)">
                <text x="248" y="32" font-size="41" fill="rgb(189, 223, 38)">fountain</text>
            </a><a href="#" v-on:click="onWordClicked('castle', $event)">
                <text x="118" y="288" font-size="41" transform="rotate(-90, 118, 288) translate(-109, 0)"
                      fill="rgb(63, 71, 136)">castle
                </text>
            </a><a href="#" v-on:click="onWordClicked('breakwater', $event)">
                <text x="351" y="102" font-size="40" fill="rgb(139, 214, 70)">breakwater</text>
            </a><a href="#" v-on:click="onWordClicked('park bench', $event)">
                <text x="0" y="29" font-size="35" fill="rgb(205, 225, 29)">park bench</text>
            </a><a href="#" v-on:click="onWordClicked('pot', $event)">
                <text x="1268" y="473" font-size="34" fill="rgb(34, 168, 132)">pot</text>
            </a><a href="#" v-on:click="onWordClicked('swing', $event)">
                <text x="1168" y="214" font-size="33" fill="rgb(216, 226, 25)">swing</text>
            </a><a href="#" v-on:click="onWordClicked('torch', $event)">
                <text x="741" y="82" font-size="33" fill="rgb(70, 50, 126)">torch</text>
            </a><a href="#" v-on:click="onWordClicked('bookshop', $event)">
                <text x="1024" y="106" font-size="33" transform="rotate(-90, 1024, 106) translate(-147, 0)"
                      fill="rgb(41, 122, 142)">bookshop
                </text>
            </a><a href="#" v-on:click="onWordClicked('patio', $event)">
                <text x="394" y="395" font-size="33" transform="rotate(-90, 394, 395) translate(-75, 0)"
                      fill="rgb(50, 100, 142)">patio
                </text>
            </a><a href="#" v-on:click="onWordClicked('triumphal arch', $event)">
                <text x="850" y="328" font-size="26" fill="rgb(152, 216, 62)">triumphal arch</text>
            </a><a href="#" v-on:click="onWordClicked('toyshop', $event)">
                <text x="1305" y="219" font-size="26" fill="rgb(66, 63, 133)">toyshop</text>
            </a><a href="#" v-on:click="onWordClicked('rugby ball', $event)">
                <text x="164" y="94" font-size="25" fill="rgb(69, 4, 87)">rugby ball</text>
            </a><a href="#" v-on:click="onWordClicked('volleyball', $event)">
                <text x="856" y="99" font-size="25" fill="rgb(63, 72, 137)">volleyball</text>
            </a><a href="#" v-on:click="onWordClicked('sunglasses', $event)">
                <text x="698" y="328" font-size="25" fill="rgb(43, 116, 142)">sunglasses</text>
            </a><a href="#" v-on:click="onWordClicked('bow tie', $event)">
                <text x="1164" y="332" font-size="25" fill="rgb(72, 33, 115)">bow tie</text>
            </a><a href="#" v-on:click="onWordClicked('mountain bike', $event)">
                <text x="295" y="271" font-size="25" fill="rgb(78, 195, 107)">mountain bike</text>
            </a><a href="#" v-on:click="onWordClicked('soccer ball', $event)">
                <text x="205" y="494" font-size="25" fill="rgb(62, 76, 138)">soccer ball</text>
            </a><a href="#" v-on:click="onWordClicked('dock', $event)">
                <text x="768" y="188" font-size="25" fill="rgb(49, 181, 123)">dock</text>
            </a><a href="#" v-on:click="onWordClicked('cab', $event)">
                <text x="611" y="478" font-size="25" fill="rgb(78, 195, 107)">cab</text>
            </a><a href="#" v-on:click="onWordClicked('maypole', $event)">
                <text x="0" y="380" font-size="25" fill="rgb(74, 193, 109)">maypole</text>
            </a><a href="#" v-on:click="onWordClicked('picket fence', $event)">
                <text x="865" y="133" font-size="25" transform="rotate(-90, 865, 133) translate(-135, 0)"
                      fill="rgb(94, 201, 98)">picket fence
                </text>
            </a><a href="#" v-on:click="onWordClicked('greenhouse', $event)">
                <text x="67" y="133" font-size="25" transform="rotate(-90, 67, 133) translate(-130, 0)"
                      fill="rgb(40, 125, 142)">greenhouse
                </text>
            </a><a href="#" v-on:click="onWordClicked('sunglass', $event)">
                <text x="665" y="54" font-size="25" transform="rotate(-90, 665, 54) translate(-101, 0)"
                      fill="rgb(33, 145, 140)">sunglass
                </text>
            </a><a href="#" v-on:click="onWordClicked('microphone', $event)">
                <text x="721" y="117" font-size="25" transform="rotate(-90, 721, 117) translate(-132, 0)"
                      fill="rgb(115, 208, 86)">microphone
                </text>
            </a><a href="#" v-on:click="onWordClicked('obelisk', $event)">
                <text x="723" y="101" font-size="25" fill="rgb(39, 128, 142)">obelisk</text>
            </a><a href="#" v-on:click="onWordClicked('barbershop', $event)">
                <text x="265" y="104" font-size="25" transform="rotate(-90, 265, 104) translate(-126, 0)"
                      fill="rgb(55, 91, 141)">barbershop
                </text>
            </a><a href="#" v-on:click="onWordClicked('volcano', $event)">
                <text x="1167" y="494" font-size="25" fill="rgb(162, 218, 55)">volcano</text>
            </a><a href="#" v-on:click="onWordClicked('comic book', $event)">
                <text x="534" y="446" font-size="25" fill="rgb(66, 65, 134)">comic book</text>
            </a><a href="#" v-on:click="onWordClicked('military uniform', $event)">
                <text x="121" y="90" font-size="25" transform="rotate(-90, 121, 90) translate(-175, 0)"
                      fill="rgb(47, 107, 142)">military uniform
                </text>
            </a><a href="#" v-on:click="onWordClicked('miniskirt', $event)">
                <text x="931" y="494" font-size="25" fill="rgb(53, 94, 141)">miniskirt</text>
            </a><a href="#" v-on:click="onWordClicked('lab coat', $event)">
                <text x="568" y="271" font-size="25" fill="rgb(53, 183, 121)">lab coat</text>
            </a><a href="#" v-on:click="onWordClicked('wig', $event)">
                <text x="356" y="181" font-size="25" fill="rgb(50, 182, 122)">wig</text>
            </a><a href="#" v-on:click="onWordClicked('grocery store', $event)">
                <text x="138" y="266" font-size="22" fill="rgb(61, 77, 138)">grocery store</text>
            </a><a href="#" v-on:click="onWordClicked('prison', $event)">
                <text x="1031" y="289" font-size="22" fill="rgb(50, 182, 122)">prison</text>
            </a><a href="#" v-on:click="onWordClicked('ballplayer', $event)">
                <text x="319" y="61" font-size="22" fill="rgb(31, 152, 139)">ballplayer</text>
            </a><a href="#" v-on:click="onWordClicked('pomegranate', $event)">
                <text x="132" y="275" font-size="22" transform="rotate(-90, 132, 275) translate(-130, 0)"
                      fill="rgb(223, 227, 24)">pomegranate
                </text>
            </a><a href="#" v-on:click="onWordClicked('balloon', $event)">
                <text x="79" y="263" font-size="22" transform="rotate(-90, 79, 263) translate(-72, 0)"
                      fill="rgb(32, 146, 140)">balloon
                </text>
            </a><a href="#" v-on:click="onWordClicked('street sign', $event)">
                <text x="432" y="204" font-size="22" fill="rgb(57, 85, 140)">street sign</text>
            </a><a href="#" v-on:click="onWordClicked('mosque', $event)">
                <text x="468" y="263" font-size="22" fill="rgb(35, 136, 142)">mosque</text>
            </a><a href="#" v-on:click="onWordClicked('jersey', $event)">
                <text x="916" y="465" font-size="22" fill="rgb(103, 204, 92)">jersey</text>
            </a><a href="#" v-on:click="onWordClicked('bathing cap', $event)">
                <text x="1195" y="446" font-size="22" fill="rgb(65, 68, 135)">bathing cap</text>
            </a><a href="#" v-on:click="onWordClicked('altar', $event)">
                <text x="18" y="54" font-size="22" fill="rgb(127, 211, 78)">altar</text>
            </a><a href="#" v-on:click="onWordClicked('stretcher', $event)">
                <text x="1032" y="120" font-size="22" fill="rgb(231, 228, 25)">stretcher</text>
            </a><a href="#" v-on:click="onWordClicked('fig', $event)">
                <text x="173" y="220" font-size="22" fill="rgb(236, 229, 27)">fig</text>
            </a><a href="#" v-on:click="onWordClicked('swimming trunks', $event)">
                <text x="44" y="492" font-size="20" fill="rgb(33, 165, 133)">swimming trunks</text>
            </a><a href="#" v-on:click="onWordClicked('pole', $event)">
                <text x="698" y="57" font-size="20" fill="rgb(248, 230, 33)">pole</text>
            </a><a href="#" v-on:click="onWordClicked('traffic light', $event)">
                <text x="674" y="266" font-size="20" fill="rgb(117, 208, 84)">traffic light</text>
            </a><a href="#" v-on:click="onWordClicked('suit', $event)">
                <text x="1025" y="228" font-size="20" fill="rgb(71, 45, 123)">suit</text>
            </a><a href="#" v-on:click="onWordClicked('knee pad', $event)">
                <text x="1244" y="330" font-size="20" fill="rgb(168, 219, 52)">knee pad</text>
            </a><a href="#" v-on:click="onWordClicked('maraca', $event)">
                <text x="200" y="407" font-size="20" fill="rgb(40, 125, 142)">maraca</text>
            </a><a href="#" v-on:click="onWordClicked('drum', $event)">
                <text x="1138" y="141" font-size="20" transform="rotate(-90, 1138, 141) translate(-47, 0)"
                      fill="rgb(46, 111, 142)">drum
                </text>
            </a><a href="#" v-on:click="onWordClicked('basketball', $event)">
                <text x="594" y="495" font-size="20" fill="rgb(31, 161, 135)">basketball</text>
            </a><a href="#" v-on:click="onWordClicked('bakery', $event)">
                <text x="910" y="209" font-size="20" fill="rgb(66, 63, 133)">bakery</text>
            </a><a href="#" v-on:click="onWordClicked('streetcar', $event)">
                <text x="1075" y="360" font-size="20" transform="rotate(-90, 1075, 360) translate(-81, 0)"
                      fill="rgb(31, 161, 135)">streetcar
                </text>
            </a><a href="#" v-on:click="onWordClicked('shoe shop', $event)">
                <text x="255" y="295" font-size="20" transform="rotate(-90, 255, 295) translate(-91, 0)"
                      fill="rgb(53, 183, 121)">shoe shop
                </text>
            </a><a href="#" v-on:click="onWordClicked('dome', $event)">
                <text x="1340" y="444" font-size="20" transform="rotate(-90, 1340, 444) translate(-51, 0)"
                      fill="rgb(60, 79, 138)">dome
                </text>
            </a><a href="#" v-on:click="onWordClicked('vault', $event)">
                <text x="411" y="16" font-size="20" fill="rgb(72, 41, 121)">vault</text>
            </a><a href="#" v-on:click="onWordClicked('suspension bridge', $event)">
                <text x="692" y="491" font-size="19" fill="rgb(49, 104, 142)">suspension bridge</text>
            </a><a href="#" v-on:click="onWordClicked('tobacco shop', $event)">
                <text x="558" y="286" font-size="19" transform="rotate(-90, 558, 286) translate(-116, 0)"
                      fill="rgb(59, 187, 117)">tobacco shop
                </text>
            </a><a href="#" v-on:click="onWordClicked('planetarium', $event)">
                <text x="662" y="153" font-size="19" transform="rotate(-90, 662, 153) translate(-100, 0)"
                      fill="rgb(32, 164, 134)">planetarium
                </text>
            </a><a href="#" v-on:click="onWordClicked('racer', $event)">
                <text x="582" y="101" font-size="19" fill="rgb(71, 47, 125)">racer</text>
            </a><a href="#" v-on:click="onWordClicked('jean', $event)">
                <text x="1167" y="236" font-size="19" transform="rotate(-90, 1167, 236) translate(-37, 0)"
                      fill="rgb(71, 14, 97)">jean
                </text>
            </a><a href="#" v-on:click="onWordClicked('shower cap', $event)">
                <text x="435" y="282" font-size="19" transform="rotate(-90, 435, 282) translate(-97, 0)"
                      fill="rgb(31, 158, 137)">shower cap
                </text>
            </a><a href="#" v-on:click="onWordClicked('laptop', $event)">
                <text x="1204" y="464" font-size="19" fill="rgb(72, 22, 104)">laptop</text>
            </a><a href="#" v-on:click="onWordClicked('spotlight', $event)">
                <text x="1091" y="208" font-size="19" fill="rgb(127, 211, 78)">spotlight</text>
            </a><a href="#" v-on:click="onWordClicked('parachute', $event)">
                <text x="873" y="265" font-size="19" fill="rgb(56, 88, 140)">parachute</text>
            </a><a href="#" v-on:click="onWordClicked('marimba', $event)">
                <text x="580" y="15" font-size="19" fill="rgb(31, 159, 136)">marimba</text>
            </a><a href="#" v-on:click="onWordClicked('birdhouse', $event)">
                <text x="279" y="409" font-size="19" fill="rgb(68, 59, 132)">birdhouse</text>
            </a><a href="#" v-on:click="onWordClicked('minibus', $event)">
                <text x="336" y="494" font-size="19" fill="rgb(31, 152, 139)">minibus</text>
            </a><a href="#" v-on:click="onWordClicked('tricycle', $event)">
                <text x="177" y="20" font-size="19" fill="rgb(80, 196, 106)">tricycle</text>
            </a><a href="#" v-on:click="onWordClicked('crane', $event)">
                <text x="168" y="150" font-size="19" fill="rgb(30, 155, 138)">crane</text>
            </a><a href="#" v-on:click="onWordClicked('theater curtain', $event)">
                <text x="1029" y="316" font-size="19" transform="rotate(-90, 1029, 316) translate(-120, 0)"
                      fill="rgb(46, 179, 124)">theater curtain
                </text>
            </a><a href="#" v-on:click="onWordClicked('bicycle-built-for-two', $event)">
                <text x="456" y="494" font-size="15" fill="rgb(112, 207, 87)">bicycle-built-for-two</text>
            </a><a href="#" v-on:click="onWordClicked('mobile home', $event)">
                <text x="1062" y="224" font-size="15" fill="rgb(48, 106, 142)">mobile home</text>
            </a><a href="#" v-on:click="onWordClicked('hair spray', $event)">
                <text x="5" y="408" font-size="15" fill="rgb(129, 211, 77)">hair spray</text>
            </a><a href="#" v-on:click="onWordClicked('maillot', $event)">
                <text x="1210" y="311" font-size="15" fill="rgb(67, 61, 132)">maillot</text>
            </a><a href="#" v-on:click="onWordClicked('bikini', $event)">
                <text x="476" y="409" font-size="15" fill="rgb(45, 178, 125)">bikini</text>
            </a><a href="#" v-on:click="onWordClicked('moped', $event)">
                <text x="805" y="15" font-size="15" fill="rgb(61, 77, 138)">moped</text>
            </a><a href="#" v-on:click="onWordClicked('stone wall', $event)">
                <text x="323" y="62" font-size="15" transform="rotate(-90, 323, 62) translate(-69, 0)"
                      fill="rgb(112, 207, 87)">stone wall
                </text>
            </a><a href="#" v-on:click="onWordClicked('brass', $event)">
                <text x="940" y="366" font-size="15" transform="rotate(-90, 940, 366) translate(-37, 0)"
                      fill="rgb(38, 130, 142)">brass
                </text>
            </a><a href="#" v-on:click="onWordClicked('jinrikisha', $event)">
                <text x="853" y="492" font-size="15" fill="rgb(181, 222, 43)">jinrikisha</text>
            </a><a href="#" v-on:click="onWordClicked('stethoscope', $event)">
                <text x="1058" y="332" font-size="15" fill="rgb(173, 220, 48)">stethoscope</text>
            </a><a href="#" v-on:click="onWordClicked('flagpole', $event)">
                <text x="408" y="446" font-size="15" fill="rgb(44, 113, 142)">flagpole</text>
            </a><a href="#" v-on:click="onWordClicked('scoreboard', $event)">
                <text x="66" y="39" font-size="15" fill="rgb(32, 164, 134)">scoreboard</text>
            </a><a href="#" v-on:click="onWordClicked('diaper', $event)">
                <text x="386" y="113" font-size="15" fill="rgb(71, 46, 124)">diaper</text>
            </a><a href="#" v-on:click="onWordClicked('book jacket', $event)">
                <text x="599" y="356" font-size="15" fill="rgb(129, 211, 77)">book jacket</text>
            </a><a href="#" v-on:click="onWordClicked('beacon', $event)">
                <text x="138" y="107" font-size="15" fill="rgb(33, 143, 141)">beacon</text>
            </a><a href="#" v-on:click="onWordClicked('academic gown', $event)">
                <text x="1349" y="218" font-size="15" transform="rotate(-90, 1349, 218) translate(-105, 0)"
                      fill="rgb(46, 109, 142)">academic gown
                </text>
            </a><a href="#" v-on:click="onWordClicked('candle', $event)">
                <text x="289" y="325" font-size="15" fill="rgb(152, 216, 62)">candle</text>
            </a><a href="#" v-on:click="onWordClicked('crash helmet', $event)">
                <text x="1094" y="12" font-size="15" fill="rgb(44, 114, 142)">crash helmet</text>
            </a><a href="#" v-on:click="onWordClicked('banjo', $event)">
                <text x="775" y="207" font-size="15" fill="rgb(30, 156, 137)">banjo</text>
            </a><a href="#" v-on:click="onWordClicked('bassoon', $event)">
                <text x="463" y="13" font-size="15" fill="rgb(101, 203, 94)">bassoon</text>
            </a><a href="#" v-on:click="onWordClicked('carousel', $event)">
                <text x="1283" y="229" font-size="15" transform="rotate(-90, 1283, 229) translate(-58, 0)"
                      fill="rgb(40, 125, 142)">carousel
                </text>
            </a><a href="#" v-on:click="onWordClicked('lumbermill', $event)">
                <text x="1163" y="228" font-size="15" fill="rgb(68, 59, 132)">lumbermill</text>
            </a><a href="#" v-on:click="onWordClicked('electric guitar', $event)">
                <text x="132" y="76" font-size="15" transform="rotate(-90, 132, 76) translate(-92, 0)"
                      fill="rgb(63, 71, 136)">electric guitar
                </text>
            </a><a href="#" v-on:click="onWordClicked('golfcart', $event)">
                <text x="493" y="114" font-size="15" fill="rgb(149, 216, 64)">golfcart</text>
            </a><a href="#" v-on:click="onWordClicked('umbrella', $event)">
                <text x="186" y="35" font-size="15" fill="rgb(31, 160, 136)">umbrella</text>
            </a><a href="#" v-on:click="onWordClicked('pajama', $event)">
                <text x="301" y="247" font-size="15" fill="rgb(71, 46, 124)">pajama</text>
            </a><a href="#" v-on:click="onWordClicked('carton', $event)">
                <text x="448" y="384" font-size="15" transform="rotate(-90, 448, 384) translate(-43, 0)"
                      fill="rgb(53, 95, 141)">carton
                </text>
            </a><a href="#" v-on:click="onWordClicked('ocarina', $event)">
                <text x="539" y="119" font-size="15" transform="rotate(-90, 539, 119) translate(-50, 0)"
                      fill="rgb(67, 62, 133)">ocarina
                </text>
            </a><a href="#" v-on:click="onWordClicked('sarong', $event)">
                <text x="847" y="115" font-size="15" fill="rgb(68, 1, 84)">sarong</text>
            </a><a href="#" v-on:click="onWordClicked('worm fence', $event)">
                <text x="883" y="441" font-size="15" fill="rgb(42, 119, 142)">worm fence</text>
            </a><a href="#" v-on:click="onWordClicked('plate', $event)">
                <text x="325" y="275" font-size="15" transform="rotate(-90, 325, 275) translate(-33, 0)"
                      fill="rgb(72, 27, 109)">plate
                </text>
            </a><a href="#" v-on:click="onWordClicked('jigsaw puzzle', $event)">
                <text x="1035" y="122" font-size="15" transform="rotate(-90, 1035, 122) translate(-91, 0)"
                      fill="rgb(38, 129, 142)">jigsaw puzzle
                </text>
            </a><a href="#" v-on:click="onWordClicked('plunger', $event)">
                <text x="1034" y="486" font-size="15" fill="rgb(72, 33, 115)">plunger</text>
            </a><a href="#" v-on:click="onWordClicked('mask', $event)">
                <text x="1260" y="199" font-size="15" fill="rgb(84, 197, 104)">mask</text>
            </a><a href="#" v-on:click="onWordClicked('mortarboard', $event)">
                <text x="133" y="162" font-size="15" fill="rgb(38, 129, 142)">mortarboard</text>
            </a><a href="#" v-on:click="onWordClicked('megalith', $event)">
                <text x="785" y="263" font-size="15" fill="rgb(71, 47, 125)">megalith</text>
            </a><a href="#" v-on:click="onWordClicked('turnstile', $event)">
                <text x="907" y="158" font-size="15" fill="rgb(68, 59, 132)">turnstile</text>
            </a><a href="#" v-on:click="onWordClicked('sax', $event)">
                <text x="220" y="110" font-size="15" fill="rgb(47, 180, 124)">sax</text>
            </a><a href="#" v-on:click="onWordClicked('moving van', $event)">
                <text x="1114" y="334" font-size="15" transform="rotate(-90, 1114, 334) translate(-76, 0)"
                      fill="rgb(200, 224, 32)">moving van
                </text>
            </a><a href="#" v-on:click="onWordClicked('football helmet', $event)">
                <text x="1179" y="17" font-size="15" transform="rotate(-90, 1179, 17) translate(-102, 0)"
                      fill="rgb(61, 78, 138)">football helmet
                </text>
            </a><a href="#" v-on:click="onWordClicked('kimono', $event)">
                <text x="776" y="441" font-size="15" fill="rgb(70, 192, 111)">kimono</text>
            </a><a href="#" v-on:click="onWordClicked('accordion', $event)">
                <text x="1256" y="494" font-size="15" fill="rgb(72, 27, 109)">accordion</text>
            </a><a href="#" v-on:click="onWordClicked('ping-pong ball', $event)">
                <text x="1213" y="338" font-size="15" transform="rotate(-90, 1213, 338) translate(-93, 0)"
                      fill="rgb(49, 104, 142)">ping-pong ball
                </text>
            </a><a href="#" v-on:click="onWordClicked('dam', $event)">
                <text x="1368" y="47" font-size="15" fill="rgb(218, 227, 25)">dam</text>
            </a><a href="#" v-on:click="onWordClicked('oboe', $event)">
                <text x="571" y="220" font-size="15" fill="rgb(66, 64, 134)">oboe</text>
            </a><a href="#" v-on:click="onWordClicked('ice lolly', $event)">
                <text x="764" y="163" font-size="15" fill="rgb(66, 63, 133)">ice lolly</text>
            </a><a href="#" v-on:click="onWordClicked('horizontal bar', $event)">
                <text x="1397" y="341" font-size="15" transform="rotate(-90, 1397, 341) translate(-92, 0)"
                      fill="rgb(58, 83, 139)">horizontal bar
                </text>
            </a><a href="#" v-on:click="onWordClicked('television', $event)">
                <text x="548" y="88" font-size="15" fill="rgb(65, 66, 135)">television</text>
            </a><a href="#" v-on:click="onWordClicked('cash machine', $event)">
                <text x="673" y="155" font-size="15" transform="rotate(-90, 673, 155) translate(-93, 0)"
                      fill="rgb(47, 107, 142)">cash machine
                </text>
            </a><a href="#" v-on:click="onWordClicked('whistle', $event)">
                <text x="437" y="153" font-size="15" fill="rgb(31, 151, 139)">whistle</text>
            </a><a href="#" v-on:click="onWordClicked('gown', $event)">
                <text x="817" y="42" font-size="15" fill="rgb(218, 227, 25)">gown</text>
            </a><a href="#" v-on:click="onWordClicked('lemon', $event)">
                <text x="357" y="160" font-size="15" fill="rgb(70, 50, 126)">lemon</text>
            </a><a href="#" v-on:click="onWordClicked('vase', $event)">
                <text x="359" y="313" font-size="15" fill="rgb(70, 7, 90)">vase</text>
            </a><a href="#" v-on:click="onWordClicked('cliff dwelling', $event)">
                <text x="1390" y="116" font-size="15" transform="rotate(-90, 1390, 116) translate(-85, 0)"
                      fill="rgb(60, 80, 139)">cliff dwelling
                </text>
            </a><a href="#" v-on:click="onWordClicked('confectionery', $event)">
                <text x="863" y="9" font-size="11" fill="rgb(67, 61, 132)">confectionery</text>
            </a><a href="#" v-on:click="onWordClicked('bobsled', $event)">
                <text x="27" y="447" font-size="11" fill="rgb(58, 83, 139)">bobsled</text>
            </a><a href="#" v-on:click="onWordClicked('ski', $event)">
                <text x="1270" y="0" font-size="11" transform="rotate(-90, 1270, 0) translate(-15, 0)"
                      fill="rgb(38, 129, 142)">ski
                </text>
            </a><a href="#" v-on:click="onWordClicked('sunscreen', $event)">
                <text x="1298" y="8" font-size="11" fill="rgb(64, 189, 114)">sunscreen</text>
            </a><a href="#" v-on:click="onWordClicked('paddle', $event)">
                <text x="383" y="187" font-size="11" transform="rotate(-90, 383, 187) translate(-33, 0)"
                      fill="rgb(33, 144, 141)">paddle
                </text>
            </a><a href="#" v-on:click="onWordClicked('ashcan', $event)">
                <text x="505" y="274" font-size="11" fill="rgb(103, 204, 92)">ashcan</text>
            </a><a href="#" v-on:click="onWordClicked('stupa', $event)">
                <text x="316" y="202" font-size="11" transform="rotate(-90, 316, 202) translate(-28, 0)"
                      fill="rgb(49, 102, 142)">stupa
                </text>
            </a><a href="#" v-on:click="onWordClicked('menu', $event)">
                <text x="679" y="97" font-size="11" fill="rgb(56, 88, 140)">menu</text>
            </a><a href="#" v-on:click="onWordClicked('racket', $event)">
                <text x="269" y="46" font-size="11" fill="rgb(62, 73, 137)">racket</text>
            </a><a href="#" v-on:click="onWordClicked('bow', $event)">
                <text x="51" y="102" font-size="11" fill="rgb(56, 88, 140)">bow</text>
            </a><a href="#" v-on:click="onWordClicked('pedestal', $event)">
                <text x="474" y="353" font-size="11" fill="rgb(60, 80, 139)">pedestal</text>
            </a><a href="#" v-on:click="onWordClicked('cowboy hat', $event)">
                <text x="1289" y="396" font-size="11" fill="rgb(31, 149, 139)">cowboy hat</text>
            </a><a href="#" v-on:click="onWordClicked('fire engine', $event)">
                <text x="440" y="216" font-size="11" fill="rgb(72, 28, 110)">fire engine</text>
            </a><a href="#" v-on:click="onWordClicked('geyser', $event)">
                <text x="375" y="39" font-size="11" fill="rgb(55, 91, 141)">geyser</text>
            </a><a href="#" v-on:click="onWordClicked('garbage truck', $event)">
                <text x="1079" y="437" font-size="11" fill="rgb(39, 127, 142)">garbage truck</text>
            </a><a href="#" v-on:click="onWordClicked('crutch', $event)">
                <text x="1187" y="233" font-size="11" transform="rotate(-90, 1187, 233) translate(-32, 0)"
                      fill="rgb(32, 146, 140)">crutch
                </text>
            </a><a href="#" v-on:click="onWordClicked('gondola', $event)">
                <text x="154" y="411" font-size="11" fill="rgb(205, 225, 29)">gondola</text>
            </a><a href="#" v-on:click="onWordClicked('acoustic guitar', $event)">
                <text x="680" y="109" font-size="11" fill="rgb(42, 119, 142)">acoustic guitar</text>
            </a><a href="#" v-on:click="onWordClicked('feather boa', $event)">
                <text x="1" y="393" font-size="11" fill="rgb(205, 225, 29)">feather boa</text>
            </a><a href="#" v-on:click="onWordClicked('sweatshirt', $event)">
                <text x="1111" y="484" font-size="11" fill="rgb(48, 105, 142)">sweatshirt</text>
            </a><a href="#" v-on:click="onWordClicked('monitor', $event)">
                <text x="1198" y="11" font-size="11" fill="rgb(71, 19, 101)">monitor</text>
            </a><a href="#" v-on:click="onWordClicked('passenger car', $event)">
                <text x="946" y="6" font-size="11" fill="rgb(162, 218, 55)">passenger car</text>
            </a><a href="#" v-on:click="onWordClicked('sports car', $event)">
                <text x="1096" y="493" font-size="11" fill="rgb(52, 182, 121)">sports car</text>
            </a><a href="#" v-on:click="onWordClicked('cellular telephone', $event)">
                <text x="273" y="119" font-size="11" transform="rotate(-90, 273, 119) translate(-89, 0)"
                      fill="rgb(70, 8, 92)">cellular telephone
                </text>
            </a><a href="#" v-on:click="onWordClicked('rapeseed', $event)">
                <text x="602" y="161" font-size="11" fill="rgb(64, 69, 136)">rapeseed</text>
            </a><a href="#" v-on:click="onWordClicked('barrow', $event)">
                <text x="347" y="110" font-size="11" fill="rgb(69, 5, 89)">barrow</text>
            </a><a href="#" v-on:click="onWordClicked('steel drum', $event)">
                <text x="1304" y="195" font-size="11" fill="rgb(67, 62, 133)">steel drum</text>
            </a><a href="#" v-on:click="onWordClicked('vestment', $event)">
                <text x="611" y="454" font-size="11" fill="rgb(54, 92, 141)">vestment</text>
            </a><a href="#" v-on:click="onWordClicked('desk', $event)">
                <text x="604" y="307" font-size="11" fill="rgb(72, 37, 118)">desk</text>
            </a><a href="#" v-on:click="onWordClicked('neck brace', $event)">
                <text x="755" y="336" font-size="11" fill="rgb(43, 116, 142)">neck brace</text>
            </a><a href="#" v-on:click="onWordClicked('web site', $event)">
                <text x="207" y="275" font-size="11" fill="rgb(221, 227, 24)">web site</text>
            </a><a href="#" v-on:click="onWordClicked('projector', $event)">
                <text x="410" y="494" font-size="11" fill="rgb(246, 230, 32)">projector</text>
            </a><a href="#" v-on:click="onWordClicked('binoculars', $event)">
                <text x="1304" y="122" font-size="11" fill="rgb(82, 197, 105)">binoculars</text>
            </a><a href="#" v-on:click="onWordClicked('solar dish', $event)">
                <text x="3" y="64" font-size="11" fill="rgb(59, 82, 139)">solar dish</text>
            </a><a href="#" v-on:click="onWordClicked('bannister', $event)">
                <text x="544" y="281" font-size="11" fill="rgb(34, 168, 132)">bannister</text>
            </a><a href="#" v-on:click="onWordClicked('motor scooter', $event)">
                <text x="814" y="334" font-size="11" fill="rgb(52, 97, 141)">motor scooter</text>
            </a><a href="#" v-on:click="onWordClicked('drilling platform', $event)">
                <text x="1262" y="353" font-size="11" transform="rotate(-90, 1262, 353) translate(-80, 0)"
                      fill="rgb(59, 82, 139)">drilling platform
                </text>
            </a><a href="#" v-on:click="onWordClicked('orange', $event)">
                <text x="85" y="271" font-size="11" fill="rgb(70, 52, 128)">orange</text>
            </a><a href="#" v-on:click="onWordClicked('shield', $event)">
                <text x="929" y="108" font-size="11" fill="rgb(124, 210, 80)">shield</text>
            </a><a href="#" v-on:click="onWordClicked('tow truck', $event)">
                <text x="468" y="329" font-size="11" fill="rgb(35, 169, 131)">tow truck</text>
            </a><a href="#" v-on:click="onWordClicked('tub', $event)">
                <text x="183" y="363" font-size="11" fill="rgb(38, 129, 142)">tub</text>
            </a><a href="#" v-on:click="onWordClicked('bonnet', $event)">
                <text x="1035" y="8" font-size="11" fill="rgb(48, 105, 142)">bonnet</text>
            </a><a href="#" v-on:click="onWordClicked('thatch', $event)">
                <text x="917" y="337" font-size="11" fill="rgb(32, 163, 134)">thatch</text>
            </a><a href="#" v-on:click="onWordClicked('sliding door', $event)">
                <text x="534" y="202" font-size="11" fill="rgb(72, 32, 113)">sliding door</text>
            </a><a href="#" v-on:click="onWordClicked('packet', $event)">
                <text x="385" y="75" font-size="11" fill="rgb(68, 2, 86)">packet</text>
            </a><a href="#" v-on:click="onWordClicked('mountain tent', $event)">
                <text x="1249" y="85" font-size="11" fill="rgb(108, 205, 90)">mountain tent</text>
            </a><a href="#" v-on:click="onWordClicked('bubble', $event)">
                <text x="777" y="145" font-size="11" fill="rgb(70, 51, 127)">bubble</text>
            </a><a href="#" v-on:click="onWordClicked('guillotine', $event)">
                <text x="1051" y="300" font-size="11" fill="rgb(68, 59, 132)">guillotine</text>
            </a><a href="#" v-on:click="onWordClicked('canoe', $event)">
                <text x="403" y="424" font-size="11" fill="rgb(66, 64, 134)">canoe</text>
            </a><a href="#" v-on:click="onWordClicked('parking meter', $event)">
                <text x="1198" y="476" font-size="11" fill="rgb(70, 10, 93)">parking meter</text>
            </a><a href="#" v-on:click="onWordClicked('amphibian', $event)">
                <text x="471" y="339" font-size="11" fill="rgb(41, 121, 142)">amphibian</text>
            </a><a href="#" v-on:click="onWordClicked('horse cart', $event)">
                <text x="667" y="335" font-size="11" fill="rgb(47, 180, 124)">horse cart</text>
            </a><a href="#" v-on:click="onWordClicked('trailer truck', $event)">
                <text x="94" y="412" font-size="11" fill="rgb(37, 172, 130)">trailer truck</text>
            </a><a href="#" v-on:click="onWordClicked('cannon', $event)">
                <text x="1258" y="119" font-size="11" fill="rgb(71, 17, 100)">cannon</text>
            </a><a href="#" v-on:click="onWordClicked('viaduct', $event)">
                <text x="1139" y="394" font-size="11" fill="rgb(218, 227, 25)">viaduct</text>
            </a><a href="#" v-on:click="onWordClicked('balance beam', $event)">
                <text x="10" y="159" font-size="11" transform="rotate(-90, 10, 159) translate(-70, 0)"
                      fill="rgb(129, 211, 77)">balance beam
                </text>
            </a><a href="#" v-on:click="onWordClicked('barn', $event)">
                <text x="996" y="376" font-size="11" fill="rgb(39, 126, 142)">barn</text>
            </a><a href="#" v-on:click="onWordClicked('cello', $event)">
                <text x="371" y="149" font-size="11" fill="rgb(35, 169, 131)">cello</text>
            </a><a href="#" v-on:click="onWordClicked('fireboat', $event)">
                <text x="665" y="396" font-size="11" fill="rgb(31, 148, 140)">fireboat</text>
            </a><a href="#" v-on:click="onWordClicked('slot', $event)">
                <text x="190" y="317" font-size="11" fill="rgb(70, 8, 92)">slot</text>
            </a><a href="#" v-on:click="onWordClicked('capuchin', $event)">
                <text x="596" y="316" font-size="11" fill="rgb(69, 53, 129)">capuchin</text>
            </a><a href="#" v-on:click="onWordClicked('punching bag', $event)">
                <text x="786" y="397" font-size="11" fill="rgb(31, 152, 139)">punching bag</text>
            </a><a href="#" v-on:click="onWordClicked('wreck', $event)">
                <text x="1256" y="229" font-size="11" transform="rotate(-90, 1256, 229) translate(-30, 0)"
                      fill="rgb(144, 215, 67)">wreck
                </text>
            </a><a href="#" v-on:click="onWordClicked('window screen', $event)">
                <text x="1180" y="122" font-size="11" fill="rgb(64, 189, 114)">window screen</text>
            </a><a href="#" v-on:click="onWordClicked('go-kart', $event)">
                <text x="756" y="58" font-size="11" fill="rgb(82, 197, 105)">go-kart</text>
            </a><a href="#" v-on:click="onWordClicked('pinwheel', $event)">
                <text x="1345" y="494" font-size="11" fill="rgb(194, 223, 35)">pinwheel</text>
            </a><a href="#" v-on:click="onWordClicked('buckeye', $event)">
                <text x="171" y="198" font-size="11" fill="rgb(71, 16, 99)">buckeye</text>
            </a><a href="#" v-on:click="onWordClicked('crate', $event)">
                <text x="484" y="310" font-size="11" fill="rgb(42, 118, 142)">crate</text>
            </a><a href="#" v-on:click="onWordClicked('home theater', $event)">
                <text x="401" y="278" font-size="11" fill="rgb(44, 115, 142)">home theater</text>
            </a><a href="#" v-on:click="onWordClicked('forklift', $event)">
                <text x="54" y="343" font-size="11" fill="rgb(58, 84, 140)">forklift</text>
            </a><a href="#" v-on:click="onWordClicked('dining table', $event)">
                <text x="322" y="325" font-size="11" transform="rotate(-90, 322, 325) translate(-58, 0)"
                      fill="rgb(71, 47, 125)">dining table
                </text>
            </a><a href="#" v-on:click="onWordClicked('grand piano', $event)">
                <text x="432" y="161" font-size="11" fill="rgb(202, 225, 31)">grand piano</text>
            </a><a href="#" v-on:click="onWordClicked('harmonica', $event)">
                <text x="136" y="353" font-size="11" fill="rgb(33, 166, 133)">harmonica</text>
            </a><a href="#" v-on:click="onWordClicked('brassiere', $event)">
                <text x="936" y="450" font-size="11" fill="rgb(53, 183, 121)">brassiere</text>
            </a><a href="#" v-on:click="onWordClicked('minivan', $event)">
                <text x="80" y="281" font-size="11" fill="rgb(41, 122, 142)">minivan</text>
            </a><a href="#" v-on:click="onWordClicked('vending machine', $event)">
                <text x="763" y="337" font-size="11" transform="rotate(-90, 763, 337) translate(-84, 0)"
                      fill="rgb(181, 222, 43)">vending machine
                </text>
            </a><a href="#" v-on:click="onWordClicked('cornet', $event)">
                <text x="1349" y="231" font-size="11" fill="rgb(236, 229, 27)">cornet</text>
            </a><a href="#" v-on:click="onWordClicked('mailbox', $event)">
                <text x="1311" y="439" font-size="11" fill="rgb(160, 218, 57)">mailbox</text>
            </a><a href="#" v-on:click="onWordClicked('drumstick', $event)">
                <text x="463" y="448" font-size="11" fill="rgb(31, 152, 139)">drumstick</text>
            </a><a href="#" v-on:click="onWordClicked('throne', $event)">
                <text x="950" y="335" font-size="11" fill="rgb(31, 150, 139)">throne</text>
            </a><a href="#" v-on:click="onWordClicked('violin', $event)">
                <text x="1274" y="223" font-size="11" fill="rgb(38, 129, 142)">violin</text>
            </a><a href="#" v-on:click="onWordClicked('bee', $event)">
                <text x="706" y="439" font-size="11" fill="rgb(231, 228, 25)">bee</text>
            </a><a href="#" v-on:click="onWordClicked('yurt', $event)">
                <text x="1158" y="368" font-size="11" fill="rgb(62, 76, 138)">yurt</text>
            </a><a href="#" v-on:click="onWordClicked('sundial', $event)">
                <text x="361" y="360" font-size="11" fill="rgb(176, 221, 47)">sundial</text>
            </a><a href="#" v-on:click="onWordClicked('sleeping bag', $event)">
                <text x="92" y="414" font-size="11" transform="rotate(-90, 92, 414) translate(-63, 0)"
                      fill="rgb(248, 230, 33)">sleeping bag
                </text>
            </a><a href="#" v-on:click="onWordClicked('warplane', $event)">
                <text x="808" y="27" font-size="11" fill="rgb(205, 225, 29)">warplane</text>
            </a><a href="#" v-on:click="onWordClicked('chain saw', $event)">
                <text x="308" y="41" font-size="11" fill="rgb(234, 229, 26)">chain saw</text>
            </a><a href="#" v-on:click="onWordClicked('tray', $event)">
                <text x="529" y="220" font-size="11" transform="rotate(-90, 529, 220) translate(-20, 0)"
                      fill="rgb(108, 205, 90)">tray
                </text>
            </a><a href="#" v-on:click="onWordClicked('puck', $event)">
                <text x="865" y="51" font-size="11" fill="rgb(72, 24, 106)">puck</text>
            </a><a href="#" v-on:click="onWordClicked('totem pole', $event)">
                <text x="541" y="5" font-size="11" transform="rotate(-90, 541, 5) translate(-54, 0)"
                      fill="rgb(37, 132, 142)">totem pole
                </text>
            </a><a href="#" v-on:click="onWordClicked('steel arch bridge', $event)">
                <text x="1395" y="251" font-size="11" transform="rotate(-90, 1395, 251) translate(-84, 0)"
                      fill="rgb(33, 144, 141)">steel arch bridge
                </text>
            </a><a href="#" v-on:click="onWordClicked('daisy', $event)">
                <text x="376" y="133" font-size="11" fill="rgb(82, 197, 105)">daisy</text>
            </a><a href="#" v-on:click="onWordClicked('baseball', $event)">
                <text x="273" y="54" font-size="11" fill="rgb(246, 230, 32)">baseball</text>
            </a><a href="#" v-on:click="onWordClicked('croquet ball', $event)">
                <text x="340" y="60" font-size="11" transform="rotate(-90, 340, 60) translate(-59, 0)"
                      fill="rgb(236, 229, 27)">croquet ball
                </text>
            </a><a href="#" v-on:click="onWordClicked('water bottle', $event)">
                <text x="10" y="276" font-size="11" transform="rotate(-90, 10, 276) translate(-60, 0)"
                      fill="rgb(36, 134, 142)">water bottle
                </text>
            </a><a href="#" v-on:click="onWordClicked('band aid', $event)">
                <text x="69" y="47" font-size="11" fill="rgb(105, 205, 91)">band aid</text>
            </a><a href="#" v-on:click="onWordClicked('reel', $event)">
                <text x="1000" y="44" font-size="11" fill="rgb(52, 96, 141)">reel</text>
            </a><a href="#" v-on:click="onWordClicked('liner', $event)">
                <text x="842" y="344" font-size="11" fill="rgb(59, 81, 139)">liner</text>
            </a><a href="#" v-on:click="onWordClicked('screen', $event)">
                <text x="1301" y="300" font-size="11" fill="rgb(216, 226, 25)">screen</text>
            </a><a href="#" v-on:click="onWordClicked('folding chair', $event)">
                <text x="1350" y="24" font-size="11" transform="rotate(-90, 1350, 24) translate(-62, 0)"
                      fill="rgb(55, 91, 141)">folding chair
                </text>
            </a><a href="#" v-on:click="onWordClicked('rifle', $event)">
                <text x="722" y="121" font-size="11" fill="rgb(63, 188, 115)">rifle</text>
            </a><a href="#" v-on:click="onWordClicked('windsor tie', $event)">
                <text x="333" y="321" font-size="11" fill="rgb(31, 162, 135)">windsor tie</text>
            </a><a href="#" v-on:click="onWordClicked('gas pump', $event)">
                <text x="1117" y="117" font-size="11" fill="rgb(53, 183, 121)">gas pump</text>
            </a><a href="#" v-on:click="onWordClicked('conch', $event)">
                <text x="589" y="135" font-size="11" transform="rotate(-90, 589, 135) translate(-30, 0)"
                      fill="rgb(67, 61, 132)">conch
                </text>
            </a><a href="#" v-on:click="onWordClicked('recreational vehicle', $event)">
                <text x="76" y="110" font-size="11" transform="rotate(-90, 76, 110) translate(-98, 0)"
                      fill="rgb(43, 117, 142)">recreational vehicle
                </text>
            </a><a href="#" v-on:click="onWordClicked('space shuttle', $event)">
                <text x="130" y="199" font-size="11" transform="rotate(-90, 130, 199) translate(-68, 0)"
                      fill="rgb(229, 228, 25)">space shuttle
                </text>
            </a><a href="#" v-on:click="onWordClicked('bucket', $event)">
                <text x="671" y="448" font-size="11" transform="rotate(-90, 671, 448) translate(-34, 0)"
                      fill="rgb(68, 59, 132)">bucket
                </text>
            </a><a href="#" v-on:click="onWordClicked('container ship', $event)">
                <text x="1103" y="125" font-size="11" transform="rotate(-90, 1103, 125) translate(-71, 0)"
                      fill="rgb(61, 77, 138)">container ship
                </text>
            </a><a href="#" v-on:click="onWordClicked('tile roof', $event)">
                <text x="771" y="436" font-size="11" transform="rotate(-90, 771, 436) translate(-39, 0)"
                      fill="rgb(149, 216, 64)">tile roof
                </text>
            </a><a href="#" v-on:click="onWordClicked('oxygen mask', $event)">
                <text x="55" y="263" font-size="11" transform="rotate(-90, 55, 263) translate(-65, 0)"
                      fill="rgb(53, 95, 141)">oxygen mask
                </text>
            </a><a href="#" v-on:click="onWordClicked('trombone', $event)">
                <text x="503" y="247" font-size="11" fill="rgb(42, 120, 142)">trombone</text>
            </a><a href="#" v-on:click="onWordClicked('butcher shop', $event)">
                <text x="142" y="269" font-size="11" transform="rotate(-90, 142, 269) translate(-65, 0)"
                      fill="rgb(112, 207, 87)">butcher shop
                </text>
            </a><a href="#" v-on:click="onWordClicked('wing', $event)">
                <text x="397" y="405" font-size="11" fill="rgb(36, 135, 142)">wing</text>
            </a><a href="#" v-on:click="onWordClicked('pay-phone', $event)">
                <text x="965" y="437" font-size="11" fill="rgb(41, 175, 127)">pay-phone</text>
            </a><a href="#" v-on:click="onWordClicked('plastic bag', $event)">
                <text x="1282" y="16" font-size="11" transform="rotate(-90, 1282, 16) translate(-55, 0)"
                      fill="rgb(49, 102, 142)">plastic bag
                </text>
            </a><a href="#" v-on:click="onWordClicked('shovel', $event)">
                <text x="605" y="371" font-size="11" fill="rgb(71, 19, 101)">shovel</text>
            </a><a href="#" v-on:click="onWordClicked('hand blower', $event)">
                <text x="1030" y="497" font-size="11" fill="rgb(33, 165, 133)">hand blower</text>
            </a><a href="#" v-on:click="onWordClicked('parallel bars', $event)">
                <text x="1244" y="362" font-size="11" transform="rotate(-90, 1244, 362) translate(-62, 0)"
                      fill="rgb(63, 71, 136)">parallel bars
                </text>
            </a><a href="#" v-on:click="onWordClicked('car mirror', $event)">
                <text x="1113" y="321" font-size="11" fill="rgb(42, 119, 142)">car mirror</text>
            </a><a href="#" v-on:click="onWordClicked('bulletproof vest', $event)">
                <text x="263" y="309" font-size="11" transform="rotate(-90, 263, 309) translate(-78, 0)"
                      fill="rgb(31, 152, 139)">bulletproof vest
                </text>
            </a><a href="#" v-on:click="onWordClicked('stole', $event)">
                <text x="1274" y="208" font-size="11" fill="rgb(70, 192, 111)">stole</text>
            </a><a href="#" v-on:click="onWordClicked('trolleybus', $event)">
                <text x="69" y="46" font-size="11" transform="rotate(-90, 69, 46) translate(-49, 0)"
                      fill="rgb(119, 209, 83)">trolleybus
                </text>
            </a><a href="#" v-on:click="onWordClicked('coho', $event)">
                <text x="589" y="206" font-size="11" fill="rgb(74, 193, 109)">coho</text>
            </a><a href="#" v-on:click="onWordClicked('notebook', $event)">
                <text x="730" y="129" font-size="11" transform="rotate(-90, 730, 129) translate(-46, 0)"
                      fill="rgb(48, 106, 142)">notebook
                </text>
            </a><a href="#" v-on:click="onWordClicked('swab', $event)">
                <text x="877" y="370" font-size="11" fill="rgb(72, 22, 104)">swab</text>
            </a><a href="#" v-on:click="onWordClicked('ear', $event)">
                <text x="988" y="215" font-size="11" fill="rgb(63, 72, 137)">ear</text>
            </a><a href="#" v-on:click="onWordClicked('radio telescope', $event)">
                <text x="792" y="52" font-size="9" fill="rgb(48, 105, 142)">radio telescope</text>
            </a><a href="#" v-on:click="onWordClicked('schooner', $event)">
                <text x="582" y="108" font-size="9" fill="rgb(49, 181, 123)">schooner</text>
            </a><a href="#" v-on:click="onWordClicked('nipple', $event)">
                <text x="1306" y="155" font-size="9" transform="rotate(-90, 1306, 155) translate(-24, 0)"
                      fill="rgb(34, 167, 133)">nipple
                </text>
            </a><a href="#" v-on:click="onWordClicked('chainlink fence', $event)">
                <text x="757" y="108" font-size="9" fill="rgb(56, 89, 140)">chainlink fence</text>
            </a><a href="#" v-on:click="onWordClicked('convertible', $event)">
                <text x="8" y="435" font-size="9" transform="rotate(-90, 8, 435) translate(-44, 0)"
                      fill="rgb(205, 225, 29)">convertible
                </text>
            </a><a href="#" v-on:click="onWordClicked('window shade', $event)">
                <text x="935" y="194" font-size="9" fill="rgb(63, 188, 115)">window shade</text>
            </a><a href="#" v-on:click="onWordClicked('shopping cart', $event)">
                <text x="1024" y="235" font-size="9" fill="rgb(248, 230, 33)">shopping cart</text>
            </a><a href="#" v-on:click="onWordClicked('afghan hound', $event)">
                <text x="908" y="164" font-size="9" fill="rgb(61, 188, 116)">afghan hound</text>
            </a><a href="#" v-on:click="onWordClicked('ambulance', $event)">
                <text x="912" y="271" font-size="9" fill="rgb(31, 153, 138)">ambulance</text>
            </a><a href="#" v-on:click="onWordClicked('hook', $event)">
                <text x="1369" y="61" font-size="9" fill="rgb(34, 140, 141)">hook</text>
            </a><a href="#" v-on:click="onWordClicked('apiary', $event)">
                <text x="1058" y="395" font-size="9" transform="rotate(-90, 1058, 395) translate(-25, 0)"
                      fill="rgb(37, 133, 142)">apiary
                </text>
            </a><a href="#" v-on:click="onWordClicked('flute', $event)">
                <text x="1016" y="270" font-size="9" fill="rgb(69, 4, 87)">flute</text>
            </a><a href="#" v-on:click="onWordClicked('oxcart', $event)">
                <text x="928" y="220" font-size="9" fill="rgb(142, 214, 69)">oxcart</text>
            </a><a href="#" v-on:click="onWordClicked('chime', $event)">
                <text x="715" y="78" font-size="9" fill="rgb(173, 220, 48)">chime</text>
            </a><a href="#" v-on:click="onWordClicked('aircraft carrier', $event)">
                <text x="199" y="413" font-size="9" fill="rgb(39, 127, 142)">aircraft carrier</text>
            </a><a href="#" v-on:click="onWordClicked('fire screen', $event)">
                <text x="1309" y="31" font-size="9" transform="rotate(-90, 1309, 31) translate(-43, 0)"
                      fill="rgb(71, 45, 123)">fire screen
                </text>
            </a><a href="#" v-on:click="onWordClicked('hoopskirt', $event)">
                <text x="962" y="110" font-size="9" fill="rgb(226, 228, 24)">hoopskirt</text>
            </a><a href="#" v-on:click="onWordClicked('snowmobile', $event)">
                <text x="958" y="257" font-size="9" fill="rgb(70, 8, 92)">snowmobile</text>
            </a><a href="#" v-on:click="onWordClicked('ice cream', $event)">
                <text x="742" y="7" font-size="9" fill="rgb(229, 228, 25)">ice cream</text>
            </a><a href="#" v-on:click="onWordClicked('bullet train', $event)">
                <text x="182" y="41" font-size="9" fill="rgb(66, 65, 134)">bullet train</text>
            </a><a href="#" v-on:click="onWordClicked('freight car', $event)">
                <text x="1214" y="43" font-size="9" transform="rotate(-90, 1214, 43) translate(-41, 0)"
                      fill="rgb(63, 71, 136)">freight car
                </text>
            </a><a href="#" v-on:click="onWordClicked('apron', $event)">
                <text x="627" y="173" font-size="9" fill="rgb(36, 135, 142)">apron</text>
            </a><a href="#" v-on:click="onWordClicked('lawn mower', $event)">
                <text x="900" y="475" font-size="9" fill="rgb(47, 107, 142)">lawn mower</text>
            </a><a href="#" v-on:click="onWordClicked('catamaran', $event)">
                <text x="1344" y="142" font-size="9" transform="rotate(-90, 1344, 142) translate(-44, 0)"
                      fill="rgb(54, 93, 141)">catamaran
                </text>
            </a><a href="#" v-on:click="onWordClicked('hip', $event)">
                <text x="613" y="75" font-size="9" fill="rgb(68, 57, 131)">hip</text>
            </a><a href="#" v-on:click="onWordClicked('cardigan', $event)">
                <text x="1274" y="137" font-size="9" transform="rotate(-90, 1274, 137) translate(-35, 0)"
                      fill="rgb(122, 209, 81)">cardigan
                </text>
            </a><a href="#" v-on:click="onWordClicked('snorkel', $event)">
                <text x="869" y="250" font-size="9" fill="rgb(105, 205, 91)">snorkel</text>
            </a><a href="#" v-on:click="onWordClicked('maze', $event)">
                <text x="1331" y="199" font-size="9" fill="rgb(66, 63, 133)">maze</text>
            </a><a href="#" v-on:click="onWordClicked('pirate', $event)">
                <text x="1141" y="329" font-size="9" fill="rgb(49, 181, 123)">pirate</text>
            </a><a href="#" v-on:click="onWordClicked('missile', $event)">
                <text x="135" y="342" font-size="9" fill="rgb(46, 179, 124)">missile</text>
            </a><a href="#" v-on:click="onWordClicked('refrigerator', $event)">
                <text x="651" y="45" font-size="9" fill="rgb(58, 83, 139)">refrigerator</text>
            </a><a href="#" v-on:click="onWordClicked('broom', $event)">
                <text x="212" y="322" font-size="9" fill="rgb(72, 38, 119)">broom</text>
            </a><a href="#" v-on:click="onWordClicked('airship', $event)">
                <text x="673" y="358" font-size="9" transform="rotate(-90, 673, 358) translate(-27, 0)"
                      fill="rgb(74, 193, 109)">airship
                </text>
            </a><a href="#" v-on:click="onWordClicked('crayfish', $event)">
                <text x="128" y="441" font-size="9" transform="rotate(-90, 128, 441) translate(-32, 0)"
                      fill="rgb(197, 224, 33)">crayfish
                </text>
            </a><a href="#" v-on:click="onWordClicked('bearskin', $event)">
                <text x="767" y="218" font-size="9" fill="rgb(44, 113, 142)">bearskin</text>
            </a><a href="#" v-on:click="onWordClicked('corn', $event)">
                <text x="404" y="247" font-size="9" fill="rgb(56, 185, 119)">corn</text>
            </a><a href="#" v-on:click="onWordClicked('sewing machine', $event)">
                <text x="1373" y="126" font-size="9" transform="rotate(-90, 1373, 126) translate(-66, 0)"
                      fill="rgb(43, 117, 142)">sewing machine
                </text>
            </a><a href="#" v-on:click="onWordClicked('spatula', $event)">
                <text x="71" y="259" font-size="9" fill="rgb(53, 183, 121)">spatula</text>
            </a><a href="#" v-on:click="onWordClicked('beach wagon', $event)">
                <text x="1082" y="376" font-size="9" transform="rotate(-90, 1082, 376) translate(-54, 0)"
                      fill="rgb(72, 29, 111)">beach wagon
                </text>
            </a><a href="#" v-on:click="onWordClicked('potter\'s wheel', $event)">
                <text x="562" y="14" font-size="9" transform="rotate(-90, 562, 14) translate(-61, 0)"
                      fill="rgb(115, 208, 86)">potter\'s wheel
                </text>
            </a><a href="#" v-on:click="onWordClicked('breastplate', $event)">
                <text x="846" y="126" font-size="9" fill="rgb(47, 107, 142)">breastplate</text>
            </a><a href="#" v-on:click="onWordClicked('barber chair', $event)">
                <text x="1179" y="300" font-size="9" fill="rgb(160, 218, 57)">barber chair</text>
            </a><a href="#" v-on:click="onWordClicked('sombrero', $event)">
                <text x="519" y="185" font-size="9" fill="rgb(30, 157, 137)">sombrero</text>
            </a><a href="#" v-on:click="onWordClicked('quill', $event)">
                <text x="1273" y="340" font-size="9" fill="rgb(68, 57, 131)">quill</text>
            </a><a href="#" v-on:click="onWordClicked('dogsled', $event)">
                <text x="1064" y="315" font-size="9" fill="rgb(51, 99, 141)">dogsled</text>
            </a><a href="#" v-on:click="onWordClicked('coral reef', $event)">
                <text x="774" y="497" font-size="9" fill="rgb(86, 198, 103)">coral reef</text>
            </a><a href="#" v-on:click="onWordClicked('analog clock', $event)">
                <text x="149" y="272" font-size="9" fill="rgb(32, 163, 134)">analog clock</text>
            </a><a href="#" v-on:click="onWordClicked('tripod', $event)">
                <text x="1132" y="32" font-size="9" fill="rgb(50, 182, 122)">tripod</text>
            </a><a href="#" v-on:click="onWordClicked('lifeboat', $event)">
                <text x="1294" y="365" font-size="9" fill="rgb(246, 230, 32)">lifeboat</text>
            </a><a href="#" v-on:click="onWordClicked('projectile', $event)">
                <text x="911" y="56" font-size="9" fill="rgb(70, 48, 126)">projectile</text>
            </a><a href="#" v-on:click="onWordClicked('desktop computer', $event)">
                <text x="871" y="141" font-size="9" transform="rotate(-90, 871, 141) translate(-74, 0)"
                      fill="rgb(59, 81, 139)">desktop computer
                </text>
            </a><a href="#" v-on:click="onWordClicked('caldron', $event)">
                <text x="1046" y="36" font-size="9" transform="rotate(-90, 1046, 36) translate(-30, 0)"
                      fill="rgb(59, 81, 139)">caldron
                </text>
            </a><a href="#" v-on:click="onWordClicked('bathtub', $event)">
                <text x="131" y="81" font-size="9" fill="rgb(139, 214, 70)">bathtub</text>
            </a><a href="#" v-on:click="onWordClicked('hummingbird', $event)">
                <text x="1394" y="441" font-size="9" transform="rotate(-90, 1394, 441) translate(-53, 0)"
                      fill="rgb(67, 61, 132)">hummingbird
                </text>
            </a><a href="#" v-on:click="onWordClicked('teddy', $event)">
                <text x="1152" y="403" font-size="9" fill="rgb(66, 65, 134)">teddy</text>
            </a><a href="#" v-on:click="onWordClicked('assault rifle', $event)">
                <text x="444" y="108" font-size="9" fill="rgb(70, 48, 126)">assault rifle</text>
            </a><a href="#" v-on:click="onWordClicked('tiger cat', $event)">
                <text x="9" y="495" font-size="9" fill="rgb(170, 220, 50)">tiger cat</text>
            </a><a href="#" v-on:click="onWordClicked('loudspeaker', $event)">
                <text x="442" y="295" font-size="9" transform="rotate(-90, 442, 295) translate(-50, 0)"
                      fill="rgb(132, 212, 75)">loudspeaker
                </text>
            </a><a href="#" v-on:click="onWordClicked('rocking chair', $event)">
                <text x="153" y="417" font-size="9" transform="rotate(-90, 153, 417) translate(-52, 0)"
                      fill="rgb(231, 228, 25)">rocking chair
                </text>
            </a><a href="#" v-on:click="onWordClicked('shoji', $event)">
                <text x="1331" y="334" font-size="9" fill="rgb(218, 227, 25)">shoji</text>
            </a><a href="#" v-on:click="onWordClicked('rain barrel', $event)">
                <text x="477" y="359" font-size="9" fill="rgb(31, 148, 140)">rain barrel</text>
            </a><a href="#" v-on:click="onWordClicked('envelope', $event)">
                <text x="58" y="352" font-size="9" fill="rgb(236, 229, 27)">envelope</text>
            </a><a href="#" v-on:click="onWordClicked('lighter', $event)">
                <text x="319" y="231" font-size="9" fill="rgb(72, 36, 117)">lighter</text>
            </a><a href="#" v-on:click="onWordClicked('fur coat', $event)">
                <text x="1367" y="30" font-size="9" fill="rgb(68, 59, 132)">fur coat</text>
            </a><a href="#" v-on:click="onWordClicked('barbell', $event)">
                <text x="1397" y="154" font-size="9" transform="rotate(-90, 1397, 154) translate(-27, 0)"
                      fill="rgb(162, 218, 55)">barbell
                </text>
            </a><a href="#" v-on:click="onWordClicked('gong', $event)">
                <text x="363" y="70" font-size="9" fill="rgb(72, 32, 113)">gong</text>
            </a><a href="#" v-on:click="onWordClicked('thresher', $event)">
                <text x="747" y="45" font-size="9" fill="rgb(71, 44, 122)">thresher</text>
            </a><a href="#" v-on:click="onWordClicked('water jug', $event)">
                <text x="701" y="64" font-size="9" fill="rgb(80, 196, 106)">water jug</text>
            </a><a href="#" v-on:click="onWordClicked('crossword puzzle', $event)">
                <text x="308" y="79" font-size="9" transform="rotate(-90, 308, 79) translate(-70, 0)"
                      fill="rgb(110, 206, 88)">crossword puzzle
                </text>
            </a><a href="#" v-on:click="onWordClicked('bib', $event)">
                <text x="712" y="302" font-size="9" fill="rgb(34, 168, 132)">bib</text>
            </a><a href="#" v-on:click="onWordClicked('cradle', $event)">
                <text x="1259" y="307" font-size="9" fill="rgb(65, 66, 135)">cradle</text>
            </a><a href="#" v-on:click="onWordClicked('wok', $event)">
                <text x="970" y="60" font-size="9" fill="rgb(46, 109, 142)">wok</text>
            </a><a href="#" v-on:click="onWordClicked('lampshade', $event)">
                <text x="394" y="413" font-size="9" fill="rgb(137, 213, 72)">lampshade</text>
            </a><a href="#" v-on:click="onWordClicked('police van', $event)">
                <text x="476" y="365" font-size="9" fill="rgb(55, 184, 120)">police van</text>
            </a><a href="#" v-on:click="onWordClicked('binder', $event)">
                <text x="704" y="363" font-size="9" fill="rgb(51, 99, 141)">binder</text>
            </a><a href="#" v-on:click="onWordClicked('seat belt', $event)">
                <text x="790" y="405" font-size="9" fill="rgb(72, 40, 120)">seat belt</text>
            </a><a href="#" v-on:click="onWordClicked('terrapin', $event)">
                <text x="819" y="270" font-size="9" fill="rgb(90, 200, 100)">terrapin</text>
            </a><a href="#" v-on:click="onWordClicked('tank', $event)">
                <text x="1229" y="149" font-size="9" fill="rgb(34, 140, 141)">tank</text>
            </a><a href="#" v-on:click="onWordClicked('dutch oven', $event)">
                <text x="829" y="434" font-size="9" fill="rgb(67, 62, 133)">dutch oven</text>
            </a><a href="#" v-on:click="onWordClicked('speedboat', $event)">
                <text x="363" y="475" font-size="9" fill="rgb(39, 127, 142)">speedboat</text>
            </a><a href="#" v-on:click="onWordClicked('tabby', $event)">
                <text x="385" y="233" font-size="9" fill="rgb(72, 29, 111)">tabby</text>
            </a><a href="#" v-on:click="onWordClicked('gasmask', $event)">
                <text x="1142" y="380" font-size="9" fill="rgb(31, 148, 140)">gasmask</text>
            </a><a href="#" v-on:click="onWordClicked('airliner', $event)">
                <text x="1220" y="19" font-size="9" transform="rotate(-90, 1220, 19) translate(-27, 0)"
                      fill="rgb(58, 186, 118)">airliner
                </text>
            </a><a href="#" v-on:click="onWordClicked('beer glass', $event)">
                <text x="1298" y="309" font-size="9" fill="rgb(37, 133, 142)">beer glass</text>
            </a><a href="#" v-on:click="onWordClicked('sea lion', $event)">
                <text x="880" y="271" font-size="9" fill="rgb(31, 148, 140)">sea lion</text>
            </a><a href="#" v-on:click="onWordClicked('handkerchief', $event)">
                <text x="595" y="402" font-size="9" fill="rgb(31, 153, 138)">handkerchief</text>
            </a><a href="#" v-on:click="onWordClicked('arabian camel', $event)">
                <text x="565" y="319" font-size="9" transform="rotate(-90, 565, 319) translate(-57, 0)"
                      fill="rgb(94, 201, 98)">arabian camel
                </text>
            </a><a href="#" v-on:click="onWordClicked('goose', $event)">
                <text x="310" y="387" font-size="9" fill="rgb(168, 219, 52)">goose</text>
            </a><a href="#" v-on:click="onWordClicked('paper towel', $event)">
                <text x="1113" y="19" font-size="9" transform="rotate(-90, 1113, 19) translate(-47, 0)"
                      fill="rgb(168, 219, 52)">paper towel
                </text>
            </a><a href="#" v-on:click="onWordClicked('egyptian cat', $event)">
                <text x="7" y="71" font-size="9" transform="rotate(-90, 7, 71) translate(-49, 0)"
                      fill="rgb(35, 169, 131)">egyptian cat
                </text>
            </a><a href="#" v-on:click="onWordClicked('paintbrush', $event)">
                <text x="309" y="421" font-size="9" transform="rotate(-90, 309, 421) translate(-43, 0)"
                      fill="rgb(71, 45, 123)">paintbrush
                </text>
            </a><a href="#" v-on:click="onWordClicked('studio couch', $event)">
                <text x="1276" y="479" font-size="9" fill="rgb(50, 182, 122)">studio couch</text>
            </a><a href="#" v-on:click="onWordClicked('beer bottle', $event)">
                <text x="224" y="41" font-size="9" fill="rgb(43, 116, 142)">beer bottle</text>
            </a><a href="#" v-on:click="onWordClicked('scale', $event)">
                <text x="1144" y="496" font-size="9" fill="rgb(72, 20, 103)">scale</text>
            </a><a href="#" v-on:click="onWordClicked('safety pin', $event)">
                <text x="353" y="366" font-size="9" fill="rgb(32, 146, 140)">safety pin</text>
            </a><a href="#" v-on:click="onWordClicked('barrel', $event)">
                <text x="982" y="127" font-size="9" fill="rgb(223, 227, 24)">barrel</text>
            </a><a href="#" v-on:click="onWordClicked('dungeness crab', $event)">
                <text x="728" y="188" font-size="9" transform="rotate(-90, 728, 188) translate(-65, 0)"
                      fill="rgb(47, 108, 142)">dungeness crab
                </text>
            </a><a href="#" v-on:click="onWordClicked('syringe', $event)">
                <text x="918" y="142" font-size="9" fill="rgb(48, 106, 142)">syringe</text>
            </a><a href="#" v-on:click="onWordClicked('burrito', $event)">
                <text x="21" y="183" font-size="9" fill="rgb(55, 184, 120)">burrito</text>
            </a><a href="#" v-on:click="onWordClicked('doormat', $event)">
                <text x="1358" y="85" font-size="9" fill="rgb(84, 197, 104)">doormat</text>
            </a><a href="#" v-on:click="onWordClicked('trench coat', $event)">
                <text x="477" y="316" font-size="9" fill="rgb(71, 45, 123)">trench coat</text>
            </a><a href="#" v-on:click="onWordClicked('paddlewheel', $event)">
                <text x="302" y="324" font-size="9" transform="rotate(-90, 302, 324) translate(-51, 0)"
                      fill="rgb(36, 134, 142)">paddlewheel
                </text>
            </a><a href="#" v-on:click="onWordClicked('ski mask', $event)">
                <text x="297" y="7" font-size="9" fill="rgb(63, 72, 137)">ski mask</text>
            </a><a href="#" v-on:click="onWordClicked('cabbage butterfly', $event)">
                <text x="94" y="7" font-size="8" fill="rgb(70, 11, 94)">cabbage butterfly</text>
            </a><a href="#" v-on:click="onWordClicked('wine bottle', $event)">
                <text x="3" y="6" font-size="8" fill="rgb(155, 217, 60)">wine bottle</text>
            </a><a href="#" v-on:click="onWordClicked('toilet tissue', $event)">
                <text x="944" y="397" font-size="8" fill="rgb(94, 201, 98)">toilet tissue</text>
            </a><a href="#" v-on:click="onWordClicked('lotion', $event)">
                <text x="864" y="237" font-size="8" fill="rgb(31, 159, 136)">lotion</text>
            </a><a href="#" v-on:click="onWordClicked('trimaran', $event)">
                <text x="746" y="428" font-size="8" fill="rgb(32, 147, 140)">trimaran</text>
            </a><a href="#" v-on:click="onWordClicked('dumbbell', $event)">
                <text x="120" y="173" font-size="8" fill="rgb(31, 153, 138)">dumbbell</text>
            </a><a href="#" v-on:click="onWordClicked('electric fan', $event)">
                <text x="878" y="498" font-size="8" fill="rgb(70, 10, 93)">electric fan</text>
            </a><a href="#" v-on:click="onWordClicked('pool table', $event)">
                <text x="57" y="388" font-size="8" fill="rgb(72, 37, 118)">pool table</text>
            </a><a href="#" v-on:click="onWordClicked('bath towel', $event)">
                <text x="467" y="273" font-size="8" fill="rgb(53, 183, 121)">bath towel</text>
            </a><a href="#" v-on:click="onWordClicked('toilet seat', $event)">
                <text x="1313" y="245" font-size="8" transform="rotate(-90, 1313, 245) translate(-36, 0)"
                      fill="rgb(108, 205, 90)">toilet seat
                </text>
            </a><a href="#" v-on:click="onWordClicked('loupe', $event)">
                <text x="147" y="398" font-size="8" fill="rgb(251, 231, 35)">loupe</text>
            </a><a href="#" v-on:click="onWordClicked('mousetrap', $event)">
                <text x="233" y="392" font-size="8" fill="rgb(32, 163, 134)">mousetrap</text>
            </a><a href="#" v-on:click="onWordClicked('cloak', $event)">
                <text x="328" y="278" font-size="8" fill="rgb(60, 80, 139)">cloak</text>
            </a><a href="#" v-on:click="onWordClicked('water tower', $event)">
                <text x="170" y="455" font-size="8" fill="rgb(58, 186, 118)">water tower</text>
            </a><a href="#" v-on:click="onWordClicked('hen-of-the-woods', $event)">
                <text x="297" y="256" font-size="8" fill="rgb(117, 208, 84)">hen-of-the-woods</text>
            </a><a href="#" v-on:click="onWordClicked('car wheel', $event)">
                <text x="963" y="406" font-size="8" fill="rgb(55, 91, 141)">car wheel</text>
            </a><a href="#" v-on:click="onWordClicked('abaya', $event)">
                <text x="776" y="223" font-size="8" fill="rgb(31, 160, 136)">abaya</text>
            </a><a href="#" v-on:click="onWordClicked('jackfruit', $event)">
                <text x="1182" y="193" font-size="8" fill="rgb(63, 72, 137)">jackfruit</text>
            </a><a href="#" v-on:click="onWordClicked('rotisserie', $event)">
                <text x="922" y="344" font-size="8" fill="rgb(147, 215, 65)">rotisserie</text>
            </a><a href="#" v-on:click="onWordClicked('power drill', $event)">
                <text x="239" y="438" font-size="8" transform="rotate(-90, 239, 438) translate(-38, 0)"
                      fill="rgb(72, 22, 104)">power drill
                </text>
            </a><a href="#" v-on:click="onWordClicked('tractor', $event)">
                <text x="673" y="56" font-size="8" fill="rgb(72, 31, 112)">tractor</text>
            </a><a href="#" v-on:click="onWordClicked('ox', $event)">
                <text x="1147" y="231" font-size="8" fill="rgb(63, 188, 115)">ox</text>
            </a><a href="#" v-on:click="onWordClicked('pop bottle', $event)">
                <text x="1296" y="403" font-size="8" fill="rgb(39, 127, 142)">pop bottle</text>
            </a><a href="#" v-on:click="onWordClicked('vacuum', $event)">
                <text x="550" y="98" font-size="8" fill="rgb(72, 31, 112)">vacuum</text>
            </a><a href="#" v-on:click="onWordClicked('harp', $event)">
                <text x="1053" y="164" font-size="8" fill="rgb(112, 207, 87)">harp</text>
            </a><a href="#" v-on:click="onWordClicked('wall clock', $event)">
                <text x="0" y="484" font-size="8" fill="rgb(208, 225, 28)">wall clock</text>
            </a><a href="#" v-on:click="onWordClicked('triceratops', $event)">
                <text x="1007" y="257" font-size="8" fill="rgb(32, 147, 140)">triceratops</text>
            </a><a href="#" v-on:click="onWordClicked('organ', $event)">
                <text x="268" y="468" font-size="8" fill="rgb(119, 209, 83)">organ</text>
            </a><a href="#" v-on:click="onWordClicked('mushroom', $event)">
                <text x="715" y="372" font-size="8" fill="rgb(186, 222, 40)">mushroom</text>
            </a><a href="#" v-on:click="onWordClicked('bolo tie', $event)">
                <text x="390" y="123" font-size="8" fill="rgb(37, 131, 142)">bolo tie</text>
            </a><a href="#" v-on:click="onWordClicked('stove', $event)">
                <text x="134" y="88" font-size="8" fill="rgb(41, 122, 142)">stove</text>
            </a><a href="#" v-on:click="onWordClicked('ladle', $event)">
                <text x="986" y="201" font-size="8" fill="rgb(64, 189, 114)">ladle</text>
            </a><a href="#" v-on:click="onWordClicked('walking stick', $event)">
                <text x="25" y="452" font-size="8" fill="rgb(32, 147, 140)">walking stick</text>
            </a><a href="#" v-on:click="onWordClicked('steam locomotive', $event)">
                <text x="50" y="112" font-size="8" transform="rotate(-90, 50, 112) translate(-65, 0)"
                      fill="rgb(58, 186, 118)">steam locomotive
                </text>
            </a><a href="#" v-on:click="onWordClicked('snowplow', $event)">
                <text x="1289" y="370" font-size="8" fill="rgb(31, 152, 139)">snowplow</text>
            </a><a href="#" v-on:click="onWordClicked('wooden spoon', $event)">
                <text x="518" y="14" font-size="8" transform="rotate(-90, 518, 14) translate(-53, 0)"
                      fill="rgb(38, 130, 142)">wooden spoon
                </text>
            </a><a href="#" v-on:click="onWordClicked('american alligator', $event)">
                <text x="523" y="115" font-size="8" transform="rotate(-90, 523, 115) translate(-63, 0)"
                      fill="rgb(34, 139, 141)">american alligator
                </text>
            </a><a href="#" v-on:click="onWordClicked('water buffalo', $event)">
                <text x="372" y="47" font-size="8" fill="rgb(59, 81, 139)">water buffalo</text>
            </a><a href="#" v-on:click="onWordClicked('coffee mug', $event)">
                <text x="584" y="56" font-size="8" fill="rgb(70, 48, 126)">coffee mug</text>
            </a><a href="#" v-on:click="onWordClicked('coil', $event)">
                <text x="131" y="244" font-size="8" fill="rgb(47, 180, 124)">coil</text>
            </a><a href="#" v-on:click="onWordClicked('grille', $event)">
                <text x="852" y="359" font-size="8" transform="rotate(-90, 852, 359) translate(-17, 0)"
                      fill="rgb(46, 110, 142)">grille
                </text>
            </a><a href="#" v-on:click="onWordClicked('crib', $event)">
                <text x="932" y="415" font-size="8" fill="rgb(42, 176, 127)">crib</text>
            </a><a href="#" v-on:click="onWordClicked('perfume', $event)">
                <text x="1158" y="153" font-size="8" fill="rgb(41, 123, 142)">perfume</text>
            </a><a href="#" v-on:click="onWordClicked('submarine', $event)">
                <text x="544" y="103" font-size="8" fill="rgb(69, 4, 87)">submarine</text>
            </a><a href="#" v-on:click="onWordClicked('ant', $event)">
                <text x="557" y="254" font-size="8" fill="rgb(66, 65, 134)">ant</text>
            </a><a href="#" v-on:click="onWordClicked('sea urchin', $event)">
                <text x="576" y="225" font-size="8" fill="rgb(35, 137, 142)">sea urchin</text>
            </a><a href="#" v-on:click="onWordClicked('sturgeon', $event)">
                <text x="701" y="402" font-size="8" fill="rgb(115, 208, 86)">sturgeon</text>
            </a><a href="#" v-on:click="onWordClicked('microwave', $event)">
                <text x="1354" y="270" font-size="8" transform="rotate(-90, 1354, 270) translate(-39, 0)"
                      fill="rgb(88, 199, 101)">microwave
                </text>
            </a><a href="#" v-on:click="onWordClicked('china cabinet', $event)">
                <text x="1314" y="26" font-size="8" transform="rotate(-90, 1314, 26) translate(-45, 0)"
                      fill="rgb(72, 27, 109)">china cabinet
                </text>
            </a><a href="#" v-on:click="onWordClicked('jeep', $event)">
                <text x="810" y="292" font-size="8" transform="rotate(-90, 810, 292) translate(-17, 0)"
                      fill="rgb(32, 147, 140)">jeep
                </text>
            </a><a href="#" v-on:click="onWordClicked('goblet', $event)">
                <text x="418" y="433" font-size="8" fill="rgb(90, 200, 100)">goblet</text>
            </a><a href="#" v-on:click="onWordClicked('electric locomotive', $event)">
                <text x="328" y="66" font-size="8" transform="rotate(-90, 328, 66) translate(-69, 0)"
                      fill="rgb(36, 135, 142)">electric locomotive
                </text>
            </a><a href="#" v-on:click="onWordClicked('hair slide', $event)">
                <text x="141" y="37" font-size="8" fill="rgb(35, 137, 142)">hair slide</text>
            </a><a href="#" v-on:click="onWordClicked('harvester', $event)">
                <text x="616" y="254" font-size="8" fill="rgb(202, 225, 31)">harvester</text>
            </a><a href="#" v-on:click="onWordClicked('cuirass', $event)">
                <text x="1129" y="21" font-size="8" fill="rgb(66, 65, 134)">cuirass</text>
            </a><a href="#" v-on:click="onWordClicked('jellyfish', $event)">
                <text x="987" y="334" font-size="8" fill="rgb(31, 161, 136)">jellyfish</text>
            </a><a href="#" v-on:click="onWordClicked('wardrobe', $event)">
                <text x="786" y="370" font-size="8" fill="rgb(71, 13, 96)">wardrobe</text>
            </a><a href="#" v-on:click="onWordClicked('spider monkey', $event)">
                <text x="1206" y="122" font-size="8" transform="rotate(-90, 1206, 122) translate(-52, 0)"
                      fill="rgb(33, 144, 141)">spider monkey
                </text>
            </a><a href="#" v-on:click="onWordClicked('loggerhead', $event)">
                <text x="700" y="6" font-size="8" fill="rgb(76, 194, 108)">loggerhead</text>
            </a><a href="#" v-on:click="onWordClicked('llama', $event)">
                <text x="621" y="104" font-size="8" fill="rgb(35, 138, 141)">llama</text>
            </a><a href="#" v-on:click="onWordClicked('iron', $event)">
                <text x="1339" y="452" font-size="8" fill="rgb(34, 168, 132)">iron</text>
            </a><a href="#" v-on:click="onWordClicked('wallaby', $event)">
                <text x="877" y="405" font-size="8" fill="rgb(236, 229, 27)">wallaby</text>
            </a><a href="#" v-on:click="onWordClicked('buckle', $event)">
                <text x="1173" y="433" font-size="8" fill="rgb(69, 53, 129)">buckle</text>
            </a><a href="#" v-on:click="onWordClicked('honeycomb', $event)">
                <text x="664" y="255" font-size="8" transform="rotate(-90, 664, 255) translate(-42, 0)"
                      fill="rgb(186, 222, 40)">honeycomb
                </text>
            </a><a href="#" v-on:click="onWordClicked('shower curtain', $event)">
                <text x="1192" y="229" font-size="8" transform="rotate(-90, 1192, 229) translate(-52, 0)"
                      fill="rgb(70, 8, 92)">shower curtain
                </text>
            </a><a href="#" v-on:click="onWordClicked('saltshaker', $event)">
                <text x="363" y="347" font-size="8" fill="rgb(127, 211, 78)">saltshaker</text>
            </a><a href="#" v-on:click="onWordClicked('model t', $event)">
                <text x="684" y="496" font-size="8" fill="rgb(162, 218, 55)">model t</text>
            </a><a href="#" v-on:click="onWordClicked('french horn', $event)">
                <text x="595" y="324" font-size="8" fill="rgb(33, 144, 141)">french horn</text>
            </a><a href="#" v-on:click="onWordClicked('pelican', $event)">
                <text x="1186" y="312" font-size="8" fill="rgb(129, 211, 77)">pelican</text>
            </a><a href="#" v-on:click="onWordClicked('four-poster', $event)">
                <text x="1283" y="229" font-size="8" fill="rgb(46, 179, 124)">four-poster</text>
            </a><a href="#" v-on:click="onWordClicked('chain mail', $event)">
                <text x="373" y="6" font-size="8" fill="rgb(68, 1, 84)">chain mail</text>
            </a><a href="#" v-on:click="onWordClicked('shopping basket', $event)">
                <text x="753" y="271" font-size="7" fill="rgb(32, 147, 140)">shopping basket</text>
            </a><a href="#" v-on:click="onWordClicked('pitcher', $event)">
                <text x="291" y="314" font-size="7" fill="rgb(112, 207, 87)">pitcher</text>
            </a><a href="#" v-on:click="onWordClicked('chihuahua', $event)">
                <text x="680" y="272" font-size="7" fill="rgb(78, 195, 107)">chihuahua</text>
            </a><a href="#" v-on:click="onWordClicked('pickup', $event)">
                <text x="1355" y="121" font-size="7" fill="rgb(103, 204, 92)">pickup</text>
            </a><a href="#" v-on:click="onWordClicked('dough', $event)">
                <text x="984" y="136" font-size="7" fill="rgb(37, 172, 130)">dough</text>
            </a><a href="#" v-on:click="onWordClicked('leatherback turtle', $event)">
                <text x="765" y="193" font-size="7" fill="rgb(129, 211, 77)">leatherback turtle</text>
            </a><a href="#" v-on:click="onWordClicked('spiny lobster', $event)">
                <text x="725" y="496" font-size="7" fill="rgb(71, 14, 97)">spiny lobster</text>
            </a><a href="#" v-on:click="onWordClicked('impala', $event)">
                <text x="1229" y="165" font-size="7" fill="rgb(181, 222, 43)">impala</text>
            </a><a href="#" v-on:click="onWordClicked('gar', $event)">
                <text x="973" y="33" font-size="7" fill="rgb(60, 80, 139)">gar</text>
            </a><a href="#" v-on:click="onWordClicked('rubber eraser', $event)">
                <text x="230" y="99" font-size="7" fill="rgb(31, 152, 139)">rubber eraser</text>
            </a><a href="#" v-on:click="onWordClicked('soup bowl', $event)">
                <text x="0" y="413" font-size="7" fill="rgb(31, 149, 139)">soup bowl</text>
            </a><a href="#" v-on:click="onWordClicked('abacus', $event)">
                <text x="1130" y="55" font-size="7" fill="rgb(192, 223, 37)">abacus</text>
            </a><a href="#" v-on:click="onWordClicked('king crab', $event)">
                <text x="186" y="105" font-size="7" fill="rgb(90, 200, 100)">king crab</text>
            </a><a href="#" v-on:click="onWordClicked('yellow lady\'s slipper', $event)">
                <text x="51" y="497" font-size="7" fill="rgb(61, 188, 116)">yellow lady\'s slipper</text>
            </a><a href="#" v-on:click="onWordClicked('toaster', $event)">
                <text x="1147" y="279" font-size="7" fill="rgb(58, 84, 140)">toaster</text>
            </a><a href="#" v-on:click="onWordClicked('chest', $event)">
                <text x="36" y="35" font-size="7" fill="rgb(63, 71, 136)">chest</text>
            </a><a href="#" v-on:click="onWordClicked('oscilloscope', $event)">
                <text x="154" y="497" font-size="7" fill="rgb(101, 203, 94)">oscilloscope</text>
            </a><a href="#" v-on:click="onWordClicked('cleaver', $event)">
                <text x="244" y="234" font-size="7" fill="rgb(45, 178, 125)">cleaver</text>
            </a><a href="#" v-on:click="onWordClicked('american lobster', $event)">
                <text x="1157" y="337" font-size="7" fill="rgb(181, 222, 43)">american lobster</text>
            </a><a href="#" v-on:click="onWordClicked('hatchet', $event)">
                <text x="846" y="84" font-size="7" fill="rgb(34, 168, 132)">hatchet</text>
            </a><a href="#" v-on:click="onWordClicked('bassinet', $event)">
                <text x="470" y="18" font-size="7" fill="rgb(72, 26, 108)">bassinet</text>
            </a><a href="#" v-on:click="onWordClicked('piggy bank', $event)">
                <text x="173" y="372" font-size="7" fill="rgb(31, 150, 139)">piggy bank</text>
            </a><a href="#" v-on:click="onWordClicked('table lamp', $event)">
                <text x="18" y="245" font-size="7" fill="rgb(70, 192, 111)">table lamp</text>
            </a><a href="#" v-on:click="onWordClicked('pineapple', $event)">
                <text x="445" y="224" font-size="7" fill="rgb(35, 169, 131)">pineapple</text>
            </a><a href="#" v-on:click="onWordClicked('christmas stocking', $event)">
                <text x="1250" y="356" font-size="7" transform="rotate(-90, 1250, 356) translate(-62, 0)"
                      fill="rgb(168, 219, 52)">christmas stocking
                </text>
            </a><a href="#" v-on:click="onWordClicked('cucumber', $event)">
                <text x="171" y="306" font-size="7" fill="rgb(71, 19, 101)">cucumber</text>
            </a><a href="#" v-on:click="onWordClicked('hay', $event)">
                <text x="919" y="483" font-size="7" fill="rgb(60, 79, 138)">hay</text>
            </a><a href="#" v-on:click="onWordClicked('golf ball', $event)">
                <text x="75" y="52" font-size="7" fill="rgb(189, 223, 38)">golf ball</text>
            </a><a href="#" v-on:click="onWordClicked('photocopier', $event)">
                <text x="848" y="104" font-size="7" fill="rgb(49, 102, 142)">photocopier</text>
            </a><a href="#" v-on:click="onWordClicked('strainer', $event)">
                <text x="869" y="270" font-size="7" transform="rotate(-90, 869, 270) translate(-25, 0)"
                      fill="rgb(31, 162, 135)">strainer
                </text>
            </a><a href="#" v-on:click="onWordClicked('vulture', $event)">
                <text x="1226" y="193" font-size="7" fill="rgb(74, 193, 109)">vulture</text>
            </a><a href="#" v-on:click="onWordClicked('poncho', $event)">
                <text x="1184" y="84" font-size="7" transform="rotate(-90, 1184, 84) translate(-24, 0)"
                      fill="rgb(71, 19, 101)">poncho
                </text>
            </a><a href="#" v-on:click="onWordClicked('pencil box', $event)">
                <text x="1319" y="245" font-size="7" transform="rotate(-90, 1319, 245) translate(-34, 0)"
                      fill="rgb(70, 11, 94)">pencil box
                </text>
            </a><a href="#" v-on:click="onWordClicked('acorn', $event)">
                <text x="185" y="135" font-size="7" fill="rgb(72, 193, 110)">acorn</text>
            </a><a href="#" v-on:click="onWordClicked('tennis ball', $event)">
                <text x="539" y="190" font-size="7" fill="rgb(110, 206, 88)">tennis ball</text>
            </a><a href="#" v-on:click="onWordClicked('upright', $event)">
                <text x="1112" y="427" font-size="7" fill="rgb(32, 163, 134)">upright</text>
            </a><a href="#" v-on:click="onWordClicked('clog', $event)">
                <text x="525" y="175" font-size="7" fill="rgb(181, 222, 43)">clog</text>
            </a><a href="#" v-on:click="onWordClicked('eggnog', $event)">
                <text x="1069" y="8" font-size="7" fill="rgb(68, 1, 84)">eggnog</text>
            </a><a href="#" v-on:click="onWordClicked('overskirt', $event)">
                <text x="1047" y="37" font-size="7" fill="rgb(200, 224, 32)">overskirt</text>
            </a><a href="#" v-on:click="onWordClicked('bookcase', $event)">
                <text x="1214" y="83" font-size="7" fill="rgb(62, 74, 137)">bookcase</text>
            </a><a href="#" v-on:click="onWordClicked('dishwasher', $event)">
                <text x="458" y="78" font-size="7" fill="rgb(137, 213, 72)">dishwasher</text>
            </a><a href="#" v-on:click="onWordClicked('loafer', $event)">
                <text x="783" y="168" font-size="7" fill="rgb(47, 108, 142)">loafer</text>
            </a><a href="#" v-on:click="onWordClicked('head cabbage', $event)">
                <text x="1350" y="236" font-size="7" fill="rgb(71, 45, 123)">head cabbage</text>
            </a><a href="#" v-on:click="onWordClicked('half track', $event)">
                <text x="1114" y="340" font-size="7" fill="rgb(52, 97, 141)">half track</text>
            </a><a href="#" v-on:click="onWordClicked('panpipe', $event)">
                <text x="826" y="440" font-size="7" fill="rgb(58, 84, 140)">panpipe</text>
            </a><a href="#" v-on:click="onWordClicked('mosquito net', $event)">
                <text x="250" y="437" font-size="7" transform="rotate(-90, 250, 437) translate(-43, 0)"
                      fill="rgb(36, 170, 131)">mosquito net
                </text>
            </a><a href="#" v-on:click="onWordClicked('screwdriver', $event)">
                <text x="272" y="414" font-size="7" fill="rgb(66, 190, 113)">screwdriver</text>
            </a><a href="#" v-on:click="onWordClicked('prayer rug', $event)">
                <text x="1093" y="275" font-size="7" fill="rgb(63, 72, 137)">prayer rug</text>
            </a><a href="#" v-on:click="onWordClicked('school bus', $event)">
                <text x="326" y="414" font-size="7" fill="rgb(40, 125, 142)">school bus</text>
            </a><a href="#" v-on:click="onWordClicked('wool', $event)">
                <text x="759" y="198" font-size="7" fill="rgb(38, 130, 142)">wool</text>
            </a><a href="#" v-on:click="onWordClicked('crock pot', $event)">
                <text x="1156" y="161" font-size="7" fill="rgb(46, 110, 142)">crock pot</text>
            </a><a href="#" v-on:click="onWordClicked('scuba diver', $event)">
                <text x="1058" y="306" font-size="7" fill="rgb(72, 35, 116)">scuba diver</text>
            </a><a href="#" v-on:click="onWordClicked('teapot', $event)">
                <text x="980" y="241" font-size="7" fill="rgb(56, 185, 119)">teapot</text>
            </a><a href="#" v-on:click="onWordClicked('space heater', $event)">
                <text x="142" y="361" font-size="7" transform="rotate(-90, 142, 361) translate(-43, 0)"
                      fill="rgb(168, 219, 52)">space heater
                </text>
            </a><a href="#" v-on:click="onWordClicked('cocktail shaker', $event)">
                <text x="7" y="365" font-size="7" fill="rgb(67, 61, 132)">cocktail shaker</text>
            </a><a href="#" v-on:click="onWordClicked('cardoon', $event)">
                <text x="1297" y="335" font-size="7" fill="rgb(34, 167, 133)">cardoon</text>
            </a><a href="#" v-on:click="onWordClicked('stingray', $event)">
                <text x="1371" y="7" font-size="7" fill="rgb(31, 159, 136)">stingray</text>
            </a><a href="#" v-on:click="onWordClicked('ibex', $event)">
                <text x="798" y="462" font-size="7" fill="rgb(147, 215, 65)">ibex</text>
            </a><a href="#" v-on:click="onWordClicked('mailbag', $event)">
                <text x="870" y="73" font-size="7" fill="rgb(72, 22, 104)">mailbag</text>
            </a><a href="#" v-on:click="onWordClicked('matchstick', $event)">
                <text x="1263" y="124" font-size="7" fill="rgb(33, 166, 133)">matchstick</text>
            </a><a href="#" v-on:click="onWordClicked('rule', $event)">
                <text x="50" y="120" font-size="7" fill="rgb(68, 191, 112)">rule</text>
            </a><a href="#" v-on:click="onWordClicked('sulphur-crested cockatoo', $event)">
                <text x="1205" y="497" font-size="5" fill="rgb(42, 118, 142)">sulphur-crested cockatoo</text>
            </a><a href="#" v-on:click="onWordClicked('hammer', $event)">
                <text x="1067" y="337" font-size="5" fill="rgb(68, 59, 132)">hammer</text>
            </a><a href="#" v-on:click="onWordClicked('quilt', $event)">
                <text x="743" y="340" font-size="5" fill="rgb(66, 65, 134)">quilt</text>
            </a><a href="#" v-on:click="onWordClicked('joystick', $event)">
                <text x="872" y="64" font-size="5" fill="rgb(30, 157, 137)">joystick</text>
            </a><a href="#" v-on:click="onWordClicked('american egret', $event)">
                <text x="950" y="472" font-size="5" fill="rgb(63, 72, 137)">american egret</text>
            </a><a href="#" v-on:click="onWordClicked('washbasin', $event)">
                <text x="77" y="59" font-size="5" transform="rotate(-90, 77, 59) translate(-26, 0)"
                      fill="rgb(53, 94, 141)">washbasin
                </text>
            </a><a href="#" v-on:click="onWordClicked('howler monkey', $event)">
                <text x="948" y="11" font-size="5" fill="rgb(45, 112, 142)">howler monkey</text>
            </a><a href="#" v-on:click="onWordClicked('ipod', $event)">
                <text x="869" y="34" font-size="5" fill="rgb(66, 65, 134)">ipod</text>
            </a><a href="#" v-on:click="onWordClicked('west highland white terrier', $event)">
                <text x="259" y="497" font-size="5" fill="rgb(41, 121, 142)">west highland white terrier</text>
            </a><a href="#" v-on:click="onWordClicked('banana', $event)">
                <text x="797" y="412" font-size="5" fill="rgb(66, 64, 134)">banana</text>
            </a><a href="#" v-on:click="onWordClicked('african elephant', $event)">
                <text x="1134" y="191" font-size="5" fill="rgb(178, 221, 45)">african elephant</text>
            </a><a href="#" v-on:click="onWordClicked('digital clock', $event)">
                <text x="246" y="242" font-size="5" fill="rgb(45, 178, 125)">digital clock</text>
            </a><a href="#" v-on:click="onWordClicked('padlock', $event)">
                <text x="200" y="4" font-size="5" fill="rgb(33, 144, 141)">padlock</text>
            </a><a href="#" v-on:click="onWordClicked('cowboy boot', $event)">
                <text x="704" y="84" font-size="5" fill="rgb(142, 214, 69)">cowboy boot</text>
            </a><a href="#" v-on:click="onWordClicked('cup', $event)">
                <text x="269" y="443" font-size="5" fill="rgb(216, 226, 25)">cup</text>
            </a><a href="#" v-on:click="onWordClicked('printer', $event)">
                <text x="1195" y="38" font-size="5" fill="rgb(42, 120, 142)">printer</text>
            </a><a href="#" v-on:click="onWordClicked('medicine chest', $event)">
                <text x="547" y="284" font-size="5" fill="rgb(50, 101, 142)">medicine chest</text>
            </a><a href="#" v-on:click="onWordClicked('gazelle', $event)">
                <text x="895" y="332" font-size="5" fill="rgb(66, 64, 134)">gazelle</text>
            </a><a href="#" v-on:click="onWordClicked('lipstick', $event)">
                <text x="146" y="94" font-size="5" fill="rgb(160, 218, 57)">lipstick</text>
            </a><a href="#" v-on:click="onWordClicked('sorrel', $event)">
                <text x="629" y="120" font-size="5" fill="rgb(33, 143, 141)">sorrel</text>
            </a><a href="#" v-on:click="onWordClicked('mouse', $event)">
                <text x="4" y="140" font-size="5" transform="rotate(-90, 4, 140) translate(-16, 0)"
                      fill="rgb(122, 209, 81)">mouse
                </text>
            </a><a href="#" v-on:click="onWordClicked('jack-o\'-lantern', $event)">
                <text x="1250" y="314" font-size="5" fill="rgb(71, 42, 122)">jack-o\'-lantern</text>
            </a><a href="#" v-on:click="onWordClicked('coral fungus', $event)">
                <text x="78" y="284" font-size="5" fill="rgb(71, 16, 99)">coral fungus</text>
            </a><a href="#" v-on:click="onWordClicked('sulphur butterfly', $event)">
                <text x="774" y="434" font-size="5" transform="rotate(-90, 774, 434) translate(-40, 0)"
                      fill="rgb(68, 2, 86)">sulphur butterfly
                </text>
            </a><a href="#" v-on:click="onWordClicked('schipperke', $event)">
                <text x="1216" y="337" font-size="5" fill="rgb(34, 167, 133)">schipperke</text>
            </a><a href="#" v-on:click="onWordClicked('yawl', $event)">
                <text x="617" y="65" font-size="5" fill="rgb(31, 153, 138)">yawl</text>
            </a><a href="#" v-on:click="onWordClicked('pick', $event)">
                <text x="571" y="497" font-size="5" fill="rgb(71, 44, 122)">pick</text>
            </a><a href="#" v-on:click="onWordClicked('cassette', $event)">
                <text x="714" y="466" font-size="5" fill="rgb(71, 46, 124)">cassette</text>
            </a><a href="#" v-on:click="onWordClicked('indian elephant', $event)">
                <text x="522" y="497" font-size="5" fill="rgb(68, 1, 84)">indian elephant</text>
            </a><a href="#" v-on:click="onWordClicked('killer whale', $event)">
                <text x="405" y="66" font-size="5" fill="rgb(71, 19, 101)">killer whale</text>
            </a><a href="#" v-on:click="onWordClicked('rock crab', $event)">
                <text x="956" y="273" font-size="5" fill="rgb(31, 161, 135)">rock crab</text>
            </a><a href="#" v-on:click="onWordClicked('safe', $event)">
                <text x="1147" y="407" font-size="5" fill="rgb(189, 223, 38)">safe</text>
            </a><a href="#" v-on:click="onWordClicked('hotdog', $event)">
                <text x="1312" y="443" font-size="5" fill="rgb(92, 200, 99)">hotdog</text>
            </a><a href="#" v-on:click="onWordClicked('macaw', $event)">
                <text x="914" y="61" font-size="5" fill="rgb(31, 148, 140)">macaw</text>
            </a><a href="#" v-on:click="onWordClicked('washer', $event)">
                <text x="1370" y="34" font-size="5" fill="rgb(49, 104, 142)">washer</text>
            </a><a href="#" v-on:click="onWordClicked('barracouta', $event)">
                <text x="14" y="197" font-size="5" fill="rgb(42, 176, 127)">barracouta</text>
            </a><a href="#" v-on:click="onWordClicked('radio', $event)">
                <text x="273" y="6" font-size="5" fill="rgb(37, 131, 142)">radio</text>
            </a><a href="#" v-on:click="onWordClicked('pill bottle', $event)">
                <text x="1171" y="438" font-size="5" fill="rgb(67, 62, 133)">pill bottle</text>
            </a><a href="#" v-on:click="onWordClicked('pillow', $event)">
                <text x="0" y="44" font-size="5" fill="rgb(42, 118, 142)">pillow</text>
            </a><a href="#" v-on:click="onWordClicked('custard apple', $event)">
                <text x="1268" y="497" font-size="5" fill="rgb(72, 28, 110)">custard apple</text>
            </a><a href="#" v-on:click="onWordClicked('drake', $event)">
                <text x="575" y="400" font-size="5" fill="rgb(42, 118, 142)">drake</text>
            </a><a href="#" v-on:click="onWordClicked('backpack', $event)">
                <text x="9" y="233" font-size="5" transform="rotate(-90, 9, 233) translate(-24, 0)"
                      fill="rgb(155, 217, 60)">backpack
                </text>
            </a><a href="#" v-on:click="onWordClicked('cauliflower', $event)">
                <text x="1352" y="308" font-size="5" fill="rgb(59, 81, 139)">cauliflower</text>
            </a><a href="#" v-on:click="onWordClicked('koala', $event)">
                <text x="267" y="37" font-size="5" fill="rgb(72, 22, 104)">koala</text>
            </a><a href="#" v-on:click="onWordClicked('soap dispenser', $event)">
                <text x="936" y="497" font-size="5" fill="rgb(30, 157, 137)">soap dispenser</text>
            </a><a href="#" v-on:click="onWordClicked('armadillo', $event)">
                <text x="12" y="280" font-size="5" fill="rgb(39, 173, 129)">armadillo</text>
            </a><a href="#" v-on:click="onWordClicked('hog', $event)">
                <text x="998" y="338" font-size="5" fill="rgb(69, 4, 87)">hog</text>
            </a><a href="#" v-on:click="onWordClicked('guacamole', $event)">
                <text x="963" y="364" font-size="5" fill="rgb(52, 96, 141)">guacamole</text>
            </a><a href="#" v-on:click="onWordClicked('strawberry', $event)">
                <text x="498" y="211" font-size="5" fill="rgb(72, 27, 109)">strawberry</text>
            </a><a href="#" v-on:click="onWordClicked('bolete', $event)">
                <text x="849" y="379" font-size="5" fill="rgb(70, 192, 111)">bolete</text>
            </a><a href="#" v-on:click="onWordClicked('plow', $event)">
                <text x="1369" y="463" font-size="5" transform="rotate(-90, 1369, 463) translate(-11, 0)"
                      fill="rgb(30, 156, 137)">plow
                </text>
            </a><a href="#" v-on:click="onWordClicked('mortar', $event)">
                <text x="903" y="445" font-size="5" transform="rotate(-90, 903, 445) translate(-16, 0)"
                      fill="rgb(90, 200, 100)">mortar
                </text>
            </a><a href="#" v-on:click="onWordClicked('marmot', $event)">
                <text x="1275" y="8" font-size="5" fill="rgb(71, 45, 123)">marmot</text>
            </a><a href="#" v-on:click="onWordClicked('waffle iron', $event)">
                <text x="606" y="275" font-size="5" fill="rgb(70, 192, 111)">waffle iron</text>
            </a><a href="#" v-on:click="onWordClicked('red wine', $event)">
                <text x="17" y="163" font-size="5" fill="rgb(31, 153, 138)">red wine</text>
            </a><a href="#" v-on:click="onWordClicked('modem', $event)">
                <text x="869" y="131" font-size="5" fill="rgb(72, 41, 121)">modem</text>
            </a><a href="#" v-on:click="onWordClicked('african crocodile', $event)">
                <text x="874" y="312" font-size="5" fill="rgb(41, 123, 142)">african crocodile</text>
            </a><a href="#" v-on:click="onWordClicked('running shoe', $event)">
                <text x="1223" y="35" font-size="5" fill="rgb(60, 80, 139)">running shoe</text>
            </a><a href="#" v-on:click="onWordClicked('chocolate sauce', $event)">
                <text x="790" y="4" font-size="5" fill="rgb(72, 38, 119)">chocolate sauce</text>
            </a><a href="#" v-on:click="onWordClicked('hippopotamus', $event)">
                <text x="924" y="225" font-size="5" fill="rgb(34, 168, 132)">hippopotamus</text>
            </a><a href="#" v-on:click="onWordClicked('can opener', $event)">
                <text x="726" y="311" font-size="5" fill="rgb(205, 225, 29)">can opener</text>
            </a><a href="#" v-on:click="onWordClicked('peacock', $event)">
                <text x="200" y="205" font-size="5" transform="rotate(-90, 200, 205) translate(-21, 0)"
                      fill="rgb(70, 7, 90)">peacock
                </text>
            </a><a href="#" v-on:click="onWordClicked('pizza', $event)">
                <text x="978" y="245" font-size="5" fill="rgb(64, 70, 136)">pizza</text>
            </a><a href="#" v-on:click="onWordClicked('starfish', $event)">
                <text x="24" y="98" font-size="5" fill="rgb(49, 181, 123)">starfish</text>
            </a><a href="#" v-on:click="onWordClicked('kite', $event)">
                <text x="566" y="301" font-size="5" fill="rgb(69, 4, 87)">kite</text>
            </a><a href="#" v-on:click="onWordClicked('albatross', $event)">
                <text x="1004" y="160" font-size="5" transform="rotate(-90, 1004, 160) translate(-23, 0)"
                      fill="rgb(59, 82, 139)">albatross
                </text>
            </a><a href="#" v-on:click="onWordClicked('knot', $event)">
                <text x="722" y="126" font-size="5" fill="rgb(72, 22, 104)">knot</text>
            </a><a href="#" v-on:click="onWordClicked('monarch', $event)">
                <text x="896" y="108" font-size="5" fill="rgb(39, 127, 142)">monarch</text>
            </a><a href="#" v-on:click="onWordClicked('cockroach', $event)">
                <text x="1349" y="387" font-size="5" transform="rotate(-90, 1349, 387) translate(-26, 0)"
                      fill="rgb(208, 225, 28)">cockroach
                </text>
            </a><a href="#" v-on:click="onWordClicked('reflex camera', $event)">
                <text x="1050" y="123" font-size="5" fill="rgb(45, 178, 125)">reflex camera</text>
            </a><a href="#" v-on:click="onWordClicked('coffeepot', $event)">
                <text x="677" y="338" font-size="5" fill="rgb(117, 208, 84)">coffeepot</text>
            </a><a href="#" v-on:click="onWordClicked('goldfish', $event)">
                <text x="44" y="108" font-size="5" fill="rgb(194, 223, 35)">goldfish</text>
            </a><a href="#" v-on:click="onWordClicked('nail', $event)">
                <text x="1125" y="108" font-size="5" fill="rgb(117, 208, 84)">nail</text>
            </a><a href="#" v-on:click="onWordClicked('switch', $event)">
                <text x="363" y="302" font-size="5" fill="rgb(56, 185, 119)">switch</text>
            </a><a href="#" v-on:click="onWordClicked('trifle', $event)">
                <text x="1056" y="157" font-size="5" fill="rgb(72, 35, 116)">trifle</text>
            </a><a href="#" v-on:click="onWordClicked('pretzel', $event)">
                <text x="1233" y="228" font-size="5" fill="rgb(208, 225, 28)">pretzel</text>
            </a><a href="#" v-on:click="onWordClicked('hartebeest', $event)">
                <text x="482" y="371" font-size="5" fill="rgb(137, 213, 72)">hartebeest</text>
            </a><a href="#" v-on:click="onWordClicked('sandal', $event)">
                <text x="593" y="144" font-size="5" fill="rgb(42, 119, 142)">sandal</text>
            </a><a href="#" v-on:click="onWordClicked('hot pot', $event)">
                <text x="480" y="36" font-size="5" fill="rgb(36, 134, 142)">hot pot</text>
            </a><a href="#" v-on:click="onWordClicked('broccoli', $event)">
                <text x="928" y="425" font-size="5" fill="rgb(70, 50, 126)">broccoli</text>
            </a><a href="#" v-on:click="onWordClicked('water snake', $event)">
                <text x="1360" y="497" font-size="5" fill="rgb(134, 213, 73)">water snake</text>
            </a><a href="#" v-on:click="onWordClicked('ram', $event)">
                <text x="21" y="29" font-size="5" transform="rotate(-90, 21, 29) translate(-10, 0)"
                      fill="rgb(152, 216, 62)">ram
                </text>
            </a><a href="#" v-on:click="onWordClicked('bighorn', $event)">
                <text x="1151" y="233" font-size="5" fill="rgb(46, 110, 142)">bighorn</text>
            </a><a href="#" v-on:click="onWordClicked('grey whale', $event)">
                <text x="1157" y="166" font-size="5" fill="rgb(49, 103, 142)">grey whale</text>
            </a><a href="#" v-on:click="onWordClicked('tape player', $event)">
                <text x="220" y="279" font-size="5" fill="rgb(37, 131, 142)">tape player</text>
            </a><a href="#" v-on:click="onWordClicked('hamper', $event)">
                <text x="841" y="424" font-size="5" fill="rgb(40, 124, 142)">hamper</text>
            </a><a href="#" v-on:click="onWordClicked('magpie', $event)">
                <text x="319" y="218" font-size="5" fill="rgb(43, 116, 142)">magpie</text>
            </a><a href="#" v-on:click="onWordClicked('common iguana', $event)">
                <text x="598" y="460" font-size="5" fill="rgb(72, 26, 108)">common iguana</text>
            </a><a href="#" v-on:click="onWordClicked('plane', $event)">
                <text x="637" y="416" font-size="5" fill="rgb(55, 184, 120)">plane</text>
            </a><a href="#" v-on:click="onWordClicked('purse', $event)">
                <text x="1346" y="455" font-size="5" fill="rgb(50, 100, 142)">purse</text>
            </a><a href="#" v-on:click="onWordClicked('zebra', $event)">
                <text x="367" y="455" font-size="5" transform="rotate(-90, 367, 455) translate(-13, 0)"
                      fill="rgb(47, 107, 142)">zebra
                </text>
            </a><a href="#" v-on:click="onWordClicked('plate rack', $event)">
                <text x="171" y="41" font-size="5" transform="rotate(-90, 171, 41) translate(-24, 0)"
                      fill="rgb(48, 106, 142)">plate rack
                </text>
            </a><a href="#" v-on:click="onWordClicked('sea cucumber', $event)">
                <text x="442" y="166" font-size="5" fill="rgb(60, 79, 138)">sea cucumber</text>
            </a><a href="#" v-on:click="onWordClicked('frying pan', $event)">
                <text x="603" y="360" font-size="5" fill="rgb(34, 168, 132)">frying pan</text>
            </a><a href="#" v-on:click="onWordClicked('meat loaf', $event)">
                <text x="140" y="113" font-size="5" fill="rgb(39, 126, 142)">meat loaf</text>
            </a><a href="#" v-on:click="onWordClicked('italian greyhound', $event)">
                <text x="977" y="497" font-size="5" fill="rgb(31, 161, 135)">italian greyhound</text>
            </a><a href="#" v-on:click="onWordClicked('weasel', $event)">
                <text x="25" y="459" font-size="5" fill="rgb(52, 182, 121)">weasel</text>
            </a><a href="#" v-on:click="onWordClicked('tarantula', $event)">
                <text x="698" y="44" font-size="5" fill="rgb(72, 20, 103)">tarantula</text>
            </a><a href="#" v-on:click="onWordClicked('sussex spaniel', $event)">
                <text x="434" y="497" font-size="5" fill="rgb(38, 130, 142)">sussex spaniel</text>
            </a><a href="#" v-on:click="onWordClicked('pencil sharpener', $event)">
                <text x="217" y="497" font-size="5" fill="rgb(205, 225, 29)">pencil sharpener</text>
            </a><a href="#" v-on:click="onWordClicked('hermit crab', $event)">
                <text x="477" y="414" font-size="5" fill="rgb(229, 228, 25)">hermit crab</text>
            </a><a href="#" v-on:click="onWordClicked('labrador retriever', $event)">
                <text x="1302" y="11" font-size="5" fill="rgb(45, 178, 125)">labrador retriever</text>
            </a><a href="#" v-on:click="onWordClicked('whippet', $event)">
                <text x="702" y="311" font-size="5" fill="rgb(70, 10, 93)">whippet</text>
            </a><a href="#" v-on:click="onWordClicked('king penguin', $event)">
                <text x="434" y="255" font-size="5" fill="rgb(70, 192, 111)">king penguin</text>
            </a><a href="#" v-on:click="onWordClicked('house finch', $event)">
                <text x="24" y="397" font-size="5" fill="rgb(64, 70, 136)">house finch</text>
            </a><a href="#" v-on:click="onWordClicked('bagel', $event)">
                <text x="997" y="9" font-size="5" fill="rgb(66, 63, 133)">bagel</text>
            </a><a href="#" v-on:click="onWordClicked('thimble', $event)">
                <text x="226" y="285" font-size="5" fill="rgb(38, 173, 129)">thimble</text>
            </a><a href="#" v-on:click="onWordClicked('trilobite', $event)">
                <text x="12" y="114" font-size="5" fill="rgb(157, 217, 59)">trilobite</text>
            </a><a href="#" v-on:click="onWordClicked('tusker', $event)">
                <text x="824" y="325" font-size="5" fill="rgb(72, 24, 106)">tusker</text>
            </a><a href="#" v-on:click="onWordClicked('carpenter\'s kit', $event)">
                <text x="49" y="414" font-size="5" fill="rgb(144, 215, 67)">carpenter\'s kit</text>
            </a><a href="#" v-on:click="onWordClicked('bottlecap', $event)">
                <text x="1353" y="292" font-size="5" fill="rgb(45, 112, 142)">bottlecap</text>
            </a><a href="#" v-on:click="onWordClicked('necklace', $event)">
                <text x="413" y="19" font-size="5" fill="rgb(70, 52, 128)">necklace</text>
            </a><a href="#" v-on:click="onWordClicked('great white shark', $event)">
                <text x="216" y="417" font-size="5" transform="rotate(-90, 216, 417) translate(-42, 0)"
                      fill="rgb(31, 161, 136)">great white shark
                </text>
            </a><a href="#" v-on:click="onWordClicked('rhinoceros beetle', $event)">
                <text x="522" y="266" font-size="5" fill="rgb(41, 121, 142)">rhinoceros beetle</text>
            </a><a href="#" v-on:click="onWordClicked('bald eagle', $event)">
                <text x="529" y="75" font-size="5" fill="rgb(46, 109, 142)">bald eagle</text>
            </a><a href="#" v-on:click="onWordClicked('cassette player', $event)">
                <text x="354" y="497" font-size="5" fill="rgb(57, 85, 140)">cassette player</text>
            </a><a href="#" v-on:click="onWordClicked('orangutan', $event)">
                <text x="325" y="497" font-size="5" fill="rgb(57, 86, 140)">orangutan</text>
            </a><a href="#" v-on:click="onWordClicked('cock', $event)">
                <text x="763" y="354" font-size="5" fill="rgb(71, 42, 122)">cock</text>
            </a><a href="#" v-on:click="onWordClicked('hard disc', $event)">
                <text x="247" y="248" font-size="5" fill="rgb(63, 71, 136)">hard disc</text>
            </a><a href="#" v-on:click="onWordClicked('madagascar cat', $event)">
                <text x="1128" y="122" font-size="5" fill="rgb(66, 190, 113)">madagascar cat</text>
            </a><a href="#" v-on:click="onWordClicked('mashed potato', $event)">
                <text x="466" y="31" font-size="5" transform="rotate(-90, 466, 31) translate(-36, 0)"
                      fill="rgb(157, 217, 59)">mashed potato
                </text>
            </a><a href="#" v-on:click="onWordClicked('leonberg', $event)">
                <text x="671" y="60" font-size="5" fill="rgb(59, 81, 139)">leonberg</text>
            </a><a href="#" v-on:click="onWordClicked('muzzle', $event)">
                <text x="173" y="318" font-size="5" fill="rgb(67, 62, 133)">muzzle</text>
            </a><a href="#" v-on:click="onWordClicked('american black bear', $event)">
                <text x="1230" y="296" font-size="5" fill="rgb(45, 178, 125)">american black bear</text>
            </a><a href="#" v-on:click="onWordClicked('remote control', $event)">
                <text x="600" y="18" font-size="5" fill="rgb(72, 35, 116)">remote control</text>
            </a><a href="#" v-on:click="onWordClicked('entertainment center', $event)">
                <text x="1257" y="453" font-size="5" fill="rgb(248, 230, 33)">entertainment center</text>
            </a><a href="#" v-on:click="onWordClicked('lynx', $event)">
                <text x="373" y="137" font-size="5" fill="rgb(53, 94, 141)">lynx</text>
            </a><a href="#" v-on:click="onWordClicked('chain', $event)">
                <text x="214" y="78" font-size="5" fill="rgb(57, 85, 140)">chain</text>
            </a><a href="#" v-on:click="onWordClicked('mixing bowl', $event)">
                <text x="176" y="24" font-size="5" fill="rgb(66, 65, 134)">mixing bowl</text>
            </a><a href="#" v-on:click="onWordClicked('screw', $event)">
                <text x="1069" y="27" font-size="5" fill="rgb(124, 210, 80)">screw</text>
            </a><a href="#" v-on:click="onWordClicked('warthog', $event)">
                <text x="1230" y="155" font-size="5" fill="rgb(72, 31, 112)">warthog</text>
            </a><a href="#" v-on:click="onWordClicked('admiral', $event)">
                <text x="908" y="35" font-size="5" fill="rgb(55, 184, 120)">admiral</text>
            </a><a href="#" v-on:click="onWordClicked('polaroid camera', $event)">
                <text x="21" y="67" font-size="5" fill="rgb(31, 153, 138)">polaroid camera</text>
            </a><a href="#" v-on:click="onWordClicked('beaker', $event)">
                <text x="223" y="331" font-size="5" fill="rgb(70, 10, 93)">beaker</text>
            </a><a href="#" v-on:click="onWordClicked('milk can', $event)">
                <text x="866" y="54" font-size="5" fill="rgb(137, 213, 72)">milk can</text>
            </a><a href="#" v-on:click="onWordClicked('spindle', $event)">
                <text x="1106" y="496" font-size="5" fill="rgb(34, 141, 141)">spindle</text>
            </a><a href="#" v-on:click="onWordClicked('measuring cup', $event)">
                <text x="551" y="449" font-size="5" fill="rgb(62, 73, 137)">measuring cup</text>
            </a><a href="#" v-on:click="onWordClicked('quail', $event)">
                <text x="459" y="139" font-size="5" fill="rgb(30, 155, 138)">quail</text>
            </a><a href="#" v-on:click="onWordClicked('chimpanzee', $event)">
                <text x="61" y="358" font-size="5" fill="rgb(62, 74, 137)">chimpanzee</text>
            </a><a href="#" v-on:click="onWordClicked('pickelhaube', $event)">
                <text x="447" y="403" font-size="5" fill="rgb(234, 229, 26)">pickelhaube</text>
            </a><a href="#" v-on:click="onWordClicked('spaghetti squash', $event)">
                <text x="768" y="312" font-size="5" fill="rgb(32, 146, 140)">spaghetti squash</text>
            </a><a href="#" v-on:click="onWordClicked('hammerhead', $event)">
                <text x="248" y="107" font-size="5" transform="rotate(-90, 248, 107) translate(-31, 0)"
                      fill="rgb(31, 161, 136)">hammerhead
                </text>
            </a><a href="#" v-on:click="onWordClicked('acorn squash', $event)">
                <text x="968" y="117" font-size="5" fill="rgb(184, 222, 41)">acorn squash</text>
            </a><a href="#" v-on:click="onWordClicked('hand-held computer', $event)">
                <text x="347" y="274" font-size="5" fill="rgb(40, 124, 142)">hand-held computer</text>
            </a><a href="#" v-on:click="onWordClicked('hen', $event)">
                <text x="98" y="401" font-size="5" fill="rgb(66, 64, 134)">hen</text>
            </a><a href="#" v-on:click="onWordClicked('slide rule', $event)">
                <text x="1188" y="304" font-size="5" fill="rgb(72, 33, 115)">slide rule</text>
            </a><a href="#" v-on:click="onWordClicked('ruffed grouse', $event)">
                <text x="769" y="148" font-size="5" fill="rgb(82, 197, 105)">ruffed grouse</text>
            </a><a href="#" v-on:click="onWordClicked('espresso', $event)">
                <text x="558" y="288" font-size="5" fill="rgb(45, 112, 142)">espresso</text>
            </a><a href="#" v-on:click="onWordClicked('artichoke', $event)">
                <text x="718" y="335" font-size="5" fill="rgb(34, 167, 133)">artichoke</text>
            </a><a href="#" v-on:click="onWordClicked('cheeseburger', $event)">
                <text x="617" y="165" font-size="5" fill="rgb(62, 73, 137)">cheeseburger</text>
            </a><a href="#" v-on:click="onWordClicked('spoonbill', $event)">
                <text x="1104" y="415" font-size="5" fill="rgb(58, 186, 118)">spoonbill</text>
            </a><a href="#" v-on:click="onWordClicked('dingo', $event)">
                <text x="442" y="380" font-size="5" fill="rgb(210, 226, 27)">dingo</text>
            </a><a href="#" v-on:click="onWordClicked('axolotl', $event)">
                <text x="1073" y="58" font-size="5" fill="rgb(46, 179, 124)">axolotl</text>
            </a><a href="#" v-on:click="onWordClicked('malamute', $event)">
                <text x="1126" y="440" font-size="5" fill="rgb(35, 138, 141)">malamute</text>
            </a><a href="#" v-on:click="onWordClicked('dial telephone', $event)">
                <text x="971" y="206" font-size="5" fill="rgb(54, 92, 141)">dial telephone</text>
            </a><a href="#" v-on:click="onWordClicked('sea anemone', $event)">
                <text x="232" y="251" font-size="5" fill="rgb(248, 230, 33)">sea anemone</text>
            </a><a href="#" v-on:click="onWordClicked('kelpie', $event)">
                <text x="606" y="210" font-size="5" fill="rgb(33, 166, 133)">kelpie</text>
            </a><a href="#" v-on:click="onWordClicked('boston bull', $event)">
                <text x="507" y="217" font-size="5" fill="rgb(59, 82, 139)">boston bull</text>
            </a><a href="#" v-on:click="onWordClicked('wallet', $event)">
                <text x="1215" y="254" font-size="5" fill="rgb(71, 19, 101)">wallet</text>
            </a><a href="#" v-on:click="onWordClicked('staffordshire bullterrier', $event)">
                <text x="605" y="498" font-size="5" fill="rgb(69, 4, 87)">staffordshire bullterrier</text>
            </a><a href="#" v-on:click="onWordClicked('eel', $event)">
                <text x="1392" y="191" font-size="5" fill="rgb(40, 124, 142)">eel</text>
            </a><a href="#" v-on:click="onWordClicked('butternut squash', $event)">
                <text x="1207" y="449" font-size="5" fill="rgb(32, 146, 140)">butternut squash</text>
            </a><a href="#" v-on:click="onWordClicked('siamese cat', $event)">
                <text x="12" y="331" font-size="5" fill="rgb(176, 221, 47)">siamese cat</text>
            </a><a href="#" v-on:click="onWordClicked('tench', $event)">
                <text x="1257" y="212" font-size="5" transform="rotate(-90, 1257, 212) translate(-14, 0)"
                      fill="rgb(165, 219, 54)">tench
                </text>
            </a><a href="#" v-on:click="onWordClicked('earthstar', $event)">
                <text x="405" y="78" font-size="5" fill="rgb(66, 65, 134)">earthstar</text>
            </a><a href="#" v-on:click="onWordClicked('spider web', $event)">
                <text x="930" y="430" font-size="5" fill="rgb(122, 209, 81)">spider web</text>
            </a><a href="#" v-on:click="onWordClicked('irish wolfhound', $event)">
                <text x="1318" y="203" font-size="5" fill="rgb(30, 156, 137)">irish wolfhound</text>
            </a><a href="#" v-on:click="onWordClicked('flamingo', $event)">
                <text x="1340" y="424" font-size="5" fill="rgb(69, 53, 129)">flamingo</text>
            </a><a href="#" v-on:click="onWordClicked('corkscrew', $event)">
                <text x="115" y="182" font-size="5" fill="rgb(31, 158, 137)">corkscrew</text>
            </a><a href="#" v-on:click="onWordClicked('lorikeet', $event)">
                <text x="505" y="342" font-size="5" fill="rgb(72, 23, 105)">lorikeet</text>
            </a><a href="#" v-on:click="onWordClicked('french loaf', $event)">
                <text x="706" y="407" font-size="5" fill="rgb(46, 179, 124)">french loaf</text>
            </a><a href="#" v-on:click="onWordClicked('saluki', $event)">
                <text x="1263" y="426" font-size="5" fill="rgb(38, 130, 142)">saluki</text>
            </a><a href="#" v-on:click="onWordClicked('oil filter', $event)">
                <text x="905" y="444" font-size="5" fill="rgb(71, 42, 122)">oil filter</text>
            </a><a href="#" v-on:click="onWordClicked('boa constrictor', $event)">
                <text x="1041" y="191" font-size="5" fill="rgb(72, 26, 108)">boa constrictor</text>
            </a><a href="#" v-on:click="onWordClicked('jay', $event)">
                <text x="1215" y="74" font-size="5" fill="rgb(49, 102, 142)">jay</text>
            </a><a href="#" v-on:click="onWordClicked('african grey', $event)">
                <text x="389" y="238" font-size="5" fill="rgb(61, 78, 138)">african grey</text>
            </a><a href="#" v-on:click="onWordClicked('pug', $event)">
                <text x="1037" y="127" font-size="5" transform="rotate(-90, 1037, 127) translate(-9, 0)"
                      fill="rgb(76, 194, 108)">pug
                </text>
            </a><a href="#" v-on:click="onWordClicked('revolver', $event)">
                <text x="225" y="337" font-size="5" fill="rgb(168, 219, 52)">revolver</text>
            </a><a href="#" v-on:click="onWordClicked('face powder', $event)">
                <text x="1149" y="235" font-size="5" transform="rotate(-90, 1149, 235) translate(-30, 0)"
                      fill="rgb(239, 229, 28)">face powder
                </text>
            </a><a href="#" v-on:click="onWordClicked('brambling', $event)">
                <text x="797" y="361" font-size="5" fill="rgb(181, 222, 43)">brambling</text>
            </a><a href="#" v-on:click="onWordClicked('rock python', $event)">
                <text x="619" y="111" font-size="5" fill="rgb(72, 27, 109)">rock python</text>
            </a><a href="#" v-on:click="onWordClicked('baboon', $event)">
                <text x="1251" y="480" font-size="5" fill="rgb(41, 121, 142)">baboon</text>
            </a><a href="#" v-on:click="onWordClicked('siberian husky', $event)">
                <text x="1091" y="234" font-size="5" transform="rotate(-90, 1091, 234) translate(-35, 0)"
                      fill="rgb(49, 103, 142)">siberian husky
                </text>
            </a><a href="#" v-on:click="onWordClicked('sock', $event)">
                <text x="804" y="288" font-size="5" fill="rgb(65, 66, 135)">sock</text>
            </a><a href="#" v-on:click="onWordClicked('ptarmigan', $event)">
                <text x="968" y="410" font-size="5" fill="rgb(33, 143, 141)">ptarmigan</text>
            </a><a href="#" v-on:click="onWordClicked('file', $event)">
                <text x="959" y="86" font-size="5" fill="rgb(33, 144, 141)">file</text>
            </a><a href="#" v-on:click="onWordClicked('hornbill', $event)">
                <text x="1191" y="184" font-size="5" fill="rgb(72, 41, 121)">hornbill</text>
            </a><a href="#" v-on:click="onWordClicked('indian cobra', $event)">
                <text x="702" y="69" font-size="5" fill="rgb(67, 62, 133)">indian cobra</text>
            </a><a href="#" v-on:click="onWordClicked('skunk', $event)">
                <text x="394" y="242" font-size="5" transform="rotate(-90, 394, 242) translate(-15, 0)"
                      fill="rgb(72, 28, 110)">skunk
                </text>
            </a><a href="#" v-on:click="onWordClicked('zucchini', $event)">
                <text x="1176" y="498" font-size="5" fill="rgb(57, 85, 140)">zucchini</text>
            </a><a href="#" v-on:click="onWordClicked('consomme', $event)">
                <text x="1334" y="160" font-size="5" transform="rotate(-90, 1334, 160) translate(-26, 0)"
                      fill="rgb(70, 192, 111)">consomme
                </text>
            </a><a href="#" v-on:click="onWordClicked('dhole', $event)">
                <text x="1262" y="420" font-size="5" fill="rgb(137, 213, 72)">dhole</text>
            </a><a href="#" v-on:click="onWordClicked('fox squirrel', $event)">
                <text x="48" y="212" font-size="5" transform="rotate(-90, 48, 212) translate(-26, 0)"
                      fill="rgb(45, 112, 142)">fox squirrel
                </text>
            </a><a href="#" v-on:click="onWordClicked('colobus', $event)">
                <text x="736" y="57" font-size="5" fill="rgb(70, 51, 127)">colobus</text>
            </a><a href="#" v-on:click="onWordClicked('tiger', $event)">
                <text x="183" y="297" font-size="5" fill="rgb(127, 211, 78)">tiger</text>
            </a><a href="#" v-on:click="onWordClicked('cd player', $event)">
                <text x="377" y="479" font-size="5" fill="rgb(61, 77, 138)">cd player</text>
            </a><a href="#" v-on:click="onWordClicked('little blue heron', $event)">
                <text x="1246" y="333" font-size="5" fill="rgb(236, 229, 27)">little blue heron</text>
            </a><a href="#" v-on:click="onWordClicked('macaque', $event)">
                <text x="878" y="76" font-size="5" fill="rgb(54, 93, 141)">macaque</text>
            </a><a href="#" v-on:click="onWordClicked('robin', $event)">
                <text x="8" y="475" font-size="5" fill="rgb(34, 140, 141)">robin</text>
            </a><a href="#" v-on:click="onWordClicked('komodo dragon', $event)">
                <text x="951" y="34" font-size="5" transform="rotate(-90, 951, 34) translate(-37, 0)"
                      fill="rgb(216, 226, 25)">komodo dragon
                </text>
            </a><a href="#" v-on:click="onWordClicked('dragonfly', $event)">
                <text x="436" y="281" font-size="5" fill="rgb(96, 202, 96)">dragonfly</text>
            </a><a href="#" v-on:click="onWordClicked('electric ray', $event)">
                <text x="1268" y="355" font-size="5" transform="rotate(-90, 1268, 355) translate(-27, 0)"
                      fill="rgb(56, 185, 119)">electric ray
                </text>
            </a><a href="#" v-on:click="onWordClicked('cougar', $event)">
                <text x="1132" y="62" font-size="5" fill="rgb(221, 227, 24)">cougar</text>
            </a><a href="#" v-on:click="onWordClicked('carbonara', $event)">
                <text x="1318" y="498" font-size="5" fill="rgb(202, 225, 31)">carbonara</text>
            </a><a href="#" v-on:click="onWordClicked('computer keyboard', $event)">
                <text x="1253" y="483" font-size="5" fill="rgb(71, 14, 97)">computer keyboard</text>
            </a><a href="#" v-on:click="onWordClicked('toucan', $event)">
                <text x="167" y="79" font-size="5" fill="rgb(117, 208, 84)">toucan</text>
            </a><a href="#" v-on:click="onWordClicked('soft-coated wheaten terrier', $event)">
                <text x="986" y="440" font-size="5" fill="rgb(34, 167, 133)">soft-coated wheaten terrier</text>
            </a><a href="#" v-on:click="onWordClicked('lens cap', $event)">
                <text x="684" y="433" font-size="5" fill="rgb(52, 96, 141)">lens cap</text>
            </a><a href="#" v-on:click="onWordClicked('centipede', $event)">
                <text x="827" y="31" font-size="5" fill="rgb(34, 140, 141)">centipede</text>
            </a><a href="#" v-on:click="onWordClicked('great pyrenees', $event)">
                <text x="535" y="430" font-size="5" fill="rgb(234, 229, 26)">great pyrenees</text>
            </a><a href="#" v-on:click="onWordClicked('american coot', $event)">
                <text x="789" y="374" font-size="5" fill="rgb(181, 222, 43)">american coot</text>
            </a><a href="#" v-on:click="onWordClicked('brain coral', $event)">
                <text x="1089" y="280" font-size="5" fill="rgb(31, 161, 136)">brain coral</text>
            </a><a href="#" v-on:click="onWordClicked('bell pepper', $event)">
                <text x="770" y="61" font-size="5" fill="rgb(181, 222, 43)">bell pepper</text>
            </a><a href="#" v-on:click="onWordClicked('american staffordshire terrier', $event)">
                <text x="142" y="165" font-size="5" fill="rgb(115, 208, 86)">american staffordshire terrier</text>
            </a><a href="#" v-on:click="onWordClicked('red-backed sandpiper', $event)">
                <text x="1142" y="133" font-size="5" transform="rotate(-90, 1142, 133) translate(-52, 0)"
                      fill="rgb(33, 142, 141)">red-backed sandpiper
                </text>
            </a><a href="#" v-on:click="onWordClicked('snail', $event)">
                <text x="176" y="438" font-size="5" fill="rgb(208, 225, 28)">snail</text>
            </a><a href="#" v-on:click="onWordClicked('stinkhorn', $event)">
                <text x="1253" y="188" font-size="5" fill="rgb(38, 173, 129)">stinkhorn</text>
            </a><a href="#" v-on:click="onWordClicked('mantis', $event)">
                <text x="330" y="436" font-size="5" fill="rgb(64, 189, 114)">mantis</text>
            </a><a href="#" v-on:click="onWordClicked('beaver', $event)">
                <text x="1328" y="15" font-size="5" fill="rgb(31, 159, 136)">beaver</text>
            </a><a href="#" v-on:click="onWordClicked('entlebucher', $event)">
                <text x="221" y="4" font-size="5" fill="rgb(144, 215, 67)">entlebucher</text>
            </a><a href="#" v-on:click="onWordClicked('squirrel monkey', $event)">
                <text x="469" y="319" font-size="5" fill="rgb(152, 216, 62)">squirrel monkey</text>
            </a><a href="#" v-on:click="onWordClicked('barn spider', $event)">
                <text x="1300" y="408" font-size="5" fill="rgb(47, 180, 124)">barn spider</text>
            </a><a href="#" v-on:click="onWordClicked('goldfinch', $event)">
                <text x="577" y="39" font-size="5" fill="rgb(72, 37, 118)">goldfinch</text>
            </a><a href="#" v-on:click="onWordClicked('disk brake', $event)">
                <text x="1331" y="429" font-size="5" fill="rgb(37, 172, 130)">disk brake</text>
            </a><a href="#" v-on:click="onWordClicked('toy poodle', $event)">
                <text x="298" y="418" font-size="5" fill="rgb(108, 205, 90)">toy poodle</text>
            </a><a href="#" v-on:click="onWordClicked('bulbul', $event)">
                <text x="386" y="223" font-size="5" fill="rgb(43, 117, 142)">bulbul</text>
            </a><a href="#" v-on:click="onWordClicked('chesapeake bay retriever', $event)">
                <text x="675" y="91" font-size="5" transform="rotate(-90, 675, 91) translate(-60, 0)"
                      fill="rgb(38, 130, 142)">chesapeake bay retriever
                </text>
            </a><a href="#" v-on:click="onWordClicked('ostrich', $event)">
                <text x="641" y="19" font-size="5" fill="rgb(72, 20, 103)">ostrich</text>
            </a><a href="#" v-on:click="onWordClicked('french bulldog', $event)">
                <text x="874" y="396" font-size="5" fill="rgb(41, 122, 142)">french bulldog</text>
            </a><a href="#" v-on:click="onWordClicked('espresso maker', $event)">
                <text x="1031" y="12" font-size="5" fill="rgb(70, 192, 111)">espresso maker</text>
            </a><a href="#" v-on:click="onWordClicked('miniature pinscher', $event)">
                <text x="943" y="344" font-size="5" transform="rotate(-90, 943, 344) translate(-44, 0)"
                      fill="rgb(34, 168, 132)">miniature pinscher
                </text>
            </a><a href="#" v-on:click="onWordClicked('indigo bunting', $event)">
                <text x="734" y="48" font-size="5" fill="rgb(30, 155, 138)">indigo bunting</text>
            </a><a href="#" v-on:click="onWordClicked('standard poodle', $event)">
                <text x="907" y="212" font-size="5" fill="rgb(241, 229, 29)">standard poodle</text>
            </a><a href="#" v-on:click="onWordClicked('shetland sheepdog', $event)">
                <text x="366" y="400" font-size="5" transform="rotate(-90, 366, 400) translate(-46, 0)"
                      fill="rgb(31, 152, 139)">shetland sheepdog
                </text>
            </a><a href="#" v-on:click="onWordClicked('mitten', $event)">
                <text x="1137" y="271" font-size="5" fill="rgb(208, 225, 28)">mitten</text>
            </a><a href="#" v-on:click="onWordClicked('mud turtle', $event)">
                <text x="681" y="112" font-size="5" fill="rgb(94, 201, 98)">mud turtle</text>
            </a><a href="#" v-on:click="onWordClicked('frilled lizard', $event)">
                <text x="340" y="7" font-size="5" fill="rgb(70, 51, 127)">frilled lizard</text>
            </a><a href="#" v-on:click="onWordClicked('platypus', $event)">
                <text x="848" y="303" font-size="5" fill="rgb(72, 28, 110)">platypus</text>
            </a><a href="#" v-on:click="onWordClicked('malinois', $event)">
                <text x="24" y="313" font-size="5" fill="rgb(42, 176, 127)">malinois</text>
            </a><a href="#" v-on:click="onWordClicked('combination lock', $event)">
                <text x="873" y="337" font-size="5" fill="rgb(46, 110, 142)">combination lock</text>
            </a><a href="#" v-on:click="onWordClicked('long-horned beetle', $event)">
                <text x="1154" y="429" font-size="5" transform="rotate(-90, 1154, 429) translate(-44, 0)"
                      fill="rgb(65, 68, 135)">long-horned beetle
                </text>
            </a><a href="#" v-on:click="onWordClicked('sea snake', $event)">
                <text x="930" y="14" font-size="5" fill="rgb(194, 223, 35)">sea snake</text>
            </a><a href="#" v-on:click="onWordClicked('white stork', $event)">
                <text x="510" y="78" font-size="5" fill="rgb(63, 188, 115)">white stork</text>
            </a><a href="#" v-on:click="onWordClicked('komondor', $event)">
                <text x="165" y="201" font-size="5" fill="rgb(162, 218, 55)">komondor</text>
            </a><a href="#" v-on:click="onWordClicked('lion', $event)">
                <text x="944" y="27" font-size="5" fill="rgb(40, 174, 128)">lion</text>
            </a><a href="#" v-on:click="onWordClicked('eskimo dog', $event)">
                <text x="973" y="264" font-size="5" fill="rgb(33, 144, 141)">eskimo dog</text>
            </a><a href="#" v-on:click="onWordClicked('puffer', $event)">
                <text x="837" y="403" font-size="5" fill="rgb(61, 77, 138)">puffer</text>
            </a><a href="#" v-on:click="onWordClicked('fly', $event)">
                <text x="251" y="78" font-size="5" fill="rgb(66, 190, 113)">fly</text>
            </a><a href="#" v-on:click="onWordClicked('pembroke', $event)">
                <text x="324" y="236" font-size="5" fill="rgb(35, 169, 131)">pembroke</text>
            </a><a href="#" v-on:click="onWordClicked('partridge', $event)">
                <text x="1123" y="148" font-size="5" transform="rotate(-90, 1123, 148) translate(-22, 0)"
                      fill="rgb(46, 109, 142)">partridge
                </text>
            </a><a href="#" v-on:click="onWordClicked('porcupine', $event)">
                <text x="289" y="302" font-size="5" fill="rgb(223, 227, 24)">porcupine</text>
            </a><a href="#" v-on:click="onWordClicked('kerry blue terrier', $event)">
                <text x="480" y="497" font-size="5" fill="rgb(74, 193, 109)">kerry blue terrier</text>
            </a><a href="#" v-on:click="onWordClicked('guinea pig', $event)">
                <text x="1054" y="259" font-size="5" fill="rgb(69, 56, 130)">guinea pig</text>
            </a><a href="#" v-on:click="onWordClicked('dalmatian', $event)">
                <text x="527" y="117" font-size="5" fill="rgb(74, 193, 109)">dalmatian</text>
            </a><a href="#" v-on:click="onWordClicked('basenji', $event)">
                <text x="874" y="39" font-size="5" fill="rgb(82, 197, 105)">basenji</text>
            </a><a href="#" v-on:click="onWordClicked('junco', $event)">
                <text x="669" y="342" font-size="5" fill="rgb(64, 69, 136)">junco</text>
            </a><a href="#" v-on:click="onWordClicked('water ouzel', $event)">
                <text x="679" y="101" font-size="5" fill="rgb(71, 16, 99)">water ouzel</text>
            </a><a href="#" v-on:click="onWordClicked('magnetic compass', $event)">
                <text x="398" y="165" font-size="5" transform="rotate(-90, 398, 165) translate(-45, 0)"
                      fill="rgb(139, 214, 70)">magnetic compass
                </text>
            </a><a href="#" v-on:click="onWordClicked('scabbard', $event)">
                <text x="1111" y="211" font-size="5" fill="rgb(72, 41, 121)">scabbard</text>
            </a><a href="#" v-on:click="onWordClicked('borzoi', $event)">
                <text x="866" y="58" font-size="5" fill="rgb(38, 129, 142)">borzoi</text>
            </a><a href="#" v-on:click="onWordClicked('scotch terrier', $event)">
                <text x="1094" y="123" font-size="5" fill="rgb(31, 160, 136)">scotch terrier</text>
            </a><a href="#" v-on:click="onWordClicked('ice bear', $event)">
                <text x="1165" y="384" font-size="5" fill="rgb(208, 225, 28)">ice bear</text>
            </a><a href="#" v-on:click="onWordClicked('otter', $event)">
                <text x="1362" y="199" font-size="5" fill="rgb(122, 209, 81)">otter</text>
            </a><a href="#" v-on:click="onWordClicked('angora', $event)">
                <text x="561" y="390" font-size="5" fill="rgb(50, 182, 122)">angora</text>
            </a><a href="#" v-on:click="onWordClicked('persian cat', $event)">
                <text x="434" y="285" font-size="5" fill="rgb(68, 59, 132)">persian cat</text>
            </a><a href="#" v-on:click="onWordClicked('potpie', $event)">
                <text x="1374" y="51" font-size="5" fill="rgb(110, 206, 88)">potpie</text>
            </a><a href="#" v-on:click="onWordClicked('barometer', $event)">
                <text x="464" y="453" font-size="5" transform="rotate(-90, 464, 453) translate(-25, 0)"
                      fill="rgb(44, 177, 126)">barometer
                </text>
            </a><a href="#" v-on:click="onWordClicked('greater swiss mountain dog', $event)">
                <text x="813" y="497" font-size="4" fill="rgb(194, 223, 35)">greater swiss mountain dog</text>
            </a><a href="#" v-on:click="onWordClicked('bloodhound', $event)">
                <text x="1346" y="340" font-size="4" transform="rotate(-90, 1346, 340) translate(-19, 0)"
                      fill="rgb(61, 78, 138)">bloodhound
                </text>
            </a><a href="#" v-on:click="onWordClicked('german shepherd', $event)">
                <text x="588" y="166" font-size="4" fill="rgb(197, 224, 33)">german shepherd</text>
            </a><a href="#" v-on:click="onWordClicked('english setter', $event)">
                <text x="394" y="431" font-size="4" fill="rgb(67, 61, 132)">english setter</text>
            </a><a href="#" v-on:click="onWordClicked('beagle', $event)">
                <text x="1130" y="41" font-size="4" fill="rgb(59, 187, 117)">beagle</text>
            </a><a href="#" v-on:click="onWordClicked('indri', $event)">
                <text x="379" y="163" font-size="4" fill="rgb(38, 173, 129)">indri</text>
            </a><a href="#" v-on:click="onWordClicked('black swan', $event)">
                <text x="966" y="210" font-size="4" fill="rgb(246, 230, 32)">black swan</text>
            </a><a href="#" v-on:click="onWordClicked('langur', $event)">
                <text x="1141" y="366" font-size="4" fill="rgb(37, 171, 130)">langur</text>
            </a><a href="#" v-on:click="onWordClicked('bison', $event)">
                <text x="135" y="247" font-size="4" fill="rgb(31, 159, 136)">bison</text>
            </a><a href="#" v-on:click="onWordClicked('sea slug', $event)">
                <text x="1049" y="79" font-size="4" fill="rgb(49, 181, 123)">sea slug</text>
            </a><a href="#" v-on:click="onWordClicked('box turtle', $event)">
                <text x="1273" y="431" font-size="4" fill="rgb(64, 189, 114)">box turtle</text>
            </a><a href="#" v-on:click="onWordClicked('redbone', $event)">
                <text x="566" y="290" font-size="4" fill="rgb(115, 208, 86)">redbone</text>
            </a><a href="#" v-on:click="onWordClicked('chiton', $event)">
                <text x="1044" y="16" font-size="4" fill="rgb(72, 28, 110)">chiton</text>
            </a><a href="#" v-on:click="onWordClicked('cicada', $event)">
                <text x="947" y="143" font-size="4" fill="rgb(56, 89, 140)">cicada</text>
            </a><a href="#" v-on:click="onWordClicked('great dane', $event)">
                <text x="562" y="379" font-size="4" fill="rgb(241, 229, 29)">great dane</text>
            </a><a href="#" v-on:click="onWordClicked('scorpion', $event)">
                <text x="1395" y="136" font-size="4" transform="rotate(-90, 1395, 136) translate(-14, 0)"
                      fill="rgb(39, 173, 129)">scorpion
                </text>
            </a><a href="#" v-on:click="onWordClicked('isopod', $event)">
                <text x="1343" y="157" font-size="4" fill="rgb(42, 176, 127)">isopod</text>
            </a><a href="#" v-on:click="onWordClicked('gorilla', $event)">
                <text x="922" y="351" font-size="4" fill="rgb(105, 205, 91)">gorilla</text>
            </a><a href="#" v-on:click="onWordClicked('black stork', $event)">
                <text x="612" y="429" font-size="4" fill="rgb(65, 68, 135)">black stork</text>
            </a><a href="#" v-on:click="onWordClicked('rottweiler', $event)">
                <text x="1381" y="14" font-size="4" fill="rgb(32, 164, 134)">rottweiler</text>
            </a><a href="#" v-on:click="onWordClicked('grey fox', $event)">
                <text x="52" y="41" font-size="4" fill="rgb(165, 219, 54)">grey fox</text>
            </a><a href="#" v-on:click="onWordClicked('lycaenid', $event)">
                <text x="1323" y="336" font-size="4" fill="rgb(96, 202, 96)">lycaenid</text>
            </a><a href="#" v-on:click="onWordClicked('oystercatcher', $event)">
                <text x="995" y="79" font-size="4" fill="rgb(192, 223, 37)">oystercatcher</text>
            </a><a href="#" v-on:click="onWordClicked('petri dish', $event)">
                <text x="1033" y="433" font-size="4" fill="rgb(71, 46, 124)">petri dish</text>
            </a><a href="#" v-on:click="onWordClicked('hourglass', $event)">
                <text x="134" y="41" font-size="4" fill="rgb(103, 204, 92)">hourglass</text>
            </a><a href="#" v-on:click="onWordClicked('fiddler crab', $event)">
                <text x="585" y="230" font-size="4" fill="rgb(35, 138, 141)">fiddler crab</text>
            </a><a href="#" v-on:click="onWordClicked('night snake', $event)">
                <text x="453" y="450" font-size="4" fill="rgb(99, 203, 95)">night snake</text>
            </a><a href="#" v-on:click="onWordClicked('red-breasted merganser', $event)">
                <text x="699" y="441" font-size="4" fill="rgb(45, 112, 142)">red-breasted merganser</text>
            </a><a href="#" v-on:click="onWordClicked('cheetah', $event)">
                <text x="1230" y="168" font-size="4" fill="rgb(38, 129, 142)">cheetah</text>
            </a><a href="#" v-on:click="onWordClicked('ruddy turnstone', $event)">
                <text x="161" y="3" font-size="4" fill="rgb(229, 228, 25)">ruddy turnstone</text>
            </a><a href="#" v-on:click="onWordClicked('radiator', $event)">
                <text x="1143" y="127" font-size="4" fill="rgb(57, 86, 140)">radiator</text>
            </a><a href="#" v-on:click="onWordClicked('wood rabbit', $event)">
                <text x="364" y="373" font-size="4" fill="rgb(72, 24, 106)">wood rabbit</text>
            </a><a href="#" v-on:click="onWordClicked('kuvasz', $event)">
                <text x="1151" y="221" font-size="4" fill="rgb(32, 146, 140)">kuvasz</text>
            </a><a href="#" v-on:click="onWordClicked('cricket', $event)">
                <text x="85" y="396" font-size="4" fill="rgb(31, 153, 138)">cricket</text>
            </a><a href="#" v-on:click="onWordClicked('three-toed sloth', $event)">
                <text x="145" y="276" font-size="4" fill="rgb(72, 36, 117)">three-toed sloth</text>
            </a><a href="#" v-on:click="onWordClicked('marmoset', $event)">
                <text x="1293" y="183" font-size="4" fill="rgb(253, 231, 37)">marmoset</text>
            </a><a href="#" v-on:click="onWordClicked('golden retriever', $event)">
                <text x="1190" y="316" font-size="4" fill="rgb(178, 221, 45)">golden retriever</text>
            </a><a href="#" v-on:click="onWordClicked('mongoose', $event)">
                <text x="853" y="13" font-size="4" fill="rgb(47, 107, 142)">mongoose</text>
            </a><a href="#" v-on:click="onWordClicked('weimaraner', $event)">
                <text x="668" y="399" font-size="4" fill="rgb(45, 178, 125)">weimaraner</text>
            </a><a href="#" v-on:click="onWordClicked('miniature poodle', $event)">
                <text x="133" y="251" font-size="4" fill="rgb(55, 91, 141)">miniature poodle</text>
            </a><a href="#" v-on:click="onWordClicked('siamang', $event)">
                <text x="992" y="14" font-size="4" fill="rgb(61, 188, 116)">siamang</text>
            </a><a href="#" v-on:click="onWordClicked('groenendael', $event)">
                <text x="1106" y="77" font-size="4" fill="rgb(178, 221, 45)">groenendael</text>
            </a><a href="#" v-on:click="onWordClicked('typewriter keyboard', $event)">
                <text x="1365" y="364" font-size="4" fill="rgb(72, 24, 106)">typewriter keyboard</text>
            </a><a href="#" v-on:click="onWordClicked('english springer', $event)">
                <text x="138" y="355" font-size="4" fill="rgb(80, 196, 106)">english springer</text>
            </a><a href="#" v-on:click="onWordClicked('ringlet', $event)">
                <text x="0" y="55" font-size="4" fill="rgb(30, 155, 138)">ringlet</text>
            </a><a href="#" v-on:click="onWordClicked('manhole cover', $event)">
                <text x="732" y="130" font-size="4" transform="rotate(-90, 732, 130) translate(-26, 0)"
                      fill="rgb(218, 227, 25)">manhole cover
                </text>
            </a><a href="#" v-on:click="onWordClicked('boxer', $event)">
                <text x="1244" y="264" font-size="4" fill="rgb(82, 197, 105)">boxer</text>
            </a><a href="#" v-on:click="onWordClicked('sloth bear', $event)">
                <text x="304" y="354" font-size="4" transform="rotate(-90, 304, 354) translate(-17, 0)"
                      fill="rgb(216, 226, 25)">sloth bear
                </text>
            </a><a href="#" v-on:click="onWordClicked('bouvier des flandres', $event)">
                <text x="1050" y="440" font-size="4" transform="rotate(-90, 1050, 440) translate(-33, 0)"
                      fill="rgb(69, 5, 89)">bouvier des flandres
                </text>
            </a><a href="#" v-on:click="onWordClicked('wolf spider', $event)">
                <text x="705" y="184" font-size="4" transform="rotate(-90, 705, 184) translate(-19, 0)"
                      fill="rgb(82, 197, 105)">wolf spider
                </text>
            </a><a href="#" v-on:click="onWordClicked('garden spider', $event)">
                <text x="793" y="54" font-size="4" fill="rgb(122, 209, 81)">garden spider</text>
            </a><a href="#" v-on:click="onWordClicked('tiger shark', $event)">
                <text x="636" y="275" font-size="4" fill="rgb(70, 52, 128)">tiger shark</text>
            </a><a href="#" v-on:click="onWordClicked('nematode', $event)">
                <text x="1198" y="363" font-size="4" fill="rgb(76, 194, 108)">nematode</text>
            </a><a href="#" v-on:click="onWordClicked('tailed frog', $event)">
                <text x="1113" y="418" font-size="4" fill="rgb(57, 86, 140)">tailed frog</text>
            </a><a href="#" v-on:click="onWordClicked('border collie', $event)">
                <text x="661" y="411" font-size="4" transform="rotate(-90, 661, 411) translate(-20, 0)"
                      fill="rgb(57, 85, 140)">border collie
                </text>
            </a><a href="#" v-on:click="onWordClicked('stopwatch', $event)">
                <text x="1114" y="347" font-size="4" fill="rgb(147, 215, 65)">stopwatch</text>
            </a><a href="#" v-on:click="onWordClicked('lionfish', $event)">
                <text x="336" y="173" font-size="4" fill="rgb(61, 188, 116)">lionfish</text>
            </a><a href="#" v-on:click="onWordClicked('coucal', $event)">
                <text x="31" y="318" font-size="4" fill="rgb(216, 226, 25)">coucal</text>
            </a><a href="#" v-on:click="onWordClicked('slug', $event)">
                <text x="1369" y="470" font-size="4" fill="rgb(189, 223, 38)">slug</text>
            </a><a href="#" v-on:click="onWordClicked('dung beetle', $event)">
                <text x="1211" y="274" font-size="4" fill="rgb(68, 1, 84)">dung beetle</text>
            </a><a href="#" v-on:click="onWordClicked('meerkat', $event)">
                <text x="801" y="91" font-size="4" fill="rgb(36, 134, 142)">meerkat</text>
            </a><a href="#" v-on:click="onWordClicked('basset', $event)">
                <text x="58" y="418" font-size="4" fill="rgb(31, 152, 139)">basset</text>
            </a><a href="#" v-on:click="onWordClicked('vizsla', $event)">
                <text x="1188" y="422" font-size="4" fill="rgb(76, 194, 108)">vizsla</text>
            </a><a href="#" v-on:click="onWordClicked('grasshopper', $event)">
                <text x="194" y="324" font-size="4" fill="rgb(53, 95, 141)">grasshopper</text>
            </a><a href="#" v-on:click="onWordClicked('leopard', $event)">
                <text x="1201" y="478" font-size="4" fill="rgb(71, 44, 122)">leopard</text>
            </a><a href="#" v-on:click="onWordClicked('vine snake', $event)">
                <text x="1060" y="145" font-size="4" fill="rgb(173, 220, 48)">vine snake</text>
            </a><a href="#" v-on:click="onWordClicked('european gallinule', $event)">
                <text x="21" y="248" font-size="4" fill="rgb(43, 116, 142)">european gallinule</text>
            </a><a href="#" v-on:click="onWordClicked('cocker spaniel', $event)">
                <text x="146" y="478" font-size="4" fill="rgb(155, 217, 60)">cocker spaniel</text>
            </a><a href="#" v-on:click="onWordClicked('velvet', $event)">
                <text x="1166" y="247" font-size="4" fill="rgb(124, 210, 80)">velvet</text>
            </a><a href="#" v-on:click="onWordClicked('papillon', $event)">
                <text x="727" y="229" font-size="4" fill="rgb(181, 222, 43)">papillon</text>
            </a><a href="#" v-on:click="onWordClicked('bullfrog', $event)">
                <text x="942" y="390" font-size="4" fill="rgb(33, 144, 141)">bullfrog</text>
            </a><a href="#" v-on:click="onWordClicked('space bar', $event)">
                <text x="968" y="249" font-size="4" fill="rgb(47, 180, 124)">space bar</text>
            </a><a href="#" v-on:click="onWordClicked('whiskey jug', $event)">
                <text x="726" y="40" font-size="4" fill="rgb(105, 205, 91)">whiskey jug</text>
            </a><a href="#" v-on:click="onWordClicked('titi', $event)">
                <text x="645" y="345" font-size="4" fill="rgb(71, 16, 99)">titi</text>
            </a><a href="#" v-on:click="onWordClicked('ibizan hound', $event)">
                <text x="834" y="346" font-size="4" fill="rgb(50, 100, 142)">ibizan hound</text>
            </a><a href="#" v-on:click="onWordClicked('wild boar', $event)">
                <text x="359" y="186" font-size="4" fill="rgb(86, 198, 103)">wild boar</text>
            </a><a href="#" v-on:click="onWordClicked('red wolf', $event)">
                <text x="1067" y="153" font-size="4" fill="rgb(62, 76, 138)">red wolf</text>
            </a><a href="#" v-on:click="onWordClicked('leafhopper', $event)">
                <text x="561" y="8" font-size="4" fill="rgb(71, 42, 122)">leafhopper</text>
            </a><a href="#" v-on:click="onWordClicked('harvestman', $event)">
                <text x="904" y="37" font-size="4" fill="rgb(33, 165, 133)">harvestman</text>
            </a><a href="#" v-on:click="onWordClicked('coyote', $event)">
                <text x="457" y="396" font-size="4" fill="rgb(34, 141, 141)">coyote</text>
            </a><a href="#" v-on:click="onWordClicked('diamondback', $event)">
                <text x="1026" y="241" font-size="4" fill="rgb(44, 113, 142)">diamondback</text>
            </a><a href="#" v-on:click="onWordClicked('collie', $event)">
                <text x="1158" y="358" font-size="4" fill="rgb(34, 139, 141)">collie</text>
            </a><a href="#" v-on:click="onWordClicked('scottish deerhound', $event)">
                <text x="1053" y="302" font-size="4" transform="rotate(-90, 1053, 302) translate(-31, 0)"
                      fill="rgb(71, 45, 123)">scottish deerhound
                </text>
            </a><a href="#" v-on:click="onWordClicked('wombat', $event)">
                <text x="407" y="55" font-size="4" fill="rgb(200, 224, 32)">wombat</text>
            </a><a href="#" v-on:click="onWordClicked('doberman', $event)">
                <text x="861" y="436" font-size="4" fill="rgb(103, 204, 92)">doberman</text>
            </a><a href="#" v-on:click="onWordClicked('lakeland terrier', $event)">
                <text x="141" y="344" font-size="4" fill="rgb(52, 97, 141)">lakeland terrier</text>
            </a><a href="#" v-on:click="onWordClicked('dowitcher', $event)">
                <text x="978" y="36" font-size="4" fill="rgb(168, 219, 52)">dowitcher</text>
            </a><a href="#" v-on:click="onWordClicked('great grey owl', $event)">
                <text x="71" y="227" font-size="4" transform="rotate(-90, 71, 227) translate(-23, 0)"
                      fill="rgb(31, 161, 136)">great grey owl
                </text>
            </a><a href="#" v-on:click="onWordClicked('newfoundland', $event)">
                <text x="355" y="169" font-size="4" transform="rotate(-90, 355, 169) translate(-23, 0)"
                      fill="rgb(144, 215, 67)">newfoundland
                </text>
            </a><a href="#" v-on:click="onWordClicked('mexican hairless', $event)">
                <text x="210" y="478" font-size="4" fill="rgb(39, 126, 142)">mexican hairless</text>
            </a><a href="#" v-on:click="onWordClicked('redshank', $event)">
                <text x="988" y="218" font-size="4" fill="rgb(39, 126, 142)">redshank</text>
            </a><a href="#" v-on:click="onWordClicked('fountain pen', $event)">
                <text x="1146" y="410" font-size="4" fill="rgb(72, 27, 109)">fountain pen</text>
            </a><a href="#" v-on:click="onWordClicked('chickadee', $event)">
                <text x="840" y="354" font-size="4" fill="rgb(165, 219, 54)">chickadee</text>
            </a><a href="#" v-on:click="onWordClicked('hyena', $event)">
                <text x="922" y="98" font-size="4" transform="rotate(-90, 922, 98) translate(-10, 0)"
                      fill="rgb(34, 168, 132)">hyena
                </text>
            </a><a href="#" v-on:click="onWordClicked('bluetick', $event)">
                <text x="678" y="252" font-size="4" fill="rgb(223, 227, 24)">bluetick</text>
            </a><a href="#" v-on:click="onWordClicked('samoyed', $event)">
                <text x="849" y="59" font-size="4" transform="rotate(-90, 849, 59) translate(-16, 0)"
                      fill="rgb(74, 193, 109)">samoyed
                </text>
            </a><a href="#" v-on:click="onWordClicked('rhodesian ridgeback', $event)">
                <text x="859" y="372" font-size="4" fill="rgb(117, 208, 84)">rhodesian ridgeback</text>
            </a><a href="#" v-on:click="onWordClicked('ballpoint', $event)">
                <text x="176" y="398" font-size="4" fill="rgb(55, 90, 140)">ballpoint</text>
            </a><a href="#" v-on:click="onWordClicked('toy terrier', $event)">
                <text x="251" y="273" font-size="4" fill="rgb(63, 188, 115)">toy terrier</text>
            </a><a href="#" v-on:click="onWordClicked('bittern', $event)">
                <text x="903" y="452" font-size="4" fill="rgb(31, 160, 136)">bittern</text>
            </a><a href="#" v-on:click="onWordClicked('brown bear', $event)">
                <text x="998" y="379" font-size="4" fill="rgb(105, 205, 91)">brown bear</text>
            </a><a href="#" v-on:click="onWordClicked('irish water spaniel', $event)">
                <text x="319" y="396" font-size="4" fill="rgb(221, 227, 24)">irish water spaniel</text>
            </a><a href="#" v-on:click="onWordClicked('red fox', $event)">
                <text x="109" y="415" font-size="4" fill="rgb(33, 143, 141)">red fox</text>
            </a><a href="#" v-on:click="onWordClicked('bustard', $event)">
                <text x="447" y="15" font-size="4" transform="rotate(-90, 447, 15) translate(-12, 0)"
                      fill="rgb(36, 135, 142)">bustard
                </text>
            </a><a href="#" v-on:click="onWordClicked('holster', $event)">
                <text x="628" y="28" font-size="4" fill="rgb(253, 231, 37)">holster</text>
            </a><a href="#" v-on:click="onWordClicked('pomeranian', $event)">
                <text x="400" y="28" font-size="4" fill="rgb(44, 115, 142)">pomeranian</text>
            </a><a href="#" v-on:click="onWordClicked('proboscis monkey', $event)">
                <text x="509" y="276" font-size="4" fill="rgb(41, 175, 127)">proboscis monkey</text>
            </a><a href="#" v-on:click="onWordClicked('tick', $event)">
                <text x="61" y="422" font-size="4" fill="rgb(55, 184, 120)">tick</text>
            </a><a href="#" v-on:click="onWordClicked('lesser panda', $event)">
                <text x="602" y="480" font-size="4" fill="rgb(54, 93, 141)">lesser panda</text>
            </a><a href="#" v-on:click="onWordClicked('limpkin', $event)">
                <text x="741" y="117" font-size="4" fill="rgb(72, 37, 118)">limpkin</text>
            </a><a href="#" v-on:click="onWordClicked('hare', $event)">
                <text x="66" y="4" font-size="4" fill="rgb(48, 106, 142)">hare</text>
            </a><a href="#" v-on:click="onWordClicked('giant panda', $event)">
                <text x="631" y="92" font-size="4" fill="rgb(51, 99, 141)">giant panda</text>
            </a><a href="#" v-on:click="onWordClicked('bedlington terrier', $event)">
                <text x="80" y="54" font-size="4" fill="rgb(37, 172, 130)">bedlington terrier</text>
            </a><a href="#" v-on:click="onWordClicked('irish terrier', $event)">
                <text x="709" y="413" font-size="4" fill="rgb(53, 94, 141)">irish terrier</text>
            </a><a href="#" v-on:click="onWordClicked('anemone fish', $event)">
                <text x="622" y="96" font-size="4" fill="rgb(71, 47, 125)">anemone fish</text>
            </a><a href="#" v-on:click="onWordClicked('clumber', $event)">
                <text x="1185" y="343" font-size="4" fill="rgb(56, 88, 140)">clumber</text>
            </a><a href="#" v-on:click="onWordClicked('walker hound', $event)">
                <text x="732" y="377" font-size="4" fill="rgb(132, 212, 75)">walker hound</text>
            </a><a href="#" v-on:click="onWordClicked('gila monster', $event)">
                <text x="1249" y="298" font-size="4" fill="rgb(55, 184, 120)">gila monster</text>
            </a><a href="#" v-on:click="onWordClicked('shih-tzu', $event)">
                <text x="1106" y="251" font-size="4" transform="rotate(-90, 1106, 251) translate(-13, 0)"
                      fill="rgb(68, 191, 112)">shih-tzu
                </text>
            </a><a href="#" v-on:click="onWordClicked('airedale', $event)">
                <text x="561" y="14" font-size="4" fill="rgb(55, 91, 141)">airedale</text>
            </a><a href="#" v-on:click="onWordClicked('timber wolf', $event)">
                <text x="794" y="85" font-size="4" fill="rgb(55, 90, 140)">timber wolf</text>
            </a><a href="#" v-on:click="onWordClicked('mink', $event)">
                <text x="231" y="74" font-size="4" transform="rotate(-90, 231, 74) translate(-10, 0)"
                      fill="rgb(38, 130, 142)">mink
                </text>
            </a><a href="#" v-on:click="onWordClicked('norwich terrier', $event)">
                <text x="901" y="11" font-size="4" fill="rgb(43, 116, 142)">norwich terrier</text>
            </a><a href="#" v-on:click="onWordClicked('lacewing', $event)">
                <text x="944" y="19" font-size="4" fill="rgb(105, 205, 91)">lacewing</text>
            </a><a href="#" v-on:click="onWordClicked('ladybug', $event)">
                <text x="879" y="467" font-size="4" fill="rgb(71, 13, 96)">ladybug</text>
            </a><a href="#" v-on:click="onWordClicked('rock beauty', $event)">
                <text x="266" y="478" font-size="4" fill="rgb(54, 93, 141)">rock beauty</text>
            </a><a href="#" v-on:click="onWordClicked('alligator lizard', $event)">
                <text x="940" y="77" font-size="4" fill="rgb(52, 97, 141)">alligator lizard</text>
            </a><a href="#" v-on:click="onWordClicked('flat-coated retriever', $event)">
                <text x="901" y="192" font-size="4" fill="rgb(71, 46, 124)">flat-coated retriever</text>
            </a><a href="#" v-on:click="onWordClicked('appenzeller', $event)">
                <text x="110" y="434" font-size="4" fill="rgb(33, 145, 140)">appenzeller</text>
            </a><a href="#" v-on:click="onWordClicked('bee eater', $event)">
                <text x="1259" y="127" font-size="4" fill="rgb(63, 188, 115)">bee eater</text>
            </a><a href="#" v-on:click="onWordClicked('old english sheepdog', $event)">
                <text x="265" y="294" font-size="4" transform="rotate(-90, 265, 294) translate(-35, 0)"
                      fill="rgb(39, 126, 142)">old english sheepdog
                </text>
            </a><a href="#" v-on:click="onWordClicked('polecat', $event)">
                <text x="400" y="450" font-size="4" fill="rgb(64, 70, 136)">polecat</text>
            </a><a href="#" v-on:click="onWordClicked('border terrier', $event)">
                <text x="1071" y="459" font-size="4" fill="rgb(68, 58, 131)">border terrier</text>
            </a><a href="#" v-on:click="onWordClicked('black grouse', $event)">
                <text x="189" y="202" font-size="4" fill="rgb(31, 161, 136)">black grouse</text>
            </a><a href="#" v-on:click="onWordClicked('curly-coated retriever', $event)">
                <text x="968" y="311" font-size="4" fill="rgb(30, 155, 138)">curly-coated retriever</text>
            </a><a href="#" v-on:click="onWordClicked('agaric', $event)">
                <text x="810" y="212" font-size="4" fill="rgb(110, 206, 88)">agaric</text>
            </a><a href="#" v-on:click="onWordClicked('gordon setter', $event)">
                <text x="482" y="417" font-size="4" fill="rgb(31, 162, 135)">gordon setter</text>
            </a><a href="#" v-on:click="onWordClicked('giant schnauzer', $event)">
                <text x="33" y="70" font-size="4" fill="rgb(71, 17, 100)">giant schnauzer</text>
            </a><a href="#" v-on:click="onWordClicked('green lizard', $event)">
                <text x="1061" y="357" font-size="4" fill="rgb(69, 55, 129)">green lizard</text>
            </a><a href="#" v-on:click="onWordClicked('hamster', $event)">
                <text x="554" y="110" font-size="4" fill="rgb(70, 11, 94)">hamster</text>
            </a><a href="#" v-on:click="onWordClicked('tibetan mastiff', $event)">
                <text x="880" y="359" font-size="4" fill="rgb(41, 123, 142)">tibetan mastiff</text>
            </a><a href="#" v-on:click="onWordClicked('norwegian elkhound', $event)">
                <text x="881" y="252" font-size="4" fill="rgb(69, 4, 87)">norwegian elkhound</text>
            </a><a href="#" v-on:click="onWordClicked('wire-haired fox terrier', $event)">
                <text x="931" y="168" font-size="4" fill="rgb(41, 123, 142)">wire-haired fox terrier</text>
            </a><a href="#" v-on:click="onWordClicked('leaf beetle', $event)">
                <text x="1356" y="352" font-size="4" fill="rgb(84, 197, 104)">leaf beetle</text>
            </a><a href="#" v-on:click="onWordClicked('briard', $event)">
                <text x="305" y="354" font-size="4" fill="rgb(31, 150, 139)">briard</text>
            </a><a href="#" v-on:click="onWordClicked('brabancon griffon', $event)">
                <text x="956" y="338" font-size="4" fill="rgb(178, 221, 45)">brabancon griffon</text>
            </a><a href="#" v-on:click="onWordClicked('green mamba', $event)">
                <text x="591" y="255" font-size="4" fill="rgb(72, 40, 120)">green mamba</text>
            </a><a href="#" v-on:click="onWordClicked('yorkshire terrier', $event)">
                <text x="1129" y="44" font-size="4" fill="rgb(122, 209, 81)">yorkshire terrier</text>
            </a><a href="#" v-on:click="onWordClicked('cairn', $event)">
                <text x="669" y="67" font-size="4" fill="rgb(52, 97, 141)">cairn</text>
            </a><a href="#" v-on:click="onWordClicked('letter opener', $event)">
                <text x="1166" y="216" font-size="4" fill="rgb(61, 188, 116)">letter opener</text>
            </a><a href="#" v-on:click="onWordClicked('norfolk terrier', $event)">
                <text x="174" y="460" font-size="4" fill="rgb(60, 80, 139)">norfolk terrier</text>
            </a><a href="#" v-on:click="onWordClicked('silky terrier', $event)">
                <text x="487" y="374" font-size="4" fill="rgb(122, 209, 81)">silky terrier</text>
            </a><a href="#" v-on:click="onWordClicked('african hunting dog', $event)">
                <text x="396" y="250" font-size="4" fill="rgb(38, 130, 142)">african hunting dog</text>
            </a><a href="#" v-on:click="onWordClicked('hognose snake', $event)">
                <text x="350" y="165" font-size="4" fill="rgb(51, 98, 141)">hognose snake</text>
            </a><a href="#" v-on:click="onWordClicked('dugong', $event)">
                <text x="1056" y="196" font-size="4" fill="rgb(47, 107, 142)">dugong</text>
            </a><a href="#" v-on:click="onWordClicked('damselfly', $event)">
                <text x="538" y="120" font-size="4" fill="rgb(31, 152, 139)">damselfly</text>
            </a><a href="#" v-on:click="onWordClicked('tree frog', $event)">
                <text x="25" y="132" font-size="4" fill="rgb(31, 149, 139)">tree frog</text>
            </a><a href="#" v-on:click="onWordClicked('welsh springer spaniel', $event)">
                <text x="1209" y="85" font-size="4" fill="rgb(69, 56, 130)">welsh springer spaniel</text>
            </a><a href="#" v-on:click="onWordClicked('unclassified', $event)">
                <text x="673" y="327" font-size="4" fill="rgb(72, 20, 103)">unclassified</text>
            </a><a href="#" v-on:click="onWordClicked('chambered nautilus', $event)">
                <text x="165" y="413" font-size="4" fill="rgb(53, 95, 141)">chambered nautilus</text>
            </a><a href="#" v-on:click="onWordClicked('lhasa', $event)">
                <text x="1073" y="451" font-size="4" fill="rgb(41, 122, 142)">lhasa</text>
            </a><a href="#" v-on:click="onWordClicked('agama', $event)">
                <text x="1099" y="214" font-size="4" fill="rgb(71, 14, 97)">agama</text>
            </a><a href="#" v-on:click="onWordClicked('odometer', $event)">
                <text x="343" y="323" font-size="4" fill="rgb(62, 74, 137)">odometer</text>
            </a><a href="#" v-on:click="onWordClicked('brittany spaniel', $event)">
                <text x="1243" y="336" font-size="4" fill="rgb(37, 133, 142)">brittany spaniel</text>
            </a><a href="#" v-on:click="onWordClicked('gyromitra', $event)">
                <text x="385" y="215" font-size="4" fill="rgb(34, 141, 141)">gyromitra</text>
            </a><a href="#" v-on:click="onWordClicked('german short-haired pointer', $event)">
                <text x="1031" y="348" font-size="4" transform="rotate(-90, 1031, 348) translate(-46, 0)"
                      fill="rgb(155, 217, 60)">german short-haired pointer
                </text>
            </a><a href="#" v-on:click="onWordClicked('bernese mountain dog', $event)">
                <text x="557" y="393" font-size="4" fill="rgb(70, 11, 94)">bernese mountain dog</text>
            </a><a href="#" v-on:click="onWordClicked('jaguar', $event)">
                <text x="1117" y="252" font-size="4" fill="rgb(31, 161, 135)">jaguar</text>
            </a><a href="#" v-on:click="onWordClicked('black and gold garden spider', $event)">
                <text x="995" y="145" font-size="4" transform="rotate(-90, 995, 145) translate(-48, 0)"
                      fill="rgb(31, 161, 136)">black and gold garden spider
                </text>
            </a><a href="#" v-on:click="onWordClicked('snow leopard', $event)">
                <text x="1226" y="171" font-size="4" fill="rgb(43, 117, 142)">snow leopard</text>
            </a><a href="#" v-on:click="onWordClicked('standard schnauzer', $event)">
                <text x="1352" y="483" font-size="4" fill="rgb(58, 84, 140)">standard schnauzer</text>
            </a><a href="#" v-on:click="onWordClicked('thunder snake', $event)">
                <text x="110" y="438" font-size="4" fill="rgb(53, 95, 141)">thunder snake</text>
            </a><a href="#" v-on:click="onWordClicked('echidna', $event)">
                <text x="904" y="82" font-size="4" fill="rgb(72, 41, 121)">echidna</text>
            </a><a href="#" v-on:click="onWordClicked('saint bernard', $event)">
                <text x="1170" y="477" font-size="4" fill="rgb(58, 83, 139)">saint bernard</text>
            </a><a href="#" v-on:click="onWordClicked('irish setter', $event)">
                <text x="124" y="184" font-size="4" fill="rgb(47, 180, 124)">irish setter</text>
            </a><a href="#" v-on:click="onWordClicked('badger', $event)">
                <text x="424" y="394" font-size="4" fill="rgb(40, 174, 128)">badger</text>
            </a><a href="#" v-on:click="onWordClicked('black-footed ferret', $event)">
                <text x="766" y="10" font-size="4" fill="rgb(94, 201, 98)">black-footed ferret</text>
            </a><a href="#" v-on:click="onWordClicked('digital watch', $event)">
                <text x="265" y="459" font-size="4" fill="rgb(51, 98, 141)">digital watch</text>
            </a><a href="#" v-on:click="onWordClicked('bull mastiff', $event)">
                <text x="140" y="116" font-size="4" fill="rgb(71, 44, 122)">bull mastiff</text>
            </a><a href="#" v-on:click="onWordClicked('miniature schnauzer', $event)">
                <text x="1353" y="320" font-size="4" fill="rgb(37, 133, 142)">miniature schnauzer</text>
            </a><a href="#" v-on:click="onWordClicked('whiptail', $event)">
                <text x="960" y="94" font-size="4" fill="rgb(31, 161, 135)">whiptail</text>
            </a><a href="#" v-on:click="onWordClicked('maltese dog', $event)">
                <text x="1290" y="147" font-size="4" fill="rgb(58, 84, 140)">maltese dog</text>
            </a><a href="#" v-on:click="onWordClicked('patas', $event)">
                <text x="1130" y="457" font-size="4" fill="rgb(45, 178, 125)">patas</text>
            </a><a href="#" v-on:click="onWordClicked('prairie chicken', $event)">
                <text x="668" y="6" font-size="4" transform="rotate(-90, 668, 6) translate(-24, 0)"
                      fill="rgb(49, 102, 142)">prairie chicken
                </text>
            </a><a href="#" v-on:click="onWordClicked('american chameleon', $event)">
                <text x="150" y="96" font-size="4" fill="rgb(71, 16, 99)">american chameleon</text>
            </a><a href="#" v-on:click="onWordClicked('australian terrier', $event)">
                <text x="716" y="271" font-size="4" fill="rgb(47, 107, 142)">australian terrier</text>
            </a><a href="#" v-on:click="onWordClicked('black-and-tan coonhound', $event)">
                <text x="849" y="134" font-size="4" transform="rotate(-90, 849, 134) translate(-41, 0)"
                      fill="rgb(72, 40, 120)">black-and-tan coonhound
                </text>
            </a><a href="#" v-on:click="onWordClicked('guenon', $event)">
                <text x="917" y="303" font-size="4" fill="rgb(56, 88, 140)">guenon</text>
            </a><a href="#" v-on:click="onWordClicked('black widow', $event)">
                <text x="732" y="244" font-size="4" fill="rgb(33, 144, 141)">black widow</text>
            </a><a href="#" v-on:click="onWordClicked('pekinese', $event)">
                <text x="325" y="332" font-size="4" fill="rgb(122, 209, 81)">pekinese</text>
            </a><a href="#" v-on:click="onWordClicked('ringneck snake', $event)">
                <text x="928" y="374" font-size="4" transform="rotate(-90, 928, 374) translate(-25, 0)"
                      fill="rgb(69, 55, 129)">ringneck snake
                </text>
            </a><a href="#" v-on:click="onWordClicked('weevil', $event)">
                <text x="364" y="451" font-size="4" fill="rgb(94, 201, 98)">weevil</text>
            </a><a href="#" v-on:click="onWordClicked('jacamar', $event)">
                <text x="746" y="111" font-size="4" fill="rgb(70, 52, 128)">jacamar</text>
            </a><a href="#" v-on:click="onWordClicked('english foxhound', $event)">
                <text x="1371" y="64" font-size="4" fill="rgb(57, 85, 140)">english foxhound</text>
            </a><a href="#" v-on:click="onWordClicked('arctic fox', $event)">
                <text x="496" y="451" font-size="4" fill="rgb(45, 113, 142)">arctic fox</text>
            </a><a href="#" v-on:click="onWordClicked('sidewinder', $event)">
                <text x="331" y="453" font-size="4" fill="rgb(78, 195, 107)">sidewinder</text>
            </a><a href="#" v-on:click="onWordClicked('green snake', $event)">
                <text x="827" y="280" font-size="4" transform="rotate(-90, 827, 280) translate(-20, 0)"
                      fill="rgb(66, 63, 133)">green snake
                </text>
            </a><a href="#" v-on:click="onWordClicked('king snake', $event)">
                <text x="592" y="148" font-size="4" fill="rgb(36, 170, 131)">king snake</text>
            </a><a href="#" v-on:click="onWordClicked('chiffonier', $event)">
                <text x="631" y="22" font-size="4" fill="rgb(34, 167, 133)">chiffonier</text>
            </a><a href="#" v-on:click="onWordClicked('kit fox', $event)">
                <text x="313" y="142" font-size="4" fill="rgb(33, 144, 141)">kit fox</text>
            </a><a href="#" v-on:click="onWordClicked('white wolf', $event)">
                <text x="883" y="412" font-size="4" fill="rgb(72, 28, 110)">white wolf</text>
            </a><a href="#" v-on:click="onWordClicked('gibbon', $event)">
                <text x="629" y="430" font-size="4" fill="rgb(127, 211, 78)">gibbon</text>
            </a><a href="#" v-on:click="onWordClicked('banded gecko', $event)">
                <text x="250" y="102" font-size="4" fill="rgb(32, 163, 134)">banded gecko</text>
            </a><a href="#" v-on:click="onWordClicked('flatworm', $event)">
                <text x="1302" y="317" font-size="4" fill="rgb(42, 120, 142)">flatworm</text>
            </a><a href="#" v-on:click="onWordClicked('blenheim spaniel', $event)">
                <text x="675" y="163" font-size="4" transform="rotate(-90, 675, 163) translate(-29, 0)"
                      fill="rgb(68, 57, 131)">blenheim spaniel
                </text>
            </a><a href="#" v-on:click="onWordClicked('ground beetle', $event)">
                <text x="112" y="196" font-size="4" fill="rgb(71, 47, 125)">ground beetle</text>
            </a><a href="#" v-on:click="onWordClicked('chow', $event)">
                <text x="567" y="208" font-size="4" transform="rotate(-90, 567, 208) translate(-9, 0)"
                      fill="rgb(55, 91, 141)">chow
                </text>
            </a><a href="#" v-on:click="onWordClicked('dandie dinmont', $event)">
                <text x="1348" y="222" font-size="4" fill="rgb(253, 231, 37)">dandie dinmont</text>
            </a><a href="#" v-on:click="onWordClicked('african chameleon', $event)">
                <text x="1053" y="321" font-size="4" fill="rgb(160, 218, 57)">african chameleon</text>
            </a><a href="#" v-on:click="onWordClicked('common newt', $event)">
                <text x="1102" y="193" font-size="4" fill="rgb(42, 120, 142)">common newt</text>
            </a><a href="#" v-on:click="onWordClicked('horned viper', $event)">
                <text x="1010" y="54" font-size="4" transform="rotate(-90, 1010, 54) translate(-21, 0)"
                      fill="rgb(34, 168, 132)">horned viper
                </text>
            </a><a href="#" v-on:click="onWordClicked('dishrag', $event)">
                <text x="1313" y="64" font-size="4" fill="rgb(90, 200, 100)">dishrag</text>
            </a><a href="#" v-on:click="onWordClicked('keeshond', $event)">
                <text x="1025" y="272" font-size="4" fill="rgb(49, 102, 142)">keeshond</text>
            </a><a href="#" v-on:click="onWordClicked('sealyham terrier', $event)">
                <text x="23" y="259" font-size="4" fill="rgb(184, 222, 41)">sealyham terrier</text>
            </a><a href="#" v-on:click="onWordClicked('garter snake', $event)">
                <text x="408" y="58" font-size="4" fill="rgb(47, 108, 142)">garter snake</text>
            </a><a href="#" v-on:click="onWordClicked('eft', $event)">
                <text x="885" y="104" font-size="4" fill="rgb(58, 83, 139)">eft</text>
            </a><a href="#" v-on:click="onWordClicked('tiger beetle', $event)">
                <text x="78" y="291" font-size="4" fill="rgb(184, 222, 41)">tiger beetle</text>
            </a><a href="#" v-on:click="onWordClicked('affenpinscher', $event)">
                <text x="19" y="263" font-size="4" fill="rgb(105, 205, 91)">affenpinscher</text>
            </a><a href="#" v-on:click="onWordClicked('tibetan terrier', $event)">
                <text x="8" y="382" font-size="4" fill="rgb(192, 223, 37)">tibetan terrier</text>
            </a><a href="#" v-on:click="onWordClicked('otterhound', $event)">
                <text x="1357" y="266" font-size="3" fill="rgb(34, 141, 141)">otterhound</text>
            </a><a href="#" v-on:click="onWordClicked('spotted salamander', $event)">
                <text x="793" y="273" font-size="3" fill="rgb(32, 164, 134)">spotted salamander</text>
            </a><a href="#" v-on:click="onWordClicked('european fire salamander', $event)">
                <text x="503" y="249" font-size="3" fill="rgb(57, 85, 140)">european fire salamander</text>
            </a><a href="#" v-on:click="onWordClicked('japanese spaniel', $event)">
                <text x="176" y="136" font-size="2" fill="rgb(39, 127, 142)">japanese spaniel</text>
            </a>
            </svg>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'LabelCloud',
        methods: {
            onWordClicked(word, e) {
                e.stopPropagation();
                this.$emit("labelClicked", word)
            }
        }
    }
</script>
<style scoped>

    @font-face {
        font-family: 'robotoregular';
        src: url('/roboto-regular-webfont.woff2') format('woff2'),
        url('/roboto-regular-webfont.woff') format('woff'),
        url('/roboto-regular-webfont.ttf') format('truetype'),
        url('/roboto-regular-webfont.svg#robotoregular') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    text {
        font-family: 'robotoregular';
        font-kerning: none;
        font-variant-ligatures: none
    }
</style>
