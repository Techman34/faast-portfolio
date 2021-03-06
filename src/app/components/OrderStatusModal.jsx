import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  Row, Col, Button,
  Modal, ModalHeader, ModalBody
} from 'reactstrap'
import { omit } from 'lodash'

import { getAllSwapsArray } from 'Selectors'

import SwapStatusCard from 'Components/SwapStatusCard'

export default compose(
  setDisplayName('OrderStatusModal'),
  connect(createStructuredSelector({
    swaps: getAllSwapsArray,
  }))
)(({ swaps, toggle, ...props }) => (
  <Modal size='md' toggle={toggle} {...omit(props, 'dispatch')}>
    <ModalHeader className='text-primary' toggle={toggle}>
      Order Status
    </ModalHeader>
    <ModalBody>
      <div className='mx-auto my-3'>
        <Row className='gutter-2'>
          {swaps.map((swap) => {
            const { id, status: { code, label, labelClass } } = swap
            const statusText = (<span className={labelClass}>{label || code}</span>)
            return (
              <Col xs='12' key={id}>
                <SwapStatusCard swap={swap} statusText={statusText}/>
              </Col>
            )
          })}
        </Row>
      </div>
      <div className='text-center'>
        <Button color='link' onClick={toggle}>hide</Button>
      </div>
    </ModalBody>
  </Modal>
))
