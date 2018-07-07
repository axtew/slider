import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

const Repair = styled.div`
  font-size: 40px;
  color: #fff;
  font-weight: 700;
  line-height: 50px;

  span {
    font-size: 24px;
    display: block;
    line-height: 30px;
  }
`

const LightText = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 300;
  line-height: 28px;
  margin-top: 54px;
`

const SendBtn = styled.button`
  margin-top: 32px;
  border-radius: 32px;
  background-color: #ffa14b;
  width: 245px;
  height: 64px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  border: none;
`

class Main extends React.Component {
  render() {
    return(
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <LightText>
            Оставьте заявку на бесплатную диагностику без очереди,
            и получите защитное стекло, стоимостью 1000 рублей,
            с установкой в подарок!
          </LightText>
          <SendBtn>
            Отправить заявку!
          </SendBtn>
        </Col>
        <Col lg={6} lgOffset={1}>
          
        </Col>
      </Row>
    )
  }
};

export default Main;