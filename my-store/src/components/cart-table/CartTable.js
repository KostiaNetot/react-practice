import React from 'react';
import './CartTable.css'
import {Table, Image, Header, Button, Icon} from "semantic-ui-react";

const CartTable = () => {
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
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325042/325042_1100.jpg' rounded size='mini' />
                <Header.Content>
                  Lena
                  <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>2</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>5$</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Button icon>
                <Icon name='trash alternate outline' />
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325042/325042_1100.jpg' rounded size='mini' />
                <Header.Content>
                  Matthew
                  <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>2</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>5$</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Button icon>
                <Icon name='trash alternate outline' />
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325042/325042_1100.jpg' rounded size='mini' />
                <Header.Content>
                  Lindsay
                  <Header.Subheader>Entertainment</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>2</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>5$</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Button icon>
                <Icon name='trash alternate outline' />
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325042/325042_1100.jpg' rounded size='mini' />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>2</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>5$</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Button icon>
                <Icon name='trash alternate outline' />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.Cell>
              <Header as='h4'><Header.Content>Total:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>8</Header.Content></Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4'><Header.Content>20$</Header.Content></Header>
            </Table.Cell>
          </Table.Row>

        </Table.Footer>
      </Table>

    </div>
  );
};

export default CartTable;
