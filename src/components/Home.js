import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeSlide from './HomeSlide';
import OurServices from './OurServices';
import Section from './Section';
import ModalContainer from './ModalContainer';
import Modal from './Modal';
import ViewProduct from './ViewProduct';
import Page from './pages/Page';
import './styles/Home.css';

class Home extends Component {
    state = {
        modalVisible: false,
        productSelected: null
    }
    handleClickSeeMore = (productSelected) => {
        this.setState({
            modalVisible: true,
            productSelected
        });
    }
    handleClickSeeMoreClose = () => this.setState({ modalVisible: false })
    render() {
        return (
            <Page>
                <div className="Home">
                    <HomeSlide />
                    <div className="HomeContainer">
                        <OurServices handleClickSeeMore={this.handleClickSeeMore} handleClickSeeMoreClose={this.handleClickSeeMoreClose} />
                        <Section />
                    </div>
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal closeModal={this.handleClickSeeMoreClose}>
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
        products: state.info[state.locale.lang].products
    }
}

export default connect(mapStateToProps)(Home);