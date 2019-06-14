import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './../Product';
import ModalContainer from './../ModalContainer';
import Modal from './../Modal';
import Page from './Page';
import ViewProduct from './../ViewProduct';

class Products extends Component {
    state = {
        modalVisible: false,
        productSelected: null
    }
    openModalUpdate = (productSelected) => {
        this.setState({
            modalVisible: true,
            productSelected
        });
    }
    closeModal = () => this.setState({ modalVisible: false })
    render() {
        return (
            <Page>
                <div className="container" style={{ paddingTop: "120px" }}>
                    <div className="row">
                        {
                            this.props.products.map(item => {
                                return <Product openModalUpdate={this.openModalUpdate} key={item.id} {...item} />
                            })
                        }
                    </div>
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal closeModal={this.closeModal}>
                                <ViewProduct {...this.state.productSelected} />
                            </Modal>
                        </ModalContainer>
                    }
                </div>
            </Page>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang,
        products: state.info[state.locale.lang].products
    }
}

export default connect(mapStateToProps)(Products);