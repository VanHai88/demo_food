import React from 'react';
import "./ProductDetailPage.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import ProductSlider from "../../components/ProductSlider/ProductSlider"
import { connect } from "react-redux"
import * as Actions from "../../actions/index"
import { Link } from 'react-router-dom';

class ProductDetailPage extends React.Component {
    componentDidMount() {
        let { match } = this.props;
        this.props.fetchAllProduct(match.params.id);
        this.props.fetchAllProductsCategories();
    }

    render() {
        let { product, productsCategories } = this.props;
        let productsCategory = productsCategories.find(productsCategory => productsCategory.id === product.categoryId)
        let name = productsCategory !== undefined ? productsCategory.name : "";
        let products = productsCategory !== undefined ? productsCategory.products.reverse() : []
        let id = productsCategory !== undefined ? productsCategory.id : "";
        return (
            <div className="container">
                <div className="productd_detail_page">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 products_page-category">
                                <p><Link to={"/"}>Trang chủ</Link> / <Link to={`/products/category/${id}/${name}`}>{name}</Link> / {product.name}</p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 products_page-product">
                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 products_page-product-description">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <img src={product.img} alt="Slide11" />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 products_page-product-detail">
                                        <h2>{product.name}</h2>
                                        <span className="line"></span>
                                        <div className="characteristic">
                                            <h4>Đặc tính:</h4>
                                            <p>
                                                {product.details}
                                            </p>
                                        </div>
                                        <input type="number" id="input" className="form-control" min={1} required="required" />
                                        <button type="button" className="btn btn-warning">Thêm giỏ hàng</button>
                                        <p className="product-category">Danh mục: <span>Trà tửa</span></p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="product-tabs">
                                            <div className="group-tabs">
                                                <ul className="nav nav-tabs" role="tablist">
                                                    <li role="presentation" className="active"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Mô tả</a></li>
                                                    <li role="presentation"><a href="#evaluate" aria-controls="evaluate" role="tab" data-toggle="tab">Đánh giá</a></li>
                                                </ul>

                                                <div className="tab-content">
                                                    <div role="tabpanel" className="tab-pane active" id="description">
                                                        <p>
                                                            {product.details}
                                                        </p>
                                                        <h4>Đặc tính:</h4>
                                                        <p>
                                                            {product.details}
                                                        </p>
                                                        <div className="tab-content-img">
                                                            <img src={product.img} alt="Slide11" />
                                                        </div>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane my-tab-pane" id="evaluate">
                                                        <div className="evaluate_form">
                                                            <h3>Hãy để lại nhận xét của bạn</h3>
                                                            <ul>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                                                <li className="acvite"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                                            </ul>
                                                            <form>
                                                                <div className="form-group">
                                                                    <label>Nội dung<span>*</span></label>
                                                                    <textarea className="form-control" rows="5" id="comment"></textarea>
                                                                </div>
                                                                <button type="submit" className="btn btn-primary">Nhận xét</button>
                                                            </form>
                                                        </div>
                                                        <div className="evaluate_list">
                                                            <h3>Nhận xét gần đây</h3>
                                                            <div className="evaluate_list-block">
                                                                <h4>Trà tửa Chôcôla <span className="acvite"><i className="fas fa-star"></i><i className="fas fa-star"></i></span></h4>
                                                                <p>Nhận xét bởi <span>Nguyễn Văn Hải</span> vào ngày 16-6-2020</p>
                                                                <div className="evaluate-content">
                                                                    <img src="https://trasuabumba.com/public/uploads/1575960742-MT04%20-%20Tra%20sua%20Matcha%20copy.jpg" alt="Slide11" />
                                                                    <p>Ngon Ngon!!</p>
                                                                </div>
                                                            </div>
                                                            <div className="evaluate_list-block">
                                                                <h4>Trà tửa Chôcôla <span className="acvite"><i className="fas fa-star"></i><i className="fas fa-star"></i></span></h4>
                                                                <p>Nhận xét bởi <span>Nguyễn Văn Hải</span> vào ngày 16-6-2020</p>
                                                                <div className="evaluate-content">
                                                                    <img src="https://trasuabumba.com/public/uploads/1575960742-MT04%20-%20Tra%20sua%20Matcha%20copy.jpg" alt="Slide11" />
                                                                    <p>Ngon Ngon!!</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="product_similar">
                                            <h4>Sản phẩm tương tự</h4>
                                            <ProductSlider products={products} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
        productsCategories: state.productsCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProduct: (id) => {
            dispatch(Actions.actFetchProductRequest(id));
        },
        fetchAllProductsCategories: () => {
            dispatch(Actions.actFetchProductsCategoriesRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
