import React from 'react';
import Iframe from 'react-iframe';

const Nicovideo = ({videoid}) => {
  const url = `https://embed.nicovideo.jp/watch/${videoid}`
  return (
    <div style={{maxWidth: "480px", paddingBottom: "75%" }}>
      <Iframe width="100%" url={url} />
    </div>
  )
};

export default Nicovideo;