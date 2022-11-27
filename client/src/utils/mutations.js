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
mutation Mutation($id: ID!, $name: String!, $description: String!, $price: Float!, $quantity: Int!) {
  editProduct(_id: $id, name: $name, description: $description, price: $price, quantity: $quantity) {
    _id
    name
    description
    price
    quantity
  }
}
`;

export const EDIT_PRODUCT_NAME = gql`
mutation Mutation($id: ID!, $name: String!) {
  editProductName(_id: $id, name: $name) {
    name
  }
}
`;

export const EDIT_PRODUCT_DESCRIPTION = gql`
mutation Mutation($id: ID!, $description: String!) {
  editProductDescription(_id: $id, description: $description) {
    description
  }
}
`;

export const EDIT_PRODUCT_PRICE = gql`
mutation EditProductPrice($id: ID!, $price: Float!) {
  editProductPrice(_id: $id, price: $price) {
    price
  }
}
`;

export const EDIT_PRODUCT_QUANTITY = gql`
mutation EditProductQuantity($id: ID!, $quantity: Int!) {
  editProductQuantity(_id: $id, quantity: $quantity) {
    quantity
  }
}
`;

export const EDIT_PRODUCT_IMAGE = gql`
mutation EditProductImage($id: ID!, $image: String!) {
  editProductImage(_id: $id, image: $image) {
    image
  }
}
`;

export const DELETE_PRODUCT = gql`
mutation Mutation($id: ID!) {
  deleteProduct(_id: $id) {
    _id
  }
}
`;