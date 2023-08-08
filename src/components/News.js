// import {useRef} from 'react';
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "science",
    // search:""
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    // search:PropTypes.string,
  };
  captal = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loding: false,
      page: 1,
      totalResults :0,
    };
    document.title = `${this.captal(this.props.category)}-Zeeshan News`;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ txt: event.target.value });
  }
  handleSubmit = async () => {
    // alert('A name was submitted: ' + this.state.txt);
    // event.preventDefault();
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c37873bb96bf47fba7e806d996b70418`;
    let deta = await fetch(url);
    let parsedDeta = await deta.json();

    this.setState({
      // page: this.state.page - 1,
      articles: parsedDeta.articles,
    });
  };
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c37873bb96bf47fba7e806d996b70418&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loding: true });
    let deta = await fetch(url);
    let parsedDeta = await deta.json();
    this.setState({
      articles: parsedDeta.articles,
      totalResults: parsedDeta.totalResults,
      loding: false,
      
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  
 
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c37873bb96bf47fba7e806d996b70418&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loding: true });
    let deta = await fetch(url);
    let parsedDeta = await deta.json();
    this.setState({
      articles:this.state.articles.concat(parsedDeta.articles),
      totalResults: parsedDeta.totalResults,
      loding: false,
      
    });
    
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          ZeeshanNews - Top {this.captal(this.props.category)} Headlines
        </h1>

        {/* {this.state.loding &&<Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://gaadiwaadi.com/wp-content/uploads/2023/07/Ola-S1-Air.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        
      </div>
    );
  }
}

export default News;
