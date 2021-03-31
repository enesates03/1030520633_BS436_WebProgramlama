const React   = require('react');
const {mount} = require('enzyme');
const {Game}  = require('../src/game');


const checkCardDisplayed = (driver) => {
    const card = driver.find('.card');
    checkSrc(driver);
}

const checkSrc = (driver) => {
    let src =driver.find("img").at(2).prop("src");
    expect(src).toBe('images/galataTDrawing.jpg');

}

test('kart oluşturuldu', () => { 
    const driver = mount (<Game/>);
    checkCardDisplayed(driver);
});

test('ilk oyun', () => { 
    const driver = mount (<Game/>);
   
    let msg = undefined;
    global.alert = (s) => {msg=s};
   
    const first = driver.find('.card').at(1);
    first.simulate('click');
    
    driver.find("img").at(1).prop("src");
    expect(src).toBe('images/galataTDrawing.jpg');
    
    expect(msg).toBeDefined();
});

test('çoklu seçim', () => {
    let driver = mount(<Game/>);
   
    let msg = undefined;
    global.alert = (s) => {msg=s};
   
    for(let i=0;i<40;i++){
        const first = driver.find('.card').at(2);
        first.simulate('click');
       
        expect(msg).toBeDefined();
        msg = undefined;
       
        driver.find("img").at(2).prop("src");
        expect(src).toBe('images/galataTDrawing.jpg');

        driver = mount(<Game/>);
    }
});

/* Test işlemlerini yaparken yazdığım flipCard() metodu oyuncu karta tıklandığında çalıştırılan ilk metotdur. 
   Metodun içinde bulunan setTimeout fonksiyonu test sırasında hata veriyor ve ben bu hatayı düzeltemedim.
*/
