/** @format */

import React from "react";
import "./faq-page.css";
import Header from "../../components/heder/heder";

function FaqPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper-card">
          <div className="card card-1">
            <span className="card-name">Лайфстайл</span>
            <span className="card-description">
              Сфотографую найкращі моменти вашого життя
            </span>
            <span className="card-price">80 €</span>
            <ul className="card-ul">
              <li>1 година зйомки</li>
              <li>50 готових фотографій в авторській обробці</li>
              <li>Усі оригінали фото</li>
              <li>Приватна онлайн галерея на 1 місяць</li>
              <li>Відео бєкстейдж зі зйомки</li>
              <li>Вартість проїзду не включена</li>
              <li>До 5 людей, додаткова людина + 25€</li>
            </ul>
          </div>
          <div className="card card-2">
            <span className="card-name">Студійна</span>
            <span className="card-description">
              Сфотографую найкращі моменти вашого життя
            </span>
            <span className="card-price">100 €</span>
            <ul className="card-ul">
              <li>1,5 - 2 години</li>
              <li>20 готових фотографій а авторській обробці</li>
              <li>Усі оригінали фото</li>
              <li>Приватна онлайн галерея на 1 місяць</li>
              <li>Відео бєкстейдж зі зйомки</li>
              <li>Вартість проїзду не включена</li>
              <li>До 5 людей</li>
            </ul>
          </div>
        </div>
        <div className="upper-text-description">
          <span className="upper-text-info-main">
            Дякую за інтерес до моєї творчості!
          </span>
          <span className="upper-text-info">
            Перед вами представлення вся детальна інформація,що стосується
            фотосесії,а також відповіді на часті запитання.
          </span>
          <span className="upper-text-info upper-text-info-bottom">
            З любов'ю до Вас та фотографії
          </span>
          <a
            href="https://instagram.com/alesia__ag/"
            target="opener"
            className="nav-link d-inline"
          >
            <div className="btn-insta">
              <div className="btn-insta-text">Посетить мой INSTAGRAМ</div>
            </div>
          </a>
        </div>
        <div className="text-viewer">
          <div className=" text-widget">
            <h2 className="text-widget-main">ВИБІР ЛОКАЦІЇ,ОБРАЗ</h2>
            <h2 className="text-widget-description">
              Локацію і ваш образ на зйомку ми обговорюємо зазделегідь на
              онлайн-консультації.
            </h2>
            <h2 className="text-widget-description">
              Якщо у вас є готова ідея і референси до неї, або якісь побажання,
              буду рада вислухати їх перед зйомкою на онлайн-консультації.
            </h2>
            <h2 className="text-widget-description">
              Я допомагаю вам від початку нашої консультації і до кінця зйомки.
              Усю зйомку я вам підсказую як і що робити, все проходить
              максимально легко і з насолодою для вас!
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">
              У ЯКИЙ ЧАС КРАЩЕ ФОТОГРАФУВАТИСЬ НА ВУЛИЦІ?
            </h2>
            <h2 className="text-widget-description">
              При зйомці у сонячну погоду краще запобігати жорсткого світла (
              можуть бути негарні перепади світла/тіні ) Найкращий час це ранок,
              або захід сонця. В похмуру погоду можна знімати у будь-який час.
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">ОБРОБКА ФОТО</h2>
            <h2 className="text-widget-description">
              Усі знімки будуть у такому стилі і кольорової гамі, як на моїх
              прикладах в інстаграммі. Зверніть у вагу на те що я не займаюсь
              ретушшю фігур/обличчя. Готові кадри будуть як кольорові,так і
              декілька чорно-білих кадрів.
            </h2>
            <h2 className="text-widget-description">
              Більше прикладів моїх робот ви можете побачити на моєї сторінці в
              інстаграмі.
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">КІЛЬКІСТЬ ГОТОВИХ ФОТОГРАФІЙ</h2>
            <h2 className="text-widget-description">
              Я віддаю усі оригінали,після чого ви обираєте (на ваш вибір) або я
              50 знімків (зазвичай віддаю більше) якщо це пакет лайфстайл
            </h2>
            <h2 className="text-widget-description">
              Якщо це студійна зйомка ви також отримуєте усі оригінали, після
              обираєте 20 фото для обробки.
            </h2>
            <h2 className="text-widget-description">
              Важливо: якщо вам не потрібні оригінали фото і немає часу обирати
              я можу зробити це за вас.
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">ЩО ТАКЕ «ВІДЕО-БЄКСТЕЙДЖ»</h2>
            <h2 className="text-widget-description">
              Це бонус який ви отримуєте після зйомки. Маленькі відео на
              телефон, при умовах що ми встигаємо і нам дозволяє час.
            </h2>
            <h2 className="text-widget-description">
              Після зйомки я одразу відправляю вам їх на телефон.
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">КІЛЬКІСТЬ ЛЮДЕЙ</h2>
            <h2 className="text-widget-description">
              «До 5 осіб» має на увазі склад однієї сім'ї у форматі батьки +
              діти, яким ми присвячуємо годину зйомки для створення єдиної
              цілісної фотоісторії.
            </h2>
            <h2 className="text-widget-description">
              У разі будь-якого іншого формату (2 пари друзів, 5 дівчат у
              форматі дівич-вечора, батьки+діти+бабусі-дідуся) - уточнюйте цей
              момент заздалегідь. Це обговорюється індивідуально і ціна може
              змінюватись в залежності від складності поставленого завдання та
              кількості людей.
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">ТЕРМІН ГОТОВНОСТІ ФОТОГРАФІЙ</h2>
            <h2 className="text-widget-description">
              У періоди великої завантаженості терміни віддачі готової серії
              фото можуть збільшуватися. У середньому термін віддачі від 2 до 4
              тижнів.
            </h2>
            <h2 className="text-widget-description">
              Готові фотографії ви отримуєте через приватну онлайн-галерею, яка
              активна 1 місяць
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">БРОНЬ ДАТИ / ПЕРЕНОС ЗЙОМКИ</h2>
            <h2 className="text-widget-description">
              Підготовка до фотосесії, вибір локацій та образів починається лише
              після броні дати та внесення авансу.
            </h2>
            <h2 className="text-widget-description">
              У разі форс-мажору з боку замовника – аванс поверненню не
              підлягає.
            </h2>
            <h2 className="text-widget-description">
              Перенесення дати зйомки можливе, якщо погода не дозволяє нам її
              здійснити.
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">ТРАНСПОРТНІ ВИТРАТИ</h2>
            <h2 className="text-widget-description">
              Я переміщаюся автомобілем і з радістю приїду до вас (територіально
              перебуваю в м. Альбасете ), але у разі більш далекої дороги -
              оплата транспортних витрат обговорюється Аліканте,Валенсія,Мадрид
              та ін- уточнюйте інформацію особисто.
            </h2>
          </div>
          <div className=" text-widget">
            <h2 className="text-widget-main">ТРИВАЛІСТЬ ФОТОСЕСІЇ</h2>
            <h2 className="text-widget-description">
              Наша зйомка триває 1 годину. Запізнення з боку замовника, на жаль,
              не зміщує час зйомки будь ласка, враховуйте цей момент у процесі
              планування маршруту тощо.
            </h2>
          </div>
        </div>
        <div className="footer">
          <span className="text-footer">
            Якщо у вас залишись якісь питання, на які ви не знайшли відповіді,
            або вам потрібна додаткова інформація, ви можете зв’язатись зі мною
            і я із задоволенням відповім вам.
          </span>
          <a
            href="https://instagram.com/alesia__ag/"
            target="opener"
            className="nav-link d-inline"
          >
            <div className="btn-insta">
              <div className="btn-insta-text">Связаться со мной</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
