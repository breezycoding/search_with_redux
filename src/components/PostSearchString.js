import React from "react";
import { connect } from "react-redux";

/* styled components */
import { Container } from "./styles/style_Base";
import { HighlightSpan } from "./styles/style_SearchWithRedux";

class PostSearchString extends React.Component{
	constructor(props){
        super(props);
    }

	render(){
		return(
			<section id="search_string">
				<Container key={this.props.id}>
                   { 
                       this.props[this.props.renderTitleOrBody].split(" ").map((post) => {
                            if(post.toLowerCase() === this.props.searchStringObj.searchValue.toLowerCase()){
                                return (<HighlightSpan>{post}</HighlightSpan>)
                            }else{
                                /*check if string contains line break(api limitation) */
                                if(/\r|\n/.exec(post) !== null){
                                    /*check if string contains line break(api limitation) the convert it into array*/
                                    return post.replace(/(\r\n|\n|\r)/gm," ").split(" ").map((innerText) => {
                                        if(innerText.toLowerCase() == this.props.searchStringObj.searchValue.toLowerCase()){
                                            return (<HighlightSpan>{innerText}</HighlightSpan>)
                                        }else{
                                            return " " + innerText + " ";
                                        }
                                    })
                                }else{
                                    return " " + post + " ";
                                }
                            }
                        })
                    }
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => {    
	return {
        searchStringObj: state.searchStringObj
	};
};

export default connect(mapStateToProps, null)(PostSearchString);
