import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation Mutation($name: String!, $description: String!, $price: Float!, $quantity: Int!, $category: ID!) {
  addProduct(name: $name, description: $description, price: $price, quantity: $quantity, category: $category) {
    name
    description
    price
    quantity
    category {
      _id
    }
  }
}
`;
export const EDIT_PRODUCT = gql`
mutation editProduct($name: String!
    $description: String!
    $price: Int!
    $quantity: Int!
  ) {
    editProduct(
      name: $name
      description: $description
      price: $price
      quantity: $quantity
    )
  }
`;