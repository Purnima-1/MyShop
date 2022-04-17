import React from 'react'
import {Link } from 'react-router-dom'
import {Button,Row,Col,ListGroup,Image,Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {

const cart = useSelector((state) => state.cart)

//Calculating Prices
  const addDecimals = (num) => {
      return (Math.round(num*100)/100).toFixed(2)
  }
  cart.ItemsPrice = addDecimals(
      
  )




  return (
    <div>PlaceOrderScreen</div>
  )
}

export default PlaceOrderScreen