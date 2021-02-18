import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/navbar"

// CHec Commerce
import { commerce } from "./lib/commerce";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }
  }

  fetchProducts(){
    commerce.products.list().then((products) => {
      this.setState({ products: products.data });
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }
  
  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    console.log(this.state.products);
    return (
      <>
      <NavBar/>
      <Container>
        <Products  products={this.state.products} />
      </Container>
    </>
    )
  }
}

export default App;
