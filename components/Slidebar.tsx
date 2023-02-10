import NewChat from "./NewChat"

function Slidebar() {
  return (
    <div className="p-2 flex flex-col h-screen" >
      <div className="flex-1">
        <div>
            {/* {NewChat} */}
            <NewChat/>
            <div>
                {/* ModelSelection */}
            </div>
                {/* MAp Through the ChatRows  */}

        </div>
      </div>
    </div>
  )
}

export default Slidebar
