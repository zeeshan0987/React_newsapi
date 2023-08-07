// import {useRef} from 'react';
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:9,
    category:"science",
    // search:""
  }
  
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    // search:PropTypes.string,
  }
  constructor() {
    super();

    this.state = {
      articles: [],
      loding: false,
      page: 1,
      txt:'bitcoin'
    };
    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({txt:event.target.value})
  }
  handleSubmit =async () => {
    // alert('A name was submitted: ' + this.state.txt);
    // event.preventDefault();
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c37873bb96bf47fba7e806d996b70418`;
    let deta = await fetch(url);
    let parsedDeta = await deta.json();

    this.setState({
      // page: this.state.page - 1,
      articles: parsedDeta.articles,
    });
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c37873bb96bf47fba7e806d996b70418&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loding:true})
    let deta = await fetch(url);
    let parsedDeta = await deta.json();
    this.setState({
      articles: parsedDeta.articles,
      totalResults: parsedDeta.totalResults,
      loding:false
    });
  }
  handleNextClick = async () => {
    console.log("hello next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c37873bb96bf47fba7e806d996b70418&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loding:true})
      let deta = await fetch(url);
      let parsedDeta = await deta.json();
      

      this.setState({
        page: this.state.page + 1,
        articles: parsedDeta.articles,
        loding:false
      });
    }
  };
  handleprvClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c37873bb96bf47fba7e806d996b70418&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loding:true})
    let deta = await fetch(url);
    let parsedDeta = await deta.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedDeta.articles,
      loding:false
    });
    
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">ZeeshanNews - Top Headlines</h1>
        
       
            {this.state.loding &&<Spinner/>}
        <div className="row">
          {!this.state.loding &&  this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handleprvClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.propspageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
