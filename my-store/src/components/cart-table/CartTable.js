import React from 'react';
import { connect } from 'react-redux';
import './CartTable.css'
import {Table, Image, Header, Button, Icon} from "semantic-ui-react";
import { itemAddedToCart, itemRemovedFromCart, allItemRemovedFromCart } from "../../actions";

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  return (
    <div className='table-wrapper'>

      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Count</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            items.map(item => {
              return (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src={item.img} />
                      <Header.Content>
                        {item.title}
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Header as='h4'><Header.Content>{item.count}</Header.Content></Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Header as='h4'><Header.Content>{item.total}$</Header.Content></Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={onDecrease} color='yellow' icon>
                      <Icon name='minus' />
                    </Button>
                    <Button onClick={onIncrease} color='green' icon>
                      <Icon name='plus' />
                    </Button>
                    <Button onClick={onDelete} color='orange' icon>
                      <Icon name='trash alternate outline' />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'><Header.Content>Total:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>{items.length}</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>{total}$</Header.Content></Header>
            </Table.Cell>
          </Table.Row>

        </Table.Footer>
      </Table>

    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
};

const mapDispatchToProps = {
  onIncrease: itemAddedToCart,
  onDecrease: itemRemovedFromCart,
  onDelete: allItemRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
