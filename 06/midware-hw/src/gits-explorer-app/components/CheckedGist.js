import React from 'react';
import { useSelector } from "react-redux";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Header, Loader } from "semantic-ui-react";


const CheckedGist = () => {
  const { content, isLoading, language } = useSelector(state => state.selectedGist);

  return (
    <React.Fragment>
      { (!content && !isLoading) && <Header className='gist-header' as='h3' icon='arrow alternate circle left outline' content='Check the Gist from the list' /> }
      { isLoading && <Loader className='gist-loader' active>Loading...</Loader> }
      { !!content &&
        ( <SyntaxHighlighter language={!!language ? language.toLowerCase() : 'text'} style={docco}>
            {content}
          </SyntaxHighlighter> )
      }
    </React.Fragment>
  );
};

export default CheckedGist;
