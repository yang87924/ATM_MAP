const areaUrl = 'https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json';
const bankUrl = 'https://raw.githubusercontent.com/yang87924/JsonDB/main/ATM.json';
let selectdata = []
let getdata = null
let map = null
let markers = []
let totle=0
fetch(areaUrl)
    .then(response => response.json())
    .then(data => {
        const countySelect = document.getElementById('county');
        const areaSelect = document.getElementById('area');
        const submitButton = document.getElementById('submit');
        const resultDiv = document.getElementById('result');
        //111
        // 產生縣市選單
        data.forEach(item => {
            const countyOption = document.createElement('option');
            countyOption.value = item.CityName;
            countyOption.text = item.CityName;
            countySelect.add(countyOption);
        });

        // 當縣市選項改變時，動態產生區域選單
        countySelect.addEventListener('change', () => {
            const selectedCounty = countySelect.value;
            // 先清空區域選單的內容
            areaSelect.innerHTML = '<option value="">請選擇行政區</option>';

            // 根據所選擇的縣市，產生相對應的區域選項
            const areaList = data.find(item => item.CityName === selectedCounty).AreaList;
            areaList.forEach(area => {
                const areaOption = document.createElement('option');
                areaOption.value = area.ZipCode;
                areaOption.text = area.AreaName;
                areaSelect.add(areaOption);
            });
        });
        // 當按鈕點擊時，顯示選擇結果
        submitButton.addEventListener('click', () => {
            const selectedCounty = countySelect.value;
            const selectedArea = areaSelect.value ? areaSelect.options[areaSelect.selectedIndex].text : '';
            let container = document.getElementById("container");
            container.replaceChildren();//先清空資料
            //console.log(container.innerHTML )
            // 取得銀行簡稱資料
            totle=0
            selectdata=[]
            getdata.forEach(items => {
                //console.log(items)
                if (items.所屬縣市 === selectedCounty && items.鄉鎮縣市別 === selectedArea) {
                    totle++
                    if(totle<5){
                    let newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "boxs");
                    let bank_abbreviation = "所屬銀行簡稱:" + items.所屬銀行簡稱
                    let Installation_location = "裝設地點類別:" + items.裝設地點
                    let contact_number = "聯絡電話:" + "(" + "0" + items.區碼 + ")" + items.聯絡電話
                    let address = items.所屬縣市 + items.鄉鎮縣市別 + items.地址
                    newDiv.innerHTML = bank_abbreviation + "<br>" + Installation_location + "<br>" + address + "<br>" + contact_number
                    console.log(container.innerHTML)
                    container.appendChild(newDiv);
                    //console.log(items)
                }
                    selectdata.push(items)
                }
            })
            deleteMarkers()
            addMarker()
        })
        function addMarker(){
            selectdata.slice(0, 10).forEach(function (record) {
                const pinViewScaled = new google.maps.marker.PinView({
                    scale: 0.8,
                    //glyph: record.編號 ,
                    //background: getColor(record.編號)
                });
                 const marker = new google.maps.marker.AdvancedMarkerView({
                    position: geoLocation(record["座標Y軸"], record["座標X軸"]),
                    map: map,
                    //title: record.所屬縣市 ,
                    //label: record.aqi,
                    content: pinViewScaled.element,
                });
                markers.push(marker);

            })
        }
        function deleteMarkers() {
            setMapOnAll(null);
            markers = [];
        }
        function setMapOnAll(map) {
            for (let i = 0; i < markers.length; i++) {
                markers[i].map=null;
            }
        }
    })