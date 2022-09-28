import React from "react";

type RenderProps = {
  data: any
}

const NotFoundPage:React.FC<RenderProps> = ({ data }) => {

  return (
      <div>
        PAGE NOT FOUND 404
      </div>
  )
}

export default NotFoundPage
