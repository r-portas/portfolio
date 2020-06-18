import React, { useRef, useEffect } from "react"
import mermaid from "mermaid"

const Diagram = ({ children }) => {
  const divEl = useRef(null)

  useEffect(() => {
    if (divEl.current) {
      divEl.current.innerHTML = children
      mermaid.init(divEl.current)
    }
  }, [children])

  return <div ref={divEl} className="mermaid"></div>
}

export default Diagram
