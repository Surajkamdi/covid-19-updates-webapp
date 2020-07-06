import React,{ Component } from "react";
import MetaTags from 'react-meta-tags';

class MetaTagComponent extends Component {
    render() {
      return (
          <div className="wrapper">
            <MetaTags>
              <title>Page 1</title>
              <meta name="description" content="Some description Here." />
              <meta property="og:title" content="Covid-19 Live Updates Dashobard Developed by Suraj Kamdi" />
            </MetaTags>
            <div className="content"> Some Content </div>
          </div>
        )
    }
  }
  export default MetaTagComponent;