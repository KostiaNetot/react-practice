import React from 'react';
import { useSelector } from "react-redux";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Header, Loader } from "semantic-ui-react";


const CheckedGist = () => {
  const { content, isLoading, language, title } = useSelector(state => state.selectedGist);

  return (
    <React.Fragment>
      { (!content && !isLoading) && <Header className='gist-header' as='h3' icon='arrow alternate circle left outline' content='Check the Gist from the list' /> }
      { isLoading && <Loader className='gist-loader' active>Loading...</Loader> }
      { !!content &&
        (
          <div>
            <h2 className='checked-gist-header'>{title}</h2>
            <SyntaxHighlighter className='syntax-hltr' language={!!language ? language.toLowerCase() : 'text'} style={docco}>
              {content}
            </SyntaxHighlighter>
          </div>
        )
      }
    </React.Fragment>
  );
};

export default CheckedGist;
