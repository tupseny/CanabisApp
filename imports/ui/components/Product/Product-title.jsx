import * as React from "react";

export default class ProductTitle extends React.Component {
    render() {
        const title = this.props.title;
        const category = this.props.category;

        return (
            <div className={''}>
                <h2>{title}</h2>
                <h5>{category}</h5>
            </div>
        );
    }
}