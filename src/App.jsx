import React, { Component, Fragment } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Modal from 'react-responsive-modal';
import { GlobalStyle, Apps, Header, Contact, Review, Footer } from './resources/style';
import { Logo, Email, Phone, Firewood } from './resources/img/icon';

const review = {
  'first': {
    name: 'Вадим Егоров',
    text: 'Хочу оставить отзыв ребятам. Все сделали быстро. Привезли, как и договаривались на следующий день. Уже открыли дачный сезон. А какая дача без запаха костра?!?! Он у нас теперь каждый день, не приходится дрова искать и экономить. Спасибо, ребята!',
    photo: '',
    active: true,
  },
  'second': {
    name: 'Александр Лученок',
    text: 'Долго выбирал среди компаний в интернете. Обзванивал всех, уточнял стоимость и возможность быстрой доставки за город. Мне предложили выбрать удобное для меня время и назвали итоговую стоимость вместе с доставкой. Меня все утроило. За полчаса до доставки мне позвонили для уточнения информации, всё согласовали и уже вечером я топил камин! Все понравилось! Буду рекомендовать вас соседям и родственникам!',
    photo: ''
  },
  'third': {
    name: 'Катя Случкова',
    text: 'Собрались ко мне на дачу нашей компанией студентов отметить успешную сдачу сессии. Но по приезду обнаружили, что все дрова вымокли напрочь. Нашли контакты в интернете, объяснили ситуацию. Нас проконсультировали по выбору дров и времени доставки. Заказали пару кубов. Спасибо большое ребятам за то, что не оставили бедных студентов в беде! Очень выручили! ',
    photo: ''
  }
}

class App extends Component {

