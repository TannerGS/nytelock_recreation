import React, {useState} from 'react';
import {
  Card, CardText, CardBody, Button, Container, Row, Col
} from 'reactstrap';
import Square from './Components/Square';

import './App.css';

const App = () => {
  let [title, setTitle] = useState('Lettermark Logos')
  let [summary1, setSummary1] = useState("A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's initials. The lettermark is all about simplicity.")
  let [summary2, setSummary2] = useState("By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.")
  let [image1, setImage1] = useState('https://1000logos.net/wp-content/uploads/2021/04/HBO-logo.png')
  let [image2, setImage2] = useState('data:image/png;base64,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')
  let [image3, setImage3] = useState('https://www.nasa.gov/sites/default/files/thumbnails/image/s75-31690.jpeg')

  return (
    <div className="Card">
      <Card body inverse style={{ backgroundColor: '#5a5a5a', borderColor: '#5a5a5a', borderRadius: 10 }}>
        <CardBody className="cardBody">
          <CardText>
            <p>
              HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?
            </p>
            <span>
              Different Types of Logo Styles
            </span>
            <Button className="contactButton">Contact Us <i class="fas fa-arrow-circle-right"></i></Button>
          </CardText>
          <Container>
            <Row>
              <Col><Button 
              onClick={() => {
                setTitle(title="Lettermark Logos")
                setSummary1(summary1="A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's initials. The lettermark is all about simplicity.")
                setSummary2(summary2="By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.")
                setImage1(image1 = 'https://1000logos.net/wp-content/uploads/2021/04/HBO-logo.png')
                setImage2(image2 = 'data:image/png;base64,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')
                setImage3(image3 = 'https://www.nasa.gov/sites/default/files/thumbnails/image/s75-31690.jpeg')
              }}
              className="square-button"><Square logo={<i class="fas fa-italic fa-lg"></i>} title="Lettermark Logos"/></Button></Col>
              <Col><Button 
              onClick={() => {
                setTitle(title="Wordmark Logos")
                setSummary1(summary1="Similiar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business' name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google's logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.")
                setSummary2(summary2="")
                setImage1(image1 = 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png')
                setImage2(image2 = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/09/10/coco-cola.jpg?width=1200')
                setImage3(image3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png')
              }}
              className="square-button"><Square logo={<i class="fab fa-weebly fa-lg"></i>} title="Wordmark Logos"/></Button></Col>
              <Col><Button 
              onClick={() => {
                setTitle(title="Pictorial Mark Logos")
                setSummary1(summary1="A pictorial mark (sometimes called brand mark or logo symbol) is an icon - or graphic based logo. It's probably the image that comes to mind when you think \"logo\": the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.")
                setSummary2(summary2="A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.")
                setImage1(image1 = 'data:image/png;base64,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')
                setImage2(image2 = 'https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png')
                setImage3(image3 = 'https://www.anbmedia.com/wp/wp-content/uploads/2019/10/target-logo-1024x780-1024x780.jpg')
              }}
              className="square-button"><Square logo={<i class="fas fa-lemon fa-lg"></i>} title="Pictorial Mark Logos"/></Button></Col>
              <Col><Button 
              onClick={() => {
                setTitle(title="Abstract Mark Logos")
                setSummary1(summary1="An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image - like an apple or a bird - it's an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower.")
                setSummary2(summary2="Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something.")
                setImage1(image1 = 'https://bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/who-we-are/bp-helios-card.png')
                setImage2(image2 = 'https://www.designyourway.net/blog/wp-content/uploads/2018/07/maxresdefault-1.jpg')
                setImage3(image3 = 'https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2020/03/the-4th-logo-1024x862.jpg')
              }}
              className="square-button"><Square logo={<i class="fab fa-artstation fa-lg"></i>} title="Abstract Mark Logos"/></Button></Col>
              <Col><Button 
              onClick={() => {
                setTitle(title="Mascot Logos")
                setSummary1(summary1="Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great wway to create your very own brand spokesperson.")
                setSummary2(summary2="A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Water Wally.")
                setImage1(image1 = 'https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/Kool-AidManPitcher.jpg')
                setImage2(image2 = 'https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png')
                setImage3(image3 = 'https://upload.wikimedia.org/wikipedia/en/6/6e/Mr_peanut.png')
              }}
              className="square-button"><Square logo={<i class="fas fa-theater-masks fa-lg"></i>} title="Mascot Logos"/></Button></Col>
              <Col><Button 
              onClick={() => {
                setTitle(title="Combination Logos")
                setSummary1(summary1="A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.")
                setSummary2(summary2="Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.")
                setImage1(image1 = 'https://upload.wikimedia.org/wikipedia/en/9/9a/Doritos_Logo_%282013%29.png')
                setImage2(image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png')
                setImage3(image3 = 'https://upload.wikimedia.org/wikipedia/en/4/43/Lacoste_logo.svg')
              }}
              className="square-button"><Square logo={<i class="fas fa-puzzle-piece fa-lg"></i>} title="Combination Logos"/></Button></Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
      <Container>
        <Row>
          <Col className="main-first">
            <h1>
              {title}
            </h1>
            <p className="secondary">
              {summary1}
            </p>
            <p className="secondary">
              {summary2}
            </p>
          </Col>
          <Col className="main-second">
            <Row>
              <Col className="image"><img width="150" height="150" src={image1}></img></Col>
              <Col className="image"><img width="150" height="150" src={image2}></img></Col>
              <Col className="image"><img width="150" height="150" src={image3}></img></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
