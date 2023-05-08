// 画面下部のリスティング広告を取得する
const bottomAds = document.querySelectorAll('div[id="bottomads"]');
// listing-picker-boxのターゲットとする場所（画面上部のリスティング広告のすぐ下）
const targetElement = document.querySelector('div[id="tvcap"]');

// 結果を表示する場所
const resultDisplayElement = document.createElement('div');
resultDisplayElement.className = 'listing-picker-box';

// 拡張機能名
const appName = document.createElement('h1');
appName.textContent = "Listing Picker"
resultDisplayElement.appendChild(appName);

// 下部のリスティング広告を表示する場所
const bottomElement = document.createElement('div');
bottomElement.className = 'bottom-box';

// bottomAdsをbottomElementに追加
bottomAds.forEach((ad) =>{
    bottomElement.appendChild(ad);
});

resultDisplayElement.appendChild(bottomElement);
targetElement.insertAdjacentElement('afterend', resultDisplayElement);

// // 画面下部にある次ページへのナビゲーションロゴを移動させる
// // ナビゲーションロゴを取得
const navigationElement = document.querySelectorAll('div[role="navigation"]');
console.log(navigationElement)

// // navigationElementをresultDisplayElement直後に移動
resultDisplayElement.insertAdjacentElement('afterend', navigationElement[1]);