  state = {
    open: false,
    review: review['first']
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  changeReview = reviewNumber => {
    this.setState({ review: review[reviewNumber] })
  };

  render() {

    const { open } = this.state;

    return (
      <Fragment>
        <GlobalStyle />

        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>ИНФОРМАЦИЯ О ДОСТАВКЕ</h2>
          <div style={{padding: '.5rem 2rem', fontSize: '1.5rem'}}>Доставка по Минскому району и Минской области навалом до 5м³</div>
          <div style={{padding: '.5rem 2rem', fontSize: '1.5rem'}}>Доставка дров оплачивается отдельно.</div>
        </Modal>

        <Apps>

          <Apps.Container>
            <Header>
              <Header.Logo>
                <Header.Logo.Container>
                  <Header.Logo.Icon><Logo /></Header.Logo.Icon>
                  <Header.Logo.Name>drovushki.com</Header.Logo.Name>
                </Header.Logo.Container>
              </Header.Logo>
              <Header.Row>
                <Header.Contact>
                  <Header.Contact.Container>
                    <Header.Contact.Icon><Email /></Header.Contact.Icon>
                    <Header.Contact.Text href="mailto:drovushki.info@gmail.com">drovushki.info@gmail.com</Header.Contact.Text>
                  </Header.Contact.Container>
                  <Header.Contact.Container>
                    <Header.Contact.Icon><Phone /></Header.Contact.Icon>
                    <Header.Contact.Text href="tel:+375297717367">+375(29)771 73 67</Header.Contact.Text>
                  </Header.Contact.Container>
                </Header.Contact>
                <Header.Menu>
                  <Header.Menu.Link href='#about'>о нас</Header.Menu.Link>
                  {/* <Header.Menu.Link>березовые</Header.Menu.Link>
                  <Header.Menu.Link>хвойные</Header.Menu.Link>
                  <Header.Menu.Link>осиновые</Header.Menu.Link>
                  <Header.Menu.Link>ольховые</Header.Menu.Link>
                  <Header.Menu.Link>обрезки</Header.Menu.Link> */}
                  <Header.Menu.Link href='#contact'>контакты</Header.Menu.Link>
                  <Header.Menu.Link href='#review'>отзывы</Header.Menu.Link>
                  <Header.Menu.Link onClick={this.onOpenModal}>доставка</Header.Menu.Link>
                </Header.Menu>
              </Header.Row>
            </Header>
          </Apps.Container>

          <Apps.Promo>
            <Apps.Promo.Text>дрова различных пород естественной влажности</Apps.Promo.Text>
            <Apps.Promo.Text _big={true}>колотые дрова с доставкой</Apps.Promo.Text>
            <Apps.Promo.Buttons>
              <a href='#about'><Apps.Promo.Button _bg={'#34C96F'}>виды дров</Apps.Promo.Button></a>
              <Apps.Promo.Button _bg={'#32AAE6'} onClick={this.onOpenModal}>условия доставки</Apps.Promo.Button>
            </Apps.Promo.Buttons>
          </Apps.Promo>

          <ScrollableAnchor id={'about'}>
            <Apps.Container>
              <Apps.Row>
                <Apps.Row _50={true} _contentCenter={true} _imgBg={false} style={{ padding: '2rem' }}>
                  <Apps.Row.Img />
                  <div id='title'>О нас</div>
                  <div id='desc'>У нас на сайте drovushki.by вы можете купить дрова различных видов древесины по привлекательной цене.<br/>
Колотые дрова доставят прямо к Вам в пределах Минска и Минской области. Мы предоставляем различные виды дров, которые подходят для бани, камина или мангала. Заказать дрова в Минске ещё никогда не было так просто.<br/>
В зависимости от ваших нужд и предпочтений, мы с радостью предоставим широкий выбор колотых дров. Для бани идеально подойдут колотые берёзовые дрова, а ольха, например, поможет сделать уютный семейный вечер перед камином незабываемым. Заказать колотые дрова в Минске и Минской области можно прямо сейчас и без лишних слов. Мы доставим Вам колотые дрова объёмом до 5 м3, наполнив ваш дом теплом и уютом.</div>
                </Apps.Row>
                <Apps.Row _50={true} _contentCenter={true}>
                  <span>виды дров</span>
                  <Apps.Wrap>
                    <Apps.Wrap.Item>
                      <Apps.Wrap.Item.Block>
                        <Apps.Wrap.Item.Icon><Firewood /></Apps.Wrap.Item.Icon>
                        <Apps.Wrap.Item.Title>березовые</Apps.Wrap.Item.Title>
                        <Apps.Wrap.Item.Desc>Размер 30-40см<br />38руб/м³ навалом</Apps.Wrap.Item.Desc>
                      </Apps.Wrap.Item.Block>
                    </Apps.Wrap.Item>
                    <Apps.Wrap.Item>
                      <Apps.Wrap.Item.Block>
                        <Apps.Wrap.Item.Icon><Firewood /></Apps.Wrap.Item.Icon>
                        <Apps.Wrap.Item.Title>хвойные</Apps.Wrap.Item.Title>
                        <Apps.Wrap.Item.Desc>Размер 30-40см<br />34руб/м³ навалом</Apps.Wrap.Item.Desc>
                      </Apps.Wrap.Item.Block>
                    </Apps.Wrap.Item>
                    <Apps.Wrap.Item>
                      <Apps.Wrap.Item.Block>
                        <Apps.Wrap.Item.Icon><Firewood /></Apps.Wrap.Item.Icon>
                        <Apps.Wrap.Item.Title>осиновые</Apps.Wrap.Item.Title>
                        <Apps.Wrap.Item.Desc>Размер 30-40см<br />35руб/м³ навалом</Apps.Wrap.Item.Desc>
                      </Apps.Wrap.Item.Block>
                    </Apps.Wrap.Item>
                    <Apps.Wrap.Item>
                      <Apps.Wrap.Item.Block>
                        <Apps.Wrap.Item.Icon><Firewood /></Apps.Wrap.Item.Icon>
                        <Apps.Wrap.Item.Title>ольховые</Apps.Wrap.Item.Title>
                        <Apps.Wrap.Item.Desc>Размер 30-40см<br />37руб/м³ навалом</Apps.Wrap.Item.Desc>
                      </Apps.Wrap.Item.Block>
                    </Apps.Wrap.Item>
                    <Apps.Wrap.Item>
                      <Apps.Wrap.Item.Block>
                        <Apps.Wrap.Item.Icon><Firewood /></Apps.Wrap.Item.Icon>
                        <Apps.Wrap.Item.Title>обрезки</Apps.Wrap.Item.Title>
                        <Apps.Wrap.Item.Desc>Обрезки пиломатериалов<br />25руб/м³ навалом</Apps.Wrap.Item.Desc>
                      </Apps.Wrap.Item.Block>
                    </Apps.Wrap.Item>
                  </Apps.Wrap>
                </Apps.Row>
              </Apps.Row>
            </Apps.Container>
          </ScrollableAnchor>

          <ScrollableAnchor id={'contact'}>
            <div style={{ background: '#EBF0F3' }} id="contact">
              <Apps.Container>
                <Apps.Row>
                  <Apps.Row _50={true} />
                  <Apps.Row _50={true} _contentCenter={true}>
                    <span>связаться с нами</span>
                    <iframe src='https://feeber.biz/frame/?frameId=4' style={{ marginLeft: '-3rem', border: 'none', width: '100%', height: '65rem' ,overflow: 'hidden' }}/>
                  </Apps.Row>
                </Apps.Row>
              </Apps.Container>
            </div>
          </ScrollableAnchor>

          <ScrollableAnchor id={'review'}>
            <Apps.Container>
              <Review>
                <Review.Title>отзывы наших клиентов</Review.Title>
                <Review.Text>{this.state.review.text}</Review.Text>
                <Review.Clients>
                  <Review.Clients.Name>{this.state.review.name}</Review.Clients.Name>
                  <Review.Clients.Block>
                    <Review.Clients.Avatar onClick={() => this.changeReview('first')} _active={this.state.review.name === 'Вадим Егоров' ? true : false}><img src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg" /></Review.Clients.Avatar>
                    <Review.Clients.Avatar onClick={() => this.changeReview('second')} _active={this.state.review.name === 'Александр Лученок' ? true : false}><img src="https://images.pexels.com/photos/724889/pexels-photo-724889.png" /></Review.Clients.Avatar>
                    <Review.Clients.Avatar onClick={() => this.changeReview('third')} _active={this.state.review.name === 'Катя Случкова' ? true : false}><img src="https://images.pexels.com/photos/911605/pexels-photo-911605.jpeg" /></Review.Clients.Avatar>
                  </Review.Clients.Block>
                </Review.Clients>
              </Review>
            </Apps.Container>
          </ScrollableAnchor>

          <Footer>
            <Apps.Container>
              <Footer.Row>
                <div>КОНТАКТЫ:
                  <br />
                  +375 (29) 771-73-67
                  <br />
                  +375 (29) 365-35-81
                  <br />
                  +375 (29) 567-83-10
                </div>
                <div>РЕЖИМ РАБОТЫ:
                  <br />
                  Пн - Воскр
                  <br />
                  с 9:00 до 20:00
                </div>
              </Footer.Row>
            </Apps.Container>
          </Footer>

        </Apps>
      </Fragment>
    );
  }
}

export default App;
