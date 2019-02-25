import React, { Component } from 'react';
import { List, Row, Col, Button} from 'antd';

class Footer1 extends Component {
    render() {
      return (
        <div className="footer rekomendasi">
          <div className="container">
            <Row gutter={24} className="my-5">
              <Item 
              header="Ruangmu"
              data={[
                  {name: 'Tentang',link: 'link1'},
                  {name: 'Tim',link: 'link2'},
                  {name: 'Bantuan',link: 'link3'}
              ]} />
              <Item 
              header="Jelajahi"
              data={[
                  {name: 'F.A.Q',link: 'link1'},
                  {name: 'Partnership',link: 'link2'},
                  {name: 'Sitemap',link: 'link3'}
              ]} />
              <Item 
              header="Kontak"
              data={[
                  {name: 'Whatsapp',link: 'link1'},
                  {name: 'Instagram',link: 'link3'},
                  {name: 'Email',link: 'link3'}
              ]} />
            </Row>
            <hr/>
            <div className="d-flex justify-content-between my-5">
              <div className="h5">Ruangmu</div>
              <a href="#top">
                <Button>Back to top</Button>
              </a>
              <div>&copy; 2019</div>
            </div>
          </div>
        </div>
      );
    }
}

const Item = (props) =>(
  <Col span={8}>
    <List
      header={<div className="font-weight-bold border-0">{props.header}</div>}
      bordered
      dataSource={props.data}
      renderItem={item => (<List.Item className="border-0"><a>{item.name}</a></List.Item>)}
      className="border-0"
    />
  </Col>
)

export default Footer1;
